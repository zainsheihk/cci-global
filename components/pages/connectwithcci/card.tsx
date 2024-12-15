import Image from "next/image";
import React from "react";
import card from "@/public/images/CCI-Kenya-Location.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "@/components/button";

function Card() {
  return (
    <div className="card-shadow w-[32%]">
      <div className="after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:opacity-50 relative ">
        <Image
          src={card}
          alt="card"
          className="w-full object-cover min-h-[240px]"
        />
        <div className="flex flex-col justify-between h-full p-5 pb-10 absolute top-[10px] left-0 w-full">
          <div className="flex justify-between items-center">
            <h6 className="text-white font-semibold text-[20px] z-10">Kenya</h6>
            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] z-10 flex items-center justify-center">
              <FaLinkedinIn className="text-[24px]" />
            </div>
          </div>

          <Button
            label="Let's Connect"
            href={"s"}
            className="z-10 text-center rounded-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
