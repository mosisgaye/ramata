"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  BarChart3,
  FileSpreadsheet,
  Database,
  BookOpen,
  PieChart,
} from "lucide-react";

const services = [
  {
    title: "Automatisation Comptable",
    description: "Développement de scripts Python pour automatiser les tâches comptables répétitives",
    icon: Code2,
    tags: ["Python", "API", "Automatisation"],
  },
  {
    title: "Analyse Financière",
    description: "Création de tableaux de bord et rapports financiers personnalisés",
    icon: BarChart3,
    tags: ["Power BI", "Excel", "Reporting"],
  },
  {
    title: "Intégration de Systèmes",
    description: "Connection et synchronisation des différents outils comptables",
    icon: Database,
    tags: ["API", "ERP", "CRM"],
  },
  {
    title: "Formation et Support",
    description: "Formation sur les outils développés et support technique continu",
    icon: BookOpen,
    tags: ["Formation", "Documentation", "Support"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">{service.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
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