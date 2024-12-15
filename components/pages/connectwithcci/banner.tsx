import Image from "next/image";
import React from "react";
import whoWeAre from "@/public/images/lets-connect.png";
import Button from "@/components/button";
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
        <source src={"./images/Lets-Connect.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] w-full container ">
        <Image src={whoWeAre} alt="" />

        <p className="text-white my-8 leading-7 max-w-[700px]">
          Call insight is an independent standalone business, developed to
          support any organization that uses contact centers to manage their
          customer relationships. CCI leverages Call Insights QA & compliance
          for their client partners.
        </p>
        <Button label="Connect" href={""} />
      </div>
    </section>
  );
}
