import React from "react";
import { projectsData } from "./ProjectsData.jsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const AllProjects = () => {
  const boxStyle =
    "flex flex-col items-center justify-center hover:scale-105 duration-300";

  return (
    <div id="allprojects" className="xl:gap-16 sm:py-16 xl:px-16 mx-2">
      <div className="flex flex-col my-10 sm:mb-16">
        <div className="flex items-center">
          <h1 className="ml-2 flex-grow text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-100 from-20% via-amber-300 via-40% to-amber-600 to-60% text-lg sm:text-2xl lg:leading-normal font-black">
            BKM-CODE PORTFOLIO
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <span className="text-white text-xs mb-1">click to view</span>
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-amber-400 text-sm sm:text-2xl animate-bounce"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 h-full w-full">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 0 || i === 4 || i === 5 || i === 6
                ? "col-span-2"
                : i === 2
                ? "row-span-2"
                : ""
            }`}
          >
            <Link href={`/singleproject/${project.id}`}>
              <img
                src={project.image}
                alt={project.alt}
                className="sm:h-full"
              />
            </Link>
          </div>
        ))}
      </div>
      <Link href="/#home">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-amber-400 text-sm my-10 hover:text-white h-5 sm:h-10 transition-colors duration-300"
        />
      </Link>
    </div>
  );
};

export default AllProjects;
