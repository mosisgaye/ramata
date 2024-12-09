"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Briefcase } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export function About() {
  return (
    <Section id="about" className="bg-background">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">À Propos</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Passionnée par la finance et l'innovation, je combine expertise technique 
              et vision stratégique pour transformer les défis financiers en opportunités 
              de croissance.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-semibold">5+ ans</p>
                  <p className="text-sm text-muted-foreground">Expérience</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-semibold">Master</p>
                  <p className="text-sm text-muted-foreground">Finance</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-semibold">15+</p>
                  <p className="text-sm text-muted-foreground">Projets</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              alt="Ramata GAYE"
              className="rounded-lg shadow-xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}