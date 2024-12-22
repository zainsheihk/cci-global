/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import VideoCard from "./videoCard";

export default function VideoContainer({ videos }: { videos: any }) {
  return (
    <div className=" flex flex-wrap  justify-between gap-y-10 ">
      {videos.map((item: any, index: number) => (
        <VideoCard key={index} {...item} fullWidth={index === 0} />
      ))}
    </div>
  );
}
