import About from "@/components/About";
import BackgroundShapes from "@/components/BackgroundShapes";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Values from "@/components/Values";
import VisionMission from "@/components/VisionMIssion";

export default function Home() {
  return (
    <main className="relative overflow-hidden flex min-h-screen flex-col">
        <BackgroundShapes />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="visionMission">
          <VisionMission />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="values">
          <Values />
        </section>
    </main>
  )
}
