import HeroSection from "@/components/hero-section";
import PhotoGallery from "@/components/photo-gallery";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhotoGallery />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}