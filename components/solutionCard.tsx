import Image from "next/image";
import React from "react";
import solutionImage from "../public/images/Business-Growth.jpg";
import Button from "./button";
function SolutionCard() {
  return (
    <div className="card-shadow">
      <div className="after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:opacity-50 relative ">
        <Image
          src={solutionImage}
          alt="card"
          className="w-full object-cover "
        />
        <div className="flex justify-between items-center p-5 absolute bottom-[10px] left-0 w-full">
          <p className="text-white  z-10">Omnichannel Management</p>
        </div>
      </div>
      <div className=" p-5 pb-4">
        <p className="text-[12px] mb-4   leading-[1.6]">
          Across voice & digital channels, CCI provides support to organizations
          across the world. We implement processes and utilize our international
          expertise to provide adequate agent profiles, systems and interactions
          to elevate your brands services. As our industry continues to evolve,
          we invest heavily in our omnichannel strategy.
        </p>
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
