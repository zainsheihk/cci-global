/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Heading from "./heading";
import SolutionCard from "./solutionCard";
import image1 from "../public/images/Business-Growth.jpg";
import image2 from "../public/images/6317540345a41e3cb7e869e1_Frame-90-min.png";
import image3 from "../public/images/63175402dabe2322b5ba26eb_Frame-90-2-300x196-1.jpg";
import image4 from "../public/images/63175402ade8ac24c8be70b2_Frame-90-3-min.png";

function Solution() {
  const data = [
    {
      title: "Customer Management",
      description:
        "Business growth rests on your ability to choose partners who understand your services, products, and market. Acquisition, retention, loyalty and management of your customer base directly leads to opportunities to increase sales and CCI has a fantastic track record in offering this to a global portfolio.",
      image: image1,
    },
    {
      title: "Omnichannel Management",
      description:
        "Across voice & digital channels, CCI provides support to organizations across the world. We implement processes and utilize our international expertise to provide adequate agent profiles, systems and interactions to elevate your brands services. As our industry continues to evolve, we invest heavily in our omnichannel strategy.",
      image: image2,
    },
    {
      title: "Administration & Processing",
      description:
        "Operations and effectiveness across translation, digitization, claims and complex case management require a skilled and equipped workforce. CCI integrates your workflows into our operational design with training infrastructure that equips agents with the right skills to be successful in all your standard processes.",
      image: image3,
    },
    {
      title: "Technical Expertise",
      description:
        "Detail-oriented and focused services require a highly educated workforce. CCI bring a diverse talent base with the requisite specialization to support technical service lines with agents who manage complicated operational queries. In addition, we support your business needs with cross-industry learning and portfolio solutions.",
      image: image4,
    },
  ];
  return (
    <section className="container py-[80px]">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
        <Heading
          text="OUR SOLUTIONS"
          className="text-[var(--secondary-color)] after:left-[50%] text-center after:translate-x-[-50%]"
        />
      </div>
      <p
        className="text-[var(--secondary-color)] text-center max-w-[600px] mx-auto"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="0"
      >
        CCI work across a multitude of service lines and provide capability
        across industries to global clients searching for quality outputs while
        creating social impact.
      </p>
      <div
        className="flex gap-5 mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        {data.map((item, i) => {
          return <SolutionCard key={i} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Solution;
