import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Recevez nos dernières collections
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Inscrivez-vous à notre newsletter pour être informé de nos nouvelles collections, 
          promotions exclusives et conseils de décoration.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full px-10 py-3 rounded-md border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
          </div>
          <Button className="whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
            S'inscrire
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;