"use client";
import Image from "next/image";
import React from "react";
import bgTwo from "../public/images/purple-bg-style-two-1600.png";
import bg from "../public/images/purple-bg-style-one-1600.png";
import Heading from "./heading";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
function About() {
  return (
    <section
      className="purple-gradient py-[100px]  relative"
      id="target-section"
    >
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
          <h3 className="text-[var(--primary-color)] text-[60px] font-bold flex justify-end ">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={20000000}
            />{" "}
          </h3>
          <p className="text-[var(--secondary-color)] text-[24px] font-semibold uppercase mt-[5px] text-center leading-6">
            Interactions
            <br /> Per Month
          </p>
        </div>
        <div className="w-1/2">
          <div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="0">
              <Heading text="About Us" />
            </div>
            <p
              className="text-white mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              The CCI group of companies is one of the top providers of customer
              management services in Africa, supporting domestic and
              international clients. Headquartered in the UAE, the group
              comprises of companies across the African continent servicing
              brands from the United Kingdom, United States, Australia, New
              Zealand, South Africa, Kenya and others.
            </p>
          </div>
          <div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="0">
              <Heading text="Impact Sourcing" />
            </div>
            <p
              className="text-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="0"
            >
              Our vision is to be the largest and most respected outsourcer in
              Africa by offering world class solutions that derive value for our
              clients and their customers. Our mission is to continue being
              pioneers in new markets across Africa by investing in people and
              uplifting communities we operate in. We empower through training,
              with a focus on developing young professionals for careers in the
              BPO industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
