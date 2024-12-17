"use client";
import React, { useRef, useEffect } from "react";
import { createNoise3D } from "simplex-noise";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const backgroundColor = "hsla(260,40%,5%,1)";
  const noise3D = createNoise3D();

  //   const simplex = new SimplexNoise();

  const PARTICLE_COUNT = 700;
  const PROPS_PER_PARTICLE = 9;
  const RANGE_Y = 100;
  const BASE_TTL = 50;
  const RANGE_TTL = 150;
  const BASE_SPEED = 0.1;
  const RANGE_SPEED = 2;
  const BASE_RADIUS = 1;
  const RANGE_RADIUS = 4;
  const NOISE_STEPS = 8;
  const X_OFF = 0.00125;
  const Y_OFF = 0.00125;
  const Z_OFF = 0.0005;

  const HUE_TEAL = 159;
  const HUE_BLUE = 240;

  let particleProps;
  let tick = 0;

  const initParticles = () => {
    particleProps = new Float32Array(PARTICLE_COUNT * PROPS_PER_PARTICLE);
    for (
      let i = 0;
      i < PARTICLE_COUNT * PROPS_PER_PARTICLE;
      i += PROPS_PER_PARTICLE
    ) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    const x = Math.random() * canvas.width;
    const y = canvas.height / 2 + (Math.random() - 0.5) * RANGE_Y;
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = BASE_TTL + Math.random() * RANGE_TTL;
    const speed = BASE_SPEED + Math.random() * RANGE_SPEED;
    const radius = BASE_RADIUS + Math.random() * RANGE_RADIUS;
    const hue = Math.random() < 0.5 ? HUE_TEAL : HUE_BLUE;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const fadeInOut = (t, m) => {
    const halfM = 0.5 * m;
    return Math.abs(((t + halfM) % m) - halfM) / halfM;
  };

  const lerp = (start, end, t) => start + t * (end - start);

  const drawParticles = (ctx, width, height) => {
    for (
      let i = 0;
      i < PARTICLE_COUNT * PROPS_PER_PARTICLE;
      i += PROPS_PER_PARTICLE
    ) {
      updateParticle(ctx, i, width, height);
    }
  };

  const updateParticle = (ctx, i, width, height) => {
    let [x, y, vx, vy, life, ttl, speed, radius, hue] = particleProps.slice(
      i,
      i + PROPS_PER_PARTICLE
    );

    const noise =
      noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * Math.PI * 2;
    vx = lerp(vx, Math.cos(noise), 0.5);
    vy = lerp(vy, Math.sin(noise), 0.5);

    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(ctx, x, y, x2, y2, life, ttl, radius, hue);

    life++;

    particleProps.set([x2, y2, vx, vy, life, ttl, speed, radius, hue], i);

    if (x2 > width || x2 < 0 || y2 > height || y2 < 0 || life > ttl) {
      initParticle(i);
    }
  };

  const drawParticle = (ctx, x, y, x2, y2, life, ttl, radius, hue) => {
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

  const renderFrame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    tick++;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    drawParticles(ctx, width, height);
    requestAnimationFrame(renderFrame);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
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
      <div className="relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-10 w-full flex flex-col items-center">
          <div className="overflow-hidden relative">
            <h1 className=" text-white text-[64px] relative font-semibold translate-y-[100%] animate-[1000ms_slideUp_700ms_ease-in-out_forwards]">
              AFRICA’S LEADING BPO
            </h1>
          </div>
          <p className="text-white text-[20px]   uppercase mt-1 text-center max-w-[600px] opacity-0 animate-[500ms_opacity_1500ms_ease-in-out_forwards]">
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
