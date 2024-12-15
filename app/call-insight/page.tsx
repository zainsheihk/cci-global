import Banner from "@/components/pages/call-insight/banner";
import Counter from "@/components/pages/call-insight/counter";
import Tools from "@/components/pages/call-insight/tools";
import WhyChoose from "@/components/pages/call-insight/whyChoose";
import React from "react";

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
