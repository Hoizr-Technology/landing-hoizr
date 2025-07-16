import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextLogo from "@/assets/logo/logoTextBlack.png";
import ContactUsModal from "../common/modals/contactUs.form";

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
              <nav className="space-y-4 opacity-60 pointer-events-none">
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
                      href="#"
                      title="Coming soon"
                      className="block text-black/40 font-medium cursor-not-allowed transition-colors duration-300"
                      onClick={(e) => e.preventDefault()}
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
        <ContactUsModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </footer>
    </>
  );
}
