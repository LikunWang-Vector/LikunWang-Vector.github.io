export type MascotForm = 'maid' | 'chibi';
export type MascotColour = 'blue' | 'green' | 'red';

/** A playable one-shot action shared by the Live2D and sprite actors. */
export type MascotAction =
  // Q肥鱼 / c_0120 motion actions
  | 'aidale'
  | 'selfie'
  | 'bubble'
  | 'ketchup'
  | 'splash'
  | 'open'
  | 'quick'
  | 'wave'
  | 'jump'
  | 'failed'
  | 'waiting'
  | 'focus'
  | 'review'
  // 大肥鱼 sprite / small Live2D actions
  | 'feed'
  | 'rice'
  | 'sleep'
  | 'scene'
  | 'spin'
  | 'love'
  | 'bowl'
  // 中肥鱼 expressions
  | 'smile'
  | 'grin'
  | 'teeth'
  | 'pout'
  | 'worry'
  | 'surprise'
  | 'squeeze'
  | 'dead'
  | 'dark'
  | 'drool'
  | 'shout'
  | 'tail'
  | 'ears'
  // 成年肥鱼 expressions
  | 'blush'
  | 'angry'
  | 'cry'
  | 'size';

export interface MascotActor {
  /** Swap the palette without reloading the model. */
  setColour(colour: MascotColour): void;
  /** Pointer position relative to the character, each in [-1, 1]. */
  setGaze(x: number, y: number): void;
  /** Play a one-shot action; unknown actions are ignored. */
  play(action: MascotAction): void;
  setReduced(reduced: boolean): void;
  setActive(active: boolean): void;
  destroy(): void;
}
