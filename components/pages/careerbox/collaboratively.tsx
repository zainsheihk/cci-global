"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import map from "@/public/images/63206e2e6f82a0dc75f21dc9_Frame-119-p-2000.png";
import Button from "@/components/button";
// import Button from "./button";
function Collaboratively() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.1); // Start slightly scaled up

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the progress for scaling logic
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );
        const newScale = 1.1 - progress * 0.1; // Invert: Scale down on scroll down
        setScale(newScale);
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
    <section
      ref={sectionRef}
      className="relative after:w-full after:h-full section-overlay  after:absolute after:top-0 after:left-0 overflow-hidden"
    >
      <Image
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s ease-out", // Add smooth transition
        }}
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2
          className="text-white text-[40px] font-semibold text-center leading-10 max-w-[700px]"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          CONNECT WITH OUR BUSINESS TO BEGIN MAKING AN IMPACT TODAY
        </h2>
        <p
          className="text-white max-w-[500px] text-center mt-4 mb-8"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="0"
        >
          Let us collaboratively work together to make a difference in the lives
          of ordinary, ambitious individuals across Africa. We are eager for you
          to learn more about how we can integrate with your campaigns and
          operations to better the world for a more prosperous tomorrow.
        </p>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
          <Button label="Learn More" href={""} />
        </div>
      </div>
    </section>
  );
}

export default Collaboratively;
