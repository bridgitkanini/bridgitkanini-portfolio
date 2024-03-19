import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" >
      <h2 className="text-center text-5xl font-bold text-white mt-4 mb-8 md:mb-12">
        What I Do...
      </h2>
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-4">
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="100"
            height="100"
          />
        </a>
        <a href="https://d3js.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
            alt="d3js"
            width="100"
            height="100"
          />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="100"
            height="100"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="100"
            height="100"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width="100"
            height="100"
          />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width="100"
            height="100"
          />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="100"
            height="100"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="100"
            height="100"
          />
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="100"
            height="100"
          />
        </a>
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            width="100"
            height="100"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="100"
            height="100"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="100"
            height="100"
          />
        </a>
      </div>
    </section>
  );
};

export default SkillsSection;
