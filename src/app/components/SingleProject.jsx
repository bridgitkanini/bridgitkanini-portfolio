import React from "react";
import { projectsData } from "../../../components/ProjectsData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SingleProject = ({ params }) => {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="xl:gap-16 sm:py-16 xl:px-16">
      <h1 className="ml-2 mb-10 flex-grow text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-100 from-20% via-amber-300 via-40% to-amber-600 to-60% text-sm sm:text-sm lg:text-2xl lg:leading-normal font-black">
        BKM-CODE PORTFOLIO
      </h1>
      <div>
        <h1>
          Project {project.id} : {project.title}
        </h1>
        <div
          className="h-80 md:h-96 rounded-xl relative group"
          style={{
            background: `url(${project.image})`,
            backgroundSize: "cover",
          }}
        ></div>
        <p>{project.description}</p>

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
      <Link href="/#allprojects">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-amber-400 text-sm hover:text-white transition-colors duration-300 animate-pulse"
          style={{ height: "2.4em" }}
        />
      </Link>
    </div>
  );
};

export default SingleProject;

// Required to fetch the dynamic params
export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
  };
}
