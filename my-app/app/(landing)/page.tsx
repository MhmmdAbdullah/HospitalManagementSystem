import Image from "next/image";
import Hero from "./components/home/hero";
import AboutUs from "./components/home/aboutus";
import Service from "./components/home/service";
import Doctors from "./components/home/doctors";
import Contact from "./components/home/contact";

export default function Home() {
  return (

      <main>
        <Hero />
        <AboutUs />
        <Service />
        <Doctors />
        <Contact />
      </main>
    
  );
}
