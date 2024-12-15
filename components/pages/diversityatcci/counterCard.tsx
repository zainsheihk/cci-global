import Image from "next/image";
import React from "react";
import icon from "@/public/images/agentscareerboxrecruits-66542e26f1083.png";
export default function CounterCard() {
  return (
    <div className="p-5 rounded-3xl border-t border-t-[var(--primary-color)] bg-white w-[24%] card-shadow">
      <Image src={icon} alt="" />
      <h6 className="text-[var(--primary-color)] text-[44px] my-3 font-semibold">
        {" "}
        93.0%
      </h6>
      <h3 className="text-[var(--secondary-color)] text-[18px] font-semibold leading-6">
        Of Agents CareerBox Recruits
      </h3>
    </div>
  );
}
