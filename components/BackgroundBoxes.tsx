"use client";

import { useEffect, useRef } from "react";

const COLS = 16;
const ROWS = 12;
const TOTAL = COLS * ROWS;
const IDLE_MOUSE = { x: -9999, y: -9999 };

export function BackgroundBoxes() {
  const gridRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef(IDLE_MOUSE);
  const easedMouseRef = useRef(IDLE_MOUSE);
  const rafRef = useRef(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const boxes = Array.from(grid.children) as HTMLElement[];
    let centers: { x: number; y: number }[] = [];

    const measure = () => {
      centers = boxes.map((box) => {
        const rect = box.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });
    };

    const resetBoxes = () => {
      mouseRef.current = IDLE_MOUSE;
      easedMouseRef.current = IDLE_MOUSE;

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.style.transform = "translate3d(0, 0, 0) scale(1)";
        box.style.opacity = "0.05";
        box.style.borderColor = "rgba(255,255,255,0.06)";
        box.style.setProperty("--glow", "0");
      }
    };

    const update = () => {
      const mouse = mouseRef.current;
      const eased = easedMouseRef.current;
      const lerp = mouse.x < -1000 ? 1 : 0.28;
      easedMouseRef.current = {
        x: eased.x + (mouse.x - eased.x) * lerp,
        y: eased.y + (mouse.y - eased.y) * lerp,
      };
      const { x, y } = easedMouseRef.current;

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const center = centers[i];
        const dx = x - center.x;
        const dy = y - center.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - dist / 280);
        const moveX = dx * intensity * -0.035;
        const moveY = dy * intensity * -0.035;
        const s = 1 + intensity * 0.18;
        const o = 0.05 + intensity * 0.62;
        box.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${s})`;
        box.style.opacity = `${o}`;
        box.style.borderColor = intensity > 0.08 ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.06)";
        box.style.setProperty("--glow", intensity.toFixed(3));
      }

      rafRef.current = requestAnimationFrame(update);
    };

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => resetBoxes();

    measure();
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", measure);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bg-boxes" ref={gridRef} aria-hidden="true">
      {Array.from({ length: TOTAL }, (_, i) => (
        <div key={i} className="bg-box" />
      ))}
    </div>
  );
}
