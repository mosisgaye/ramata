"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, PieChart, BarChart } from "lucide-react";

const projects = [
  {
    title: "Optimisation Financière",
    description: "Réduction des coûts opérationnels de 25% via l'analyse des processus financiers",
    icon: LineChart,
    tags: ["Analyse Financière", "Optimisation", "KPI"],
  },
  {
    title: "Restructuration Budgétaire",
    description: "Mise en place d'un nouveau système de contrôle budgétaire pour un groupe international",
    icon: PieChart,
    tags: ["Budget", "International", "Gestion"],
  },
  {
    title: "Audit & Conformité",
    description: "Audit complet des procédures financières et mise en conformité IFRS",
    icon: BarChart,
    tags: ["Audit", "IFRS", "Conformité"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projets Réalisés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <project.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">{project.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}