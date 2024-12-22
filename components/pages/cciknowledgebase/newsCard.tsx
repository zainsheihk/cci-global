/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
export default function NewsCard({
  title,
  description,
  image,
}: {
  title: any;
  description: any;
  image: any;
}) {
  return (
    <div className="w-[48%] group">
      <div className="max-h-[250px] overflow-hidden">
        <Image
          src={image}
          alt=""
          className="w-full max-h-[250px] object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <h4 className="text-[var(--secondary-color)] font-semibold my-5 leading-6 text-[22px]">
        {title}
      </h4>
      <p
        className="text-[var(--secondary-color)] text-[14px]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
