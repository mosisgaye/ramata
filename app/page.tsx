"use client";

import { Container } from "@/components/layout/container";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Container>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Container>
    </main>
  );
}