import Banner from "@/components/pages/diversityatcci/banner";
import Counters from "@/components/pages/diversityatcci/counters";
import ImpactSlider from "@/components/pages/diversityatcci/impactSlider";
import People from "@/components/pages/diversityatcci/people";
import React from "react";

export default function Page() {
  return (
    <div>
      <Banner />
      <ImpactSlider />
      <Counters />
      <People />
    </div>
  );
}
