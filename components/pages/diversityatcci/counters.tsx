import React from "react";
import CounterCard from "./counterCard";

export default function Counters() {
  return (
    <section className="purple-gradient py-[80px] relative my-[150px]">
      <div className="container flex justify-between  gap-y-[50px] flex-wrap my-[-150px]">
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
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
