"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function CounterSlider() {
  return (
    <Splide
      hasTrack={false}
      aria-label="My Favorite Images"
      options={{
        interval: 2500,
        direction: "ttb",
        height: "10rem",
        autoplay: true,
        type: "loop",
        speed: 2000,
        pagination: false,
        arrows: false,
      }}
    >
      <SplideTrack>
        <SplideSlide>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center ">
            2 WEEKS
          </h3>
          <p className="text-white text-[24px] font-semibold uppercase mt-[-8px] text-center">
            RIGOROUS RECRUITMENT PROCESS
          </p>
        </SplideSlide>
        <SplideSlide>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center  ">
            200,000
          </h3>
          <p className="text-white text-[24px] font-semibold uppercase mt-[-8px] text-center">
            SECTOR SPECIFIC MODULES
          </p>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  );
}
