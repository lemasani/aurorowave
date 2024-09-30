import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Values from "@/components/Values";
import VisionMission from "@/components/VisionMIssion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
