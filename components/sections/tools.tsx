"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table2,
  BarChart2,
  FileSpreadsheet,
  Database,
  PieChart,
  LayoutDashboard,
} from "lucide-react";

const tools = [
  {
    name: "QuickBooks",
    icon: Database,
    description: "Solution complète de gestion comptable et financière",
    category: "Comptabilité",
  },
  {
    name: "Xero",
    icon: FileSpreadsheet,
    description: "Logiciel de comptabilité cloud pour PME",
    category: "Comptabilité",
  },
  {
    name: "Sage",
    icon: LayoutDashboard,
    description: "Logiciel de planification et gestion des ressources",
    category: "Gestion",
  },
  {
    name: "Excel",
    icon: Table2,
    description: "Analyse de données et modélisation financière avancée",
    category: "Analyse",
  },
  {
    name: "Tableau",
    icon: PieChart,
    description: "Plateforme de visualisation de données et business intelligence",
    category: "Visualisation",
  },
  {
    name: "Power BI",
    icon: BarChart2,
    description: "Outil interactif de visualisation et reporting",
    category: "Business Intelligence",
  },
];

export function Tools() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center mb-8">
        Outils & Technologies
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <tool.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">{tool.name}</h4>
                    <Badge variant="secondary">{tool.category}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}