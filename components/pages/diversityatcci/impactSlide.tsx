import Image from "next/image";
import React from "react";

import diversityImage from "@/public/images/diversity_image.webp";
export default function ImpactSlide({
  isActive,
  handleOnClick,
  item,
}: {
  item: number;
  isActive?: boolean;
  handleOnClick: (index: number) => void;
}) {
  return (
    <div
      className={` transition-all duration-1000 relative ${
        isActive ? "flex-1" : "w-[60px]"
      }`}
      onClick={() => handleOnClick(item)}
    >
      <Image
        src={diversityImage}
        alt=""
        className="w-full h-full object-cover "
      />
      <div className="gallery-overlay absolute top-0 left-0 w-full h-full flex pb-10 items-end justify-center">
        <h5
          className={`text-white font-semibold text-[24px] text-center transition-all duration-[1000ms] whitespace-nowrap ${
            isActive ? "" : " opacity-0"
          }`}
        >
          &quot;Our people, our smiles, our impact&quot;
        </h5>
      </div>
    </div>
  );
}
