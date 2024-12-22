"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import bgTwo from "@/public/images/purple-bg-style-two-1600.png";
import bg from "@/public/images/purple-bg-style-one-1600.png";
import pattern from "@/public/images/6317369b73eae480ab4e0885_nagygrid-p-1600-1.png";

import Heading from "@/components/heading";
import CounterSlider from "./counterSlider";

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.1); // Start slightly scaled up (smaller scale)
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Determine the scroll direction
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      // Calculate the progress for scaling logic
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );

        // Adjusted scale range for a subtler zoom effect
        const scaleChange = 1.1 + progress * 0.1; // Moderate zoom in on scroll down
        let newScale = isScrollingDown ? scaleChange : 1.1 - progress * 0.1; // Zoom out moderately on scroll up

        // Prevent scale from going below 1
        newScale = Math.max(newScale, 1);

        setScale(newScale);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className="purple-gradient py-[150px]  relative overflow-hidden"
      ref={sectionRef}
    >
      <Image
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full"
      />
      <Image
        src={bgTwo}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full"
      />
      <Image
        src={pattern}
        alt="pattern"
        className="absolute top-0 left-0 w-full h-full z-30"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 1s ease-out", // Add smooth transition
        }}
      />
      <div className="container flex items-center gap-20">
        <div className="w-1/2">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
            <Heading text="ABOUT CAREERBOX" />
          </div>

          <p
            className="text-white mb-10"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="0"
          >
            CCI has been built around socially conscious outsourcing within the
            BPO industry. We employ people within socioeconomically growing
            markets where we empower and prepare disadvantaged individuals as
            well as target young national talent for development. Within each
            market we expand into we aim to create a business model that adds
            value to the people, to the economy and capitalize on the rich
            culture for the benefit of international clients.
          </p>
        </div>
        <div className="w-1/2">
          <CounterSlider />
        </div>
      </div>
    </section>
  );
}

export default About;
