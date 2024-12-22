/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ExpertiseCard from "./expertiseCard";

export default function Expertise() {
  const expertise = [
    {
      title: "Optimizing Your Business",
      description:
        "CCI works with clients to develop a collaborative partnership that not only brings efficiencies to your support functions but also provides a roadmap for continuous development and process enhancement. We work with our clients to be part of the process and bring added value to their network.",
    },
    {
      title: "Our Expertise",
      description:
        "CCI works across industries and segments. We aim to be an information powerhouse that accelerates business transformation and has the right people, process and technology to bring efficiencies through process evaluation and continuous improvement. CCI has, through years of cross sector experience, gained industry expertise exceeding that of a traditional BPO provider.",
    },
    {
      title: "Our Impact",
      description:
        "We aim to work better while creating an impact on the economies we operate in. We employ young talent, train the future labor force, and create opportunities for families, communities, and countries so that we can leave behind a legacy that spans across industries and brings us great pride.",
    },
  ];
  return (
    <section
      className="container py-[80px] flex gap-5"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
    >
      {expertise.map((item: any, index: number) => (
        <ExpertiseCard key={index} {...item} />
      ))}
    </section>
  );
}
