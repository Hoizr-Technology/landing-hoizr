import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I create an artist profile?",
      answer:
        "Sign up using your professional email, upload your best mixes or performance videos, add your genres and influences, and set your availability. Our verification team will approve your profile within 24 hours.",
    },
    {
      id: 2,
      question: "What's the difference between free and premium accounts?",
      answer:
        "Free accounts get 3 gig applications/month and basic analytics. Premium ($14.99/month) offers unlimited applications, advanced metrics, and priority placement in search results.",
    },
    {
      id: 3,
      question: "How does payment processing work?",
      answer:
        "All payments are handled through our secure platform. Venues pay upfront, funds are held in escrow, and released to artists 24 hours after event completion minus a 5% service fee.",
    },
    {
      id: 4,
      question: "Can I manage multiple venues under one account?",
      answer:
        "Yes! Our agency dashboard allows you to switch between venues, manage separate calendars, and assign team members with custom permissions.",
    },
    {
      id: 5,
      question: "What happens if an artist cancels last minute?",
      answer:
        "Our guarantee protects hosts - we'll immediately find a suitable replacement from our verified talent pool at no extra cost, or provide a full refund.",
    },
    {
      id: 6,
      question: "How do I promote my event through GrooveLocale?",
      answer:
        "Premium accounts can create ticketed events directly on our platform. We'll promote to our user base and handle ticket sales with integrated marketing tools.",
    },
    {
      id: 7,
      question: "Do you provide contracts and legal documentation?",
      answer:
        "Yes, our platform generates customizable contracts with rider templates. All documents are legally binding and stored securely in your dashboard.",
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

                    {/* Conditional Add-Ons */}
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
                    )}
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
