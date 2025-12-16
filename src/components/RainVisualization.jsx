import { useEffect, useMemo, useRef } from "react";

// 👉 IMPORTANT: keep this export name because CuriosityCard imports { RainVisualization }
export function RainVisualization({ rate, height = 50 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // Particle storage
  const particlesRef = useRef([]);
  const lastTsRef = useRef(0);
  const spawnAccRef = useRef(0);

  // 👉 Color palette: blue, orange, white (you can tweak probabilities below)
  const COLORS = useMemo(
    () => [
      { r: 64, g: 214, b: 255, aMin: 0.55, aMax: 0.95 }, // cyan/blue
      { r: 246, g: 168, b: 35, aMin: 0.45, aMax: 0.9 },  // orange
      { r: 255, g: 255, b: 255, aMin: 0.35, aMax: 0.85 } // white
    ],
    []
  );

  // 👉 Decide how many drops per second we can actually spawn (performance-safe)
  // For low rates (like 1.8/sec) we keep it 1:1.
  // For huge rates we cap spawn and treat each drop as a "bundle" of events.
  const spawnModel = useMemo(() => {
    const r = Math.max(Number(rate) || 0, 0);

    // 👉 1:1 spawn for small rates (so 1.8/sec ≈ 2 drops/sec)
    if (r <= 20) {
      return { dropsPerSecond: r, eventsPerDrop: 1 };
    }

    // 👉 Medium rates: still fairly proportional, but we start compressing
    if (r <= 500) {
      const dropsPerSecond = 20 + (r - 20) * 0.12; // 20..~77
      return { dropsPerSecond, eventsPerDrop: r / dropsPerSecond };
    }

    // 👉 Huge rates: strong compression (otherwise you'd spawn millions/sec)
    const dropsPerSecond = 90; // hard cap for performance
    return { dropsPerSecond, eventsPerDrop: r / dropsPerSecond };
  }, [rate]);

  // 👉 Small helper: pick a color with weighted probability (blue > orange > white)
  const pickColor = () => {
    const t = Math.random();
    if (t < 0.6) return COLORS[0];      // 60% blue
    if (t < 0.85) return COLORS[1];     // 25% orange
    return COLORS[2];                  // 15% white
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // HiDPI resize
    const resize = () => {
      const w = canvas.clientWidth || 300;
      const h = canvas.clientHeight || height;

      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // 👉 Particle factory: short "dash" like the screenshot (not circles)
    const createDrop = (w, h) => {
      const c = pickColor();
      const alpha = c.aMin + Math.random() * (c.aMax - c.aMin);

      // 👉 Speed is in px/sec, not px/frame (consistent on all FPS)
      // Keep it readable: slower baseline, slightly faster for higher rates
      const rateFactor = Math.min(Math.log10((Number(rate) || 0) + 1), 6); // 0..6
      const baseSpeed = 25 + rateFactor * 10; // 25..85 px/sec

      // Dash length (a little variation)
      const dashLen = 3 + Math.random() * 8; // px

      return {
        x: Math.random() * w,
        y: -dashLen - Math.random() * h,
        vy: baseSpeed * (0.75 + Math.random() * 0.8), // px/sec
        len: dashLen,
        a: alpha,
        color: c
      };
    };

    const step = (ts) => {
      const w = canvas.clientWidth || 300;
      const h = canvas.clientHeight || height;

      // dt in seconds
      const last = lastTsRef.current || ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      lastTsRef.current = ts;

      // Clear frame
      ctx.clearRect(0, 0, w, h);

      // 👉 Spawn logic: "drops per second" based on your rate
      // This is the main fix: 1.8/sec will spawn ~2 drops per second.
      spawnAccRef.current += spawnModel.dropsPerSecond * dt;

      // Spawn integer amount, keep fractional remainder
      const spawnCount = Math.floor(spawnAccRef.current);
      spawnAccRef.current -= spawnCount;

      for (let i = 0; i < spawnCount; i++) {
        particlesRef.current.push(createDrop(w, h));
      }

      // 👉 Update & draw
      const next = [];
      for (const p of particlesRef.current) {
        p.y += p.vy * dt;

        // Draw a vertical dash (linelet)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.a})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 8;

        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.len);
        ctx.stroke();

        // Keep if still visible
        if (p.y < h + p.len) next.push(p);
      }

      // 👉 Cap max particles to avoid memory/perf issues
      // Older particles are dropped first if too many
      const MAX_PARTICLES = 180;
      particlesRef.current = next.slice(-MAX_PARTICLES);

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      particlesRef.current = [];
      lastTsRef.current = 0;
      spawnAccRef.current = 0;
    };
  }, [height, rate, spawnModel, COLORS]);

  return (
    <canvas
      ref={canvasRef}
      className="graph graph--particles"
      style={{ height }}
    />
  );
}
