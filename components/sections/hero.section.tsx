import { HeroBg } from "@/components/common/herobg";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  const navigationItems = [
    { label: "FIND ARTIST", href: "https://host.hoizr.com", comingSoon: true },
    { label: "HOST EVENTS", href: "https://host.hoizr.com", comingSoon: true },
    {
      label: "FIND EVENTS",
      href: "https://artist.hoizr.com",
      comingSoon: true,
    },
    {
      label: "MANAGE ARTISTS",
      href: "https://agency.hoizr.com",
      comingSoon: true,
    },
    { label: "WHY HOIZR", href: "/why-hoizr", comingSoon: false }, // Changed to route
    { label: "BLOGS", href: "/blogs", comingSoon: false }, // Changed to route
    { label: "FAQ", href: "#faq", comingSoon: false },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <HeroBg />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-6 right-4 sm:right-6 z-10"
      >
        <div className="flex flex-col space-y-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              {item.comingSoon ? (
                <div className="flex text:xs md:text-md items-center justify-between border-b border-white/30 hover:border-white/60 transition-all duration-300 min-w-[220px] sm:min-w-[260px] md:min-w-[280px] cursor-default">
                  {item.label}
                  <span className="text-[9px] md:text-sm font-medium tracking-wide text-primary transition-colors duration-300">
                    COMING SOON
                  </span>
                </div>
              ) : (
                <Link href={item.href}>
                  <p className="flex items-center justify-between border-b border-white/30 hover:border-white/60 transition-all duration-300 min-w-[220px] sm:min-w-[260px] md:min-w-[280px] cursor-pointer">
                    {item.label}
                    <span className="text-white group-hover:text-primary transition-colors duration-300">
                      →
                    </span>
                  </p>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-12 sm:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-chemre font-bold text-primary mb-8 sm:mb-12"
        >
          Music <span className="font-pinyon">Meets</span> Opportunity
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4"
        >
          <div className="w-1 h-1 rounded-full bg-primary" />
          <p className="text-sm sm:text-base font-bold text-primary">
            Trusted by
          </p>
          <div className="w-1 h-1 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xs sm:max-w-md w-full overflow-hidden"
        >
          <motion.div
            className="whitespace-nowrap"
            animate={{ x: [0, -700] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <span className="text-sm sm:text-base text-white/90 pr-8">
              Elite DJs. Top-tier agencies. Iconic venues. Global promoters.
              City-based scenes...
            </span>
            <span className="text-sm sm:text-base text-white/90">
              Elite DJs. Top-tier agencies. Iconic venues. Global promoters.
              City-based scenes...
            </span>
            <span className="text-sm sm:text-base text-white/90">
              Elite DJs. Top-tier agencies. Iconic venues. Global promoters.
              City-based scenes...
            </span>
            <span className="text-sm sm:text-base text-white/90">
              Elite DJs. Top-tier agencies. Iconic venues. Global promoters.
              City-based scenes...
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
