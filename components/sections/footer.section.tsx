import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextLogo from "@/assets/logo/logoTextBlack.png";

interface FormData {
  firstName: string;
  phoneNumber: string;
  email: string;
}

export default function Footer() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setShowForm(false);
    reset();
  };

  return (
    <>
      <footer className="bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Left Section - Logo and Contact */}
            <div className="lg:col-span-1 space-y-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/">
                  <Image
                    src={TextLogo}
                    alt="Hoizr Logo"
                    width={180}
                    height={60}
                    className="w-32 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </motion.div>

              {/* Fixed Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.a
                  href="mailto:hoizr.tech@gmail.com"
                  className="block text-black/80 hover:text-black font-medium text-lg transition-colors duration-300 border-b-2 border-black/30 hover:border-black pb-3"
                  whileHover={{ x: 3 }}
                >
                  hoizr.tech@gmail.com
                </motion.a>

                {/* Reach Out Button */}
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 bg-black text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-black/90 transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                  <span>REACH OUT</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8 tracking-wider">
                FEATURES
              </h3>
              <nav className="space-y-4">
                {[
                  "Location-Based Discovery",
                  "Smart Booking Tools",
                  "Agency Roster Management",
                  "In-App Messaging",
                  "Event Promotion Suite",
                  "Analytics Dashboards",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="block text-black/80 hover:text-black font-medium transition-colors duration-300 hover:translate-x-1 transform transition-transform cursor-pointer">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Company Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8 tracking-wider">COMPANY</h3>
              <nav className="space-y-4">
                {[
                  { name: "Why Hoizr", href: "/why-hoizr" },
                  { name: "About Us", href: "/about-us" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="block text-black/80 hover:text-black font-medium transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8 tracking-wider">
                QUICK LINKS
              </h3>
              <nav className="space-y-4">
                {[
                  { name: "Get Started", href: "/get-started" },
                  { name: "Artist Login", href: "/artist-login" },
                  { name: "Host Login", href: "/host-login" },
                  { name: "Agency Login", href: "/agency-login" },
                  { name: "Find Artists", href: "/find-artists" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Terms & Condition", href: "/terms-condition" },
                  { name: "Privacy Policy", href: "/privacy-policy" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="block text-black/80 hover:text-black font-medium transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="border-t border-black/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            {/* Left - Copyright */}
            <p className="text-black/60 text-sm font-medium">
              © 2024 Hoizr. All rights reserved.
            </p>

            {/* Right - Contact Info */}
            <div className="flex items-center space-x-8">
              <motion.a
                href="tel:+18503075389"
                className="text-black/60 hover:text-black text-sm font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                +91 836 957 2945
              </motion.a>
              <motion.a
                href="mailto:hoizr.tech@gmail.com"
                className="text-black/60 hover:text-black text-sm font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                hoizr.tech@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black rounded-2xl max-w-4xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              {/* Left Side - Image */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  {/* Guitar SVG */}
                  <motion.svg
                    className="w-32 h-32 mx-auto mb-8 text-white/80"
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <path
                      d="M50 150 Q60 120 80 100 L120 60 Q140 40 160 50"
                      strokeWidth="3"
                    />
                    <circle cx="70" cy="130" r="25" strokeWidth="3" />
                    <path d="M45 130 Q30 120 25 100" strokeWidth="3" />
                    <path d="M95 130 Q110 120 115 100" strokeWidth="3" />
                    <path d="M160 50 Q170 45 175 35" strokeWidth="3" />
                    <path d="M160 50 Q170 55 175 65" strokeWidth="3" />
                    <path d="M130 90 L140 80" strokeWidth="2" />
                    <path d="M125 95 L135 85" strokeWidth="2" />
                    <path d="M120 100 L130 90" strokeWidth="2" />
                    <path d="M115 105 L125 95" strokeWidth="2" />
                  </motion.svg>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-4">
                      You Are{" "}
                      <span className="text-yellow-400">ONE STEP CLOSER</span>{" "}
                      Of Making Your
                    </h2>
                    <h3 className="text-2xl font-bold mb-2">
                      GAME LEAVE A LEGACY{" "}
                      <span className="italic">with Its</span>
                    </h3>
                    <h4 className="text-xl font-bold text-yellow-400">
                      SONIC EXPERIENCE
                    </h4>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-black text-white p-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    Tell us about you*
                  </h3>
                  <p className="text-gray-400 mb-8">
                    We are curious about your story
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First name *
                      </label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors text-white placeholder-gray-400"
                        {...register("firstName", {
                          required: "Please fill this in",
                        })}
                      />
                      {errors.firstName && (
                        <div className="flex items-center mt-2 text-red-400 text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.firstName.message}
                        </div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone number
                      </label>
                      <div className="flex">
                        <div className="flex items-center px-3 py-3 bg-gray-800 border border-r-0 border-gray-700 rounded-l-lg">
                          <span className="text-sm mr-2">🇺🇸</span>
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          placeholder="(201) 555-0123"
                          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-r-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors text-white placeholder-gray-400"
                          {...register("phoneNumber", {
                            required: "Please fill this in",
                          })}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <div className="flex items-center mt-2 text-red-400 text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.phoneNumber.message}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        placeholder="me@example.com"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors text-white placeholder-gray-400"
                        {...register("email", {
                          required: "Please fill this in",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="flex items-center mt-2 text-red-400 text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        ← Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors"
                      >
                        OK →
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
