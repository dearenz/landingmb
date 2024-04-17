import Header from "@/components/layouts/Header";
import Benefit from "@/components/sections/Benefit";
import Bermitra from "@/components/sections/Bermitra";
import HeroCarousel from "@/components/sections/HeroCarousel";
import HowToUse from "@/components/sections/HowToUse";
import JaringanKami from "@/components/sections/JaringanKami";
import Services from "@/components/sections/Services";
import Counter from "@/components/sections/Counter";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />
      <main>
        {/* hero carousel */}
        <HeroCarousel />
        {/* benefit */}
        <Benefit />
        {/* services */}
        <Services />
        {/* how to ads */}
        <HowToUse />
        {/* Counter */}
        <Counter />
        {/* Footer */}
      </main>
      {/* footer */}
    </>
  );
}
