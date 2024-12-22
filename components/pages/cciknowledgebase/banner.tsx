"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import informationImage from "@/public/images/Informed-Connected-scaled.jpg";
import Heading from "@/components/heading";

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
    <section
      className="container mt-[150px] flex justify-between items-center"
      ref={sectionRef}
    >
      <div className="w-[45%] overflow-hidden">
        <Image
          src={informationImage}
          alt=""
          style={{
            transform: `scale(${scale})`,
            transition: "transform 2s ease-out", // Add smooth transition
          }}
        />
      </div>
      <div className="w-[50%]">
        <Heading
          className="text-[var(--secondary-color)] text-[34px]"
          text="INFORMED AND CONNECTED
"
        />
        <p className="text-[var(--secondary-color)] leading-7">
          CCI are committed to connecting with our communities and we continue
          to strive to be the best in our industry within Africa and aspire to
          be the number 1 choice for BPO opportunities globally. Please read,
          connect, and engage with the latest updates and thoughts from our
          diverse team.
        </p>
      </div>
    </section>
  );
}
