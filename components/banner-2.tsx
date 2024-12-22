/* eslint-disable prefer-const */
"use client";
import React, { useRef, useEffect } from "react";
import { createNoise3D } from "simplex-noise";

// Define a type for the Particle properties
type ParticleProps = Float32Array;

const   ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundColor: string = "hsla(260,40%,5%,1)";
  const noise3D = createNoise3D();

  // Particle constants
  const PARTICLE_COUNT: number = 700;
  const PROPS_PER_PARTICLE: number = 9;
  const RANGE_Y: number = 100;
  const BASE_TTL: number = 50;
  const RANGE_TTL: number = 150;
  const BASE_SPEED: number = 0.1;
  const RANGE_SPEED: number = 2;
  const BASE_RADIUS: number = 1;
  const RANGE_RADIUS: number = 4;
  const NOISE_STEPS: number = 8;
  const X_OFF: number = 0.00125;
  const Y_OFF: number = 0.00125;
  const Z_OFF: number = 0.0005;

  // Hue values for colors
  const HUE_TEAL: number = 159;
  const HUE_BLUE: number = 240;

  let particleProps: ParticleProps;
  let tick: number = 0;

  // Initialize particle properties
  const initParticles = (): void => {
    particleProps = new Float32Array(PARTICLE_COUNT * PROPS_PER_PARTICLE);
    for (
      let i = 0;
      i < PARTICLE_COUNT * PROPS_PER_PARTICLE;
      i += PROPS_PER_PARTICLE
    ) {
      initParticle(i);
    }
  };

  // Initialize a single particle
  const initParticle = (i: number): void => {
    const canvas = canvasRef.current!;
    const x: number = Math.random() * canvas.width;
    const y: number = canvas.height / 2 + (Math.random() - 0.5) * RANGE_Y;
    const vx: number = 0;
    const vy: number = 0;
    const life: number = 0;
    const ttl: number = BASE_TTL + Math.random() * RANGE_TTL;
    const speed: number = BASE_SPEED + Math.random() * RANGE_SPEED;
    const radius: number = BASE_RADIUS + Math.random() * RANGE_RADIUS;
    const hue: number = Math.random() < 0.5 ? HUE_TEAL : HUE_BLUE;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  // Fade effect
  const fadeInOut = (t: number, m: number): number => {
    const halfM: number = 0.5 * m;
    return Math.abs(((t + halfM) % m) - halfM) / halfM;
  };

  // Linear interpolation
  const lerp = (start: number, end: number, t: number): number =>
    start + t * (end - start);

  // Draw all particles
  const drawParticles = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ): void => {
    for (
      let i = 0;
      i < PARTICLE_COUNT * PROPS_PER_PARTICLE;
      i += PROPS_PER_PARTICLE
    ) {
      updateParticle(ctx, i, width, height);
    }
  };

  // Update a particle's position and draw it
  const updateParticle = (
    ctx: CanvasRenderingContext2D,
    i: number,
    width: number,
    height: number
  ): void => {
    let  [x, y, vx, vy, life, ttl, speed, radius, hue] = particleProps.slice(
      i,
      i + PROPS_PER_PARTICLE
    );
    
    const noise: number =
      noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * Math.PI * 2;

    vx = lerp(vx, Math.cos(noise), 0.5);
    vy = lerp(vy, Math.sin(noise), 0.5);

    const x2: number = x + vx * speed;
    const y2: number = y + vy * speed;

    drawParticle(ctx, x, y, x2, y2, life, ttl, radius, hue);

    life++;

    particleProps.set([x2, y2, vx, vy, life, ttl, speed, radius, hue], i);

    if (x2 > width || x2 < 0 || y2 > height || y2 < 0 || life > ttl) {
      initParticle(i);
    }
  };

  // Draw a single particle
  const drawParticle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number
  ): void => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  // Render animation frame
  const renderFrame = (): void => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { width, height } = canvas;

    tick++;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    drawParticles(ctx, width, height);
    requestAnimationFrame(renderFrame);
  };

  // Resize canvas on window resize
  const resizeCanvas = (): void => {
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    initParticles();
    renderFrame();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-[hsla(260,40%,5%,1)]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-full flex flex-col items-center">
          <div className="overflow-hidden relative">
            <h1 className="text-white text-[64px] relative font-semibold translate-y-[100%] animate-[1000ms_slideUp_700ms_ease-in-out_forwards]">
              AFRICA’S LEADING BPO
            </h1>
          </div>
          <p className="text-white text-[20px] uppercase mt-1 text-center max-w-[600px] opacity-0 animate-[500ms_opacity_1500ms_ease-in-out_forwards]">
            Determined, Engaged And Energized Spearheading Investment Across The
            Continent
          </p>
        </div>
        <canvas ref={canvasRef} style={{ display: "block" }} />
      </div>
    </>
  );
};

export default ParticleCanvas;
