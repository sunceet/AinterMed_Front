"use client";

import AboutIntro from "@/components/About/AboutIntro";
import AboutEarthSection from "@/components/About/AboutEarthSection";
import AboutFeatures from "@/components/About/AboutFeatures";
import AboutMap from "@/components/About/AboutMap";
import AboutStats from "@/components/About/AboutStats";
import AboutCTA from "@/components/About/AboutCTA";

export default function About() {
  return (
    <main className="bg-white pt-15 px-4 sm:px-6 lg:px-0 overflow-hidden">
      <AboutIntro />
      <AboutEarthSection />
      <AboutFeatures />
      <AboutMap />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}
