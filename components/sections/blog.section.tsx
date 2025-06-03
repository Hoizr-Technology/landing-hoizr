// import { useState, useRef, useEffect } from "react";
// import { motion, useAnimationControls } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { blogs } from "@/content/blogs";

// export function HeroBlogSection() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentX, setCurrentX] = useState(0);
//   const controls = useAnimationControls();

//   useEffect(() => {
//     if (!isHovered) {
//       controls.set({ x: currentX });
//     }
//   }, [isHovered, currentX, controls]);
//   return (
//     <div className="bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="font-chemre text-primary">LATEST</span>{" "}
//             <span className="font-pinyon text-primary">INSIGHTS</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Stay updated with the latest trends, insights, and innovations
//             shaping the future of nightlife and music industry
//           </p>
//           <div className="w-48 h-px bg-primary mx-auto mt-6"></div>
//         </div>

//         <div
//           className="relative mb-16"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-6"
//               animate={{
//                 x: isHovered ? currentX : [currentX, currentX - 1200],
//               }}
//               transition={{
//                 duration: isHovered ? 0 : 15,
//                 repeat: isHovered ? 0 : Infinity,
//                 repeatType: "loop",
//                 ease: "linear",
//               }}
//               onUpdate={(latest) => {
//                 if (!isHovered) {
//                   const xPosition = Number(latest.x);
//                   setCurrentX(xPosition);
//                   // Reset position when it goes too far left
//                   if (xPosition <= -1200) {
//                     setCurrentX(0);
//                   }
//                 }
//               }}
//             >
//               {/* Render blogs twice for seamless loop */}
//               {[...blogs, ...blogs].map((blog, index) => (
//                 <BlogCard key={`${blog.id}-${index}`} blog={blog} />
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Show More Button */}
//         <div className="text-center">
//           <Link href="/blogs">
//             <button className="group px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center mx-auto space-x-3">
//               <span>Explore All Insights</span>
//               <motion.svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 whileHover={{ x: 5 }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </motion.svg>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function BlogCard({ blog }: { blog: any }) {
//   return (
//     <Link href={`/blogs/${blog.id}`}>
//       <div className="min-w-[400px] h-[500px] bg-gray-900/50 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 group cursor-pointer flex flex-col">
//         {/* Blog Image */}
//         <div className="relative h-48 overflow-hidden">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             width={400}
//             height={192}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//           {/* Category Badge */}
//           <div className="absolute top-4 left-4">
//             <span className="px-3 py-1 bg-primary text-black text-xs font-bold rounded-full">
//               {blog.category}
//             </span>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className="p-6">
//           {/* Meta Info */}
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
//                 <Image
//                   src={blog.author.image}
//                   alt={blog.author.name}
//                   width={32}
//                   height={32}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-gray-400 text-sm">{blog.author.name}</span>
//             </div>
//             <div className="flex items-center space-x-3 text-gray-400 text-sm">
//               <span>{blog.date}</span>
//               <span>•</span>
//               <span>{blog.readTime}</span>
//             </div>
//           </div>

//           {/* Title */}
//           <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
//             {blog.title}
//           </h3>

//           {/* Excerpt */}
//           <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
//             {blog.excerpt}
//           </p>

//           {/* Read More Arrow */}
//           <div className="mt-4 flex items-center text-primary group-hover:text-yellow-400 transition-colors duration-300">
//             <span className="text-sm font-medium">Read More</span>
//             <motion.svg
//               className="w-4 h-4 ml-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               whileHover={{ x: 3 }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </motion.svg>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/content/blogs";

export function HeroBlogSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isHovered) {
      controls.set({ x: currentX });
    }
  }, [isHovered, currentX, controls]);

  return (
    <div className="bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="font-chemre text-primary">LATEST</span>{" "}
            <span className="font-pinyon text-primary">INSIGHTS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations
            shaping the future of nightlife and music industry
          </p>
          <div className="w-48 h-px bg-primary mx-auto mt-6"></div>
        </div>

        <div
          className="relative mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: isHovered ? currentX : [currentX, currentX - 1200],
              }}
              transition={{
                duration: isHovered ? 0 : 15,
                repeat: isHovered ? 0 : Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              onUpdate={(latest) => {
                if (!isHovered) {
                  const xPosition = Number(latest.x);
                  setCurrentX(xPosition);
                  // Reset position when it goes too far left
                  if (xPosition <= -1200) {
                    setCurrentX(0);
                  }
                }
              }}
            >
              {/* Render blogs twice for seamless loop */}
              {[...blogs, ...blogs].map((blog, index) => (
                <BlogCard key={`${blog.id}-${index}`} blog={blog} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Link href="/blogs">
            <button className="group px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center mx-auto space-x-3">
              <span>Explore All Insights</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="min-w-[380px] cursor-pointer group">
        {/* Blog Image - Clean with rounded corners */}
        <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={380}
            height={224}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Badge - Positioned on image */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-lg">
              {blog.category}
            </span>
          </div>

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Content Section - Separate from image */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Author and Meta Info - Bottom section */}
          <div className="flex items-center justify-between pt-2">
            {/* Author Info */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  {blog.author.name}
                </p>
                <p className="text-gray-500 text-xs">{blog.date}</p>
              </div>
            </div>

            {/* Read Time and Arrow */}
            <div className="flex items-center space-x-3 text-gray-500">
              <span className="text-sm">{blog.readTime}</span>
              <motion.svg
                className="w-5 h-5 text-primary group-hover:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
