import React from "react";
import Heading from "./heading";
import SolutionCard from "./solutionCard";

function Solution() {
  return (
    <section className="container py-[80px]">
      <Heading
        text="OUR SOLUTIONS"
        className="text-[var(--secondary-color)] after:left-[50%] text-center after:translate-x-[-50%]"
      />
      <p className="text-[var(--secondary-color)] text-center max-w-[600px] mx-auto">
        CCI work across a multitude of service lines and provide capability
        across industries to global clients searching for quality outputs while
        creating social impact.
      </p>
      <div className="flex gap-5 mt-10">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div>
    </section>
  );
}

export default Solution;
