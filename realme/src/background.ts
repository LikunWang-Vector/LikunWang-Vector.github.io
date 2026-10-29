import * as THREE from 'three';

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform vec2 uRes;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uScroll;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + 11.7;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 res = uRes;
    vec2 p = (gl_FragCoord.xy - 0.5 * res) / res.y;
    p += uMouse * 0.035;

    float t = uTime;

    // --- deep-space plasma ------------------------------------------------
    vec2 q = p * 1.5 + vec2(t * 0.05, -t * 0.03);
    float n1 = fbm(q + fbm(q * 1.7 + 4.2));
    float n2 = fbm(q * 0.8 - vec2(t * 0.02, t * 0.015));

    vec3 col = vec3(0.012, 0.02, 0.038);
    vec3 cyan = vec3(0.16, 0.83, 1.0);
    vec3 magenta = vec3(1.0, 0.2, 0.62);

    col += cyan * smoothstep(0.40, 0.95, n1) * 0.13;
    col += magenta * smoothstep(0.52, 1.0, n2) * 0.085;

    // --- floor grid -------------------------------------------------------
    float horizon = 0.06 + uScroll * 0.12;
    float below = horizon - p.y;

    if (below > 0.0) {
      float z = 0.55 / (below + 0.09);
      vec2 gp = vec2(p.x * z * 2.1, z * 1.35 - t * 0.55);
      vec2 gd = abs(fract(gp) - 0.5);
      float d = min(gd.x, gd.y);
      float line = 1.0 - smoothstep(0.0, 0.03, d);
      float fade = smoothstep(0.03, 0.42, below) * (1.0 - smoothstep(0.85, 1.2, below));
      col += cyan * line * fade * 0.19;
      col += magenta * line * fade * 0.05 * (1.0 - below);
    }

    // horizon glow
    col += cyan * exp(-abs(p.y - horizon) * 26.0) * 0.15;
    col += magenta * exp(-abs(p.y - horizon) * 60.0) * 0.07;

    // --- starfield --------------------------------------------------------
    vec2 sp = p * vec2(7.0, 7.0) + vec2(t * 0.06, 0.0);
    vec2 cell = floor(sp);
    vec2 f = fract(sp) - 0.5;
    float rnd = hash(cell);
    float twinkle = 0.55 + 0.45 * sin(t * 1.7 + rnd * 30.0);
    float star = smoothstep(0.09, 0.0, length(f)) * step(0.9, rnd) * twinkle;
    star *= smoothstep(horizon - 0.02, horizon + 0.3, p.y);
    col += vec3(0.75, 0.92, 1.0) * star * 1.1;

    // --- scanlines + vignette --------------------------------------------
    col *= 0.965 + 0.035 * sin(gl_FragCoord.y * 3.14159265);
    float vig = 1.0 - 0.42 * smoothstep(0.35, 1.1, length(p * vec2(0.9, 1.0)));
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export interface BackgroundHandle {
  setScroll: (ratio: number) => void;
}

export function initBackground(canvas: HTMLCanvasElement): BackgroundHandle | null {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    });
  } catch {
    return null;
  }

  renderer.setClearColor(0x04070c, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = {
    uRes: { value: new THREE.Vector2(1, 1) },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uTime: { value: 0 },
    uScroll: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms,
    depthTest: false,
    depthWrite: false,
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  const dpr = Math.min(window.devicePixelRatio || 1, 1.6);

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    uniforms.uRes.value.set(size.x, size.y);
    if (reduced) renderer.render(scene, camera);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener(
    'pointermove',
    (event) => {
      mouse.tx = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((event.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true },
  );

  let raf = 0;
  const clock = new THREE.Clock();
  let visible = !document.hidden;

  function frame() {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    uniforms.uTime.value += dt;
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    uniforms.uMouse.value.set(mouse.x, mouse.y);
    renderer.render(scene, camera);
  }

  if (!reduced) frame();
  else renderer.render(scene, camera);

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible && !reduced) clock.getDelta();
  });

  // Stop burning GPU once the tab is gone for good.
  window.addEventListener('pagehide', () => cancelAnimationFrame(raf));

  return {
    setScroll(ratio: number) {
      uniforms.uScroll.value = ratio;
      if (reduced) renderer.render(scene, camera);
    },
  };
}
