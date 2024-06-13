import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#0d0c0d] border z-10 border-t-[#181919] border-l-transparent border-r-transparent border-b-transparent">
      <div className="container p-4 mt-4 flex justify-between">
        <p className="text-xs sm:text-base text-slate-400">© Copyright 2024</p>
        <span className="text-xs text-white font-normal">BKM-CODE</span>
        <p className="text-xs sm:text-base text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;