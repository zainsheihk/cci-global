/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "@/components/heading";
import React from "react";
import ToolCard from "./toolCard";
import card1 from "@/public/images/card_logo-removebg-preview.png";
import card2 from "@/public/images/Reports-and-data-removebg-preview.png";
import card3 from "@/public/images/Voice-Analytics-removebg-preview.png";
import card4 from "@/public/images/Program-Team-removebg-preview.png";
import card5 from "@/public/images/Quality-Automation-removebg-preview.png";
import card6 from "@/public/images/Agent-Coaching-removebg-preview.png";
import card7 from "@/public/images/QA-Audit-removebg-preview.png";
import card8 from "@/public/images/Continuous-Improvement-removebg-preview.png";

export default function Tools() {
  const tools = [
    {
      title: "Monument Builder",
      description: "Monitor Mentions In Real Time",
      image: card1,
    },
    {
      title: "Reports & Data",
      description: "Immediate Access to Actionable Insights",
      image: card2,
    },
    {
      title: "Voice Analytics",
      description: "Speech To Text",
      image: card3,
    },
    {
      title: "Program team",
      description: "Dedicated Personnel Deployed",
      image: card4,
    },
    {
      title: "Quality Automation",
      description: "Select The Parameter & Autoscore Calls",
      image: card5,
    },
    {
      title: "Agent Coaching",
      description: "Through Real Time Insights",
      image: card6,
    },
    {
      title: "QA Audit",
      description: "Independent Audit Carried Out By Objective Third Party",
      image: card7,
    },
    {
      title: "Continuous Improvement",
      description: "CCI Insights And Framework",
      image: card8,
    },
  ];
  return (
    <section className="container py-[80px]">
      <Heading
        className="text-[var(--secondary-color)]"
        text="TOOLS & TECHNIQUES"
      />
      <div
        className="flex flex-wrap justify-between mt-20 gap-y-10"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="0"
      >
        {tools.map((ele: any, index: number) => (
          <ToolCard key={index} {...ele} />
        ))}
      </div>
    </section>
  );
}
