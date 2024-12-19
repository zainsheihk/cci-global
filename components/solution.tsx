/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Heading from "./heading";
import SolutionCard from "./solutionCard";

function Solution({ scrollYProgress }: { scrollYProgress: any }) {
  const data = [
    {
      title: "About Us",
      description:
        "The CCI group of companies is one of the top providers of customer management services in Africa, supporting domestic and international clients. Headquartered in the UAE, the group comprises of companies across the African continent servicing brands from the United Kingdom, United States, Australia, New Zealand, South Africa, Kenya and others.",
    },
    {
      title: "Impact Sourcing",
      description:
        "Our vision is to be the largest and most respected outsourcer in Africa by offering world class solutions that derive value for our clients and their customers. Our mission is to continue being pioneers in new markets across Africa by investing in people and uplifting communities we operate in. We empower through training, with a focus on developing young professionals for careers in the BPO industry.",
    },
    {
      title: "Impact Sourcing",
      description:
        "Our vision is to be the largest and most respected outsourcer in Africa by offering world class solutions that derive value for our clients and their customers. Our mission is to continue being pioneers in new markets across Africa by investing in people and uplifting communities we operate in. We empower through training, with a focus on developing young professionals for careers in the BPO industry.",
    },
    {
      title: "Impact Sourcing",
      description:
        "Our vision is to be the largest and most respected outsourcer in Africa by offering world class solutions that derive value for our clients and their customers. Our mission is to continue being pioneers in new markets across Africa by investing in people and uplifting communities we operate in. We empower through training, with a focus on developing young professionals for careers in the BPO industry.",
    },
  ];
  return (
    <section className=" py-[80px] relative bg-[hsla(260,40%,5%,1)]">
      {/* <Quantango /> */}
      <div className="container">
        <div className="container">
          <Heading
            text="OUR SOLUTIONS"
            className="text-white text-center text-[50px] mb-3"
          />
          <p className="text-center max-w-[600px] mx-auto opacity-80 mb-10 text-white">
            CCI work across a multitude of service lines and provide capability
            across industries to global clients searching for quality outputs
            while creating social impact.
          </p>
        </div>
        {/* <div className="flex gap-5 mt-10">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div> */}
        <div className="">
          {data.map((item, i) => {
            const targetScale = 1 - (data.length - i) * 0.05;
            return (
              <SolutionCard
                key={`p_${i}`}
                i={i}
                {...item}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;
