"use client";

import { useEffect, useRef } from "react";

// Tunables
const SPACING = 30; // px between dots
const RADIUS = 160; // cursor influence radius (px)
const BASE_RADIUS = 1.15; // resting dot radius (px)
const BASE_ALPHA = 0.1; // resting dot opacity
const PUSH = 16; // how far dots are pushed away from the cursor (px)
const DANCE = 7; // size of the little orbit each dot makes near the cursor (px)

/**
 * Dot grid that reacts to the mouse: nearby dots swell, drift away from the
 * cursor and orbit in small circles, then spring back when it leaves.
 *
 * Performance:
 * - One canvas, DPR capped at 2, typed arrays, no allocations per frame.
 * - The animation loop only runs while the mouse is over the hero or dots are
 *   still settling. At rest it draws once and costs nothing.
 * - Fine-pointer devices only (no touch), and not under prefers-reduced-motion.
 * - Color is read from the `text-primary` token, so palette changes apply.
 */
export function HeroDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const host = canvas.closest("section") ?? canvas.parentElement;
    if (!host) return;

    const interactive =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let color = "rgb(0 0 0)";
    let count = 0;
    let hx = new Float32Array(0);
    let hy = new Float32Array(0);
    let ox = new Float32Array(0);
    let oy = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let phase = new Float32Array(0);

    const pointer = { x: 0, y: 0, inside: false };
    let raf = 0;
    let running = false;
    let last = 0;

    function setup() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      color = getComputedStyle(canvas!).color;

      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      count = cols * rows;
      hx = new Float32Array(count);
      hy = new Float32Array(count);
      ox = new Float32Array(count);
      oy = new Float32Array(count);
      vx = new Float32Array(count);
      vy = new Float32Array(count);
      phase = new Float32Array(count);

      const startX = (w - (cols - 1) * SPACING) / 2;
      const startY = (h - (rows - 1) * SPACING) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          hx[i] = startX + c * SPACING;
          hy[i] = startY + r * SPACING;
          phase[i] = (i * 2.399963) % (Math.PI * 2); // golden angle: no visible pattern
        }
      }
      frame(performance.now(), false);
    }

    // One simulation + draw pass. Returns true while anything is still moving.
    function frame(now: number, simulate: boolean) {
      const dt = Math.min((now - last) / 16.67, 2) || 1; // normalise for 60/120/144Hz
      last = now;

      const rect = canvas!.getBoundingClientRect();
      const mx = pointer.x - rect.left;
      const my = pointer.y - rect.top;
      const t = now * 0.0025;
      const damp = Math.pow(0.8, dt);
      let energy = 0;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = color;

      for (let i = 0; i < count; i++) {
        let f = 0;
        if (simulate) {
          let tx = 0;
          let ty = 0;
          if (pointer.inside) {
            const dx = hx[i] - mx;
            const dy = hy[i] - my;
            const d2 = dx * dx + dy * dy;
            if (d2 < RADIUS * RADIUS) {
              const d = Math.sqrt(d2) || 1;
              f = 1 - d / RADIUS;
              f *= f;
              const a = t + phase[i];
              tx = (dx / d) * PUSH * f + Math.cos(a) * DANCE * f;
              ty = (dy / d) * PUSH * f + Math.sin(a) * DANCE * f;
            }
          }
          vx[i] += (tx - ox[i]) * 0.12 * dt;
          vy[i] += (ty - oy[i]) * 0.12 * dt;
          vx[i] *= damp;
          vy[i] *= damp;
          ox[i] += vx[i] * dt;
          oy[i] += vy[i] * dt;
          energy +=
            Math.abs(ox[i]) +
            Math.abs(oy[i]) +
            Math.abs(vx[i]) +
            Math.abs(vy[i]);
        }

        ctx!.globalAlpha = BASE_ALPHA + f * 0.55;
        ctx!.beginPath();
        ctx!.arc(
          hx[i] + ox[i],
          hy[i] + oy[i],
          BASE_RADIUS + f * 1.8,
          0,
          6.2832,
        );
        ctx!.fill();
      }
      return energy > 0.05;
    }

    function loop(now: number) {
      const moving = frame(now, true);
      if (pointer.inside || moving) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
        ox.fill(0);
        oy.fill(0);
        vx.fill(0);
        vy.fill(0);
        frame(now, false); // final clean resting state
      }
    }

    function start() {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
      start();
    }
    function onLeave() {
      pointer.inside = false; // loop keeps running until dots settle, then stops
    }

    const ro = new ResizeObserver(setup);
    ro.observe(canvas);
    setup();

    if (interactive) {
      host.addEventListener("pointermove", onMove as EventListener, {
        passive: true,
      });
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", onMove as EventListener);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 size-full text-primary"
    />
  );
}
