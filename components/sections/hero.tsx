"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      <Container>
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Ramata GAYE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Excellence en Finance et Gestion
          </p>
          <Button
            variant="outline"
            size="lg"
            className="animate-bounce"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            Découvrir
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}