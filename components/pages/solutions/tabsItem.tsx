import Image, { StaticImageData } from "next/image";
import React from "react";

export default function TabsItem({
  image,
  title,
  isActive,
  onHandleTab,
}: {
  onHandleTab: (title: string) => void;
  isActive: boolean;
  image: StaticImageData;
  title: string;
}) {
  return (
    <div
      onClick={() => onHandleTab(title)}
      className={`relative w-full p-7 flex items-center justify-center cursor-pointer industries-gradient after:absolute   after:top-0 after:left-0  after:z-30 after:w-full after:h-full ${
        isActive
          ? " industries-gradient-after shadow-2xl after:border-b-8 after:border-[var(--primary-color)]"
          : ""
      }`}
    >
      <Image
        src={image}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full gallery-overlay "></div>
      <h5 className=" relative  text-white font-semibold text-[18px] z-40">
        {title}
      </h5>
    </div>
  );
}
