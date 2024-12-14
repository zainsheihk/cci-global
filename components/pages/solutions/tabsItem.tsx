import Image from "next/image";
import React from "react";
import image from "@/public/images/Business-Growth.jpg";

export default function TabsItem() {
  return (
    <div className="relative w-full p-7 flex items-center justify-center">
      <Image
        src={image}
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full gallery-overlay"></div>
      <h5 className=" relative z-10 text-white font-semibold text-[18px]">
        Business Growth
      </h5>
    </div>
  );
}
