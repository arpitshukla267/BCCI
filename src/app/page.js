import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Newz from "@/components/pages/News";
import HowWeWork from "@/components/pages/HowWeWork";
import Sectors from "@/components/sections/Sectors";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import OfficeBariers from "@/components/pages/OfficeBariers";
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
