import React from "react";
import { SiCircle } from "react-icons/si";

export default function SolutionCard() {
  return (
    <div className="px-6 pt-8 pb-12 border border-[var(--secondary-color)] w-[32%]">
      <div className="flex gap-5 mb-3">
        <SiCircle className="text-[var(--secondary-color)] text-[70px]" />
        <h6 className="text-[var(--secondary-color)] font-semibold text-[26px] leading-7">
          Customer Acquisition & Engagement
        </h6>
      </div>
      <div>
        <p className="text-[var(--secondary-color)] text-[14px] leading-7">
          CCI support your businesses to grow and expand across your services.
          We help in developing sales strategies that directly impact your
          bottom line with agents working to grow your customer base and
          interact in a positive manner to maximize your brand value.
        </p>
      </div>
    </div>
  );
}
