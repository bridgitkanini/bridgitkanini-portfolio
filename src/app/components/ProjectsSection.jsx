"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  // {
  //   id: 1,
  //   title: "React Portfolio Website",
  //   description: "A responsive and customizable portfolio website using NextJs and Tailwind",
  //   image: "/images/projects/1.png",
  //   alt: "Project 1 Image",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/bridgitkanini/bridgitkanini-portfolio",
  //   previewUrl: "/",
  // },
  {
    id: 2,
    title: "AfriVazi",
    description:
      "Designed and implemented a shopping app dedicated to African-inspired fashion, featuring vibrant and culturally rich designs like Ankara, Asoebi, and Dashiki. The app offers a seamless user experience, integrating advanced search and filter options to help users find their perfect style.",
    description2: "",
    image: "/images/projects/3.png",
    alt: "Project 2 Image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bridgitkanini/AfriVazi",
    previewUrl: "https://afri-vazi.vercel.app/",
    techStack: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "NodeJS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "MySQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Sass",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      },
      {
        name: "Javascript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "CineVerse",
    description:
      "Created a dynamic movie reviews app that allows users to explore, rate, and review the latest films. The app features a user-friendly interface with personalized recommendations, advanced search capabilities, and community engagement tools.",
    image: "/images/projects/CineVerse.png",
    alt: "Project 3 Image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bridgitkanini/CineVerse",
    previewUrl: "/",
    techStack: [
      {
        name: "Javascript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "NodeJS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Mental Health Quotes",
  //   description: "An SPA generating fresh quotes and background colors with each 'Next' button press, enabling users to share uplifting messages on mental health across social media platforms.",
  //   image: "/images/projects/Random-Quote-Machine.png",
  //   alt: "Project 4 Image",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "https://github.com/bridgitkanini/fCC-front-end",
  //   previewUrl: "https://codepen.io/Bridgit-Kanini/pen/zYeQNWR",
  // },
  // {
  //   id: 5,
  //   title: "Simple CRUD App",
  //   description: "A simple app demonstrating CRUD operations in backend development.",
  //   image: "/images/projects/Simple-CRUD-App.png",
  //   alt: "Project 5 Image",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/bridgitkanini/CRUD-API-Node-Express-Mongodb",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-96 mx-auto px-12">
      <div className="relative flex flex-col items-center justify-center mt-16">
        <span className="text-xs tracking-[.5em] text-amber-50 text-center -mb-2">
          My work
        </span>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-2xl sm:text-2xl lg:text-5xl lg:leading-normal font-black">
          What I have Done
        </h2>
      </div>
      <div className="text-amber-50 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <div className="bg-[#181919] rounded-2xl">
        <ul ref={ref} className="flex flex-col md:flex-col gap-8 md:gap-12 p-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                techStack={project.techStack} // Pass tech stack data here
              />
              {index === 0 && (
                <hr className="border-8 border-[#0d0c0d] mt-16 -mx-10" />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Link
          href="/allprojects"
          className="mt-8 text-xl px-20 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-200 to-amber-600 hover:tracking-widest transition-all ease-in-out duration-1000 text-black"
        >
          Checkout More Projects
        </Link>
        <Link
          href="/singleproject"
          className="mt-8 text-xl px-20 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-200 to-amber-600 hover:tracking-widest transition-all ease-in-out duration-1000 text-black"
        >
          Checkout Single Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
