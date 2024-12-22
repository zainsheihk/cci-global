import Image, { StaticImageData } from "next/image";
import React from "react";

export default function GalleryCard({
  title,
  description,
  image,
  isOdd,
}: {
  isOdd: boolean;
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
      className={`relative group transition-opacity w-[24%]  ${
        isOdd ? "relative top-20" : ""
      }`}
    >
      <Image src={image} alt="" />
      <div className="absolute top-0 left-0 w-full h-full gallery-overlay flex p-5 items-end">
        <h3 className="text-white font-semibold text-[20px]">{title} </h3>
      </div>
      <div className="gallery-overlay-hover p-5 w-full h-full absolute top-0 left-0 opacity-0  duration-500 group-hover:opacity-100">
        <h5 className="text-white font-semibold text-[16px] mb-3">{title} </h5>
        <p className="text-white text-[12px] leading-6">{description}</p>
      </div>
    </div>
  );
}
