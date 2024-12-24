import About from "@/components/about";
import Banner from "@/components/banner";
import GloballyCapable from "@/components/globallyCapable";
import Location from "@/components/location";
import News from "@/components/news";
import OurTeam from "@/components/ourTeam";
import Solution from "@/components/solution";
import Why from "@/components/why";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home - CCI Global - Africa's BPO",
  description:
    "CCI Global is the Top Tier BPO provider in Africa, servicing the USA, UK, Australia, Canada and New Zealand from across the continent.",
};
export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Location />
      <Why />
      <Solution />
      <GloballyCapable />
      <OurTeam />
      <News />
    </>
  );
}
