import Image from "next/image";
import React from "react";
import card from "@/public/images/driving-companywide-efficiencies-with-ai.webp";
export default function ExpertiseCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className=" rounded-3xl overflow-hidden shadow-2xl w-[32%]">
      <div className="max-h-[250px] overflow-hidden">
        <Image src={card} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="py-5 px-8 pb-8 ">
        <h6 className="font-semibold mb-1 text-[22px] text-[var(--secondary-color)]">
          {title}
        </h6>
        <p className="text-[14px] leading-6">{description}</p>
      </div>
    </div>
  );
}
