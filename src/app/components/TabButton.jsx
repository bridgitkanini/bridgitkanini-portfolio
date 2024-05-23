import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#1f1e39]" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`text-sm inline-block w-full sm:w-fit rounded-full mr-4 px-4 py-1 border border-amber-500 hover:tracking-widest transition-all ease-in-out duration-1000 ${buttonClasses} ${
          active
            ? "bg-gradient-to-br from-amber-200 to-amber-600"
            : "bg-[#241c0a] text-amber-500"
        }`}
      >
        {children}
      </p>
      {/* <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3"
      ></motion.div> */}
    </button>
  );
};

export default TabButton;
