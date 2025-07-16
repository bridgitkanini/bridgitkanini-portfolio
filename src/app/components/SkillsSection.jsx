"use client";

import React from "react";
import Image from "next/image";
const ToolCard = ({ icon, title, description, content }) => {
  return (
    <div className="bg-[#181919] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 lg:p-6">
        <div className="flex items-center mb-3">
          <div className="bg-gradient-to-br from-amber-200 to-amber-600 p-1 lg:p-2 rounded-lg mr-3">{icon}</div>
          <h3 className="font-bold text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
            {title}
          </h3>
        </div>
        <p className="text-gray-300 mb-3 text-sm lg:text-base">{description}</p>
        <div className="mt-3 pt-3 border-t border-gray-800">
          <p className="text-gray-300 text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    {
      name: "Javascript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Sass",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    },
    {
      name: "NextJS",
      icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "NodeJS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "ExpressJS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Redux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "D3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
      name: "Typescript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "Babel",
      icon: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Solidity",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
    },
    // Skills without specific icons
    { name: "RestAPI", icon: null },
    { name: "Odoo", icon: null },
    { name: "Shadcn UI", icon: null },
  ];

  return (
    <section id="skills" className="pt-20 lg:pt-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Title */}
        <div className="relative flex flex-col items-center justify-center">
          <span className="text-xs tracking-[.25em] text-amber-50 text-center -mb-2">
            Technologies
          </span>
          <h2 className="text-center mb-2 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% sm:text-3xl lg:text-5xl lg:leading-normal text-3xl font-black">
            What I Do
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Side - Skills (1/3) */}
          <div className="xl:col-span-1 space-y-8 pt-5">
            <div className="text-center xl:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
                Technical Skills
              </h2>
              <p className="text-gray-300 mb-6">
                Technologies and tools I work with regularly
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm">
                With a strong foundation in the React ecosystem and Python APIs,
                my interests also extend to ERP customizations and Web3
                experiments. I have a keen eye for design, a creative approach
                to problem-solving, and a continuous drive to improve how web
                applications function and feel.
              </p>
            </div>

            {/* All Skills Combined */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 text-gray-800 rounded-full px-3 py-2 shadow-sm hover:shadow-md hover:bg-gray-400 transition-all duration-200 border border-gray-300"
                  >
                    {skill.icon && (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                    )}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Tools & Work (2/3) */}
          <div className="xl:col-span-2 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
                How I Work
              </h2>
              <p className="text-gray-300 mb-6">
                Deep dive into my approach with key technologies
              </p>
            </div>

            {/* Tool Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <ToolCard
                icon={
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="React"
                    width={30}
                    height={30}
                  />
                }
                title="React"
                description="How I use React in projects"
                content="React is my go-to library for building responsive, modern UIs. I've used it extensively in both client and personal projects—from simple SPAs to large-scale apps with complex state management using tools like Zustand and Redux. I'm comfortable with hooks, reusable components, and performance optimization."
              />
              <ToolCard
                icon={
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    width={30}
                    height={30}
                  />
                }
                title="TypeScript"
                description="Why I love TypeScript"
                content="TypeScript helps me write safer and more maintainable code. I use it in almost every project to define clear interfaces, catch bugs early, and improve team collaboration. It's especially helpful when working with large codebases or integrating APIs."
              />
              <ToolCard
                icon={
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    alt="Next.js"
                    width={30}
                    height={30}
                  />
                }
                title="Next.js"
                description="How I use Next.js"
                content="Next.js is my preferred framework for building fullstack applications. I've used it to implement SSR, dynamic routing, and API routes in multiple projects. Its hybrid rendering capabilities and seamless integration with Vercel make deployment and scaling easy."
              />
              <ToolCard
                icon={
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="Node.js"
                    width={30}
                    height={30}
                  />
                }
                title="Node.js"
                description="What I use Node.js for"
                content="I use Node.js as the foundation for backend logic in projects where I need custom APIs or real-time features. Whether with Express or building RESTful routes in a Next.js app, I'm confident in setting up servers, handling requests, and working with tools like Prisma or MongoDB."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
