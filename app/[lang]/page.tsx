"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Container>
        <About />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Projects />
     
        <Contact />
      </Container>
    </main>
  );
}