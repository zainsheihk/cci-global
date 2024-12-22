"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import map from "../public/images/Why-Africa-T2_11zon1.jpg";
import DialogDemo from "./modal";
import VideoJS from "./videoPlayer";

function Why() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.1); // Start slightly scaled up
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "./images/Call-Insight-Banner-1-1.mp4",
        type: "video/mp4",
      },
    ],
  };
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
      className="relative after:w-full after:h-full section-overlay after:absolute after:top-0 after:left-0 overflow-hidden"
    >
      <Image
        src={map}
        alt="map"
        className="w-full h-full object-cover max-h-screen object-center"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s ease-out", // Add smooth transition
        }}
      />
      <div className="flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2
          className="text-white text-[48px] font-semibold"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          WHY AFRICA?
        </h2>
        <p
          className="text-white max-w-[500px] text-center mt-4 mb-8"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="0"
        >
          Africa is the fastest growing continent globally, a rapidly urbanizing
          population and an abundance of highly educated youth searching for
          opportunity to use hard earned qualifications. Natural English
          language skills provide unparalleled levels of comprehension. High
          levels of retention and opportunities to progress result in global
          leading capability.
        </p>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
          <DialogDemo triggerText="Learn More" buttonClass="block">
            <VideoJS options={videoJsOptions} />
          </DialogDemo>
        </div>
      </div>
    </section>
  );
}

export default Why;
