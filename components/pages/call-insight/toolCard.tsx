import React from "react";
import Image, { StaticImageData } from "next/image";

export default function ToolCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="w-[22%]">
      <div className="rounded-full w-[60px] h-[60px] bg-[#ccc]  flex items-center justify-center">
        <Image src={image} alt="" className="w-[30px] h-[30px] object-cover" />
      </div>
      <h3 className="mt-5  mb-1 text-[var(--secondary-color)] text-[17px] font-semibold">
        {title}
      </h3>
      <p className="text-[var(--secondary-color)] text-[15px]">{description}</p>
    </div>
  );
}
