import { Navbar } from "@/components/others/Navbar";
import "../styles/globals.css";
import { Particles } from "@/components/Particles";

export default function Home() {
  return (
    <>
      <div className="bg-main-background">
        <Particles
          className="absolute inset-0 z-0"
          quantity={50}
          ease={10}
          color={"#ffffff"}
          refresh
        />
        <Navbar />
      </div>
    </>
  );
}
