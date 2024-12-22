import React from "react";
import playIcon from "@/public/images/play-icon.png";
import Image, { StaticImageData } from "next/image";

export default function VideoCard({
  fullWidth,
  title,
  image,
}: {
  fullWidth: boolean;
  title: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={`relative group after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50   ${
        fullWidth ? "w-full" : "w-[49%]"
      }`}
    >
      <div className=" overflow-hidden">
        <Image
          src={image}
          alt="video"
          className={`group-hover:scale-110 transition-all duration-1000 w-full ${
            fullWidth ? "max-h-[350px]" : "max-h-[250px]"
          }  object-cover`}
        />
      </div>
      <div className="absolute top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center items-center">
        <Image
          src={playIcon}
          alt="playIcon"
          className="z-20 w-12 cursor-pointer"
        />
        <h3
          className={`absolute  z-20  text-white font-semibold w-[90%]  ${
            fullWidth
              ? "text-[24px] bottom-8 left-8"
              : "text-[18px] bottom-5 left-4"
          }`}
        >
          {title}{" "}
        </h3>
      </div>
    </div>
  );
}
