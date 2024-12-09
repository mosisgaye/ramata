"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { menuItems } from "./menu-items";
import { ThemeToggle } from "./theme-toggle";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { Container } from "../layout/container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { scrollToSection } = useScrollToSection();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-secondary/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </motion.nav>
  );
}