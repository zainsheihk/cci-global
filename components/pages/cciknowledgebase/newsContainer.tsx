/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import NewsCard from "./newsCard";

export default function NewsContainer({ news }: { news: any }) {
  return (
    <div className=" flex flex-wrap  justify-between gap-y-10 ">
      {news.map((item: any, index: number) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
}
