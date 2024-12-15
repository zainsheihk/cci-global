import React from "react";
import video from "@/public/images/maxresdefault.jpg";
import playIcon from "@/public/images/play-icon.png";
import Image from "next/image";

export default function VideoCard() {
  return (
    <div className="relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 w-[49%]">
      <Image src={video} alt="video" />
      <div className="absolute top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center items-center">
        <Image src={playIcon} alt="playIcon" className="z-20 w-12" />
        <h3 className="absolute bottom-8 left-8 z-20  text-white font-semibold text-[24px]">
          CCi Global Sites
        </h3>
      </div>
    </div>
  );
}
