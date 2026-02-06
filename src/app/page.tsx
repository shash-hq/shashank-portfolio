import Achievements from "@/components/Achievements";
import CodeFrequency from "@/components/CodeFrequency";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <div className="w-full flex-1">
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <CodeFrequency />
      </div>
      <Footer />
    </main>
  );
}
