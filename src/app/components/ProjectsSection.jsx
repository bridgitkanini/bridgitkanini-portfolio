"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projectsData } from "./ProjectsData.jsx";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.slice(0, 2).filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="xl:gap-16 sm:py-16 xl:px-16 mt-64">
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
                techStack={project.techStack}
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
