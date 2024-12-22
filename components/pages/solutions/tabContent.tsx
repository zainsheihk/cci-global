/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SolutionCard from "./solutionCard";

export default function TabContent({
  description,
  solutions,
}: {
  description: any;
  solutions: any;
}) {
  return (
    <div className="mt-20">
      <p className="text-[var(--secondary-color)] text-[15px] leading-7">
        {description}
      </p>
      <div className="mt-20 flex flex-wrap gap-6 ">
        {solutions.map((ele: any, index: number) => (
          <SolutionCard {...ele} key={index} />
        ))}
      </div>
    </div>
  );
}
