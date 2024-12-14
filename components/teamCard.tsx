import Image from "next/image";
import React from "react";
import team from "../public/images/image-22.png";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCard() {
  return (
    <div className="w-1/2 relative group">
      <Image src={team} alt="Team" className="w-full" />
      <div className=" absolute left-0 bottom-0 w-[40%] bg-[var(--secondary-color)] p-5">
        <h6 className="text-white font-medium capitalize text-[20px]">
          martin Roe
        </h6>
        <p className="text-[var(--primary-color)]">Chief Executive Officer</p>
      </div>
      <div className="bg-[var(--secondary-color)] opacity-0 group-hover:opacity-100 transition-opacity justify-between items-end p-5 absolute top-0 left-0 h-full flex flex-col">
        <p className="text-white leading-[1.4] text-[14px]">
          With extensive experience in the BPO sector in both the client and
          vendor side of operations, Martin has overseen CCI’s strategy
          development to become Africa’s largest outsourcing provider, steering
          the company toward the future of the BPO industry. Martin has a
          passion for Impact Sourcing, incorporating it as one of CCI’s core
          values.
        </p>
        <FaLinkedin className="text-white text-[36px]" />
      </div>
    </div>
  );
}
