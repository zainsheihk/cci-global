import Image from "next/image";
import React from "react";
import banner from "../public/images/Africas-Leading-BPO-02-6639d6a5382f0.jpg";

function Banner() {
  return (
    <section className="max-h-screen overflow-hidden">
      <Image src={banner} alt="Banner" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-10 w-full flex flex-col items-center">
        <h1 className=" text-white text-[64px] relative font-semibold hom">
          AFRICA’S LEADING BPO
        </h1>
        <h2 className="text-white text-[30px] font-semibold  uppercase mt-5 text-center max-w-[800px]">
          Determined, Engaged And Energized Spearheading Investment Across The
          Continent
        </h2>
      </div>
    </section>
  );
}

export default Banner;
