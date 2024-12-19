/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import Card from "./card-new";

function About({ scrollYProgress }: { scrollYProgress: any }) {
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
  ];
  return (
    <section className="bg-[#e7eaf9] relative">
      <div className="container flex gap-20 relative">
        <div className="w-[40%] h-screen flex justify-center items-center flex-col sticky top-0">
          {/* <Image
            src={pattern}
            alt=""
            className="absolute left-[-20%] translate-y-[-50%] top-[50%] w-[70%] z-[-1] brightness-[30%]"
          />
          <Image
            src={pattern}
            alt=""
            className="absolute left-[50%] top-[50%] translate-y-[-50%] rotate-180 w-[70%] z-[-1] brightness-[30%] "
          /> */}
          <div className="w-[40px] h-[40px] bg-[var(--primary-color)]  rounded-full z-[1] absolute top-[10%] left-[10%] translate-x-[-50%] opacity-80 "></div>
          <div className="w-[60px] h-[60px] bg-[var(--secondary-color)]  rounded-full z-[1] absolute bottom-[10%] left-[15%] translate-x-[-50%] opacity-80 "></div>
          <div className="w-[30px] h-[30px] bg-[#57cdff]  rounded-full z-[1] absolute bottom-[20%] right-[5%] translate-x-[-50%] opacity-90 "></div>
          <div className="w-[450px] h-[450px] bg-[#d5f5ff] border border-[rgba(22,50,215,.2)] rounded-full z-[-1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-[150px] h-[150px] bg-[#fff]  rounded-full z-[1] absolute top-[-75px] left-[50%] translate-x-[-50%] shadow-xl"></div>
            <div className="w-[150px] h-[150px] bg-[#fff]  rounded-full z-[1] absolute top-[45%] left-[-75px] translate-y-[-50%] shadow-xl"></div>
            <div className="w-[150px] h-[150px] bg-[#fff]  rounded-full z-[1] absolute top-[-75px] left-[50%] translate-x-[-50%] shadow-xl"></div>
            <div className="w-[180px] h-[180px] bg-[#fff]  rounded-full z-[1] absolute top-[55%] right-[-45px] translate-y-[-50%] shadow-xl"></div>

            <div className="w-[80px] h-[80px] bg-[#fff]  rounded-full z-[1] absolute bottom-[-25px] left-[50%] translate-x-[-50%] shadow-xl"></div>
          </div>
          <h3 className="text-[var(--secondary-color)] text-[50px] font-bold text-right flex justify-end">
            <AnimatedNumbers
              includeComma
              className={""}
              transitions={(index) => ({
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={20000000}
            />
          </h3>
          <p className="text-[var(--secondary-color)] text-[24px] font-semibold uppercase mt-[5px] text-center leading-6">
            Interactions
            <br /> Per Month
          </p>
        </div>
        <div className="w-[60%]">
          {data.map((item, i) => {
            const targetScale = 1 - (data.length - i) * 0.05;
            return (
              <Card
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

export default About;
