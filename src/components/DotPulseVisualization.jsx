import { useEffect, useMemo, useRef } from "react";

/**
 * DotPulseVisualization
 * - Dots fade in / fade out (no movement)
 * - Spawn rate reflects events per second
 * - One pastel color per category, with tonal variations
 * - Very subtle glow (professional dashboard look)
 */
export function DotPulseVisualization({ rate, theme, height = 50 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const dotsRef = useRef([]);
  const lastTsRef = useRef(0);
  const spawnAccRef = useRef(0);

  // ---------------------------------- PASTEL COLOR THEMES ----------------------------------
  // Each category uses ONE hue with light/dark/opacity variations
  const COLOR_THEMES = useMemo(
    () => ({
      human_hyper_pulse: [
        { r: 236, g: 120, b: 160, a: 0.35 },
        { r: 236, g: 120, b: 160, a: 0.55 },
        { r: 200, g: 90, b: 130, a: 0.45 },
      ],

      planet_flow: [
        { r: 150, g: 210, b: 170, a: 0.35 },
        { r: 150, g: 210, b: 170, a: 0.55 },
        { r: 120, g: 180, b: 145, a: 0.45 },
      ],

      cosmic_surge: [
        { r: 140, g: 200, b: 220, a: 0.3 },
        { r: 140, g: 200, b: 220, a: 0.5 },
        { r: 100, g: 170, b: 200, a: 0.4 },
        { r: 170, g: 220, b: 240, a: 0.25 },
      ],

      digital_firehose: [
        { r: 240, g: 200, b: 120, a: 0.35 },
        { r: 240, g: 200, b: 120, a: 0.55 },
        { r: 220, g: 180, b: 90, a: 0.45 },
      ],

      gaming_frenzy: [
        { r: 180, g: 140, b: 210, a: 0.35 },
        { r: 180, g: 140, b: 210, a: 0.55 },
        { r: 150, g: 110, b: 190, a: 0.45 },
      ],

      civilization_infrastructure: [
        { r: 255, g: 195, b: 120, a: 0.35 },
        { r: 255, g: 195, b: 120, a: 0.55 },
        { r: 235, g: 170, b: 95, a: 0.45 },
      ],

      information_entropy: [
        { r: 120, g: 210, b: 255, a: 0.35 },
        { r: 120, g: 210, b: 255, a: 0.55 },
        { r: 90, g: 185, b: 235, a: 0.45 },
      ],

      planetary_loss: [
        { r: 140, g: 230, b: 220, a: 0.3 },
        { r: 140, g: 230, b: 220, a: 0.5 },
        { r: 110, g: 205, b: 195, a: 0.4 },
      ],

      transport_mobility: [
        { r: 255, g: 165, b: 90, a: 0.35 },
        { r: 255, g: 165, b: 90, a: 0.55 },
        { r: 235, g: 140, b: 70, a: 0.45 },
      ],

      mind_consciousness: [
        { r: 180, g: 140, b: 255, a: 0.35 },
        { r: 200, g: 160, b: 255, a: 0.55 },
        { r: 160, g: 120, b: 230, a: 0.45 },
      ],

      life_on_earth: [
        { r: 120, g: 200, b: 120, a: 0.35 },
        { r: 140, g: 220, b: 140, a: 0.55 },
        { r: 100, g: 180, b: 100, a: 0.45 },
      ],
    }),
    []
  );

  const palette = COLOR_THEMES[theme] || [{ r: 180, g: 180, b: 180, a: 0.4 }];

  // ---------- SPAWN MODEL ----------
  const dotsPerSecond = useMemo(() => {
    const r = Math.max(Number(rate) || 0, 0);

    if (r <= 20) return r;
    if (r <= 500) return 20 + (r - 20) * 0.12;
    return 90;
  }, [rate]);

  // Pick random shade from same hue
  const pickColor = () => palette[Math.floor(Math.random() * palette.length)];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = canvas.clientWidth || 300;
      const h = canvas.clientHeight || height;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // ---------- DOT FACTORY ----------
    const createDot = (w, h) => {
      const c = pickColor();

      return {
        x: Math.random() * w,
        y: 6 + Math.random() * (h - 12),
        r: 2 + Math.random() * 2.5,
        born: performance.now(),
        life: 800 + Math.random() * 800,
        color: c,
      };
    };

    const step = (ts) => {
      const w = canvas.clientWidth || 300;
      const h = canvas.clientHeight || height;

      const last = lastTsRef.current || ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      lastTsRef.current = ts;

      ctx.clearRect(0, 0, w, h);

      // Spawn dots according to rate
      spawnAccRef.current += dotsPerSecond * dt;
      const spawnCount = Math.floor(spawnAccRef.current);
      spawnAccRef.current -= spawnCount;

      for (let i = 0; i < spawnCount; i++) {
        dotsRef.current.push(createDot(w, h));
      }

      const now = performance.now();
      const next = [];

      // Minimal glow
      ctx.shadowBlur = 1.5;

      for (const d of dotsRef.current) {
        const age = now - d.born;
        const t = age / d.life;

        if (t >= 1) continue;

        // Smooth fade in/out
        const alpha = t < 0.2 ? t / 0.2 : t > 0.8 ? (1 - t) / 0.2 : 1;

        const { r, g, b, a } = d.color;
        const finalAlpha = a * alpha;

        const fill = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;

        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.shadowColor = fill;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();

        next.push(d);
      }

      dotsRef.current = next.slice(-200);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
      dotsRef.current = [];
      lastTsRef.current = 0;
      spawnAccRef.current = 0;
    };
  }, [rate, theme, height, dotsPerSecond, palette]);

  return (
    <canvas ref={canvasRef} className="graph graph--dots" style={{ height }} />
  );
}
