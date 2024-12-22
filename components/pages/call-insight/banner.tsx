import Image from "next/image";
import React from "react";
import whoWeAre from "@/public/images/who-we-are-300x21-1.png";
export default function Banner() {
  return (
    <section className="overflow-hidden z-[-1] h-screen relative call-insight-gradient after:absolute after:top-0 after:left-0 after:w-full after:h-full">
      <video
        className="w-full object-cover"
        loop
        autoPlay={true}
        muted
        preload="none"
        id="videoLoad"
        playsInline={true}
      >
        <source src={"./images/Call-Insight-Banner-1-1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[700px]">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center"
          data-aos-duration="600"
          data-aos-offset="0"
        >
          <Image src={whoWeAre} alt="" />
          <h2 className="text-white my-6 text-[20px]">
            Get To Know Call Insight
          </h2>
          <p className="text-white text-center leading-7">
            Call insight is an independent standalone business, developed to
            support any organization that uses contact centers to manage their
            customer relationships. CCI leverages Call Insights QA & compliance
            for their client partners.
          </p>
        </div>
      </div>
    </section>
  );
}
