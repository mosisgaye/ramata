"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Pack de Base",
    description: "Pour les petites entreprises débutant l'automatisation",
    price: "À partir de 500€",
    features: [
      "Automatisation des tâches simples",
      "Import/Export de données",
      "Rapports mensuels basiques",
      "Support par email",
    ],
  },
  {
    name: "Pack Avancé",
    description: "Pour les entreprises en croissance nécessitant plus d'analyses",
    price: "À partir de 1000€",
    features: [
      "Toutes les fonctionnalités du Pack de Base",
      "Tableaux de bord personnalisés",
      "Analyse des données financières",
      "Support prioritaire",
      "Formation utilisateur",
    ],
  },
  {
    name: "Pack Premium",
    description: "Solution complète pour les entreprises établies",
    price: "Sur mesure",
    features: [
      "Toutes les fonctionnalités du Pack Avancé",
      "Prévisions financières",
      "Intégration systèmes complexes",
      "Consulting stratégique",
      "Support 24/7",
      "Mises à jour régulières",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Tarification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
                    <p className="text-center text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-center mb-6">{plan.price}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Contactez-moi</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}