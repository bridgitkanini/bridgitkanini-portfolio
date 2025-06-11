"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Bridgit was professional, fast, and delivered a sleek responsive site. Will work with her again!",
      author: "Upwork Client",
      project: "TailAdmin",
    },
    {
      text: "Excellent communication and great eye for design. She understood my needs and exceeded expectations.",
      author: "Upwork Client",
      project: "Avatar Generation Site",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-12 md:py-20 relative overflow-hidden">
      {/* Title Div */}
      <div className="relative flex flex-col items-center justify-center my-6 md:my-10 px-4">
        <span className="text-xs tracking-[.5em] text-amber-50 text-center -mb-2">
          Testimonials
        </span>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-black">
          Reviews
        </h2>
      </div>
      {/* Background decorative elements */}
      <div className="absolute bottom-1/3 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-orange-200/30 rounded-full blur-xl z-10"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-orange-200/30 rounded-full blur-xl z-10"></div>
      <div className="absolute top-30 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-orange-200/30 rounded-full blur-lg z-10"></div>

      <div className="container mx-auto rounded-2xl px-4 md:px-6 pt-8 md:pt-10 lg:pt-20 pb-20 md:pb-40 lg:pb-64 relative bg-[#181919]/30">
        {/* Subtitle Div */}
        <div className="relative flex flex-row items-start justify-between">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919] leading-tight">
            What people are saying
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
              about my work
            </span>
          </h2>
        </div>
      </div>

      {/* Single Testimonial Card */}
      <div className="max-w-4xl mx-auto -mt-16 md:-mt-32 px-4">
        <div className="bg-white/20 border border-amber-50/25 rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 relative">
          {/* Star Rating */}
          <div className="flex mb-4 md:mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-amber-400 fill-amber-400 mx-0.5 md:mx-1 md:w-6 md:h-6"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 text-center px-2">
          &quot;{currentTestimonial.text}&quot;
          </p>

          {/* Author Info */}
          <div className="text-center">
            <p className="italic text-white text-base md:text-lg mb-1">
              {currentTestimonial.author}
            </p>
            <p className="text-white text-xs md:text-sm">
              {currentTestimonial.project}
            </p>
          </div>
        </div>
      </div>

       {/* Navigation Buttons */}
       <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-4 px-4">
          <button
            onClick={prevTestimonial}
            className="text-sm w-12 h-12 md:w-fit md:h-fit rounded-full px-3 md:px-4 py-2 md:py-1 border border-amber-500 hover:bg-amber-300 bg-[#241c0a] text-amber-500 hover:text-amber-700 flex items-center justify-center"
          >
            <ChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-sm w-12 h-12 md:w-fit md:h-fit rounded-full px-3 md:px-4 py-2 md:py-1 border border-amber-500 bg-[#241c0a] hover:bg-amber-500 text-amber-500 hover:text-amber-700 flex items-center justify-center"
          >
            <ChevronRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
    </section>
  );
};

export default Testimonials;