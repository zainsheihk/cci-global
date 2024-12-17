import Image from "next/image";
import React from "react";
import banner from "../public/images/Africas-Leading-BPO-02-6639d6a5382f0.jpg";

function Banner() {
  return (
    <section className="max-h-screen overflow-hidden">
      <Image
        src={banner}
        alt="Banner"
        className="w-full object-cover h-full animate-[scaleUp_50000ms_linear_infinite_alternate]"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-10 w-full flex flex-col items-center">
        <div className="overflow-hidden relative   after:animate-[1000ms_width_300ms_ease-in-out_forwards] after:w-[0%] after:h-[12px] after:bg-[var(--primary-color)] after:block after:z-20 after:absolute after:bottom-[-0px]  after:left-[50%] after:translate-x-[-50%]">
          <h1 className=" text-white text-[64px] relative font-semibold leading-[1.8] translate-y-[100%] animate-[1000ms_slideUp_700ms_ease-in-out_forwards]">
            AFRICA’S LEADING BPO
          </h1>
        </div>
        <h2 className="text-white text-[30px] font-semibold  uppercase mt-5 text-center max-w-[800px] opacity-0 animate-[500ms_opacity_1500ms_ease-in-out_forwards]">
          Determined, Engaged And Energized Spearheading Investment Across The
          Continent
        </h2>
      </div>
    </section>
  );
}

export default Banner;
