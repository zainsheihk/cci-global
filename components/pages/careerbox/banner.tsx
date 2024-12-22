"use client";
import Image from "next/image";
import careerBox from "@/public/images/careerbox-logo.png";
import impact from "@/public/images/Impact-Sourcing-1.png";
import impactImage from "@/public/images/63206883a395758af406e50a_Rectangle-13.png";
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
      <Image src={careerBox} alt="" className="max-w-[300px] mx-auto" />
      <div className="my-[80px] flex justify-between items-center">
        <div className="w-[45%]">
          <Image
            src={impact}
            alt=""
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="0"
          />
          <h2
            className="my-8 text-[var(--secondary-color)] font-semibold text-[28px]"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="0"
          >
            UPLIFTING OUR YOUTH THROUGH DEMAND-LED TRAINING... IT’S WHAT WE DO.
          </h2>
          <p
            className="text-[var(--secondary-color)] mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="0"
          >
            Educating those willing and eager to learn delivers a long-term
            solution to our continents unemployment crisis. We are in the
            business of building careers for the youth, being fully informed
            that the first step towards gainful employment can lead to a
            lifetime of opportunities and growth.
          </p>
          <p
            className="text-[var(--secondary-color)]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="0"
          >
            A non-profit company, CareerBox identifies and trains candidates
            from underprivileged townships and places them in entry-level
            digitally enabled jobs.
          </p>
        </div>
        <div className="w-[35%] overflow-hidden">
          <Image
            src={impactImage}
            alt=""
            style={{
              transform: `scale(${scale})`,
              transition: "transform 2s ease-out", // Add smooth transition
            }}
          />
        </div>
      </div>
    </section>
  );
}
