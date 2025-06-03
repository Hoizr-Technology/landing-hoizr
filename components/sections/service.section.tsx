import { SetStateAction, useState } from "react";
import { IoChevronDown, IoRemove } from "react-icons/io5";

export function ServicesSection() {
  const [activeItem, setActiveItem] = useState(0);

  const services = [
    {
      id: 1,
      title: "FOR ARTISTS",
      subtitle: "Amplify Your Reach & Career",
      loginLink: "/artist-login",
      content: `• Discover local gigs matching your style and availability
• Create multimedia profiles showcasing mixes and performance history
• Apply to events with 1-click submissions (3 free/month)
• Negotiate bookings and handle contracts in-platform
• Message hosts/agencies directly without switching apps
• Track growth through application success analytics (Pro+)`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center">
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20 50 Q50 20 80 50 Q50 80 20 50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="3" fill="black" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "FOR AGENCIES",
      subtitle: "Scale Your Operations",
      loginLink: "/agency-login",
      content: `• Manage rosters with performance metrics and availability tracking
• Submit bulk proposals to multiple events simultaneously
• Automate email campaigns to venues and talent (Pro tier)
• Assign team roles for agents and bookers
• Handle celebrity bookings with specialized tools
• Generate invoices and track commissions in one dashboard`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="35"
                cy="40"
                r="8"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <circle
                cx="65"
                cy="40"
                r="8"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="65"
                r="8"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="40"
                x2="50"
                y2="65"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="65"
                y1="40"
                x2="50"
                y2="65"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "FOR HOSTS & VENUES",
      subtitle: "Curate Perfect Events",
      loginLink: "/venue-login",
      content: `• Find ideal DJs by genre, budget and location with AI matching
• Post gigs with custom requirements and automated scheduling
• Compare artist applications side-by-side with rating filters
• Collaborate with co-hosts using role-based permissions
• Publish events to GrooveLocale with ticketing (Pro+)
• Manage contracts, riders and payments in a single workflow`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect
                x="25"
                y="40"
                width="50"
                height="40"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M25 40 L50 20 L75 40"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="40"
                y1="55"
                x2="40"
                y2="70"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="55"
                x2="60"
                y2="70"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "COMING SOON",
      subtitle: "Expanding the Ecosystem",
      loginLink: "/early-access",
      content: `Gear & Equipment Rentals
• Connect with vetted audio/lighting vendors
• Reserve backline equipment through integrated booking
• Manage rider requirements and delivery logistics

Public Event Discovery
• Sell tickets via GrooveLocale's promotional platform
• Boost event visibility to local music enthusiasts
• Analyze audience demographics for future bookings

Industry Networking Hub
• Join city-specific professional communities
• Share mix tapes and event highlights
• Get notified about industry workshops and meetups`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="50"
                x2="70"
                y2="50"
                stroke="black"
                strokeWidth="3"
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="30"
                stroke="black"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  const toggleItem = (index: SetStateAction<number>) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-center font-bold mb-4">
          <span className="font-chemre text-primary">OUR</span>{" "}
          <span className="font-pinyon text-primary">services</span>
        </h2>
        <div className="w-full h-px bg-primary mt-8"></div>
      </div>

      {/* Accordion */}
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`border-b border-primary/30 transition-all duration-300 ${
              activeItem === index ? "pb-4" : ""
            }`}
          >
            <div
              className="flex items-center justify-between py-8 cursor-pointer px-4"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center gap-6">
                <span className="text-primary font-mono text-xl min-w-[3rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <h3 className="text-primary text-xl md:text-2xl font-bold">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-sm md:text-base">
                      {service.subtitle}
                    </p>
                    {activeItem === index && (
                      <span className="hidden md:inline text-primary">•</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                {activeItem === index ? (
                  <IoRemove className="w-6 h-6 text-primary" />
                ) : (
                  <div className="flex items-center gap-1">
                    <span className="text-primary text-sm hidden sm:block">
                      More
                    </span>
                    <IoChevronDown className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {activeItem === index && (
              <div className="pb-8 px-4 animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Icon */}
                  <div className="flex justify-center">
                    {service.icon ? (
                      service.icon
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-black border border-primary/30 rounded-lg flex items-center justify-center">
                        <div className="text-primary text-3xl font-bold">
                          {service.title.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line mb-6 space-y-3">
                      {service.content.split("\n").map((line, i) => (
                        <p
                          key={i}
                          className={
                            line.includes(":") ? "font-bold text-primary" : ""
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Login Button */}
                    {service.id !== 4 && (
                      <button
                        onClick={() => window.open(service.loginLink, "_blank")}
                        className="bg-primary text-black px-4 py-2 font-bold hover:bg-yellow-400 transition-colors flex items-center space-x-2 group"
                      >
                        <span>Login</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
