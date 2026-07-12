"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function MotionProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.05,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 64 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".split-word");
        if (words.length) {
          gsap.fromTo(
            words,
            { autoAlpha: 0, y: 40, rotateX: -20 },
            {
              autoAlpha: 1,
              y: 0,
              rotateX: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.035,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true,
              },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.fromTo(
          Array.from(el.children) as HTMLElement[],
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(16% 0 16% 0)", autoAlpha: 0 },
          {
            clipPath: "inset(0% 0 0% 0)",
            autoAlpha: 1,
            duration: 1.3,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseInt(el.dataset.target || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.1");
        gsap.to(el, {
          y: `${speed * -100}%`,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((el) => {
        el.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = el.getBoundingClientRect();
          const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
          const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            rotationX: y * -10,
            rotationY: x * 10,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 800,
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
