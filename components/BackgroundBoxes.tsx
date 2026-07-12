"use client";

import { useEffect, useRef } from "react";

const COLS = 16;
const ROWS = 12;
const TOTAL = COLS * ROWS;

export function BackgroundBoxes() {
  const gridRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const boxes = Array.from(grid.children) as HTMLElement[];

    const update = () => {
      const { x, y } = mouseRef.current;

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const rect = box.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - dist / 220) * (dist < 400 ? 1 : 0);
        const s = 1 + intensity * 0.35;
        const o = 0.05 + intensity * 0.45;
        box.style.transform = `scale(${s})`;
        box.style.opacity = `${o}`;
        box.style.borderColor = intensity > 0.1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.06)";
      }

      rafRef.current = requestAnimationFrame(update);
    };

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.style.transform = "scale(1)";
        box.style.opacity = "0.05";
        box.style.borderColor = "rgba(255,255,255,0.06)";
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    grid.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      grid.removeEventListener("mouseleave", handleLeave);
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
