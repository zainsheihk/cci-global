import Image from "next/image";
import React from "react";
import careerBox from "@/public/images/careerbox-logo.png";
import impact from "@/public/images/Impact-Sourcing-1.png";
import impactImage from "@/public/images/63206883a395758af406e50a_Rectangle-13.png";

export default function Banner() {
  return (
    <section className="container mt-40">
      <Image src={careerBox} alt="" className="max-w-[300px] mx-auto" />
      <div className="my-[80px] flex justify-between items-center">
        <div className="w-[45%]">
          <Image src={impact} alt="" />
          <h2 className="my-8 text-[var(--secondary-color)] font-semibold text-[28px]">
            UPLIFTING OUR YOUTH THROUGH DEMAND-LED TRAINING... IT’S WHAT WE DO.
          </h2>
          <p className="text-[var(--secondary-color)] mb-10">
            Educating those willing and eager to learn delivers a long-term
            solution to our continents unemployment crisis. We are in the
            business of building careers for the youth, being fully informed
            that the first step towards gainful employment can lead to a
            lifetime of opportunities and growth.
          </p>
          <p className="text-[var(--secondary-color)]">
            A non-profit company, CareerBox identifies and trains candidates
            from underprivileged townships and places them in entry-level
            digitally enabled jobs.
          </p>
        </div>
        <div className="w-[35%]">
          <Image src={impactImage} alt="" />
        </div>
      </div>
    </section>
  );
}
