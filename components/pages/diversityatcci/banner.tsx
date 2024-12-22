import React from "react";
import impact from "@/public/images/631893d361e5457993d3e2aa_Group 10-p-800.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section
      className="container mt-[150px] flex justify-between gap-10"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="0"
    >
      <div>
        <Image src={impact} alt="" />
      </div>
      <div>
        <h2 className="font-semibold text-[var(--secondary-color)] text-[18px]">
          Determined, engaged, and energized, our people are our most important
          asset.
        </h2>
      </div>
    </section>
  );
}
