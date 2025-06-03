// index.tsx
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero.section";
import Image from "next/image"; // Make sure to import Next.js Image component
import TextLogo from "@/assets/logo/text.png";
import HeroVideoSection from "@/components/sections/heroVideo.section";
import { HeroBanner } from "@/components/sections/heroBanner.section";
import { ServicesSection } from "@/components/sections/service.section";
import { FAQSection } from "@/components/sections/faq.section";

export default function Home() {
  return (
    <div className="relative bg-black h-screen">
      <HeroSection />
      <HeroVideoSection />
      <HeroBanner />
      <ServicesSection />
      <FAQSection />
      {/* Fixed logo in top-left corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <Image
          src={TextLogo}
          alt="Logo"
          width={120}
          height={40}
          className="w-24 md:w-32"
        />
      </motion.div>
    </div>
  );
}
