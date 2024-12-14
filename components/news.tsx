"use client";
import React from "react";
import Heading from "./heading";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

function News() {
  return (
    <section className="container flex  items-center justify-between pb-[80px]">
      <div className="w-[20%]">
        <Heading text="News" className="text-[var(--secondary-color)]" />
      </div>
      <div className="w-[60%] mr-20">
        <Splide hasTrack={false} aria-label="My Favorite Images">
          <SplideTrack>
            <SplideSlide>
              <h3 className="text-[var(--primary-color)] text-[20px] font-semibold mb-5">
                CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
                People
              </h3>
              <p className="text-gray-700">
                In 2022, CCI Kenya hosted our annual event for family, friends &
                co-workers to celebrate our achievements and our amazing
                employees with live performances and from major African artists
              </p>
            </SplideSlide>
            <SplideSlide>
              <h3 className="text-[var(--primary-color)] text-[20px] font-semibold mb-5">
                CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
                People
              </h3>
              <p className="text-gray-700">
                In 2022, CCI Kenya hosted our annual event for family, friends &
                co-workers to celebrate our achievements and our amazing
                employees with live performances and from major African artists
              </p>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </section>
  );
}

export default News;
