import React from "react";
import GalleryCard from "./galleryCard";

export default function Gallery() {
  return (
    <section className="container py-[80px] flex  justify-between gap-y-10 flex-wrap ">
      <div className="w-[23%] flex flex-col gap-10">
        <GalleryCard />
        <GalleryCard />
      </div>
      <div className="w-[23%] flex flex-col gap-10 mt-20">
        <GalleryCard />
        <GalleryCard />
      </div>
      <div className="w-[23%] flex flex-col gap-10 ">
        <GalleryCard />
        <GalleryCard />
      </div>
      <div className="w-[23%] flex flex-col gap-10 mt-20">
        <GalleryCard />
        <GalleryCard />
      </div>
    </section>
  );
}
