/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Heading from "./heading";
import TeamCard from "./teamCard";
import team1 from "../public/images/image-22.png";
import team2 from "../public/images/image-20.png";
import team3 from "../public/images/image-26.png";
import team4 from "../public/images/image-27.png";

export default function OurTeam() {
  const teams = [
    {
      name: "Martin Roe",
      designation: "Chief Executive Officer",
      description:
        "With extensive experience in the BPO sector in both the client and vendor side of operations, Martin has overseen CCI’s strategy development to become Africa’s largest outsourcing provider, steering the company toward the future of the BPO industry. Martin has a passion for Impact Sourcing, incorporating it as one of CCI’s core values.",
      image: team1,
    },
    {
      name: "Mark Chana",
      designation: "Chief Operating Officer",
      description:
        "Mark is our operational guru who has ultimate responsibility for operational delivery across CCI’s International & Domestic clients, working closely with management teams at our operational sites to ensure a smooth and satisfying customer experience. Mark is a board member of BPESA (BPO Industry body in South Africa) and CareerBox, our recruitment arm.",
      image: team2,
    },
    {
      name: "Lizelle Strydom",
      designation: "Managing Director: CareerBox",
      description:
        "Lizelle has vast knowledge and expertise in various niche entities in the labor market enabling her to identify gaps and create strategic solutions in breaking barriers to entry. She was a guest speaker at Oxford University in 2020 and participated in several global panel discussions around the GBS sector, Impact Sourcing, and Why Africa. She is the leader and integration point between CCI Global and CareerBox.",
      image: team3,
    },
    {
      name: "Mahira Khan",
      designation: "Director of Bids & Contracts",
      description:
        "Mahira oversees the growth, bidding, and contracting across the group, implementing the bid and solution management process from qualification all the way until hand over to the project implementation team. She’s accomplished some of our biggest wins and most successful campaigns, helping CCI become a world class provider to some of the world’s leading brands. ",
      image: team4,
    },
  ];
  return (
    <section className="container py-[80px]">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
        <Heading
          text="Meet our Team"
          className="!text-[var(--secondary-color)]"
        />
      </div>
      <div className="flex flex-wrap">
        {teams.map((ele: any, index: number) => (
          <TeamCard key={index} {...ele} />
        ))}
      </div>
    </section>
  );
}
