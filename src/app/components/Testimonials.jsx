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
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Title Div */}
      <div className="relative flex flex-col items-center justify-center my-10">
        <span className="text-xs tracking-[.5em] text-amber-50 text-center -mb-2">
          Testimonials
        </span>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-black">
          Reviews
        </h2>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl z-10"></div>
      <div className="absolute top-30 right-1/4 w-24 h-24 bg-orange-200/30 rounded-full blur-lg z-10"></div>

      <div className="container mx-auto rounded-2xl px-4 md:px-6 pt-10 md:pt-20 pb-20 md:pb-64 relative bg-[#181919]">
        {/* Subtitle Div */}
        <div className="relative flex flex-row items-start justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919] leading-tight">
            What people are saying
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
              about my work
            </span>
          </h2>
        </div>
      </div>

      {/* Single Testimonial Card */}
      <div className="max-w-4xl mx-auto -mt-32">
        <div className="bg-white/20 border border-amber-50/25 rounded-2xl shadow-lg p-8 md:p-12 relative">
          {/* Star Rating */}
          <div className="flex mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-amber-400 fill-amber-400 mx-1"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-8 text-center font-medium">
            "{currentTestimonial.text}"
          </p>

          {/* Author Info */}
          <div className="text-center">
            <p className="font-semibold text-white text-lg mb-1">
              {currentTestimonial.author}
            </p>
            <p className="text-white text-sm">
              {currentTestimonial.project}
            </p>
          </div>
        </div>
      </div>

       {/* Navigation Buttons */}
       <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="text-sm w-full sm:w-fit rounded-full mr-4 px-4 py-1 border border-amber-500 hover:bg-amber-300 bg-[#241c0a] text-amber-500 hover:text-amber-700"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-sm w-full sm:w-fit rounded-full mr-4 px-4 py-1 border border-amber-500 bg-[#241c0a] hover:bg-amber-500 text-amber-500 hover:text-amber-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
    </section>
  );
};

export default Testimonials;
