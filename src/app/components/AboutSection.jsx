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
      <ul className="list-disc grid grid-cols-2 gap-x-1 pl-2 text-sm">
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
      <ul className="list-disc pl-2 text-sm">
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
    <section id="about" className="py-4 mx-auto px-8">
      <h2 className="text-center text-transparent mt-8 bg-clip-text bg-gradient-to-r from-amber-100 from-25% via-amber-500 via-50% to-amber-700 to-70% text-2xl sm:text-2xl lg:text-5xl lg:leading-normal font-black">
        About Me...
      </h2>
      <div className="md:grid md:grid-cols-2 gap-4 px-4 xl:gap-4 sm:py-4 xl:px-4">
        <Image
          src="/images/about-image02.png"
          alt="About Image"
          width={400}
          height={400}
          className="rounded-full mt-20 ml-10"
        />
        <div className="realtive md:mt-0 text-left flex flex-col h-full -ml-10 pr-10">
          <AchievementsSection />
          <p className="text-md lg:text-md ">
            I write JavaScript, ReactJS, HTML, and CSS; Sass, Tailwind CSS. I am
            passionate about creative problem-solving and have a keen eye for
            detail, always striving to enhance the design of web applications. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set.
          </p>
          <div className="flex flex-row justify-start py-4">
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
      </div>
      <div className="ml-80 -mt-8">
        <Link
          href="/#contact"
          className="absolute ml-72 mt-1 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
        >
          <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
            Request resume
          </span>
        </Link>
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
