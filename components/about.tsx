import Image from "next/image";
import React from "react";
import bgTwo from "../public/images/purple-bg-style-two-1600.png";
import bg from "../public/images/purple-bg-style-one-1600.png";
import Heading from "./heading";
function About() {
  return (
    <section className="purple-gradient py-[100px]  relative">
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
          <h3 className="text-[var(--primary-color)] text-[60px] font-bold text-right ">
            20,000,000
          </h3>
          <p className="text-white text-[30px] font-semibold uppercase mt-[-8px] text-right">
            Interactions Per Month
          </p>
        </div>
        <div className="w-1/2">
          <Heading text="About Us" />
          <p className="text-white mb-10">
            The CCI group of companies is one of the top providers of customer
            management services in Africa, supporting domestic and international
            clients. Headquartered in the UAE, the group comprises of companies
            across the African continent servicing brands from the United
            Kingdom, United States, Australia, New Zealand, South Africa, Kenya
            and others.
          </p>
          <Heading text="Impact Sourcing" />
          <p className="text-white">
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
    </section>
  );
}

export default About;
