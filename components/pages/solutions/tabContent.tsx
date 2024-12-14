import React from "react";
import SolutionCard from "./solutionCard";

export default function TabContent() {
  return (
    <div className="mt-20">
      <p className="text-[var(--secondary-color)] text-[15px] leading-7">
        CCI assist clients in growing their business by applying a customer
        focused approach to engagement. With a focus on the human experience, we
        create the interactions that directly impact how your customers feel and
        perceive your brand. CCI’s first language communication skills,
        empathetic interactions and informed agents directly impact your bottom
        line and create new revenue opportunities across your products and
        services.
      </p>
      <div className="mt-20 flex flex-wrap  justify-between gap-y-6 ">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div>
    </div>
  );
}
