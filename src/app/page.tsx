"use client";
import FeaturedSkills from "@/components/FeaturedSkills";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import Instructors from "@/components/Instructors";
import Parallax from "@/components/Parallax";
import Projects from "@/components/Projects";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import ExperienceTimeline from "@/components/Timeline";

import WhyChooseUs from "@/components/WhyChooseUs";
import { Boxes } from "@/components/ui/background-boxes";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/utils/cn";

export default function Home() {
  const nameWords = `Hi, my name is Sarvesh`;

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSectionBackground />

      <Parallax />
      <ExperienceTimeline />

      <FeaturedSkills />
      {/* <WhyChooseUs /> */}

      <Projects />

      <MusicSchoolTestimonials />
      <Instructors />

      <Footer />
    </main>
  );
}
