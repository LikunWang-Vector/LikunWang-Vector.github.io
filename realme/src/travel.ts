/**
 * Travel atlas for REALME.
 *
 * The route data is shared with the formal site: `data/travel.json` feeds both
 * the Hugo globe shortcodes and this MapLibre view. Tiles come from
 * OpenFreeMap (no API key, no account); MapLibre GL is BSD-3-Clause.
 *
 * The map is intentionally deep-zoomable (maxZoom 18) and every leg can be
 * reassigned a transport mode; the choice is stored locally. The modes are
 * illustrative defaults, not a travel log.
 */
import {
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  ScaleControl,
  LngLatBounds,
  setWorkerUrl,
  type GeoJSONSource,
} from 'maplibre-gl';
// MapLibre derives its worker URL from `import.meta.url`, which points at the
// bundled chunk after a Vite build. Import the worker as an asset and set it
// explicitly so dev and production resolve the same file.
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import 'maplibre-gl/dist/maplibre-gl.css';
import './travel.css';
import { getLang } from './i18n';

setWorkerUrl(maplibreWorkerUrl);

type Mode = 'plane' | 'train' | 'road' | 'sea';

const L = (en: string, zh: string): string => (getLang() === 'zh' ? zh : en);
const isZh = (): boolean => getLang() === 'zh';
const placeName = (place: Place): string => (isZh() ? place.namezh : place.name);
const placeAlt = (place: Place): string => (isZh() ? place.name : place.namezh);
const placeShort = (place: Place): string => (isZh() ? place.shortzh : place.short);
const placeAltShort = (place: Place): string => (isZh() ? place.short : place.shortzh);
const placeNote = (place: Place): string => (isZh() ? place.notezh : place.note);
const countryName = (country: Country): string => (isZh() ? country.namezh : country.name);
const countryAlt = (country: Country): string => (isZh() ? country.name : country.namezh);

interface Place {
  id: string;
  name: string;
  namezh: string;
  short: string;
  shortzh: string;
  lat: number;
  lng: number;
  type: 'origin' | 'education' | 'visited' | 'work';
  group: 'main' | 'transit';
  year: string;
  note: string;
  notezh: string;
}

interface Leg {
  from: string;
  to: string;
  mode: Mode;
}

interface Country {
  name: string;
  namezh: string;
  color: string;
  places: string[];
}

interface TravelData {
  places: Place[];
  legs: Leg[];
  countries: Country[];
  disclaimer: { en: string; zh: string };
}

interface RouteFeature {
  type: 'Feature';
  properties: { index: number; mode: Mode; from: string; to: string };
  geometry: { type: 'LineString'; coordinates: [number, number][] };
}

interface RouteCollection {
  type: 'FeatureCollection';
  features: RouteFeature[];
}

const MODES: Record<
  Mode,
  {
    en: string;
    zh: string;
    icon: string;
    color: string;
    width: number;
    dash?: number[];
    /** Typical cruising speed, km/h — used only for the estimate. */
    speed: number;
  }
> = {
  plane: { en: 'air', zh: '飞机', icon: '✈', color: '#4df3ff', width: 2.1, dash: [1.6, 1.4], speed: 850 },
  train: { en: 'rail', zh: '火车', icon: '🚄', color: '#2ee6a6', width: 2.6, speed: 250 },
  road: { en: 'road', zh: '汽车', icon: '🚗', color: '#ffb86b', width: 2, dash: [0.1, 1.8], speed: 90 },
  sea: { en: 'sea', zh: '轮船', icon: '🚢', color: '#8aa8ff', width: 2.2, dash: [3.2, 2.2], speed: 35 },
};

const MODE_ORDER: Mode[] = ['plane', 'train', 'road', 'sea'];

const NODE_KICKER: Record<Place['type'], { en: string; zh: string }> = {
  origin: { en: 'origin node', zh: '起点节点' },
  education: { en: 'study node', zh: '求学节点' },
  visited: { en: 'visit node', zh: '到访节点' },
  work: { en: 'base node', zh: '工作节点' },
};

const MODE_STORAGE = 'realme:travel:modes';
const DATA_URL = `${import.meta.env.BASE_URL}content/travel.json`;
const REDUCED = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let dataCache: TravelData | null = null;

/* ------------------------------------------------------------------ utils */

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const rad = (value: number): number => (value * Math.PI) / 180;
const deg = (value: number): number => (value * 180) / Math.PI;

function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const earth = 6371;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * earth * Math.asin(Math.min(1, Math.sqrt(h)));
}

function duration(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return '—';
  if (hours < 1) {
    const minutes = Math.max(1, Math.round(hours * 60));
    return L(`${minutes} min`, `${minutes} 分钟`);
  }
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  if (!minutes) return L(`${whole} h`, `${whole} 小时`);
  return L(`${whole} h ${minutes} min`, `${whole} 小时 ${minutes} 分`);
}

const number = (value: number): string =>
  Math.round(value).toLocaleString(isZh() ? 'zh-CN' : 'en-US');

/** Great-circle interpolation so long legs read as arcs, not straight rules. */
function greatCircle(a: Place, b: Place, steps = 72): [number, number][] {
  const [lat1, lng1, lat2, lng2] = [rad(a.lat), rad(a.lng), rad(b.lat), rad(b.lng)];
  const delta =
    2 *
    Math.asin(
      Math.min(
        1,
        Math.sqrt(
          Math.sin((lat2 - lat1) / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng2 - lng1) / 2) ** 2,
        ),
      ),
    );
  if (!delta) return [[a.lng, a.lat], [b.lng, b.lat]];

  const points: [number, number][] = [];
  for (let step = 0; step <= steps; step += 1) {
    const t = step / steps;
    const sin = Math.sin(delta);
    const wa = Math.sin((1 - t) * delta) / sin;
    const wb = Math.sin(t * delta) / sin;
    const x = wa * Math.cos(lat1) * Math.cos(lng1) + wb * Math.cos(lat2) * Math.cos(lng2);
    const y = wa * Math.cos(lat1) * Math.sin(lng1) + wb * Math.cos(lat2) * Math.sin(lng2);
    const z = wa * Math.sin(lat1) + wb * Math.sin(lat2);
    points.push([deg(Math.atan2(y, x)), deg(Math.atan2(z, Math.hypot(x, y)))]);
  }
  return points;
}

function readModes(count: number): Mode[] | null {
  try {
    const raw = JSON.parse(localStorage.getItem(MODE_STORAGE) ?? 'null') as unknown;
    if (!Array.isArray(raw) || raw.length !== count) return null;
    if (!raw.every((mode) => MODE_ORDER.includes(mode as Mode))) return null;
    return raw as Mode[];
  } catch {
    return null;
  }
}

function saveModes(legs: Leg[]): void {
  try {
    localStorage.setItem(MODE_STORAGE, JSON.stringify(legs.map((leg) => leg.mode)));
  } catch {
    /* private mode — the choice still works for this visit */
  }
}

async function loadTravel(): Promise<TravelData> {
  if (dataCache) return dataCache;
  const response = await fetch(DATA_URL, { credentials: 'same-origin' });
  if (!response.ok) throw new Error(`travel data ${response.status}`);
  const data = (await response.json()) as TravelData;
  dataCache = data;
  return data;
}

/* ------------------------------------------------------------------- view */

export function renderTravel(host: HTMLElement): { dispose: () => void } {
  let disposed = false;
  let map: MapLibreMap | null = null;

  const shell = el('div', 'travel-view');
  const head = el('div', 'view-head');
  head.append(el('span', 'section-index', '05'));
  head.append(el('h2', '', L('travel', '旅行')));
  head.append(el('span', 'section-rule'));
  shell.append(head);
  shell.append(
    el(
      'p',
      'view-lede',
      L(
        'A life in motion — nine nodes, three countries, one route. Drag to pan, scroll to zoom into a city, and reassign the transport on any leg.',
        '流动的人生——九个节点、三个国家、一条路线。拖动平移，滚动放大到城市，并可随时更换任意一段的交通方式。',
      ),
    ),
  );

  const status = el('p', 'travel-status', L('plotting the route…', '正在绘制路线…'));
  shell.append(status);
  host.replaceChildren(shell);

  loadTravel()
    .then((data) => {
      if (disposed) return;
      status.remove();
      build(data, shell, (instance) => {
        map = instance;
      });
    })
    .catch(() => {
      status.replaceChildren();
      status.append(
        el('span', 'view-empty', L('The travel data could not be loaded. ', '旅行数据加载失败。')),
      );
      const fallback = el(
        'a',
        'btn btn-ghost',
        L('open the formal travel page ↗', '打开正式旅行页面 ↗'),
      );
      fallback.href = '/travel/';
      fallback.target = '_blank';
      fallback.rel = 'noopener';
      status.append(fallback);
    });

  return {
    dispose() {
      disposed = true;
      map?.remove();
      map = null;
    },
  };
}

/* ------------------------------------------------------------------ build */

function build(data: TravelData, shell: HTMLElement, onMap: (map: MapLibreMap) => void): void {
  const places = new Map(data.places.map((place) => [place.id, place]));
  const legs = data.legs.map((leg) => ({ ...leg }));
  const saved = readModes(legs.length);
  if (saved) legs.forEach((leg, index) => (leg.mode = saved[index] ?? leg.mode));

  const stage = el('div', 'travel-stage');
  const mapEl = el('div', 'travel-map');
  mapEl.id = 'travel-map';
  mapEl.setAttribute('aria-label', L('Interactive route map', '交互式路线地图'));
  stage.append(mapEl);

  const hud = el('div', 'travel-hud');
  hud.setAttribute('aria-live', 'polite');
  const hudKicker = el('span', 'travel-hud-kicker', L('route atlas', '路线图集'));
  const hudName = el('strong', 'travel-hud-name', L('A life in motion', '人生轨迹'));
  const hudZh = el('span', 'travel-hud-zh', L('人生轨迹', 'A life in motion'));
  const hudMeta = el('em', 'travel-hud-meta');
  hud.append(hudKicker, hudName, hudZh, hudMeta);
  hud.append(
    el(
      'span',
      'travel-hint',
      L('drag · scroll to zoom · click a pin', '拖动 · 滚动缩放 · 点击节点'),
    ),
  );

  const reset = el('button', 'travel-reset');
  reset.type = 'button';
  reset.textContent = L('⤢ fit route', '⤢ 显示全路线');
  reset.title = L('Zoom out to the whole route', '缩小以查看完整路线');
  hud.append(reset);

  const legend = el('div', 'travel-legend');
  MODE_ORDER.forEach((mode) => {
    const item = el('span', 'travel-legend-item');
    const dot = el('i');
    dot.style.setProperty('--c', MODES[mode].color);
    item.append(dot, document.createTextNode(isZh() ? MODES[mode].zh : MODES[mode].en));
    legend.append(item);
  });

  const meta = el('div', 'travel-meta');
  const legsPanel = el('section', 'travel-panel');
  const legsHead = el('div', 'travel-panel-head');
  legsHead.append(
    el('span', 'section-index', '01'),
    el('h3', '', L('route legs', '路线分段')),
  );
  legsPanel.append(legsHead);
  const total = el('p', 'travel-total');
  legsPanel.append(total);
  const legList = el('ol', 'travel-legs');
  legsPanel.append(legList);
  legsPanel.append(
    el(
      'p',
      'travel-disclaimer',
      isZh() ? data.disclaimer.zh : data.disclaimer.en,
    ),
  );

  const placesPanel = el('section', 'travel-panel');
  const placesHead = el('div', 'travel-panel-head');
  placesHead.append(el('span', 'section-index', '02'), el('h3', '', L('nodes', '节点')));
  placesPanel.append(placesHead);
  const countryList = el('div', 'travel-countries');
  placesPanel.append(countryList);

  const credit = el('p', 'travel-credit');
  credit.append(
    el('span', '', L('Basemap © OpenStreetMap contributors · ', '底图 © OpenStreetMap 贡献者 · ')),
  );
  const ofm = el('a', '', 'OpenFreeMap');
  ofm.href = 'https://openfreemap.org/';
  ofm.target = '_blank';
  ofm.rel = 'noopener';
  credit.append(ofm, el('span', '', L(' · rendered with ', ' · 使用 ')));
  const maplibre = el('a', '', 'MapLibre GL');
  maplibre.href = 'https://maplibre.org/';
  maplibre.target = '_blank';
  maplibre.rel = 'noopener';
  credit.append(maplibre);

  meta.append(legsPanel, placesPanel);
  shell.append(stage, meta, credit);

  /* ------------------------------------------------------- map + markers */

  let map: MapLibreMap | null = null;
  let selectedId: string | null = null;
  const placeButtons = new Map<string, HTMLButtonElement>();
  const pinElements = new Map<string, HTMLButtonElement>();
  const markers: Marker[] = [];

  const setHud = (place: Place | null): void => {
    if (!place) {
      hudKicker.textContent = L('route atlas', '路线图集');
      hudName.textContent = L('A life in motion', '人生轨迹');
      hudZh.textContent = L('人生轨迹', 'A life in motion');
      hudMeta.textContent = L(
        `${data.places.length} nodes · ${data.countries.length} countries`,
        `${data.places.length} 个节点 · ${data.countries.length} 个国家`,
      );
      return;
    }
    hudKicker.textContent =
      place.group === 'transit'
        ? L('transit node', '中转节点')
        : L(NODE_KICKER[place.type].en, NODE_KICKER[place.type].zh);
    hudName.textContent = placeName(place);
    hudZh.textContent = placeAlt(place);
    const note = placeNote(place);
    hudMeta.textContent = `${place.year}${note ? ` · ${note}` : ''}`;
  };

  const syncActive = (): void => {
    pinElements.forEach((pin, id) => pin.classList.toggle('is-active', id === selectedId));
    placeButtons.forEach((button, id) =>
      button.classList.toggle('is-active', id === selectedId),
    );
  };

  const select = (place: Place, fly: boolean): void => {
    selectedId = place.id;
    syncActive();
    setHud(place);
    if (fly && map) {
      map.flyTo({
        center: [place.lng, place.lat],
        zoom: Math.max(map.getZoom(), 9.5),
        duration: REDUCED() ? 0 : 1500,
        essential: true,
      });
    }
  };

  const fitAll = (): void => {
    selectedId = null;
    syncActive();
    setHud(null);
    if (!map) return;
    const bounds = new LngLatBounds();
    // Fit the arcs too: a great circle can bow far outside its endpoints.
    routeData().features.forEach((feature) =>
      feature.geometry.coordinates.forEach(([lng, lat]) => bounds.extend([lng, lat])),
    );
    data.places.forEach((place) => bounds.extend([place.lng, place.lat]));
    const compact = window.innerWidth <= 640;
    map.fitBounds(bounds, {
      padding: compact
        ? { top: 50, bottom: 90, left: 20, right: 100 }
        : { top: 80, bottom: 80, left: 80, right: 80 },
      maxZoom: 6,
      duration: REDUCED() ? 0 : 1300,
    });
  };

  reset.addEventListener('click', (event) => {
    event.stopPropagation();
    fitAll();
  });

  /* ------------------------------------------------------------ leg editor */

  const routeData = (): RouteCollection => ({
    type: 'FeatureCollection',
    features: legs.flatMap<RouteFeature>((leg, index) => {
      const from = places.get(leg.from);
      const to = places.get(leg.to);
      if (!from || !to) return [];
      return [
        {
          type: 'Feature',
          properties: { index, mode: leg.mode, from: leg.from, to: leg.to },
          geometry: { type: 'LineString', coordinates: greatCircle(from, to) },
        },
      ];
    }),
  });

  const updateStats = (): void => {
    const km = legs.reduce((sum, leg) => {
      const from = places.get(leg.from);
      const to = places.get(leg.to);
      return from && to ? sum + distanceKm(from, to) : sum;
    }, 0);
    const hours = legs.reduce((sum, leg) => {
      const from = places.get(leg.from);
      const to = places.get(leg.to);
      return from && to ? sum + distanceKm(from, to) / MODES[leg.mode].speed : sum;
    }, 0);
    total.textContent = L(
      `${number(km)} km across ${legs.length} legs · ≈ ${duration(hours)}`,
      `${number(km)} 公里 · ${legs.length} 段 · 约 ${duration(hours)}`,
    );
  };

  legs.forEach((leg, index) => {
    const from = places.get(leg.from);
    const to = places.get(leg.to);
    if (!from || !to) return;

    const row = el('li', 'travel-leg');
    row.append(el('span', 'leg-index', String(index + 1).padStart(2, '0')));

    const routeButton = el('button', 'leg-route');
    routeButton.type = 'button';
    routeButton.title = L(
      `Zoom to ${placeName(from)} → ${placeName(to)}`,
      `缩放到 ${placeName(from)} → ${placeName(to)}`,
    );
    routeButton.append(
      el('strong', '', `${placeShort(from)} → ${placeShort(to)}`),
      el('span', '', `${placeAltShort(from)} → ${placeAltShort(to)}`),
    );
    routeButton.addEventListener('click', () => {
      select(from, false);
      if (!map) return;
      map.fitBounds(new LngLatBounds([from.lng, from.lat], [to.lng, to.lat]), {
        padding: { top: 90, bottom: 90, left: 90, right: 90 },
        maxZoom: 8,
        duration: REDUCED() ? 0 : 1200,
      });
    });
    row.append(routeButton);

    const distance = distanceKm(from, to);
    const detail = el('span', 'leg-detail');
    row.append(detail);

    const modes = el('div', 'leg-modes');
    modes.setAttribute('role', 'group');
    modes.setAttribute(
      'aria-label',
      L(
        `Transport mode for ${placeName(from)} to ${placeName(to)}`,
        `${placeName(from)}到${placeName(to)}的交通方式`,
      ),
    );
    const buttons = new Map<Mode, HTMLButtonElement>();

    const refreshRow = (): void => {
      const speed = MODES[leg.mode].speed;
      detail.textContent = L(
        `${number(distance)} km · ≈ ${duration(distance / speed)}`,
        `${number(distance)} 公里 · 约 ${duration(distance / speed)}`,
      );
      buttons.forEach((button, mode) => {
        const active = mode === leg.mode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    };

    MODE_ORDER.forEach((mode) => {
      const style = MODES[mode];
      const button = el('button', 'leg-mode');
      button.type = 'button';
      button.title = isZh() ? `${style.zh} (${style.en})` : `${style.en} (${style.zh})`;
      button.setAttribute(
        'aria-label',
        L(
          `${style.en} for ${placeShort(from)} to ${placeShort(to)}`,
          `${placeShort(from)}到${placeShort(to)}：${style.zh}`,
        ),
      );
      button.style.setProperty('--c', style.color);
      button.append(el('span', 'leg-mode-icon', style.icon));
      button.addEventListener('click', () => {
        leg.mode = mode;
        saveModes(legs);
        const source = map?.getSource('route') as GeoJSONSource | undefined;
        source?.setData(routeData());
        refreshRow();
        updateStats();
      });
      buttons.set(mode, button);
      modes.append(button);
    });

    row.append(modes);
    refreshRow();
    legList.append(row);
  });

  /* ------------------------------------------------------------ node list */

  data.countries.forEach((country) => {
    const card = el('div', 'travel-country');
    card.style.setProperty('--c', country.color);
    const title = el('div', 'travel-country-title');
    title.append(
      el('strong', '', countryName(country)),
      el('span', '', countryAlt(country)),
    );
    card.append(title);

    const list = el('div', 'travel-country-places');
    country.places.forEach((id) => {
      const place = places.get(id);
      if (!place) return;
      const button = el('button', 'travel-place');
      button.type = 'button';
      button.append(el('span', '', placeShort(place)), el('em', '', placeAltShort(place)));
      button.addEventListener('click', () => select(place, true));
      list.append(button);
      placeButtons.set(id, button);
    });
    card.append(list);
    countryList.append(card);
  });

  /* ------------------------------------------------------------------ map */

  let instance: MapLibreMap;
  try {
    instance = new MapLibreMap({
      container: mapEl,
      style: 'https://tiles.openfreemap.org/styles/dark',
      center: [96, 32],
      zoom: 2.1,
      // A portrait phone needs to zoom out past a 1:1 world scale to fit a
      // route that spans 135° of longitude.
      minZoom: 0.2,
      maxZoom: 18,
      attributionControl: { compact: true },
      dragRotate: false,
      pitchWithRotate: false,
    });
  } catch {
    stage.classList.add('is-degraded');
    stage.append(
      hud,
      el(
        'p',
        'travel-status',
        L(
          'WebGL is unavailable here — the nodes are listed below.',
          '此环境不支持 WebGL——节点列表仍可在下方查看。',
        ),
      ),
    );
    updateStats();
    return;
  }

  map = instance;
  onMap(instance);
  stage.append(hud, legend);

  instance.addControl(new NavigationControl({ showCompass: false }), 'top-right');
  instance.addControl(new ScaleControl({ unit: 'metric', maxWidth: 90 }), 'bottom-left');

  data.places.forEach((place) => {
    const pin = el('button', 'travel-pin');
    pin.type = 'button';
    pin.dataset.type = place.type;
    const note = placeNote(place);
    pin.title = `${placeName(place)} · ${place.year}${note ? ` · ${note}` : ''}`;
    pin.setAttribute(
      'aria-label',
      L(
        `${placeName(place)}, ${place.year}. ${note || 'Transit point.'}`,
        `${placeName(place)}，${place.year}。${note || '中转节点。'}`,
      ),
    );

    const tag = el('span', 'travel-pin-tag');
    tag.append(el('span', '', placeShort(place)), el('em', '', placeAltShort(place)));
    const dot = el('span', 'travel-pin-dot');
    pin.append(tag, dot);
    pin.addEventListener('click', (event) => {
      event.stopPropagation();
      select(place, true);
    });

    markers.push(
      new Marker({ element: pin, anchor: 'bottom', offset: [0, 2] })
        .setLngLat([place.lng, place.lat])
        .addTo(instance),
    );
    pinElements.set(place.id, pin);
  });

  updateStats();
  syncActive();

  // At a wide zoom the labels would collide (and clip at the edges), so only
  // the dots are drawn until the user zooms into a region or picks a node.
  const syncZoom = (): void => {
    stage.classList.toggle('is-far', instance.getZoom() < 1.2);
  };
  instance.on('zoom', syncZoom);
  syncZoom();

  instance.on('load', () => {
    instance.addSource('route', { type: 'geojson', data: routeData() });
    instance.addLayer({
      id: 'route-casing',
      type: 'line',
      source: 'route',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': '#02060b', 'line-width': 6.5, 'line-opacity': 0.72 },
    });

    MODE_ORDER.forEach((mode) => {
      const style = MODES[mode];
      instance.addLayer({
        id: `route-${mode}`,
        type: 'line',
        source: 'route',
        filter: ['==', ['get', 'mode'], mode],
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': style.color,
          'line-width': style.width,
          'line-opacity': 0.92,
          ...(style.dash ? { 'line-dasharray': style.dash } : {}),
        },
      });
    });

    fitAll();
    instance.once('idle', () => stage.classList.add('is-ready'));
  });

  instance.on('error', (event) => {
    const message = String(event.error?.message ?? '');
    if (/style|sprite|glyph|tile/i.test(message)) stage.classList.add('is-degraded');
  });
}
