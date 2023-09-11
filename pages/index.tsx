import Hero from "@/components/Hero";
import LOTD from "@/components/LOTD";
import LawCards from "@/components/LawCards";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LOTD />
      <LawCards />
    </div>
  );
}
