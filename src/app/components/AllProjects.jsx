import React from "react";
import { projectsData } from "./ProjectsData.jsx";
import Link from "next/link.js";

const AllProjects = () => {
  const boxStyle =
    "bg-[#181919] border-1 p-2 rounded-xl flex flex-col items-center justify-center hover:scale-105 duration-300";

  return (
    <div id="allprojects" className="my-40">
      <div className="grid grid-cols-4 auto-rows-[400px] gap-4 my-10">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 0 || i === 4 || i === 5 || i === 6
                ? "md:col-span-2"
                : i === 2
                ? "md:row-span-2"
                : ""
            }`}
          >
            <Link href="/singleproject" key={i}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="rounded-xl"
                />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
