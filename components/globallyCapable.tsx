import Image from "next/image";
import React from "react";
import englishNeutral from "../public/images/english-neutral-bg-1600.jpg";
import Button from "./button";

function GloballyCapable() {
  return (
    <section className="relative after:w-full after:h-full section-overlay  after:absolute after:top-0 after:left-0">
      <Image
        src={englishNeutral}
        alt="englishNeutral"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-white text-[48px] font-semibold text-center leading-[1.2] max-w-[500px]">
          ENGLISH NEUTRAL, GLOBALLY CAPABLE
        </h2>
        <p className="text-white max-w-[500px] text-center mt-4 mb-8">
          Africa has one of the most globalized youth populations, with young
          job seeking individuals exposed to an array of popular culture that
          influences their style, conversations, behaviors and understanding of
          the world. Our workforce provides an English neutral accent that
          distinguishes itself across our services as well as adds a greater
          sense of familiarity to your customers. First language capability
          coupled with an incredibly knowledgeable workforce provides the
          capability to dynamically resolve customer queries.
        </p>
        <Button label="Learn More" href={""} />
      </div>
    </section>
  );
}

export default GloballyCapable;
