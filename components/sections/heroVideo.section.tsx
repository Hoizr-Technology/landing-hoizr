// HeroVideoSection.tsx
import { motion } from "motion/react";

export default function HeroVideoSection() {
  return (
    <section className="w-full bg-black py-8 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl my-5 mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full"
        >
            
          <video
            className="w-full h-auto rounded-lg shadow-2xl"
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source 
              src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Blurred edges overlay - fades to transparent at corners */}
          <div 
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at center, transparent 20%, transparent 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 95%),
                linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.3) 12%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 88%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.95) 100%),
                linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.3) 12%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 88%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0.95) 100%)
              `
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}


// import { useState, useRef, useEffect } from 'react';

// export default function VideoModuleSection() {
//   const [isMainVideoVisible, setIsMainVideoVisible] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const mainVideoRef = useRef(null);
//   const loopVideoRef = useRef(null);

//   useEffect(() => {
//     // Simulate loading state
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const handlePlayButtonClick = () => {
//     if (mainVideoRef.current && loopVideoRef.current) {
//       // Hide loop video and show main video
//       (loopVideoRef.current as HTMLVideoElement).pause();
//       setIsMainVideoVisible(true);
      
//       // Play main video
//       (mainVideoRef.current as HTMLVideoElement).style.opacity = '1';
//       (mainVideoRef.current as HTMLVideoElement).style.visibility = 'visible';
//       (mainVideoRef.current as HTMLVideoElement).play();
//     }
//   };

//   const handleMainVideoEnd = () => {
//     // Reset to loop video when main video ends
//     setIsMainVideoVisible(false);
//     if (mainVideoRef.current && loopVideoRef.current) {
//       (mainVideoRef.current as HTMLVideoElement).style.opacity = '0';
//       (mainVideoRef.current as HTMLVideoElement).style.visibility = 'hidden';
//       (loopVideoRef.current as HTMLVideoElement).play();
//     }
//   };
//   return (
//     <section className="o-section  o-section--full-width">
//       <div className="o-container o-container--full-width">
//         <div className="c-video-module">
//           {/* Noise overlay */}
//           <i className={`c-noise ${isLoaded ? 'is-loaded' : ''}`}></i>
          
//           <div className="c-video-module__content">
//             {/* Main video (with controls) */}
//             <video
//               ref={mainVideoRef}
//               className="c-video-module__video c-video-module__video--main"
//               playsInline
//               disablePictureInPicture
//               controls
//               preload="auto"
//               onEnded={handleMainVideoEnd}
//               style={{ 
//                 opacity: isMainVideoVisible ? 1 : 0, 
//                 visibility: isMainVideoVisible ? 'visible' : 'hidden' 
//               }}
//             >
//               <source 
//                 media="(min-width: 1140px)" 
//                 type="video/mp4" 
//                 src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4" 
//               />
//               <source 
//                 type="video/mp4" 
//                 src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4" 
//               />
//             </video>

//             {/* Loop video (background) */}
//             <video
//               ref={loopVideoRef}
//               className="c-video-module__video c-video-module__video--loop"
//               playsInline
//               loop
//               muted
//               disablePictureInPicture
//               preload="auto"
//               autoPlay
//               style={{ 
//                 opacity: isMainVideoVisible ? 0 : 1, 
//                 visibility: isMainVideoVisible ? 'hidden' : 'visible' 
//               }}
//             >
//               <source 
//                 media="(min-width: 1140px)" 
//                 type="video/mp4" 
//                 src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4" 
//               />
//               <source 
//                 type="video/mp4" 
//                 src="https://res.cloudinary.com/duhefgqh4/video/upload/v1748807283/MAK_Multiscreen_Video_16to9_uz9ib7.mp4" 
//               />
//             </video>

//             {/* Play button */}
//             <button 
//               className={`c-video-module__play-button ${isMainVideoVisible ? 'is-hidden' : ''}`}
//               onClick={handlePlayButtonClick}
//             >
//               <i className="play-icon">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M8 5v14l11-7z"/>
//                 </svg>
//               </i>
//             </button>
//           </div>
//         </div>
//       </div>


//     </section>
//   );
// }