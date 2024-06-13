"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AchievementsSection from "./AchievementsSection";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc grid grid-cols-2 gap-x-8 sm:gap-x-1 pl-2 text-sm">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm">
        <li>freeCodeCamp.org</li>
        <li>
          Jomo Kenyatta University of Agriculture and Technology, Nairobi -
          Kenya
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-sm -mt-2">
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/javascript-algorithms-and-data-structures"
            target="_blank"
            className="hover:text-amber-300"
          >
            freeCodeCamp - Javascript Algorithms and Data Structures.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/front-end-development-libraries"
            target="_blank"
            className="hover:text-amber-300"
          >
            freeCodeCamp - Frontend Web Development Libraries.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/data-visualization"
            target="_blank"
            className="hover:text-amber-300"
          >
            freeCodeCamp - Data Visualisation with D3.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/responsive-web-design"
            target="_blank"
            className="hover:text-amber-300"
          >
            freeCodeCamp - Backend Web Development and APIs.
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-2 mx-auto px-8 sm:mb-24 "
    >
      <div className="relative flex flex-col items-center justify-center mt-8 sm:mt-16">
        <span className="text-xs tracking-[.25em] text-amber-50 text-center sm:-mb-2">
          Get to know me
        </span>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-black">
          About Me
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 px-4 xl:gap-4 sm:py-4 xl:px-4">
        <Image
          src="/images/about-image02.png"
          alt="About Image"
          width={300}
          height={300}
          className="rounded-full mt-20 md:ml-10 object-contain sm:w-[400px] sm:h-[400px] mx-auto"
        />
        <div className="relative ml-8 md:mt-0 sm:text-left flex flex-col items-center justify-center h-full sm:-ml-10 pr-10">
          <AchievementsSection />
          <p className="text-sm md:text-xl lg:text-2xl mx-auto ">
            I write JavaScript, ReactJS, HTML, and CSS; Sass, Tailwind CSS. I am
            passionate about creative problem-solving and have a keen eye for
            detail, always striving to enhance the design of web applications. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set.
          </p>
          <div className="flex flex-row justify-start gap-1 py-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="ml-8 mt-5 sm:ml-80 sm:-mt-14">
          <Link
            href="/#contact"
            className="absolute sm:ml-72 sm:mt-1 px-1 inline-block py-1 sm:w-full w-fit rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
          >
            <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
              Request resume
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// I am a self-taught programmer currently specializing in Frontend Web
// Development. My expertise lies in JavaScript, ReactJS, HTML, and
// CSS; Sass, Tailwind CSS. I am passionate about creative
// problem-solving and have a keen eye for detail, always striving to
// the design of web applications. I am a quick learner and I
// am always looking to expand my knowledge and skill set. Currently, I
// am delving into NodeJS, full-stack web development, and advanced
// computer science algorithms. I thrive in collaborative environments
// and am adept at working within teams to achieve goals, meet targets,
// and provide innovative technological solutions.
