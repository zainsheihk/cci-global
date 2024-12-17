import About from "@/components/about";
import ParticleCanvas from "@/components/banner-2";
import GloballyCapable from "@/components/globallyCapable";
import Location from "@/components/location";
import News from "@/components/news";
import OurTeam from "@/components/ourTeam";
import Solution from "@/components/solution";
import Why from "@/components/why";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <ParticleCanvas />
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
