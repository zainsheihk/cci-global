import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ImpactSlide({
  isActive,
  handleOnClick,
  item,
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
  item: number;
  isActive?: boolean;
  handleOnClick: (index: number) => void;
}) {
  return (
    <div
      className={` overflow-hidden group transition-all duration-1000 relative cursor-pointer ${
        isActive ? "flex-1" : "w-[60px]"
      }`}
      onClick={() => handleOnClick(item)}
    >
      <Image
        src={image}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms] "
      />
      <div className="gallery-overlay absolute top-0 left-0 w-full h-full flex pb-10 items-end justify-center">
        <h5
          className={`text-white font-semibold text-[24px] max-w-[500px] text-center transition-opacity delay-1000 ${
            isActive ? "" : "translate-y-[300%] opacity-0"
          }`}
        >
          {title}
        </h5>
      </div>
    </div>
  );
}
