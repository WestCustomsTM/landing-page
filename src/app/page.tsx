'use client';

import React from "react";
import HeroSection from "@/sections/HeroSection";
import BenefitsSection from "@/sections/BenefitsSection";
import ServicesSection from "@/sections/ServicesSection";
import GallerySection from "@/sections/GallerySection";
import MaterialsSection from "@/sections/MaterialsSection";
import LocationSection from "@/sections/LocationSection";
import Footer from "@/sections/Footer";

export default function Page() {
  return (
    <div className="flex flex-col w-full text-white bg-black">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <GallerySection />
      <MaterialsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
