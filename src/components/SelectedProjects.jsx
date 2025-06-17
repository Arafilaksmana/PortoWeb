import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "arte",
    title: "One Stop Edu Art Platform",
    description:
      "Arte is an innovative platform designed to break down barriers in public access to art, especially painting. Beyond its educational function, Arte also empowers emerging artists by providing a space to showcase and introduce their work to a broad audience. Our curated content includes interactive tutorials, expert insights, and virtual exhibitions, making art appreciation and creation more accessible than ever before.",
    image: "/arte.webp",
  },
  {
    id: "scholarium",
    title: "Global Learning",
    description:
      "We provide a comprehensive platform that helps students discover and access a wide range of global scholarship opportunities. Users can search for available scholarships and apply directly to the organizers, or take advantage of exclusive scholarship offers through our platform.",
    image: "/scholarium.webp",
  },
  {
    id:"tikom",
    title:"IT Course",
    description:"Contoh deskripsi",
    image:"",
  }
];

export default function SelectedProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="px-4 lg:px-26 py-12 lg:py-20 relative flex flex-col lg:flex-row gap-6 overflow-hidden tracking-tight h-fit">
      <div className="w-full lg:w-1/2">
        <h2 className="lg:text-5xl text-4xl">Explore my selected projects</h2>

        {/* Buttons */}
        <div className="mt-8 py-2 px-2  w-full lg:w-fit bg-[#f4f4f5] border-black/10 border rounded-lg  gap-1 flex">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`text-[16px] font-[Mono]  w-full lg:w-fit text-center px-6 py-2 rounded-sm transition-all duration-200 ease-in-out
              ${
                activeProject.id === project.id
                  ? "bg-[#EDEDEE] text-black pointer-events-none"
                  : "text-black hover:bg-[#EDEDEE]"
              }`}
            >
              {project.id.charAt(0).toUpperCase() + project.id.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Detail */}
        <div className="mt-20 lg:mt-20 w-full min-h-[220px] lg:min-h-[180px ] lg:w-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-2xl tracking-tight">{activeProject.title}</h3>
              <p className="mt-6 text-sm text-justify">
                {activeProject.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <a
          href="#"
          className="mt-6 block bg-[#EDEDEE] w-full text-center lg:w-fit text-black px-4 py-3 rounded-sm text-sm transition-transform duration-200 hover:scale-95"
        >
          View All Projects
        </a>
      </div>

      {/* Project Image */}
      <div className="lg:absolute lg:right-[-100px] lg:top-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-2 border border-black/20 rounded-md w-full lg:w-[800px]"
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="rounded-sm w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
