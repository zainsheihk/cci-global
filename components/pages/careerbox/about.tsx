import Image from "next/image";
import React from "react";
import bgTwo from "@/public/images/purple-bg-style-two-1600.png";
import bg from "@/public/images/purple-bg-style-one-1600.png";
import Heading from "@/components/heading";
import CounterSlider from "./counterSlider";

function About() {
  return (
    <section className="purple-gradient py-[150px]  relative">
      <Image
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full"
      />
      <Image
        src={bgTwo}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="container flex items-center gap-20">
        <div className="w-1/2">
          <Heading text="ABOUT CAREERBOX" />
          <p className="text-white mb-10">
            CCI has been built around socially conscious outsourcing within the
            BPO industry. We employ people within socioeconomically growing
            markets where we empower and prepare disadvantaged individuals as
            well as target young national talent for development. Within each
            market we expand into we aim to create a business model that adds
            value to the people, to the economy and capitalize on the rich
            culture for the benefit of international clients.
          </p>
        </div>
        <div className="w-1/2">
          <CounterSlider />
        </div>
      </div>
    </section>
  );
}

export default About;
