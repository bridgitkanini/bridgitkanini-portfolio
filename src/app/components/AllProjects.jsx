import React from "react";
import { projectsData } from "./ProjectsData.jsx";
import Link from "next/link.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AllProjects = () => {
  const boxStyle =
    "bg-[#181919] border-1 p-2 rounded-xl flex flex-col items-center justify-center hover:scale-105 duration-300";

  return (
    <div id="allprojects" className="xl:gap-16 sm:py-16 xl:px-16">
      <div className="flex flex-col my-16">
        <div className="flex items-center">
          <Link href="/#home">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-amber-400 text-sm hover:text-white transition-colors duration-300 animate-pulse"
                style={{ height: "2.4em" }}
              />
          </Link>
          <h1 className="ml-2 flex-grow text-center text-transparent bg-clip-text bg-gradient-to-r  from-amber-100 from-20% via-amber-300 via-40% to-amber-600 to-60% text-sm sm:text-sm lg:text-2xl lg:leading-normal font-black">
            BKM-CODE PORTFOLIO
          </h1>
        </div>
      </div>

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
