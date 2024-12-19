import React from "react";
import Heading from "./heading";
import TeamCard from "./teamCard";

export default function OurTeam() {
  return (
    <section className="py-[80px] bg-[#e7eaf9] ">
      <div className="container">
        <Heading text="Meet our Team" className="text-[40px]" />
        <div className=" justify-between flex flex-wrap pt-5">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          {/* <TeamCard /> */}
        </div>
      </div>
    </section>
  );
}
