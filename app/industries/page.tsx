import Banner from "@/components/pages/industries/banner";
import Expertise from "@/components/pages/industries/expertise";
import Gallery from "@/components/pages/industries/gallery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Industries - CCI",
  description:
    "CCI services multiple industries across a diverse client portfolio and as we continue to add to our repertoire as a key global BPO operator.",
};
function Industries() {
  return (
    <>
      <Banner />
      <Expertise />
      <Gallery />
    </>
  );
}

export default Industries;
