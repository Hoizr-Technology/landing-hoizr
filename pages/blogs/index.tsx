import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Blog, blogs } from "@/content/blogs";
import TextLogo from "@/assets/logo/text.png";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((blog) => blog.category))),
  ];

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Image with Fixed Logo - Similar to BlogDetailPage */}
      <div className="relative h-80 md:h-[32rem] lg:h-[36rem] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/duhefgqh4/image/upload/v1748802764/pexels-maumascaro-801863_st01gd.jpg"
          alt="Blogs Hero"
          fill
          className="object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm" />

        {/* Fixed Logo in Top Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-6 left-6 z-50"
        >
          <Link href="/">
            <Image
              src={TextLogo}
              alt="Logo"
              width={120}
              height={40}
              className="w-24 md:w-32 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-8 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="font-chemre text-primary">INSIGHTS</span>{" "}
              <span className="font-pinyon text-primary">&</span>{" "}
              <span className="font-chemre text-white">STORIES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Dive deep into the world of nightlife, music technology, and
              industry innovations. Discover insights from industry leaders,
              emerging trends, and the future of entertainment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Filters & Search Section */}
      <div className="px-4 sm:px-8 py-16 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-primary/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-gray-900 transition-all duration-300 text-lg"
              />
              <svg
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                  selectedCategory === category
                    ? "bg-primary text-black border-primary shadow-lg shadow-primary/30 scale-105"
                    : "bg-transparent text-gray-300 hover:bg-gray-800/50 hover:text-white border-primary/30 hover:border-primary/60 hover:scale-105"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="px-4 sm:px-8 pb-24 bg-black">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xl mb-2">No articles found</p>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/blogs/${blog.id}`}>
        <div className="bg-gradient-to-b from-gray-900/60 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 group cursor-pointer h-full flex flex-col hover:shadow-2xl hover:shadow-primary/20">
          {/* Blog Image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-primary text-black text-xs font-bold rounded-full shadow-lg">
                {blog.category}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Blog Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-primary font-medium text-sm">
                    {blog.author.name}
                  </p>
                  <p className="text-gray-500 text-xs">{blog.author.role}</p>
                </div>
              </div>
              <div className="text-gray-400 text-xs text-right">
                <p className="text-primary font-medium">{blog.date}</p>
                <p className="text-gray-500">{blog.readTime}</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 flex-1 leading-tight">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 opacity-90">
              {blog.excerpt}
            </p>

            {/* Read More Button */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center text-primary group-hover:text-yellow-400 transition-colors duration-300">
                <span className="text-sm font-semibold">Read Full Article</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </div>

              {/* Reading Progress Indicator */}
              <div className="w-8 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
