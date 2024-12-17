import React from "react";
import Card from "./card";
import Heading from "./heading";

function Location() {
  return (
    <section className="container py-[80px]">
      <Heading text="Locations" className="!text-[var(--secondary-color)]" />
      <div className="flex flex-wrap justify-between gap-y-10">
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

export default Location;
