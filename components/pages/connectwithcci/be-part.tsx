import Heading from "@/components/heading";
import React from "react";
import Card from "./card";

function BePart() {
  return (
    <section className="container py-[80px]">
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default BePart;
