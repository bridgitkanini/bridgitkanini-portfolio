import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  techStack,
}) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div
        className="h-64 md:h-80 w-80 md:w-[550px] rounded-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="rounded-b-xl mt-3 sm:ml-16 bg-[#181818] py-6 px-4">
        <h5 className="text-amber-500 text-xl font-bold mb-2">{title}</h5>
        <p className="text-white text-sm py-4">{description}</p>
        <div className="flex flex-row gap-2 py-4">
          <p className="text-white text-sm">TechStack:</p>
          <div className="flex flex-row flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-row bg-[#d0cecb] text-[#333233] rounded-full w-fit h-fit px-3 py-1"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="mr-2"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "20px",
                    maxHeight: "20px",
                  }}
                />
                <span className="text-xs">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 text-xs sm:text-base">
          <Link
            href={previewUrl}
            target="_blank"
            className="mt-1 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 hover:bg-amber-500 text-amber-400"
          >
            <span className="block bg-[#241c0a] hover:tracking-widest transition-all ease-in-out duration-1000 rounded-full px-4 py-1 -mx-0.5 -my-0.5">
              Go to {title}
            </span>
          </Link>
          <Link
            href={gitUrl}
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
  );
};

export default ProjectCard;
