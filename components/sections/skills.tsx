"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Calculator,
  BarChart3,
  BookOpen,
  Database,
  TrendingUp,
} from "lucide-react";
import { Tools } from "./tools";
import { Section } from "@/components/layout/section";

const skills = [
  {
    name: "Analyse Financière",
    level: 95,
    icon: LineChart,
    description: "Analyse approfondie des états financiers et ratios",
  },
  {
    name: "Comptabilité",
    level: 90,
    icon: Calculator,
    description: "Maîtrise des normes comptables internationales",
  },
  {
    name: "Contrôle de Gestion",
    level: 85,
    icon: BarChart3,
    description: "Élaboration et suivi des budgets",
  },
  {
    name: "Audit",
    level: 88,
    icon: BookOpen,
    description: "Audit interne et externe",
  },
  {
    name: "Gestion de Base de Données",
    level: 80,
    icon: Database,
    description: "SQL et systèmes de gestion financière",
  },
  {
    name: "Trading",
    level: 75,
    icon: TrendingUp,
    description: "Analyse technique et fondamentale",
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Compétences
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>
                <Progress value={skill.level} className="h-2" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Tools />
    </Section>
  );
}