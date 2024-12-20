/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCard({
  name,
  designation,
  description,
  image,
}: {
  image: any;
  name: any;
  designation: any;
  description: any;
}) {
  return (
    <div className="w-[32%] relative group rounded-2xl  overflow-hidden">
      <div className="overflow-hidden rounded-2xl bg-[#18182c]  flex justify-center items-center py-10">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[3px] border-[2px_solid_#ccc]">
          <Image
            src={image}
            alt="Team"
            className="w-full h-full  object-cover "
          />
        </div>
      </div>
      <div className="p-5 pt-5  rounded-2xl relative -top-3 z-20 card-bg card-mask">
        <div className="flex justify-between items-center">
          <div>
            <h6 className=" font-semibold text-[var(--secondary-color)] capitalize text-[20px] leading-6">
              {name}
            </h6>
            <p className="text-[var(--primary-color)] text-[14px]">
              {designation}
            </p>
          </div>
          <FaLinkedin className="text-[var(--primary-color)] text-[36px]" />
        </div>
        <p className="leading-[1.4] text-[13px]   mt-2 ">{description}</p>
      </div>
    </div>
  );
}
