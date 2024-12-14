import Heading from "@/components/heading";
import Image from "next/image";
import React from "react";
import banner from "@/public/images/CCI-Solutions.jpg";

export default function Banner() {
  return (
    <section className="container mt-40 ">
      <div className="flex justify-between items-start mb-10">
        <Heading
          text="AN EXPERT OUTSOURCER WITH THAT IN-HOUSE FEEL"
          className="text-[var(--secondary-color)] leading-10 w-[60%]"
        />
        <p className=" leading-6 text-[var(--secondary-color)] w-[35%] text-[15px]">
          We have over 15 years of experience across a multitude of service
          lines, industries, and specialist services. With new opportunities we
          adapt and grow every day.
        </p>
      </div>

      <Image src={banner} alt="Banner" />
    </section>
  );
}
