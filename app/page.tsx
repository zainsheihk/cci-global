"use client";
import About from "@/components/about";
import ParticleCanvas from "@/components/banner-2";
import GloballyCapable from "@/components/globallyCapable";
import Location from "@/components/location";
import News from "@/components/news";
import OurTeam from "@/components/ourTeam";
import Solution from "@/components/solution";
import Why from "@/components/why";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

import { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <main ref={container} className={"relative"}>
        <ParticleCanvas />
        <About scrollYProgress={scrollYProgress} />
        <Location />
        <Why />
        <Solution scrollYProgress={scrollYProgress} />
        <OurTeam />
        <GloballyCapable />
        <News />
      </main>
      {/* <Banner /> */}
    </>
  );
}
