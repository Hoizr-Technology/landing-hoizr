import { SetStateAction, useState } from "react";
import { IoChevronDown, IoRemove } from "react-icons/io5";
import { Music, Users, Calendar, Clock } from "lucide-react";

export function ServicesSection() {
  const [activeItem, setActiveItem] = useState(0);

  const services = [
    {
      id: 1,
      title: "FOR ARTISTS",
      subtitle: "Amplify Your Reach & Career",
      url: "artist.hoizr.com/login",
      content: `• Discover events based on your genre, location, and schedule
• Build a stunning multimedia profile with mixes, photos, and links
• Apply to events and agencies directly (Free: 4 events/month)
• Receive unlimited booking requests from hosts and agencies
• Negotiate and manage bookings without leaving the platform
• Track your success, views, and conversion rate with smart analytics (Pro+)
• Get listed higher in searches and recommendations (Pro & Pro +)`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <Music className="w-12 h-12 text-black" />
        </div>
      ),
    },
    {
      id: 2,
      title: "FOR AGENCIES",
      subtitle: "Scale Your Operations",
      loginLink: "agency.hoizr.com/login",
      content: `• Manage and promote your artist roster with availability & stats
• Apply to gigs on behalf of your artists (Free: 4/month, 1 artist only)
• Approach and sign new artists (Pro: 3/month, Pro +: unlimited)
• Coordinate with hosts, negotiate bookings, and finalize deals in-app
• Assign team members, manage roles and responsibilities
• Run targeted campaigns and pitch decks (Pro & Pro +)
• Generate reports, commissions, and invoices from one dashboard`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <Users className="w-12 h-12 text-black" />
        </div>
      ),
    },
    {
      id: 3,
      title: "FOR HOSTS & VENUES",
      subtitle: "Curate Perfect Events",
      loginLink: "host.hoizr.com/login",
      content: `• Post events and receive direct applications from artists & agencies
• Discover performers using smart filters and genre-based AI matching
• Apply to top artists or agencies directly (Free: 4 artists + 2 agencies/month)
• Review portfolios, chat, negotiate, and confirm bookings in-app
• Assign roles to co-hosts or collaborators (Pro+)
• Publish public-facing event pages with ticketing via Hoizr Locale (Pro +)
• Unlock analytics, booking history, and competitive calendar insights (Pro +)`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <Calendar className="w-12 h-12 text-black" />
        </div>
      ),
    },
    {
      id: 4,
      title: "COMING SOON",
      subtitle: "Expanding the Ecosystem",
      loginLink: "/early-access",
      content: `Gear & Equipment Rentals
• Rent sound systems, lighting gear, or DJ setups directly from vendors
• Automate rider checklists and logistics with smart scheduling

Hoizr Locale - Public Event Discovery
• Sell tickets and promote gigs to your city's music crowd
• Feature on local nightlife discovery boards (with push alerts)

Industry Networking Hub
• Join pro communities by city, genre, or experience level
• Share live recordings, photos, and get feedback
• Access workshops, panels, and career growth tools`,
      icon: (
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-xl">
          <Clock className="w-12 h-12 text-black" />
        </div>
      ),
    },
  ];
  const toggleItem = (index: SetStateAction<number>) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <div className="bg-black text-white py-14 px-4 sm:px-6 md:px-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold mb-6 leading-tight">
          <span className="font-chemre text-primary">OUR</span>{" "}
          <span className="font-pinyon text-primary">services</span>
        </h2>
        <div className="w-full h-px bg-primary mt-6" />
      </div>

      {/* Accordion */}
      <div className="max-w-6xl mx-auto space-y-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`border-b border-primary/30 transition-all duration-300 ${
              activeItem === index ? "pb-4" : ""
            }`}
          >
            {/* Header Row */}
            <div
              className="flex items-center justify-between py-6 sm:py-8 cursor-pointer px-2 sm:px-4"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-3 sm:gap-6">
                <span className="text-primary font-mono text-xl min-w-[3rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <p className="text-gray-400 text-sm sm:text-base">
                      {service.subtitle}
                    </p>
                    {activeItem === index && (
                      <span className="hidden sm:inline text-primary">•</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Toggle Icon */}
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
              <div className="pb-8 px-2 sm:px-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-8 items-start">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
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
                  <div className="md:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-gray-300 whitespace-pre-line">
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

                    {/* Login Button */}
                    {service.id !== 4 && (
                      <button
                        onClick={() => window.open(service.loginLink, "_blank")}
                        disabled={true}
                        className="mt-4 bg-primary cursor-not-allowed  text-black px-4 py-2 font-bold hover:bg-yellow-400 transition-colors flex items-center space-x-2 group"
                      >
                        {/* <span>Login</span> */}
                        <span>Coming Soon</span>
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
