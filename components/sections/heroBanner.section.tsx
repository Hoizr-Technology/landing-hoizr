export function HeroBanner() {
    const locations = ['Goa', 'Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad', 'Chandigarh', 'Jaipur', 'Manali', 'Kasol', 'Kolkata', 'Shillong', 'Pondicherry'];
    
    return (
      <div className="bg-primary px-8 py-16 md:py-24">
        {/* Marquee text */}
        <div className="overflow-hidden whitespace-nowrap mb-16">
          <div className="inline-block animate-marquee">
            {locations.map((location, index) => (
              <span key={index} className="inline-block mr-8">
                <span className="font-pinyon text-6xl md:text-8xl text-black mr-4">
                  located in
                </span>
                <span className="font-chemre text-6xl md:text-8xl text-black font-bold">
                  {location.toUpperCase()}
                </span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {locations.map((location, index) => (
              <span key={`duplicate-${index}`} className="inline-block mr-8">
                <span className="font-pinyon text-6xl md:text-8xl text-black mr-4">
                  located in
                </span>
                <span className="font-chemre text-6xl md:text-8xl text-black font-bold">
                  {location.toUpperCase()}
                </span>
              </span>
            ))}
          </div>
        </div>
  
        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
  <p className="text-black text-lg md:text-xl leading-relaxed">
    Hoizr moves beyond traditional booking methods such as scattered messaging apps, 
    manual contract handling, and disconnected discovery tools to deliver a{" "}
    <span className="font-bold">STRUCTURED, LOCATION-INTELLIGENT ECOSYSTEM</span>{" "}
    that seamlessly integrates artists, agencies, and venues.
  </p>
  
  <p className="text-black text-lg md:text-xl leading-relaxed">
    This platform empowers users to leverage our growing network spanning Mambai, 
    Goa, Delhi, and beyond, uncovering opportunities that resonate locally while 
    scaling internationally. Our holistic solution provides end-to-end tools—from 
    AI-powered talent matching to automated event operations—to nurture long-term 
    growth for our users and create{" "}
    <span className="font-bold">UNFORGETTABLE LIVE EXPERIENCES</span>{" "}
    that stand out.
  </p>
</div>
  
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}</style>
      </div>
    );
  }