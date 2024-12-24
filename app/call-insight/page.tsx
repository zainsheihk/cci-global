import Banner from "@/components/pages/call-insight/banner";
import Counter from "@/components/pages/call-insight/counter";
import Tools from "@/components/pages/call-insight/tools";
import WhyChoose from "@/components/pages/call-insight/whyChoose";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Call Insight - CCI",
  description:
    "Call Insight is our stand alone data management division operating within the CCI ecosystem to provide analytics and insight to BPO clients.",
};
export default function Page() {
  return (
    <>
      <Banner />
      <WhyChoose />
      <Counter />
      <Tools />
    </>
  );
}
