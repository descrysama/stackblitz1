"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mountain landscape",
    title: "Montagnes Majestueuses",
    location: "Alpes, Suisse",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Beach sunset",
    title: "Coucher de Soleil",
    location: "Bali, Indonésie",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Desert landscape",
    title: "Dunes Dorées",
    location: "Sahara, Maroc",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Waterfall",
    title: "Cascade Éternelle",
    location: "Amazonie, Brésil",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Forest",
    title: "Forêt Enchantée",
    location: "Kyoto, Japon",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Aurora borealis",
    title: "Aurores Boréales",
    location: "Islande",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Canyon",
    title: "Canyon Mystique",
    location: "Arizona, États-Unis",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Rice terraces",
    title: "Terrasses de Riz",
    location: "Bali, Indonésie",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Lavender fields",
    title: "Champs de Lavande",
    location: "Provence, France",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mountain lake",
    title: "Lac Alpin",
    location: "Canada",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Cliff coast",
    title: "Falaises Côtières",
    location: "Irlande",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Island sunrise",
    title: "Aube Insulaire",
    location: "Maldives",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Valley",
    title: "Vallée Verdoyante",
    location: "Nouvelle-Zélande",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Coral reef",
    title: "Récif Corallien",
    location: "Grande Barrière de Corail, Australie",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Snowy mountains",
    title: "Montagnes Enneigées",
    location: "Himalaya, Népal",
  },
];

interface PhotoCardProps {
  photo: typeof photos[0];
  index: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-lg shadow-md opacity-0 translate-y-8",
        "transition-all duration-700 ease-out",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-medium text-white">{photo.title}</h3>
          <p className="text-sm text-white/80">{photo.location}</p>
        </div>
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Plus Beaux Paysages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre collection soigneusement sélectionnée des plus beaux paysages du monde,
            capturés dans leur splendeur naturelle par nos photographes talentueux.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;