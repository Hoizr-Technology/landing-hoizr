// HeroVideoSection.tsx
"use client";
import { motion } from "motion/react";

export default function HeroVideoSection() {
  return (
    <section className="w-full bg-black py-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls={false}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Blurred edges overlay */}
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at center, transparent 20%, transparent 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 95%),
                linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.3) 12%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 88%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.95) 100%),
                linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.3) 12%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 88%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.95) 100%)
              `,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
