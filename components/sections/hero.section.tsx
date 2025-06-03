import { HeroBg } from "@/components/common/herobg";
import { motion } from "motion/react";

export default function HeroSection() {
  const navigationItems = [
    "FIND ARTIST",
    "HOST EVENTS",
    "FIND EVENTS",
    "WHY HOIZR",
    "BLOGS",
    "FAQ",
  ];

  return (
    <div className="relative h-screen">
      {/* Background with 3D marquee effect */}
      <HeroBg />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-gradient-to-b from-black/80 to-black/50" />

      {/* Navigation Menu */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-6 right-6 z-10"
      >
        <div className="flex flex-col space-y-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between border-b border-white/30  hover:border-white/60 transition-all duration-300 min-w-[280px]">
                <span className="text-white font-medium text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
                <motion.span
                  className="text-white group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-chemre font-bold text-primary mb-20"
        >
          Music <span className="font-pinyon">Meets</span> Opportunity
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 "
        >
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <p className="text-lg font-bold text-primary">Trusted by</p>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md w-full overflow-hidden"
        >
          <motion.div
            className="whitespace-nowrap"
            animate={{
              x: [0, -700],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <span className="text-md sm:text-sm md:text-sm text-white/90 pr-8">
              Top DJs, renowned artist agencies, premier nightlife venues,
              iconic clubs, festival organizers, and event producers across the
              world
            </span>
            <span className="text-md sm:text-sm md:text-sm text-white/90">
              Top DJs, renowned artist agencies, premier nightlife venues,
              iconic clubs, festival organizers, and event producers across the
              world
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
