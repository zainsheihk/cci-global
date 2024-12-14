import Image from "next/image";
import React from "react";
import pattern from "@/public/images/6317369b73eae480ab4e0885_nagygrid-p-1600-1.png";
import bg from "@/public/images/purple-bg-style-two-1600.png";
import map from "@/public/images/world-map.png";
import words from "@/public/images/63186e29a15eef5171164f26_circle-text.svg";
export default function Banner() {
  return (
    <section className="industries-gradient w-full h-screen overflow-hidden">
      <Image
        src={pattern}
        alt="pattern"
        className="w-full h-full object-cover "
      />
      <Image src={bg} alt="pattern" className="w-full h-full object-cover" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Image src={map} alt="" className="invert max-w-[200px]" />
        <Image
          src={words}
          alt=""
          className="max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-WordsSpin  "
        />
      </div>
    </section>
  );
}
