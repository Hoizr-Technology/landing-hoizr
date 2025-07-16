import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What exactly is Hoizr?",
      answer:
        "Hoizr is a platform designed to simplify how DJs, agencies, and venues connect, collaborate, and manage bookings—all in one place. Whether you’re trying to land gigs or host the perfect night, Hoizr gives you the tools to do it better.",
    },
    {
      id: 2,
      question: "Is Hoizr live right now?",
      answer:
        "Not yet! You’re getting a first look at the platform during its early rollout phase. We're polishing features and onboarding handpicked users gradually. If you're seeing this, you're early—and we appreciate it.",
    },
    {
      id: 3,
      question: "What will I be able to do as an artist?",
      answer:
        "Once live, artists will be able to create verified profiles, apply to gigs, manage bookings, chat with hosts, get paid securely, and grow their exposure through a unified dashboard.",
    },
    {
      id: 4,
      question: "How will agencies use Hoizr?",
      answer:
        "Agencies will be able to manage artist rosters, apply to events on behalf of talent, track performance metrics, and discover new DJs using genre/location filters—all within a powerful interface designed for scale.",
    },
    {
      id: 5,
      question: "How can venues benefit from Hoizr?",
      answer:
        "Hosts and venues can post events, filter DJs by genre, availability, or budget, negotiate directly, and confirm bookings without messy back-and-forths. Plus, all history, contracts, and payments will be tracked in one place.",
    },
    {
      id: 6,
      question: "Is Hoizr free to use?",
      answer:
        "There will be both free and premium plans when we launch. Free users will get access to core features, while Pro plans will unlock advanced tools like analytics, team management, smart alerts, and campaign tools.",
    },
    {
      id: 7,
      question: "How do I stay in the loop for launch?",
      answer:
        "We recommend following us on socials or checking back on the platform. Early users will receive priority access once beta invites go out. If you’re here now, you're already on our radar. Just reach out to us directly for early access.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
            <span className="font-chemre text-primary">FREQUENTLY</span>{" "}
            <span className="font-pinyon text-primary">ASKED</span> QUESTIONS
          </h2>
          <div className="w-32 h-px bg-primary mx-auto mt-4"></div>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto divide-y divide-primary/20">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="py-6">
              <div
                role="button"
                aria-expanded={activeIndex === index}
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="text-primary font-mono text-lg sm:text-xl mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-primary text-xl sm:text-2xl ml-4 mt-1"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-primary" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="h-full w-0.5 bg-primary"
                        animate={{ scaleY: activeIndex === index ? 0 : 1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Collapsible Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pl-4 sm:pl-16 pr-2 sm:pr-6"
                  >
                    <div className="py-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>

                    {/* Conditional Add-Ons
                    {faq.id === 1 && (
                      <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border-l-4 border-primary">
                        <p className="font-medium text-primary">Pro Tip:</p>
                        <p className="mt-1 text-gray-300 text-sm">
                          Include at least 3 different performance styles to
                          increase booking opportunities by 65%
                        </p>
                      </div>
                    )}

                    {faq.id === 2 && (
                      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                        <button className="px-4 py-2 bg-primary text-black rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors">
                          View Pricing
                        </button>
                        <button className="px-4 py-2 border border-primary text-primary rounded-full text-sm font-bold hover:bg-primary hover:text-black transition-colors">
                          Compare Plans
                        </button>
                      </div>
                    )} */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
