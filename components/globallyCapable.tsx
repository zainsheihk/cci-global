// import Image from "next/image";
// import React from "react";
// import englishNeutral from "../public/images/english-neutral-bg-1600.jpg";
// import Button from "./button";
// import Quantango from "./pattern";
// import Paragraph from "./character";

// function GloballyCapable() {
//   const paragraph =
//     "";
//   return (
//     <section className="relative bg-[hsla(260,40%,5%,1)] ">
//       {/* <Image
//         src={englishNeutral}
//         alt="englishNeutral"
//         className=" w-full h-full object-cover  max-h-screen object-center"
//       /> */}

//       <div className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         <h2 className="text-white text-[40px] font-semibold text-center leading-[1.2] max-w-[600px]">
//           ENGLISH NEUTRAL, GLOBALLY CAPABLE
//         </h2>
//         {/* <p className="text-white text-center mt-4 mb-8">

//         </p> */}
//         <Paragraph paragraph={paragraph} />
//         <Button label="Learn More" href={""} />
//       </div>
//     </section>
//   );
// }

// export default GloballyCapable;
"use client";
import Image from "next/image";
import React from "react";
import map from "../public/images/list.svg";
import Button from "./button";
import Paragraph from "./character";
function GloballyCapable() {
  const paragraph =
    "Africa has one of the most globalized youth populations, with young job seeking individuals exposed to an array of popular culture that influences their style, conversations, behaviors and understanding of the world. Our workforce provides an English neutral accent that distinguishes itself across our services as well as adds a greater sense of familiarity to your customers. First language capability coupled with an incredibly knowledgeable workforce provides the capability to dynamically resolve customer queries.";

  return (
    <section className="relative bg-[hsla(260,40%,5%,1)]">
      <Image
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex container  justify-between z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <div className="w-[35%]">
          <h2 className="text-white text-[44px] font-semibold leading-[1.2] ">
            ENGLISH NEUTRAL, GLOBALLY CAPABLE
          </h2>
        </div>
        <div className="w-[60%]">
          <Paragraph
            paragraph={paragraph}
            className={"text-white text-[22px]"}
          />
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

export default GloballyCapable;
