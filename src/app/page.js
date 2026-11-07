"use client";

import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import WorksAndPdfShowcase from "@/components/portfolio/WorksAndPdfShowcase";
import ExperienceAndEducation from "@/components/portfolio/ExperienceAndEducation";
import SkillsAndEndorsements from "@/components/portfolio/SkillsAndEndorsements";
import ContactAndFooter from "@/components/portfolio/ContactAndFooter";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#EDEDED]">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <WorksAndPdfShowcase />
        <ExperienceAndEducation />
        <SkillsAndEndorsements />
      </main>

      <ContactAndFooter />
    </div>
  );
}
