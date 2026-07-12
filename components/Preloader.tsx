"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const gsap: GsapType = (window as unknown as Window).gsap;

    if (!gsap) {
      setIsComplete(true);
      return;
    }

    const counter = { value: 0 };
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setIsComplete(true),
    });

    timeline.to(counter, {
      value: 100,
      duration: 1.35,
      onUpdate: () => setProgress(Math.round(counter.value)),
    });

    timeline.to(".preloader__bar span", { width: "100%", duration: 0.25 }, 0);
    timeline.to(".preloader", { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "+=0.15");

    return () => {
      timeline.kill();
    };
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className="preloader" aria-live="polite" aria-label="Website loading">
      <div className="preloader__inner">
        <span>Connecting</span>
        <strong>{progress}%</strong>
      </div>
      <div className="preloader__bar" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
