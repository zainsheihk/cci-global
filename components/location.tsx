import React from "react";
import Card from "./card";
import Heading from "./heading";
import Quantango from "./pattern";

function Location() {
  return (
    <section className="bg-[hsla(260,40%,5%,1)] relative">
      <Quantango />
      <div className="container py-[80px]">
        <Heading text="Locations" className="text-[white] text-[50px]" />

        <div className="flex flex-wrap justify-between gap-y-10 mt-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Location;
