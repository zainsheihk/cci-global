"use client";
import Image from "next/image";
import building from "@/public/images/building2.png";
import Heading from "@/components/heading";
import icon from "@/public/images/6318ad993fa58dade225f4b2_backward-item.png";
import icon2 from "@/public/images/6318ad9954c7ec3e2694d919_location.png";
import icon3 from "@/public/images/6318ad997e6ca0359a9e18dc_shield-tick.png";
import icon4 from "@/public/images/6318ad9924a46fbaaa09d126_maximize-3.png";
import icon5 from "@/public/images/6318ad991ff304298fec9f8a_people.png";
import icon6 from "@/public/images/6318ad9ae29f072549b20977_star.png";
import React, { useEffect, useRef, useState } from "react";

export default function People() {
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
        const scaleChange = 1 + progress * 0.1; // Moderate zoom in on scroll down
        let newScale = isScrollingDown ? scaleChange : 1 - progress * 0.1; // Zoom out moderately on scroll up

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
      className="container py-[80px] flex justify-between items-center"
      ref={sectionRef}
    >
      <div className="w-[48%] overflow-hidden">
        <Image
          src={building}
          alt=""
          style={{
            transform: `scale(${scale})`,
            transition: "transform 2s ease-out", // Add smooth transition
          }}
        />
      </div>
      <div className="w-[49%]">
        <Heading
          text="PEOPLE FIRST BUSINESS"
          className="text-[var(--secondary-color)]"
        />
        <p className="text-[var(--secondary-color)] text-[15px]">
          We are a people business that invests in both where we work as well as
          how we work. Our office environments are welcoming ensuring links to
          public transportation and taxi service infrastructure alongside an
          onsite wellness center, fitness center & medical facilities to take
          care of our people.
        </p>
        <div className="flex flex-wrap justify-between gap-5 my-10">
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon2} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Favorably Located
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon3} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Secure Systems
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon4} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Scalable Operations
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon5} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Staff Welfare
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon6} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Fostering Motivation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
