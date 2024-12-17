import Image from "next/image";
import React from "react";
import card from "../public/images/CCI-Kenya-Location.jpg";
import { FaLinkedinIn } from "react-icons/fa";

function Card() {
  return (
    <div
      className="card-shadow group  transition-all duration-1000 w-[32%] overflow-hidden relative 
   "
    >
      <div className="after:absolute after:top-0 after:left-0 card-overlay after:w-full after:h-full relative">
        <div className="overflow-hidden">
          <Image
            src={card}
            alt="card"
            className="w-full object-cover min-h-[240px] group-hover:scale-[1.1] transition-all duration-[1000ms]"
          />
        </div>
        <div className="flex justify-between items-center p-5 absolute bottom-[10px] left-0 w-full">
          <h6 className="text-white font-semibold text-[20px] z-10">Kenya</h6>
          <div className="w-10 h-10 rounded-full   bg-[var(--primary-color)] z-10 flex items-center justify-center hover:bg-white transition-all duration-500 cursor-pointer">
            <FaLinkedinIn className="text-[24px] " />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[12px] p-4 pb-10  leading-[1.6]">
          One of our fastest growing markets and at the spearhead of our
          continuous evolution strategy. CCI are aligned to the Kenya Vision
          2030 that aims to transform Kenya into a rapidly industrializing,
          middle-income country that will elevate the quality of life for its
          citizens within a secure and clean ecosystem.
        </p>
      </div>
      <div className=" "></div>
    </div>
  );
}

export default Card;
