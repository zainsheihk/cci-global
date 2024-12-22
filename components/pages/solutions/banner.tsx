"use client";
import Heading from "@/components/heading";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import banner from "@/public/images/CCI-Solutions.jpg";

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
    <section className="container mt-40" ref={sectionRef}>
      <div className="flex justify-between items-start mb-10">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
          <Heading
            text="AN EXPERT OUTSOURCER WITH THAT IN-HOUSE FEEL"
            className="text-[var(--secondary-color)] leading-10 w-[60%]"
          />
        </div>
        <p
          className="leading-6 text-[var(--secondary-color)] w-[35%] text-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          We have over 15 years of experience across a multitude of service
          lines, industries, and specialist services. With new opportunities we
          adapt and grow every day.
        </p>
      </div>
      <div
        className="overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 3s ease-out", // Add smooth transition
          }}
        />
      </div>
    </section>
  );
}
