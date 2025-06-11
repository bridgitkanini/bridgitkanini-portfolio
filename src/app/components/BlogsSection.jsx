import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, excerpt, image, link }) => {
  return (
    <div className="bg-[#181919] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <Image src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-8">
        <h3 className="font-bold text-xl mb-6 text-gray-200">{title}</h3>
        <p className="text-white mb-8">{excerpt}</p>

        <Link
          href={link}
          target="_blank"
          className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
        >
          <span className="block  bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title:
        "Beyond the Tutorials: What Frontend Interviews Really Test and Why It Matters",
      excerpt:
        "You’ve got the basics down — React, HTML/CSS, a couple of CRUD apps. Maybe even a few projects on your GitHub that you're proud of. You’re officially not in tutorial hell anymore. Hurray! But when you sit across from an interviewer and they ask: “Ca...",
      image: "/images/blog1.jpeg",
      link: "https://bridgitkanini.hashnode.dev/beyond-the-tutorials-what-frontend-interviews-really-test-and-why-it-matters",
    },
    {
      title:
        "Africa's Builders Need a New North Star — It's Time to Solve, Not Just Ship",
      excerpt:
        "Why we must focus on solving real local problems, not just completing features. In a world obsessed with tech unicorns, valuation hype, and venture rounds, it’s easy for African startup founders to fall into the trap of building for buzz — not for impact...",
      image: "/images/blog2.jpg",
      link: "https://bridgitkanini.hashnode.dev/africas-builders-need-a-new-north-star-its-time-to-solve-not-just-ship",
    },
  ];

  return (
    <section id="blog" className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col items-center justify-center my-8 sm:mt-16">
          <span className="text-xs tracking-[.25em] text-amber-50 text-center sm:-mb-2">
            Articles
          </span>
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-black">
            From My Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto md:py-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="https://bridgitkanini.hashnode.dev/"
          target="_blank"
          className="mt-8 text-sm sm:text-xl px-20 inline-block py-2 w-fit rounded-full mr-4 bg-gradient-to-br from-amber-200 to-amber-600 hover:tracking-widest transition-all ease-in-out duration-1000 text-black"
        >
          Checkout More Articles
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
