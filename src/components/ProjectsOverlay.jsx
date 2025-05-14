import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectsOverlay = ({ show }) => {
  return (
    <div
      className={`absolute inset-0 flex  items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex gap-2 bg-black/50 backdrop-filter backdrop-blur-md w-40 h-40  rounded-full items-center justify-center transition-opacity duration-300`}
      >
        <span className="text-white font-light">View Project</span>
        <MdArrowOutward className="text-white"/> {/* Adjust size as needed */}
      </div>
    </div>
  );
};

export default ProjectsOverlay;
