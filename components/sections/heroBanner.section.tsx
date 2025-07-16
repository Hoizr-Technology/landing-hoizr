export function HeroBanner() {
  const locations = [
    "Goa",
    "Mumbai",
    "Dubai",
    "Bangalore",
    "Delhi",
    "Pune",
    "Hyderabad",
    "Chandigarh",
    "Manali",
    "Kasol",
    "Kolkata",
    "London",
    "Berlin",
    "Bangkok",
    "Bali",
  ];

  return (
    <div className="bg-primary px-4 sm:px-6 md:px-8 py-12 md:py-20 overflow-hidden">
      {/* Marquee text */}
      <div className="overflow-hidden whitespace-nowrap mb-12 md:mb-16">
        <div className="inline-block animate-marquee">
          {[...locations, ...locations].map((location, index) => (
            <span key={index} className="inline-block mr-6 sm:mr-8">
              <span className="font-pinyon text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mr-2 sm:mr-4">
                located in
              </span>
              <span className="font-chemre text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-bold">
                {location.toUpperCase()}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-2 sm:px-4">
        <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
          Hoizr eliminates the chaos of DJ bookings and artist discovery—no more
          juggling WhatsApp chats, DMs, or outdated spreadsheets. We bring
          together{" "}
          <span className="font-bold">ARTISTS, AGENCIES, AND EVENT HOSTS</span>{" "}
          into a seamless, location-aware platform built specifically for the
          music and nightlife scene.
        </p>

        <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
          Starting with India&apos;s nightlife capitals—Mumbai, Goa, Delhi, and
          Bangalore—Hoizr is building a high-performance ecosystem that scales
          across cities and borders. From{" "}
          <span className="font-bold">AI-driven talent matchmaking</span> to
          fully integrated event workflows, we help users unlock new gigs,
          manage rosters, and deliver{" "}
          <span className="font-bold">WORLD-CLASS LIVE EXPERIENCES</span>{" "}
          anywhere, from local clubs to international festivals.
        </p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
