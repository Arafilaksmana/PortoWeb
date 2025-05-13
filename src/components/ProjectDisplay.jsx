import { motion } from "framer-motion";

export default function ProjectDisplay({ project }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-8"
    >
      <div className="mt-8">
        <div className="w-full h-[600px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 mt-4">
          <div className="flex flex-col gap-2 flex-1/3 h-fi">
            <div className="bg-white/7 rounded-lg px-4 py-2">
              <h3 className="text-2xl tracking-tight">{project.title}</h3>
            </div>
            <div className="bg-white/7 rounded-lg px-4 py-2 flex items-center gap-4">
              <h4 className="text-[18px] tracking-tight">Technology:</h4>
              <div className="flex gap-4">{project.technologies}</div>
            </div>
          </div>
          <div className="flex-1/3 bg-white/7 rounded-lg px-4 py-2">
            <h4 className="text-[18px] tracking-tight">Description</h4>
            <p className="font-light mt-4 pb-4">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
