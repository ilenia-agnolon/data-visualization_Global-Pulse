import { useEffect, useRef, useMemo } from "react";

export function RainVisualization({
  rate, // events per secons
  color = "hsl(189, 100%, 55%)", // light blue
  height = 40,
}) {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const animationRef = useRef(null);

  // (max ~25 drops)
  const normalizedDensity = useMemo(() => {
    const safeRate = Math.max(rate || 0, 0.1);
    const logRate = Math.log10(safeRate + 1);
    return Math.min(Math.max(logRate * 4, 4), 25);
  }, [rate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getWidth = () =>
      canvas.clientWidth || canvas.offsetWidth || 260;

    const getHeight = () =>
      canvas.clientHeight || canvas.offsetHeight || height;

    const resize = () => {
      const w = getWidth();
      const h = getHeight();

      
      canvas.width = w * 2;
      canvas.height = h * 2;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(2, 2);
    };

    resize();
    window.addEventListener("resize", resize);

    const createDrop = () => ({
      x: Math.random() * getWidth(),
      y: Math.random() * getHeight(),
      // speed
      speed: 1.5 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.5,
      length: 4 + Math.random() * 8,
    });

    const initDrops = () => {
      dropsRef.current = [];
      for (let i = 0; i < normalizedDensity; i++) {
        dropsRef.current.push(createDrop());
      }
    };

    initDrops();

    const animate = () => {
      const w = getWidth();
      const h = getHeight();

      ctx.clearRect(0, 0, w, h);

      // hsl(...) hsla(...)
      const hslMatch = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
      const hVal = hslMatch ? hslMatch[1] : "189";
      const sVal = hslMatch ? hslMatch[2] : "100";
      const lVal = hslMatch ? hslMatch[3] : "55";

      dropsRef.current.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.strokeStyle = `hsla(${hVal}, ${sVal}%, ${lVal}%, ${drop.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.shadowColor = `hsla(${hVal}, ${sVal}%, ${lVal}%, 0.6)`;
        ctx.shadowBlur = 4;
        ctx.stroke();

        // update position
        drop.y += drop.speed;

        // respawn from above when it exits
        if (drop.y > h) {
          drop.y = -drop.length;
          drop.x = Math.random() * w;
          drop.speed = 1.5 + Math.random() * 3;
          drop.opacity = 0.3 + Math.random() * 0.5;
        }
      });

      // keeps drops number consistent with density
      while (dropsRef.current.length < normalizedDensity) {
        dropsRef.current.push({
          x: Math.random() * getWidth(),
          y: -10,
          speed: 1.5 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.5,
          length: 4 + Math.random() * 8,
        });
      }
      while (dropsRef.current.length > normalizedDensity) {
        dropsRef.current.pop();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [normalizedDensity, color, height]);

  return (
    <canvas
      ref={canvasRef}
      className="graph graph--rain"
      style={{ height }}
    />
  );
}
