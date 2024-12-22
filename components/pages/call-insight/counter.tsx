"use client";
import dynamic from "next/dynamic";
import React from "react";
// import CounterSlider from "../careerbox/counterSlider";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
export default function Counter() {
  return (
    <section className="overflow-hidden z-[-1] h-[80vh] relative call-insight-gradient after:absolute after:top-0 after:left-0 after:w-full after:h-full">
      <video
        className="w-full object-cover"
        loop
        autoPlay={true}
        muted
        preload="none"
        id="videoLoad"
        playsInline={true}
      >
        <source
          src={"./images/Call-Insight-Statistics-Section-transcode.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between items-start w-full gap-5 container">
        {/* <CounterSlider /> */}
        <div>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center  flex">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={50000}
            />{" "}
            +
          </h3>
          <p className="text-white text-[24px] leading-8 font-semibold uppercase mt-[-8px] text-center">
            ACCURACY SCORE
          </p>
        </div>
        <div>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center flex justify-center ">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={100}
            />{" "}
            +
          </h3>
          <p className="text-white text-[24px] leading-8 font-semibold uppercase mt-[-8px] text-center">
            CAMPAIGNS SUPPORTED
          </p>
        </div>
        <div>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center flex justify-center  ">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={700000}
            />{" "}
            +
          </h3>
          <p className="text-white text-[24px] leading-8 font-semibold uppercase mt-[-8px] text-center">
            ASSESSMENTS
          </p>
        </div>
        <div>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center flex justify-center ">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={300}
            />{" "}
          </h3>
          <p className="text-white text-[24px] leading-8 font-semibold uppercase mt-[-8px] text-center">
            EMPLOYED SPECIALISTS
          </p>
        </div>
        <div>
          <h3 className="text-[var(--primary-color)] text-[48px] font-bold text-center flex justify-center  ">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index: number) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={98}
            />{" "}
            %
          </h3>
          <p className="text-white text-[24px] leading-8 font-semibold uppercase mt-[-8px] text-center">
            ACCURACY SCORE
          </p>
        </div>
      </div>
    </section>
  );
}
