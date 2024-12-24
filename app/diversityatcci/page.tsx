import Banner from "@/components/pages/diversityatcci/banner";
import Counters from "@/components/pages/diversityatcci/counters";
import ImpactSlider from "@/components/pages/diversityatcci/impactSlider";
import People from "@/components/pages/diversityatcci/people";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Diversity At CCI",
  description:
    "CCI prides itself on being an inclusive and diverse employer within Africa, providing opportunities to develop and grow for all backgrounds.",
};
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
