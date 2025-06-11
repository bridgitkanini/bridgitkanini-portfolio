import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SingleProject = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#0d0c0d]">
      <div className="xl:gap-16 sm:py-16 xl:px-16 py-10 px-4 pb-20 sm:pb-1">
        <h1 className="ml-2 pb-10 flex-grow text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-100 from-20% via-amber-300 via-40% to-amber-600 to-60% text-lg sm:text-2xl lg:leading-normal font-black">
          BKM-CODE PORTFOLIO
        </h1>
        <div className="grid grid-flow-row gap-8">
          <h1 className="text-white text-xl sm:text-xl lg:text-4xl lg:leading-normal mb-2">
            Project {project.id} : {project.title}
          </h1>
          <div
            className="h-80 md:h-[500px] rounded-xl relative group"
            style={{
              background: `url(${project.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col gap-10 sm:w-[750px] sm:ml-60">
            <p className="text-white mt-4">{project.description2}</p>
            <div className="flex flex-row gap-4">
              <Link
                href={project.previewUrl}
                target="_blank"
                className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
              >
                <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
                  Go to {project.title}
                </span>
              </Link>
              <Link
                href={project.gitUrl}
                target="_blank"
                className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
              >
                <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
                  View Code
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/allprojects">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-amber-400 text-sm py-10 hover:text-white h-5 sm:h-10 transition-colors duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
