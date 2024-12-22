/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "@/components/heading";
import React from "react";
import Card from "./card";

import kenya from "@/public/images/CCI-Kenya-Location.jpg";
import south from "@/public/images/CCI-South-Africa-Our-Locations.jpg";
import ethopia from "@/public/images/CCI-Ethiopia-Our-Locations-min.jpg";
import rwanda from "@/public/images/Rwanda-Kigali-Website-Size-min.jpg";
import ghana from "@/public/images/CCI-Ghana-A-New-Location.jpg";
import egypt from "@/public/images/CCI-Egypt.jpg";

function BePart() {
  const locations = [
    {
      title: "Kenya",
      image: kenya,
    },
    {
      title: "South Africa",
      image: south,
    },
    {
      title: "Ethiopia",
      image: ethopia,
    },
    {
      title: "Rwanda",
      image: rwanda,
    },
    {
      title: "Ghana",
      image: ghana,
    },
    {
      title: "Egypt",
      image: egypt,
    },
  ];
  return (
    <section className="container py-[80px]">
      <h3 className="text-[var(--secondary-color)] font-semibold text-[20px]">
        Contact
      </h3>
      <Heading
        text="BE A PART OF OUR NETWORK"
        className="!text-[var(--secondary-color)]"
      />
      <p className="mb-10 max-w-[700px]">
        Learn more about our locations and operations, connect with our team and
        let&aposs work together to create new opportunities for efficiency and
        excellence.
      </p>
      <div className="flex gap-5 gap-y-5 flex-wrap">
        {locations.map((ele: any, index: number) => (
          <Card key={index} {...ele} />
        ))}
      </div>
    </section>
  );
}

export default BePart;
