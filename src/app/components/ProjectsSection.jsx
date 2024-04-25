"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A responsive and customizable portfolio website using NextJs and Tailwind",
    image: "/images/projects/1.png",
    alt: "Project 1 Image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bridgitkanini/bridgitkanini-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CineVerse",
    description: "An app that allows the user to search for movies based on keywords in the title.",
    image: "/images/projects/CineVerse.png",
    alt: "Project 2 Image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bridgitkanini/CineVerse",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Shopping E-Commerce App with React, Strapi, Stripe",
    image: "/images/projects/3.png",
    alt: "Project 3 Image",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mental Health Quotes",
    description: "An SPA generating fresh quotes and background colors with each 'Next' button press, enabling users to share uplifting messages on mental health across social media platforms.",
    image: "/images/projects/Random-Quote-Machine.png",
    alt: "Project 4 Image",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/bridgitkanini/fCC-front-end",
    previewUrl: "https://codepen.io/Bridgit-Kanini/pen/zYeQNWR",
  },
  {
    id: 5,
    title: "Simple CRUD App",
    description: "A simple app demonstrating CRUD operations in backend development.",
    image: "/images/projects/Simple-CRUD-App.png",
    alt: "Project 5 Image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bridgitkanini/CRUD-API-Node-Express-Mongodb",
    previewUrl: "/",
  },
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
    <section id="projects" className="mt-24 mx-auto px-12 py-20 bg-[#e0e1e1]">
      <h2 className="text-center text-5xl font-bold text-[#1f1e39] mt-4 mb-8 md:mb-12">
        What I Have Done...
      </h2>
      <div className="text-[#1f1e39] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
