import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const SingleProject = () => {
  return (
    <div id="singleproject" className="my-40">
      <h3>BKM-CODE PORTFOLIO</h3>
      <h1>
        Project {id} {title}
      </h1>
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description2}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        techStack={project.techStack} // Pass tech stack data here
      />
      <div className="flex flex-row gap-4">
        <Link
          href="" 
          target="_blank"
          className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
        >
          <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
            Go to {title}
          </span>
        </Link>
        <Link
          href=""
          target="_blank"
          className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
        >
          <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
            View Code
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
