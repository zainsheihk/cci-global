"use client";
import Image from "next/image";
import pattern from "@/public/images/6317369b73eae480ab4e0885_nagygrid-p-1600-1.png";
import bg from "@/public/images/purple-bg-style-two-1600.png";
import map from "@/public/images/world-map.png";
import words from "@/public/images/63186e29a15eef5171164f26_circle-text.svg";
import React, { useEffect, useRef, useState } from "react";

export default function Banner() {
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
        const scaleChange = 1.1 + progress * 0.5; // Moderate zoom in on scroll down
        let newScale = isScrollingDown ? scaleChange : 1.1 - progress * 0.5; // Zoom out moderately on scroll up

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
      className="industries-gradient w-full h-screen overflow-hidden"
      ref={sectionRef}
    >
      <Image
        src={pattern}
        alt="pattern"
        className="w-full h-full object-cover "
        style={{
          transform: `scale(${scale})`,
          transition: "transform 1s ease-out", // Add smooth transition
        }}
      />
      <Image
        src={bg}
        alt="pattern"
        className="w-full h-full object-cover"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 1s ease-out", // Add smooth transition
        }}
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Image src={map} alt="" className="invert max-w-[200px]" />
        <Image
          src={words}
          alt=""
          className="max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-WordsSpin  "
        />
      </div>
    </section>
  );
}
