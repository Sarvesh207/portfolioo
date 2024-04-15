
import FeaturedSkills from "@/components/FeaturedSkills";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Parallax from "@/components/Parallax";
import MusicSchoolTestimonials from "@/components/TestimonialCards";

import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Parallax/>
      <FeaturedSkills />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Instructors />
      <Footer />
    </main>
  );
}
