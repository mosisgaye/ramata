"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Analyste Financier Senior",
    company: "Banque Internationale",
    period: "2020 - Présent",
    description: [
      "Analyse des opportunités d'investissement",
      "Élaboration de rapports financiers",
      "Gestion de portefeuille client",
    ],
  },
  {
    title: "Contrôleur de Gestion",
    company: "Groupe Industriel",
    period: "2018 - 2020",
    description: [
      "Suivi des KPIs financiers",
      "Optimisation des processus budgétaires",
      "Reporting mensuel à la direction",
    ],
  },
  {
    title: "Auditeur Junior",
    company: "Cabinet d'Audit International",
    period: "2016 - 2018",
    description: [
      "Audit des comptes annuels",
      "Révision des procédures internes",
      "Participation aux missions de conseil",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Expérience Professionnelle</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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