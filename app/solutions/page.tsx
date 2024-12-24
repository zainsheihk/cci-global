import Agent from "@/components/pages/solutions/agent";
import Banner from "@/components/pages/solutions/banner";
import PartnerShip from "@/components/pages/solutions/partnerShip";
import Tabs from "@/components/pages/solutions/tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Solutions - CCI",
  description:
    "Our solutions span across multiple capabilities in the BPO sector and we continue to develop our skills to cater to shifting market needs.",
};
export default function Page() {
  return (
    <>
      <Banner />
      <Tabs />
      <Agent />
      <PartnerShip />
    </>
  );
}
