import About from "@/components/about";
import Banner from "@/components/banner";
import GloballyCapable from "@/components/globallyCapable";
import Location from "@/components/location";
import News from "@/components/news";
import OurTeam from "@/components/ourTeam";
import Solution from "@/components/solution";
import Why from "@/components/why";

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
