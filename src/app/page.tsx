import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navbar from '@/components/layout/Navbar';


export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Projects />
      <Contact />
    </main>
  );
}