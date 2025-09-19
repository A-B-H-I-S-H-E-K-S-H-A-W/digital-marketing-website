import { Navbar } from "@/components/others/Navbar";
import "../styles/globals.css";
import { Particles } from "@/components/Particles";
import Hero from "@/components/others/Hero";
import About from "@/components/others/About";
import CardPopUp from "@/components/ui/CardPopUp";
import Logo from "@/components/others/Logo";
import { Results } from "@/components/others/Results";

export default function Home() {
  return (
    <>
      <div className="bg-main-background">
        <Particles
          className="absolute inset-0 z-0"
          quantity={50}
          ease={50}
          color={"#ffffff"}
          refresh
        />
        <Navbar />
        <Hero />
        <CardPopUp />
        <About />
        <Logo />
        <Results />
      </div>
    </>
  );
}
