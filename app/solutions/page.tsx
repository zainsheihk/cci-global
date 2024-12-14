import Agent from "@/components/pages/solutions/agent";
import Banner from "@/components/pages/solutions/banner";
import PartnerShip from "@/components/pages/solutions/partnerShip";
import Tabs from "@/components/pages/solutions/tabs";
import React from "react";

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
