/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import ImpactSlide from "./impactSlide";
import diversityImage from "@/public/images/diversity_image.webp";
import diversityImage2 from "@/public/images/we-look-to-secure.png";
import diversityImage3 from "@/public/images/2.png";
import diversityImage4 from "@/public/images/3.png";
import diversityImage5 from "@/public/images/6.png";
import diversityImage6 from "@/public/images/7.png";
import diversityImage7 from "@/public/images/resources.png";
import diversityImage8 from "@/public/images/9.png";

export default function ImpactSlider() {
  const slides = [
    {
      title: '"Our people, our smiles, our impact"',
      image: diversityImage,
    },
    {
      title:
        '"We look to the future and as we succeed, we take a step forward"',
      image: diversityImage2,
    },
    {
      title: '"We find new ways to connect and smile with one another"',
      image: diversityImage3,
    },
    {
      title: '""We create value in every interaction we have""',
      image: diversityImage4,
    },
    {
      title: '"Bringing positivity into everything we do"',
      image: diversityImage5,
    },
    {
      title: '"Dynamic, vibrant, and effortlessly stylish"',
      image: diversityImage6,
    },
    {
      title: '"CCI help you develop the skills you need to be successful"',
      image: diversityImage7,
    },
    {
      title:
        '"Our energy and commitment is why you need to be a part of our team"',
      image: diversityImage8,
    },
  ];
  const [isActive, setIsActive] = useState(0);
  const handleActiveSlide = (item: number) => {
    setIsActive(item);
  };
  return (
    <div
      className="container my-[80px] flex gap-5 h-[380px] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="0"
    >
      {slides.map((item: any, index: number) => (
        <ImpactSlide
          {...item}
          handleOnClick={handleActiveSlide}
          isActive={index === isActive}
          key={index}
          item={index}
        />
      ))}
    </div>
  );
}
