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
      <ul className="list-disc grid grid-cols-2 gap-x-8 pl-2 text-sm">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Solidity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm">
        <li>ALX Africa</li>
        <li>Microsoft - LinkedIn Learning</li>
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
            href="https://www.linkedin.com/learning/certificates/49881f29b082b0fde0afc358fee16018b5fdddbebfc9860f0c2947adf1f6cd12?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoMpngNRNSp%2B7rCc13%2B8qhA%3D%3D"
            target="_blank"
            className="hover:text-amber-300"
          >
            Software Development by Microsoft and LinkedIn Learning.
          </a>
        </li>
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
      <div className="md:grid md:grid-cols-2 items-center justify-center gap-4 px-4 xl:gap-4 sm:py-4 xl:px-4">
        <Image
          src="/images/about-image02.png"
          alt="About Image"
          width={300}
          height={300}
          className="rounded-full mt-20 md:ml-10 object-cover sm:w-[400px] sm:h-[400px] mx-auto"
        />
        <div className="relative md:mt-0 sm:text-left flex flex-col h-full sm:-ml-10 sm:pr-10">
          <AchievementsSection />
          <p className="text-white text-sm md:text-base lg:text-lg mx-auto ">
            I bring a unique mix of frontend engineering, developer relations,
            and community leadership. I'm passionate about building software
            that is useful, inclusive, and scalable. I enjoy crafting delightful
            user experiences and mentoring upcoming developers, always striving
            to deliver real value through thoughtful collaboration across teams
            — from hackathons to ERP systems and open-source projects.  
            <br /> <br />
            I'm a quick learner, always expanding my knowledge and skill set,
            and I lead with empathy and intention in every project. Outside of
            coding, I enjoy organizing creative tech events that foster
            community and innovation.
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
          <div className="text-white mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="mt-5 ml-1 sm:ml-72">
          <Link
            href="/#contact"
            className="absolute sm:ml-64 sm:mt-1 px-1 inline-block py-1 w-fit rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
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
