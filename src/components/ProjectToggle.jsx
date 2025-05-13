export default function ProjectToggle({ currentProjectKey, onProjectChange }) {
    return (
      <div className="flex justify-center mt-12">
        <div className="bg-[#171b1b] rounded-xl flex">
          <button
            onClick={() => onProjectChange("scholarium")}
            className={`text-[16px] tracking-tight text-center w-[80px] rounded-xl box-content px-4 py-2 cursor-pointer  transition-colors duration-300 ease-in-out ${
              currentProjectKey === "scholarium" ? "bg-[#f4f4f5] text-black" : ""
            }`}
          >
            Scholarium
          </button>
          <button
            onClick={() => onProjectChange("arte")}
            className={`text-[16px] tracking-tight text-center w-[80px] rounded-xl box-content px-4 py-2 cursor-pointer  transition-colors duration-300 ease-in-out ${
              currentProjectKey === "arte" ? "bg-[#f4f4f5] text-black" : ""
            }`}
          >
            Arte
          </button>
        </div>
      </div>
    );
  }
  