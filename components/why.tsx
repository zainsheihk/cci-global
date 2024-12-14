import Image from "next/image";
import React from "react";
import map from "../public/images/Why-Africa-T2_11zon1.jpg";
import Button from "./button";
function Why() {
  return (
    <section className="relative after:w-full after:h-full section-overlay  after:absolute after:top-0 after:left-0">
      <Image
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-white text-[48px] font-semibold">WHY AFRICA?</h2>
        <p className="text-white max-w-[500px] text-center mt-4 mb-8">
          Africa is the fastest growing continent globally, a rapidly urbanizing
          population and an abundance of highly educated youth searching for
          opportunity to use hard earned qualifications. Natural English
          language skills provide unparalleled levels of comprehension. High
          levels of retention and opportunities to progress result in global
          leading capability.
        </p>
        <Button label="Learn More" href={""} />
      </div>
    </section>
  );
}

export default Why;
