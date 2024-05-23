import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="xl:gap-16 sm:py-16 xl:px-16 mb-40">
      <div className="relative flex flex-col items-center justify-center">
        <span className="text-xs tracking-[.25em] text-amber-50 text-center -mb-2">
          Technologies
        </span>
        <h2 className="text-center mb-8 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 from-25% via-amber-500 via-50% to-amber-700 to-70% sm:text-2xl lg:text-5xl lg:leading-normal text-2xl font-black">
          What I Do
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center my-16">
        <div className="flex flex-col absolute justify-center items-center gap-8">
          <div className="flex flex-row gap-8">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Javascript</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">React</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">HTML</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">CSS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Sass</span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">NextJS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">NodeJS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="30"
                height="25"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">MongoDB</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">MySQL</span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">PostgreSQL</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">ExpressJS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="30"
                height="25"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Redux</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
                alt="d3js"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">D3</span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Tailwind CSS</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Bootstrap</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Typescript</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Postman</span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Figma</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                alt="babel"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Babel</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Git</span>
            </div>
            <div className="flex flex-row bg-[#d0cecb] text-[#4c4a4b] rounded-full w-fit h-fit px-8 py-1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
                width="30"
                height="30"
                className="mr-2 -ml-4"
              />
              <span className="text-2xl">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
