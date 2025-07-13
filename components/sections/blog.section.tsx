import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Blog, blogs } from "@/content/blogs";

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
    <div className="bg-black text-white py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="font-chemre text-primary">LATEST</span>{" "}
            <span className="font-pinyon text-primary">INSIGHTS</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations
            shaping the future of nightlife and music industry
          </p>
          <div className="w-32 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Blog Marquee */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-x-auto scrollbar-hide">
            <motion.div
              className="flex gap-6 sm:gap-8 px-1 sm:px-0"
              animate={{
                x: isHovered ? currentX : [currentX, currentX - 1200],
              }}
              transition={{
                duration: isHovered ? 0 : 20,
                repeat: isHovered ? 0 : Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              onUpdate={(latest) => {
                if (!isHovered) {
                  const xPosition = Number(latest.x);
                  setCurrentX(xPosition);
                  if (xPosition <= -1200) {
                    setCurrentX(0);
                  }
                }
              }}
            >
              {[...blogs, ...blogs].map((blog, index) => (
                <BlogCard key={`${blog.id}-${index}`} blog={blog} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Explore All Button */}
        <div className="text-center">
          <Link href="/blogs">
            <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-primary text-black font-semibold text-base sm:text-lg rounded-full hover:bg-yellow-400 transition-all flex items-center mx-auto space-x-3">
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

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] cursor-pointer group scroll-snap-align-start">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-2xl mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            width={380}
            height={224}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs bg-white/90 text-black font-semibold rounded-lg">
              {blog.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Text */}
        <div className="space-y-3 px-1">
          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm">
                <p className="text-white">{blog.author.name}</p>
                <p className="text-gray-500 text-xs">{blog.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>{blog.readTime}</span>
              <motion.svg
                className="w-4 h-4 text-primary group-hover:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
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
