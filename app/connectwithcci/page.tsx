import Banner from "@/components/pages/connectwithcci/banner";
import BePart from "@/components/pages/connectwithcci/be-part";
import JoinUs from "@/components/pages/connectwithcci/join";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Connect - CCI",
  description:
    "If you're looking for an opportunity to discuss and work with CCI Global, reach out, connect and engage across our social channels.",
};

export default function Page() {
  return (
    <>
      <Banner />
      <BePart />
      <JoinUs />
    </>
  );
}
