import Image from "next/image";
import React from "react";
import pattern from "@/public/images/6318668f5d7a13f2e29e4821_Frame 146-p-1600.png";
import agent from "@/public/images/agent.png";
export default function Agent() {
  return (
    <section className="py-[80px] agent-gradient relative">
      <Image
        src={pattern}
        alt=""
        className="absolute top-0 left-0 w-full h-full "
      />
      <div className="container flex gap-20 relative z-10 ">
        <div className="w-[50%] flex flex-col justify-between   ">
          <div className="mt-20">
            <h2 className="text-white font-semibold text-[44px] leading-[1.2] mb-4">
              THERE’S AN AGENT FOR THAT
            </h2>
            <p className="text-white font-medium text-[22px]">
              Our award-winning agents support New Economy and Blue-Chip brands,
              seamlessly convert service to sales, and dynamically accelerate
              lifetime customer value.
            </p>
          </div>
          <div>
            <p className="text-white font-medium text-[22px] mb-5">
              We train & motivate highly engaged brand support champions.
            </p>
            <p className="text-white text-[15px]">
              CCI invest in its agent workforce by investing in their
              development as well as investing in new talent to better acclimate
              and understand the BPO industry for success in any field.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <Image src={agent} alt="" className="agent-image-box" />
        </div>
      </div>
    </section>
  );
}
