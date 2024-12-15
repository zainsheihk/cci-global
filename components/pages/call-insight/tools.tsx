import Heading from "@/components/heading";
import React from "react";
import ToolCard from "./toolCard";

export default function Tools() {
  return (
    <section className="container py-[80px]">
      <Heading
        className="text-[var(--secondary-color)]"
        text="TOOLS & TECHNIQUES"
      />
      <div className="flex flex-wrap justify-between mt-20 gap-y-10">
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </section>
  );
}
