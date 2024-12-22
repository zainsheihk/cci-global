import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCard({
  name,
  designation,
  description,
  image,
}: {
  name: string;
  designation: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div
      className="w-1/2 relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
    >
      <Image src={image} alt="Team" className="w-full" />
      <div className=" absolute left-0 bottom-0 w-[50%] bg-[var(--secondary-color)] p-5">
        <h6 className="text-white font-medium capitalize text-[20px]">
          {name}
        </h6>
        <p className="text-[var(--primary-color)]">{designation}</p>
      </div>
      <div className="bg-[var(--secondary-color)] duration-500 opacity-0 group-hover:opacity-100 transition-opacity justify-between items-end p-5 absolute top-0 left-0 h-full flex flex-col">
        <p className="text-white leading-[1.4] text-[14px]">{description}</p>
        <FaLinkedin className="text-white text-[36px] cursor-pointer" />
      </div>
    </div>
  );
}
