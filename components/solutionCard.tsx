import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./button";
function SolutionCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="card-shadow group  transition-all duration-1000">
      <div className="after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:opacity-50 relative h-[180px] ">
        <Image src={image} alt="card" className="w-full object-cover h-full " />
        <div className="flex justify-between items-center p-5 absolute bottom-[10px] left-0 w-full">
          <p className="text-white  z-10">{title}</p>
        </div>
      </div>
      <div className=" p-5 pb-4">
        <p className="text-[12px] mb-4   leading-[1.6]">{description}</p>
        <Button
          href={""}
          label="More on our expertise"
          className="rounded-none w-full block text-center"
        />
      </div>
    </div>
  );
}

export default SolutionCard;
