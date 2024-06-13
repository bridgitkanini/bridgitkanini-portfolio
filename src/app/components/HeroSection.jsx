"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section id="home" className="py-4 mx-auto px-8 mb-8">
      <div className="flex flex-col justify-center items-center mt-12 gap-2 sm:gap-0">
        {/* <div className="grid grid-cols-1 sm:grid-cols-12"> */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r  from-amber-200 from-25% via-amber-400 via-50% to-amber-600 to-70% text-2xl sm:text-2xl lg:text-5xl lg:leading-normal font-black">
          Hello, I&apos;m{" "}
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center"
        >
          <h1 className="text-white mb-2 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "Bridgit Kanini",
                1000,
                "A Frontend Web Developer",
                1000,
                "A Javascript Enthusiast",
                1000,
                "A Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        <p className="text-[#ADB7BE] text-base text-center sm:text-lg mb-2 lg:text-base">
          Transforming Ideas into Dynamic, Visually Engaging Web Experiences
        </p>
        <div>
          <Link
            href="/#contact"
            className="text-center px-2 sm:px-5 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-200 to-amber-600 hover:tracking-widest transition-all ease-in-out duration-1000 text-black font-semibold"
          >
            Hire Me
          </Link>
          <Link
            href="/#about"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400 mt-3"
          >
            <span className="text-center block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
              More About Me
            </span>
          </Link>
        </div>
        <div className="flex mt-4 ml-4">
          <div className="hidden sm:flex flex-col">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-4 py-1 mb-16 mt-14 ml-2">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">Javascript</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-4 py-1 mb-16 -ml-20">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">ReactJS</span>
            </div>
            <div className="flex bg-[#d0cecb] text-[#4c4a4b] rounded-full px-4 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">Tailwind CSS</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mx-4">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
          <div className="hidden md:flex flex-col">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-4 py-1 mb-16 mt-14">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">NodeJS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-4 py-1 mb-16 ml-20">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">MongoDB</span>
            </div>
            <div className="flex bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-4 py-1 ml-8">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="25"
                height="25"
                className="mr-2"
              />
              <span className="">MySQL</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 -ml-2">
          <span className="text-xs mb-1">scroll to view</span>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="text-amber-400 text-2xl animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
