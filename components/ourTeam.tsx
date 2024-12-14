import React from "react";
import Heading from "./heading";
import TeamCard from "./teamCard";

export default function OurTeam() {
  return (
    <section className="container py-[80px]">
      <Heading
        text="Meet our Team"
        className="!text-[var(--secondary-color)]"
      />
      <div className="flex flex-wrap">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
}
