import About from "@/components/pages/careerbox/about";
import Banner from "@/components/pages/careerbox/banner";
import Collaboratively from "@/components/pages/careerbox/collaboratively";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CareerBox - CCI",
  description:
    "Our impact sourcing arm and core operating partner, CareerBox provides significant opportunities across recruitment channels in our markets.",
};

export default function Page() {
  return (
    <>
      <Banner />
      <About />
      <Collaboratively />
    </>
  );
}
