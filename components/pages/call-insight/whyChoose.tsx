import Heading from "@/components/heading";
import React from "react";

export default function WhyChoose() {
  return (
    <section className="container py-[80px]">
      <div className="flex">
        <Heading
          text="WHY CHOOSE US"
          className="text-[var(--secondary-color)] w-1/2"
        />
        <h3 className="text-[var(--secondary-color)] font-semibold text-[22px] w-1/2">
          Call Insight correlates 6 components to a successful monitoring
          program:
        </h3>
      </div>
      <div
        className="flex flex-wrap justify-between gap-y-10 mt-10"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="0"
      >
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            1
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Measure The Right Factors Aligned To Customer Experience
            </p>
          </div>
        </div>
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            2
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Distribution Of Monitoring
            </p>
          </div>
        </div>
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            3
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Accuracy Of Monitoring
            </p>
          </div>
        </div>
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            4
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Usable Outputs To Facilitate Effective Coaching And Fair Reward
              And Recognition
            </p>
          </div>
        </div>
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            5
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Volume Of Monitoring
            </p>
          </div>
        </div>
        <div className="w-[31%] flex gap-8">
          <h4 className="text-[var(--primary-color)] text-[36px] font-semibold leading-none relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
            6
          </h4>
          <div>
            <p className="text-[var(--secondary-color)] font-semibold leading-6">
              Deliver Usable Customer Intelligence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
