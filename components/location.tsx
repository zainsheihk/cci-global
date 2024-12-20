/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Card from "./card";
import Heading from "./heading";
import Quantango from "./pattern";
import kenya from "../public/images/CCI-Kenya-Location.jpg";
import south from "../public/images/CCI-South-Africa-Our-Locations.jpg";
import ethopia from "../public/images/CCI-Ethiopia-Our-Locations-min.jpg";
import rwanda from "../public/images/Rwanda-Kigali-Website-Size-min.jpg";
import ghana from "../public/images/CCI-Ghana-A-New-Location.jpg";
import egypt from "../public/images/CCI-Egypt.jpg";

function Location() {
  const locations = [
    {
      title: "Kenya",
      description:
        "One of our fastest growing markets and at the spearhead of our continuous evolution strategy. CCI are aligned to the Kenya Vision 2030 that aims to transform Kenya into a rapidly industrializing, middle-income country that will elevate the quality of life for its citizens within a secure and clean ecosystem.",
      image: kenya,
    },
    {
      title: "South Africa",
      description:
        "The birthplace of the CCI brand and one of our core operating locations, South Africa has one of the largest information and communications technology (ICT) markets in Africa and is leading in the field of mobile, security and electronic banking services.",
      image: south,
    },
    {
      title: "Ethiopia",
      description:
        "Ethiopia’s economic outlook has shifted significantly since 2018 and they have focused on building a BPO industry supported by government policy. CCI have built long term partnerships and capitalized on working with local entities to establish itself within the country.",
      image: ethopia,
    },
    {
      title: "Rwanda",
      description:
        "Rwanda has in recent years developed a “Digital Exports strategy” that would make it become one of Africa’s Technology Hubs. CCI view Rwanda as a strategic investment opportunity for future growth aligned to our long-term digitization aspirations.",
      image: rwanda,
    },
    {
      title: "Ghana",
      description:
        "Ghana’s government is focused on driving digitization across the country and has invested heavily in accelerating its initiatives to drive a digital agenda across sectors in its economy. It is a focal point for growth for West Africa and an ideal location for our geographic portfolio.",
      image: ghana,
    },
    {
      title: "Egypt",
      description:
        "Our newest delivery location in Africa. Egypt offers an additional established BPO destination for our customers alongside supplementing our vast reach with additional language access and an established infrastructure, CCI Global aim to continue to offer extensive capabilities with a push for growth for the continent.",
      image: egypt,
    },
  ];
  return (
    <section className="bg-[hsla(260,40%,5%,1)] relative">
      <Quantango />
      <div className="container py-[80px]">
        <Heading text="Locations" className="text-[white] text-[50px]" />

        <div className="flex flex-wrap justify-between gap-y-10 mt-6">
          {locations.map((ele: any, index: number) => (
            <Card key={index} {...ele} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Location;
