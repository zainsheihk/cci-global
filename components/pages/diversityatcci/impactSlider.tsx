"use client";
import React, { useState } from "react";
import ImpactSlide from "./impactSlide";

export default function ImpactSlider() {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];
  const [isActive, setIsActive] = useState(1);
  const handleActiveSlide = (item: number) => {
    console.log(item);
    setIsActive(item);
  };
  return (
    <div className="container my-[80px] flex gap-5 h-[380px] overflow-hidden">
      {slides.map((item: number) => (
        <ImpactSlide
          handleOnClick={handleActiveSlide}
          isActive={item === isActive}
          key={item}
          item={item}
        />
      ))}
    </div>
  );
}
