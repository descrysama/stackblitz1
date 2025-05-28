import React from "react";
import { Award, Frame, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Qualité Premium",
    description:
      "Nos photographies sont imprimées sur du papier de haute qualité avec des encres durables pour des couleurs éclatantes.",
  },
  {
    icon: <Frame className="h-10 w-10 text-primary" />,
    title: "Encadrement Personnalisé",
    description:
      "Choisissez parmi une variété de cadres pour mettre en valeur votre photographie selon votre décor.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Garantie à vie",
    description:
      "Nous offrons une garantie à vie sur toutes nos impressions contre la décoloration et les défauts de fabrication.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Livraison Mondiale",
    description:
      "Nous livrons nos photographies dans le monde entier, soigneusement emballées pour éviter tout dommage.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous nous engageons à offrir des photographies de la plus haute qualité
            avec un service client exceptionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;