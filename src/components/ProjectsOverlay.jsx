import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectsOverlay = ({ show }) => {
  return (
    <div
      className={`absolute inset-0 flex bg-black/10 items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex gap-1 bg-[#1a1a1a] backdrop-filter backdrop-blur-md px-4 py-3 rounded-md items-c justify-center `}
      >
        <span className="text-white text-sm">View Project</span>
        <MdArrowOutward className="text-white"/> {/* Adjust size as needed */}
      </div>
    </div>
  );
};

export default ProjectsOverlay;
