/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="px-6 pt-8 pb-12 border border-[#0100c2] w-[31%] hover:shadow-2xl transition-all duration-500">
      <div className="flex gap-5 mb-5">
        <div className="w-[50px]">{icon}</div>
        <h6 className="text-[#0100c2] font-semibold text-[24px] leading-7">
          {title}{" "}
        </h6>
      </div>
      <div>
        <p className="text-[var(--secondary-color)] text-[14px] leading-7">
          {description}{" "}
        </p>
      </div>
    </div>
  );
}
