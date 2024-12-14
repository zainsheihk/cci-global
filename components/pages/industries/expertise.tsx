import React from "react";
import ExpertiseCard from "./expertiseCard";

export default function Expertise() {
  return (
    <section className="container py-[80px] flex gap-5">
      <ExpertiseCard />
      <ExpertiseCard />
      <ExpertiseCard />
    </section>
  );
}
