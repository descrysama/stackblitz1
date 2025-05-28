"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Camera } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    { name: "Accueil", path: "/" },
    { name: "Galerie", path: "/gallery" },
    { name: "Collections", path: "/collections" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white"
        >
          <Camera className="w-6 h-6" />
          <span>Paysages du Monde</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/70",
                pathname === route.path
                  ? "text-white"
                  : "text-white/80"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Shopping cart" className="text-white hover:text-white/70">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Acheter
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white/70 p-2",
                  pathname === route.path
                    ? "text-white bg-white/10 rounded-md"
                    : "text-white/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/20">
              <Button variant="outline" size="sm" className="w-full mr-2 text-white border-white hover:bg-white hover:text-black">
                <ShoppingCart className="w-4 h-4 mr-2" /> Panier
              </Button>
              <Button size="sm" className="w-full ml-2 bg-white text-black hover:bg-white/90">
                Acheter
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;