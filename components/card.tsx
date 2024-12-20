/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

import { FaLinkedinIn } from "react-icons/fa";

function Card({
  title,
  description,
  image,
}: {
  title: any;
  description: any;
  image: any;
}) {
  return (
    <div
      className="card-shadow group  transition-all duration-1000 w-[32%] overflow-hidden relative p-3 border border-[#49484845] rounded-2xl
   bg-[#18182c]"
    >
      <div className="after:absolute after:top-0 after:left-0 card-overlay after:w-full after:h-full relative after:rounded-2xl">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt="card"
            className="w-full object-cover min-h-[240px] group-hover:scale-[1.1] transition-all duration-[1000ms]"
          />
        </div>
        <div className="flex justify-between items-center p-5 absolute bottom-[10px] left-0 w-full">
          <h6 className="text-white font-semibold text-[20px] z-10">{title}</h6>
          <div className="w-10 h-10 rounded-full   bg-[var(--primary-color)] z-10 flex items-center justify-center hover:bg-white transition-all duration-500 cursor-pointer">
            <FaLinkedinIn className="text-[24px] " />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[14px] text-white p-4 pb-10  leading-[1.6] opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
