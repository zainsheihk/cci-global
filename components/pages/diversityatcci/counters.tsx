/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CounterCard from "./counterCard";
import icon from "@/public/images/agentscareerboxrecruits-66542e26f1083.png";
import icon2 from "@/public/images/employeesareafrican-66542e5bbccd1.png";
import icon3 from "@/public/images/Femaleplacements-66542e791135a.png";
import icon4 from "@/public/images/FemaleLeadership-66542e9704a77.png";
import icon5 from "@/public/images/youthplacements-Males-66542ebe7b700.png";
import icon6 from "@/public/images/agentsareblack-66542edbcb1fb.png";
import icon7 from "@/public/images/youthplacements-66542eefe4aa1.png";
import icon8 from "@/public/images/min-wagehouseholds-66542f09e0b4b.png";

export default function Counters() {
  const cards = [
    {
      title: "Of Agents CareerBox Recruits",
      count: "93.0%",
      image: icon,
    },
    {
      title: "Of Our Employees Are African",
      count: "97.3%",
      image: icon2,
    },
    {
      title: "Female Placements",
      count: "67.1%",
      image: icon3,
    },
    {
      title: "Female Leadership(TLs, Mid and Senior Management)",
      count: "98.5%",
      image: icon4,
    },
    {
      title: "Youth Placements - MALES",
      count: "26.5%",
      image: icon5,
    },
    {
      title: "CCI Agents Are Black",
      count: "73.3%",
      image: icon6,
    },
    {
      title: "Youth Placements",
      count: "75.0%",
      image: icon7,
    },
    {
      title: "Previously from below Min-wage Households",
      count: "76.0%",
      image: icon8,
    },
  ];
  return (
    <section className="purple-gradient py-[80px] relative my-[150px]">
      <div className="container flex justify-between  gap-y-[50px] flex-wrap my-[-150px]">
        {cards.map((item: any, index: number) => (
          <CounterCard {...item} key={index} />
        ))}

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
