import { motion } from "framer-motion";
import TextLogo from "@/assets/logo/text.png";
import Image from "next/image";
import { useState } from "react";
import ContactUsModal from "@/components/common/modals/contactUs.form";
import { useRouter } from "next/router";
import Head from "next/head";

export default function WhyHoizr() {
  const router = useRouter();

  return (
    <div className="relative bg-black min-h-screen">
      <Head>
        <title>Why Hoizr - The Smart Booking Platform for Nightlife</title>
        <meta
          name="description"
          content="Discover why Hoizr is built for the future of nightlife. From DJs and agencies to hosts and venues, Hoizr eliminates chaos, boosts visibility, and brings professionalism to bookings."
        />
        <meta
          name="keywords"
          content="DJ booking platform, nightlife booking, artist management tool, music agency software, event hosting tool, venue booking system"
        />
        <meta name="author" content="Hoizr" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Why Hoizr – The Smart Booking Platform for Nightlife"
        />
        <meta
          property="og:description"
          content="Say goodbye to booking chaos. Hoizr unifies DJs, agencies, and venues with powerful tools for visibility, negotiation, and organization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoizr.com/why-hoizr" />
        <meta property="og:image" content="https://hoizr.com/og-cover.jpg" />
      </Head>

      {/* Fixed Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <Image
          onClick={() => router.push("/")}
          src={TextLogo}
          alt="Hoizr Logo"
          width={120}
          height={40}
          className="w-24 md:w-32 cursor-pointer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-chemre font-bold text-primary mb-6"
          >
            <span className="font-pinyon">WHY</span> HOIZR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The Smart Way to Power Nightlife
          </motion.p>
        </div>

        {/* Strategic Content Sections */}
        <div className="space-y-32">
          <IndustryProblem />
          <VisionSection />
          <FeatureHighlightsGrid />
          <BeforeAfterComparison />
          <ProFeatures />
          <ClosingCTA />
        </div>
      </div>
    </div>
  );
}
// 1. IndustryProblem Component
const IndustryProblem = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary font-chemre">THE PROBLEM:</span>{" "}
          <span className="font-pinyon text-primary">
            Chaos Behind the Booth
          </span>
        </h2>

        <div className="space-y-4 text-gray-300">
          <p className="text-xl">
            The music and nightlife industry thrives on creativity—but behind
            the scenes, it&pos;s pure chaos.
          </p>
          <p>
            DJs get booked through scattered DMs and informal chats. Agencies
            manage talent with spreadsheets and endless email threads. Hosts
            juggle dozens of artists without a single source of truth.
          </p>
          <p>
            Bookings fall through. Payments get delayed. Details are lost.
            It&pos;s 2025, and nightlife still runs like it&pos;s 2005.
          </p>
        </div>

        <div className="mt-8 p-4 border-l-4 border-primary bg-black/50">
          <p className="text-2xl font-bold text-primary">
            It&pos;s not a lack of talent. It&pos;s a lack of tools.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md aspect-square border-2 border-primary/30 rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 flex flex-wrap">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-1/5 aspect-square border border-primary/10"
              />
            ))}
          </div>
          <div className="text-center p-8 relative z-10">
            <div className="text-8xl mb-4">🎧</div>
            <p className="text-xl font-bold text-primary">
              Fragmented Booking Process
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// 2. VisionSection Component
const VisionSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center py-16 px-4 sm:px-8 bg-gradient-to-br from-black to-primary/10 border border-primary/20 rounded-xl"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
        <span className="text-primary font-chemre">THE VISION:</span>{" "}
        <span className="font-pinyon text-primary">
          Nightlife Needs a Platform
        </span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
        <p className="text-xl">
          Hoizr is built for the real backbone of nightlife—the DJs, agencies,
          and venues making the magic happen. It&pos;s a platform, not a
          marketplace. We don't take over the relationship. We empower it.
        </p>

        <p className="text-xl">
          Think of Hoizr as your control panel: booking tools, smart discovery,
          profile management, contracts, payments—all under one roof.
        </p>

        <div className="relative my-12 py-8 px-6 border border-primary/30 rounded-lg">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-black px-4 text-primary text-2xl">
            “
          </div>
          <p className="text-2xl md:text-3xl italic font-medium">
            We don&pos;t just help you get gigs. We help you grow your career or
            business—faster, smarter, and stress-free.
          </p>
          <div className="absolute bottom-0 right-8 translate-y-1/2 bg-black px-4 text-primary text-2xl">
            ”
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// 3. FeatureHighlightsGrid Component
const FeatureHighlightsGrid = () => {
  const features = [
    {
      title: "For Artists",
      items: [
        "Showcase your profile like a pro",
        "Apply to gigs and negotiate terms",
        "Track bookings, contracts, payments",
        "Boost visibility with verified tags",
      ],
    },
    {
      title: "For Agencies",
      items: [
        "Manage rosters in one place",
        "Pitch artists to events in seconds",
        "Track commissions, availability & performance",
        "Discover new talent using advanced filters",
      ],
    },
    {
      title: "For Hosts",
      items: [
        "Post events and define your needs",
        "Find DJs by genre, price, or location",
        "Finalize bookings in-platform",
        "Review history, manage budget & feedback",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="text-primary font-chemre">THE SOLUTION:</span>{" "}
        <span className="font-pinyon text-primary">
          What You Can Do on Hoizr
        </span>
      </h2>

      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
        No more juggling tools. Just powerful booking infrastructure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              {feature.title}
            </h3>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// 4. BeforeAfterComparison Component
const BeforeAfterComparison = () => {
  const comparisonItems = [
    {
      without: "DMs & emails scattered",
      with: "Unified inbox & smart alerts",
    },
    {
      without: "Missed gigs & double bookings",
      with: "Availability sync & contract tracking",
    },
    {
      without: "No performance history",
      with: "Verified profiles & analytics",
    },
    {
      without: "Informal deals",
      with: "Digital contracts & payment records",
    },
    {
      without: "Wasted time",
      with: "Scaled, repeatable bookings",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="text-primary font-chemre">THE REAL IMPACT:</span>{" "}
        <span className="font-pinyon text-primary">
          What Changes With Hoizr
        </span>
      </h2>

      <div className="mt-16 border border-primary rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-2 bg-primary">
          <div className="p-4 text-center font-bold text-xl text-gray-700">
            Without Hoizr
          </div>
          <div className="p-4 text-center font-bold text-xl text-black">
            With Hoizr
          </div>
        </div>

        {/* Comparison Items */}
        {comparisonItems.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 ${
              index % 2 === 0 ? "bg-primary/10" : "bg-primary/5"
            }`}
          >
            <div className="p-4 border-r border-primary/10 flex items-center justify-center">
              <span className="text-gray-400 text-center">{item.without}</span>
            </div>
            <div className="p-4 flex items-center justify-center">
              <span className="text-gray-300 text-center">{item.with}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl font-bold text-primary">
          Artists get booked more. Agencies save time. Hosts make smarter
          choices.
        </p>
      </div>
    </motion.section>
  );
};

// 5. ProFeatures Component
const ProFeatures = () => {
  const features = [
    "Smart alerts for ideal matches",
    "Negotiation pipeline dashboards",
    "Email campaign blasts",
    "Performance & revenue analytics",
    "Custom landing pages (hoizr.com/your-name)",
    "Team collaboration tools",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="py-16 px-4 sm:px-8 bg-gradient-to-tr from-black to-primary/10 border border-primary/20 rounded-xl"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="text-primary font-chemre">PROVEN TOOLS</span>{" "}
        <span className="font-pinyon text-primary">for Serious Players</span>
      </h2>

      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
        With Hoizr Pro and Pro Max, nightlife professionals unlock advanced
        tools:
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-start"
          >
            <div className="bg-primary text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              ✓
            </div>
            <p className="text-gray-300">{feature}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-primary">
          Designed for scale. Built for reputation. Powered by data.
        </p>
      </div>
    </motion.section>
  );
};

// 6. ClosingCTA Component
const ClosingCTA = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        <span className="text-primary font-chemre">WHY NOW,</span>{" "}
        <span className="font-pinyon text-primary">WHY YOU?</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
        <p className="text-xl">
          You're not here by accident. You've found Hoizr before the ads, before
          the SEO, before the hype. That means you're ahead of the curve—and
          we&pos;re building this platform for people like you.
        </p>

        <p className="text-xl">
          Whether you&pos;re a headlining DJ, a growing agency, or a new venue
          in town: Suscribe early. Get ahead. Stay iconic.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-4 hover:cursor-pointer bg-primary text-black font-bold text-xl rounded-full hover:bg-yellow-400 transition-colors flex items-center mx-auto"
        onClick={() => setShowForm(true)}
      >
        Get Started with Hoizr
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </motion.button>

      <div className="mt-16 pt-8 border-t border-primary/20">
        <p className="text-2xl font-bold text-primary">
          Hoizr is where bookings become business. And nightlife becomes
          streamlined.
        </p>
      </div>
      <ContactUsModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </motion.section>
  );
};
