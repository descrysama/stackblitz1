import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Décoratrice d'intérieur",
    comment:
      "Les photographies que j'ai achetées sont absolument magnifiques et ont transformé l'ambiance de mon salon. La qualité d'impression est exceptionnelle.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Amateur de photographie",
    comment:
      "Je suis impressionné par la beauté des paysages capturés. Chaque détail est parfaitement rendu et les couleurs sont vibrantes.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
  },
  {
    id: 3,
    name: "Émilie Lefèvre",
    role: "Architecte",
    comment:
      "J'ai acheté plusieurs photographies pour mon bureau et elles ont reçu de nombreux compliments de mes clients. Service client impeccable également.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez pourquoi nos clients adorent nos photographies et notre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;