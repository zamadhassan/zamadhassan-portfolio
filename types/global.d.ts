interface GsapTimelineVars {
  defaults?: Record<string, unknown>;
  onComplete?: () => void;
}

interface GsapTweenVars {
  [key: string]: unknown;
  duration?: number;
  ease?: string;
  y?: number;
  yPercent?: number;
  x?: number;
  xPercent?: number;
  scale?: number;
  autoAlpha?: number;
  clipPath?: string;
  stagger?: number;
  scrollTrigger?: ScrollTriggerVars;
  onUpdate?: () => void;
  value?: number;
  width?: string;
}

interface ScrollTriggerVars {
  trigger?: HTMLElement | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
  toggleActions?: string;
}

interface ScrollTriggerType {
  update: () => void;
  getAll: () => { kill: () => void }[];
}

interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
  on: (event: string, callback: () => void) => void;
}

interface LenisConstructor {
  new (options?: {
    lerp?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  }): LenisInstance;
}

interface GsapUtils {
  toArray: <T = HTMLElement>(selector: string) => T[];
}

interface GsapTicker {
  add: (fn: (time: number) => void) => void;
  remove: (fn: (time: number) => void) => void;
  lagSmoothing: (threshold: number) => void;
}

interface GsapType {
  to: (target: string | HTMLElement | HTMLElement[] | Record<string, number>, vars: GsapTweenVars) => GsapTimeline;
  fromTo: (
    target: string | HTMLElement | HTMLElement[] | Record<string, number>,
    fromVars: GsapTweenVars,
    toVars: GsapTweenVars,
  ) => GsapTimeline;
  set: (target: string | HTMLElement | HTMLElement[], vars: GsapTweenVars) => GsapTimeline;
  timeline: (vars?: GsapTimelineVars) => GsapTimeline;
  context: (fn: () => void, scope?: HTMLElement) => { revert: () => void };
  registerPlugin: (...plugins: unknown[]) => void;
  ticker: GsapTicker;
  utils: GsapUtils;
}

interface GsapTimeline extends Promise<unknown> {
  to: (target: string | HTMLElement | HTMLElement[] | Record<string, number>, vars: GsapTweenVars, position?: string | number) => GsapTimeline;
  fromTo: (
    target: string | HTMLElement | HTMLElement[] | Record<string, number>,
    fromVars: GsapTweenVars,
    toVars: GsapTweenVars,
    position?: string | number,
  ) => GsapTimeline;
  kill: () => void;
}

interface Window {
  gsap: GsapType;
  ScrollTrigger: ScrollTriggerType;
  Lenis: LenisConstructor;
}
