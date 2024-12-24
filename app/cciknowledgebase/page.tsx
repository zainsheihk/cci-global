import Banner from "@/components/pages/cciknowledgebase/banner";
import Tabs from "@/components/pages/cciknowledgebase/tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Knowledge Base - CCI",
  description:
    "Learn more about CCI sites, perspectives on the BPO market as well as accolades and news. We invite you to engage our resources and content.",
};

function Page() {
  return (
    <div>
      <Banner />
      <Tabs />
    </div>
  );
}

export default Page;
