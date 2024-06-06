import React from "react";
import { projectsData } from "./ProjectsData.jsx";

const AllProjects = () => {
  const imgStyle = "flex items-center justify-center";

  return (
    <div id="allprojects" className="my-40">
      <div className="grid md:grid-cols-6 md:grid-row-4 gap-4">
        {projectsData.slice(0, 3).map((project, i) => (
          <div
            key={i}
            className={`${imgStyle} ${
              i === 0
                ? "md:col-span-4 md:row-span-2"
                : i === 1 || i === 2
                ? "md:col-span-2"
                : ""
            }`}
          >
            <img src={project.image} alt={project.alt} className="rounded-xl" />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-6 md:grid-row-4 gap-4">
        {projectsData.slice(3).map((project, i) => (
          <div
            key={i}
            className={`${imgStyle} ${
              i === 2
                ? "md:col-span-4 md:row-span-2"
                : i === 1 || i === 0
                ? "md:col-span-2"
                : ""
            }`}
          >
            <img src={project.image} alt={project.alt} className="rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;