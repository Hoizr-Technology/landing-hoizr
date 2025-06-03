import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Blog, blogs } from "@/content/blogs";
import TextLogo from "@/assets/logo/text.png";

export default function BlogDetailPage() {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [sidebarBlogs, setSidebarBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blogId && typeof blogId === "string") {
      setIsLoading(true);
      const currentBlog = blogs.find((b) => b.id === blogId);
      if (currentBlog) {
        setBlog(currentBlog);

        // Get related blogs (same category, excluding current)
        const related = blogs
          .filter(
            (b) =>
              b.category === currentBlog.category && b.id !== currentBlog.id
          )
          .slice(0, 3);
        setRelatedBlogs(related);

        // Get sidebar blogs (different from current, limit to 4)
        const sidebar = blogs
          .filter((b) => b.id !== currentBlog.id)
          .slice(0, 4);
        setSidebarBlogs(sidebar);

        setIsLoading(false);
      } else {
        // Blog not found, redirect to blogs page
        router.push("/blogs");
      }
    } else if (router.isReady && !blogId) {
      // No blogId and router is ready, redirect to blogs page
      router.push("/blogs");
    }
  }, [blogId, router.isReady, router]);

  if (isLoading || !blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Image with Fixed Logo and Category Badge - Increased Height */}
      <div className="relative h-80 md:h-[32rem] lg:h-[36rem] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        {/* Enhanced gradient with more blur at bottom */}
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
              className="w-24 md:w-32 cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Category Badge in Top Right */}
        <div className="absolute top-6 right-6">
          <span className="px-4 py-2 bg-primary text-black text-sm font-bold rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-4 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/blogs">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300 group mb-8">
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: -3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </motion.svg>
              <span className="text-sm font-medium">Back to All Articles</span>
            </button>
          </Link>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Column - Main Blog Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary font-medium text-lg">
                        {blog.author.name}
                      </p>
                      <p className="text-primary text-sm">{blog.author.role}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-6 text-primary text-sm font-medium">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6">
                  {blog.excerpt}
                </p>
              </motion.div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none mb-16"
              >
                <div
                  className="blog-content text-gray-300 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/50 rounded-lg p-8 border border-primary/20 mb-16"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {blog.author.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {blog.author.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {blog.author.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Vertical Blog List Sidebar */}
            <div className="lg:col-span-1">
              {sidebarBlogs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="sticky top-8"
                >
                  <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-3">
                    <span className="text-primary">TRENDING</span>{" "}
                    <span className="text-white">ARTICLES</span>
                  </h2>

                  <div className="space-y-4">
                    {sidebarBlogs.map((sidebarBlog, index) => (
                      <VerticalBlogCard
                        key={sidebarBlog.id}
                        blog={sidebarBlog}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Section - Related Articles */}
          {relatedBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-16 border-t border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="font-chemre text-primary">RELATED</span>{" "}
                <span className="font-pinyon text-primary">ARTICLES</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <RelatedBlogCard
                    key={relatedBlog.id}
                    blog={relatedBlog}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Bottom Section - More Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-16 border-t border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="font-chemre text-primary">MORE</span>{" "}
              <span className="font-pinyon text-primary">INSIGHTS</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 8)
                .map((otherBlog, index) => (
                  <SmallBlogCard
                    key={otherBlog.id}
                    blog={otherBlog}
                    index={index}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for Blog Content */}
      <style jsx global>{`
        .blog-content h3 {
          color: #fbbf24;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
        }

        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .blog-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
          list-style-type: disc;
        }
      `}</style>
    </div>
  );
}

// New Vertical Blog Card Component for Sidebar
function VerticalBlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blogs/${blog.id}`}>
        <div className="bg-gray-900/30 rounded-lg overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300 group cursor-pointer hover:bg-gray-900/50">
          <div className="relative h-20 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            {/* Small Category Badge */}
            <div className="absolute top-1 right-1">
              <span className="px-2 py-1 bg-primary/90 text-black text-xs font-bold rounded">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="p-3">
            <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
              {blog.title}
            </h3>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>

            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Read More Indicator */}
            <div className="mt-2 flex items-center text-xs text-primary group-hover:text-primary-light">
              <span>Read more</span>
              <svg
                className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SmallBlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/blogs/${blog.id}`}>
        <div className="bg-gray-900/30 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 group cursor-pointer">
          <div className="relative h-32 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 bg-primary text-black text-xs font-bold rounded-full">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="p-3">
            <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {blog.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2">{blog.excerpt}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function RelatedBlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blogs/${blog.id}`}>
        <div className="bg-gray-900/30 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 group cursor-pointer">
          <div className="relative h-32 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-4">
            <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {blog.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
