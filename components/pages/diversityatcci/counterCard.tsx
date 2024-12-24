import Image, { StaticImageData } from "next/image";
import React from "react";
export default function CounterCard({
  title,
  count,
  image,
}: {
  title: string;
  count: string;
  image: StaticImageData;
}) {
  return (
    <div className="p-5 rounded-3xl border-t border-t-[var(--primary-color)] bg-white w-[24%] card-shadow transition-all duration-1000">
      <Image src={image} alt="" />
      <h6 className="text-[var(--primary-color)] text-[44px] my-3 font-semibold">
        {count}
      </h6>
      <h3 className="text-[var(--secondary-color)] text-[18px] font-semibold leading-6">
        {title}
      </h3>
    </div>
  );
}
