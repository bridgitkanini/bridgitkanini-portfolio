import React from "react";
import { projectsData } from "./ProjectsData.jsx";

const AllProjects = () => {
  const imgStyle = "flex items-center justify-center";

  return (
    <div id="allprojects" className="my-40 grid md:grid-cols-5 gap-4">
      {projectsData.map((project, i) => (
        <div
          key={i}
          className={`${imgStyle} ${i === 0 || i === 5 ? "md:col-span-3" : ""}`}
        >
          <img src={project.image} alt={project.alt} className="rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
