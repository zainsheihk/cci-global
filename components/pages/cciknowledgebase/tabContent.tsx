import React from "react";
import NewsCard from "./newsCard";
import VideoCard from "./videoCard";

export default function TabContent() {
  return (
    <div className="">
      <div className=" flex flex-wrap  justify-between gap-y-10 ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}
