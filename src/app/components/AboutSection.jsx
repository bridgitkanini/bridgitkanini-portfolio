"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/javascript-algorithms-and-data-structures"
            target="_blank"
            className="hover:text-teal-300"
          >
            freeCodeCamp - Javascript Algorithms and Data Structures.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/front-end-development-libraries"
            target="_blank"
            className="hover:text-teal-300"
          >
            freeCodeCamp - Frontend Web Development Libraries.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/data-visualization"
            target="_blank"
            className="hover:text-teal-300"
          >
            freeCodeCamp - Data Visualisation with D3.
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/bkm-code/responsive-web-design"
            target="_blank"
            className="hover:text-teal-300"
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
    <section className="text-[#1f1e39] py-24 bg-[#e0e1e1] mt-24 mx-auto px-12" id="about">
      <h2 className="text-center text-5xl font-bold text-[#1f1e39]">
        More About Me...
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image02.png"
          alt="About Image"
          width={500}
          height={500}
          className="-mt-8"
        />
        <div className="md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg py-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
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
