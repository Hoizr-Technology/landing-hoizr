export function HeroBanner() {
  const locations = [
    "Goa",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Pune",
    "Hyderabad",
    "Chandigarh",
    "Jaipur",
    "Manali",
    "Kasol",
    "Kolkata",
    "Shillong",
    "Pondicherry",
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
          Hoizr moves beyond traditional booking methods such as scattered
          messaging apps, manual contract handling, and disconnected discovery
          tools to deliver a{" "}
          <span className="font-bold">
            STRUCTURED, LOCATION-INTELLIGENT ECOSYSTEM
          </span>{" "}
          that seamlessly integrates artists, agencies, and venues.
        </p>

        <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
          This platform empowers users to leverage our growing network spanning
          Mumbai, Goa, Delhi, and beyond, uncovering opportunities that resonate
          locally while scaling internationally. Our holistic solution provides
          end-to-end tools—from AI-powered talent matching to automated event
          operations—to nurture long-term growth for our users and create{" "}
          <span className="font-bold">UNFORGETTABLE LIVE EXPERIENCES</span> that
          stand out.
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
