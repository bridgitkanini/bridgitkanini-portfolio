"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { personalProjects, openSourceProjects } from "./ProjectsData.jsx";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  // Get filtered projects based on active tab
  const getFilteredProjects = () => {
    if (activeTab === "opensource") {
      return openSourceProjects;
    } else {
      return personalProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="xl:gap-16 sm:py-16 xl:px-16 mt-20"
    >
      <div className="relative flex flex-col items-center justify-center mt-8">
        <span className="text-xs tracking-[.5em] text-amber-50 text-center -mb-2">
          My work
        </span>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-black">
          What I have Done
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="text-amber-50 text-xs sm:text-base flex flex-row justify-center items-center gap-2 py-6">
        <button
          onClick={() => handleTabChange("personal")}
          className={`text-sm sm:text-xl inline-block w-full sm:w-fit rounded-full mr-4 px-4 py-1 border border-amber-500 hover:tracking-widest transition-all ease-in-out duration-1000 cursor-pointer ${
            activeTab === "personal"
              ? "bg-gradient-to-br from-amber-200 to-amber-600 text-black"
              : "bg-[#241c0a] text-amber-500"
          }`}
        >
          Personal Projects
        </button>
        <button
          onClick={() => handleTabChange("opensource")}
          className={`text-sm sm:text-xl inline-block w-full sm:w-fit rounded-full mr-4 px-4 py-1 border border-amber-500 hover:tracking-widest transition-all ease-in-out duration-1000 cursor-pointer ${
            activeTab === "opensource"
              ? "bg-gradient-to-br from-amber-200 to-amber-600 text-black"
              : "bg-[#241c0a] text-amber-500"
          }`}
        >
          Open Source Projects
        </button>
      </div>

      <div className="bg-[#181919] rounded-2xl">
        <ul className="flex flex-col md:flex-col gap-8 md:gap-12 p-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: index * 0.2 }}
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
              {index < filteredProjects.length - 1 && (
                <hr className="border-8 border-[#0d0c0d] mt-16 -mx-10" />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* <div className="flex justify-center">
        <Link
          href="/allprojects"
          className="mt-8 text-sm sm:text-xl px-20 inline-block py-2 w-fit rounded-full mr-4 bg-gradient-to-br from-amber-200 to-amber-600 hover:tracking-widest transition-all ease-in-out duration-1000 text-black"
        >
          Checkout More Projects
        </Link>
      </div> */}
    </section>
  );
};

export default ProjectsSection;
