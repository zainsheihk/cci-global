"use client";
import Image from "next/image";
import React from "react";
import map from "../public/images/list.svg";
import Button from "./button";
import Paragraph from "./character";
function Why() {
  const paragraph =
    "Africa is the fastest growing continent globally, a rapidly urbanizing population and an abundance of highly educated youth searching for opportunity to use hard earned qualifications. Natural English language skills provide unparalleled levels of comprehension. High levels of retention and opportunities to progress result in global leading capability.";

  return (
    <section className="relative secondary-bg">
      <Image
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex container  justify-between z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <div className="w-[40%]">
          <h2 className="text-[var(--secondary-color)] text-[60px] font-semibold leading-[1.2] ">
            WHY
            <br />
            AFRICA?
          </h2>
        </div>
        <div className="w-[60%]">
          <Paragraph paragraph={paragraph} />
          <Button
            label="Learn More"
            href={""}
            className="inline-block mt-8 text-[18px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
