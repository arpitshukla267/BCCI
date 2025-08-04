import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Newz from "@/components/sections/News";
import HowWeWork from "@/components/sections/HowWeWork";
import Sectors from "@/components/sections/Sectors";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import OfficeBariers from "@/components/sections/OfficeBariers";
import ContactPage from "./contact/page";

export default function Home() {
  return(
    <div className="bg-white">
      <Hero />
      <Newz />
      <About />
      <HowWeWork />
      <Sectors />
      <Services />
      <OfficeBariers />
      <ContactPage />
      <Footer />
    </div>
  )
}










































































//DEVELOPED BY - ARPIT SHUKLA