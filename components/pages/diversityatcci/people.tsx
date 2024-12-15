import Image from "next/image";
import React from "react";
import building from "@/public/images/building2.png";
import Heading from "@/components/heading";
import icon from "@/public/images/6318ad993fa58dade225f4b2_backward-item.png";
export default function People() {
  return (
    <section className="container py-[80px] flex justify-between items-center">
      <div className="w-[48%]">
        <Image src={building} alt="" />
      </div>
      <div className="w-[49%]">
        <Heading
          text="PEOPLE FIRST BUSINESS"
          className="text-[var(--secondary-color)]"
        />
        <p className="text-[var(--secondary-color)] text-[15px]">
          We are a people business that invests in both where we work as well as
          how we work. Our office environments are welcoming ensuring links to
          public transportation and taxi service infrastructure alongside an
          onsite wellness center, fitness center & medical facilities to take
          care of our people.
        </p>
        <div className="flex flex-wrap justify-between gap-5 my-10">
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center w-[30%]">
            <Image src={icon} alt="" />
            <p className="text-[var(--secondary-color)] text-[14px]">
              Operationally Aligned
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
