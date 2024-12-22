"use client";
import pattern from "@/public/images/6318668f5d7a13f2e29e4821_Frame 146-p-1600.png";
import agent from "@/public/images/agent.png";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Agent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(-20); // Start 20px higher than its original position

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is visible in the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate the progress of the scroll within the section
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        // Apply a slower movement for parallax effect
        const translateChange = -20 + progress * 100; // Start 20px higher and move with scroll
        setTranslateY(translateChange);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-[80px] agent-gradient relative" ref={sectionRef}>
      <Image
        src={pattern}
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="container flex gap-20 relative z-10">
        <div className="w-[40%] ">
          <Image
            src={agent}
            alt=""
            style={{
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.2s ease-out", // Smooth transition
            }}
            className="agent-image-box"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <div
            className="mt-20"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-offset="0"
          >
            <h2 className="text-white font-semibold text-[44px] leading-[1.2] mb-4">
              THERE’S AN AGENT FOR THAT
            </h2>
            <p className="text-white font-medium text-[22px]">
              Our award-winning agents support New Economy and Blue-Chip brands,
              seamlessly convert service to sales, and dynamically accelerate
              lifetime customer value.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration={1000} data-aos-offset="0">
            <p className="text-white font-medium text-[22px] mb-5">
              We train & motivate highly engaged brand support champions.
            </p>
            <p className="text-white text-[15px]">
              CCI invest in its agent workforce by investing in their
              development as well as investing in new talent to better acclimate
              and understand the BPO industry for success in any field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
