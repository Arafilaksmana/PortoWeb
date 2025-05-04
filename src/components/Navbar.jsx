import React, { useState, useRef, useEffect } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Contact", path: "/contact" },
  ];

  const currentIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    navigate(pages[prevIndex].path);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    navigate(pages[nextIndex].path);
  };

  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Navbar Container with Scale Animation */}
      <motion.div
        ref={navbarRef}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 box-border bg-[#000000CC] text-white rounded-[32px] px-3 py-3 shadow-md min-w-[200px]"
        initial={false}
        animate={{
          scale: isExpanded ? 1.05 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isExpanded ? (
          <div className="flex gap-4 items-center justify-between">
            <button
              onClick={goToPrev}
              className="flex justify-center items-center bg-[#FFFFFF1A] p-[10px] rounded-full hover:scale-110 transition-transform duration-200"
            >
              <IoIosArrowBack className="text-[11px]" />
            </button>

            <div className="relative h-5 w-28 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute text-sm font-medium tracking-tight"
                >
                  {pages[currentIndex]?.name || "Halaman Tidak Dikenal"}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goToNext}
              className="flex justify-center items-center bg-[#FFFFFF1A] p-[10px] rounded-full hover:scale-110 transition-transform duration-200"
            >
              <IoIosArrowForward className="text-[11px]" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="relative h-5 w-28 flex items-center justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname + "-default"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute text-base lg:text-sm font-medium tracking-tight ml-2"
                >
                  {pages[currentIndex]?.name || "Halaman Tidak Dikenal"}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsExpanded(true)}
              className="flex justify-center items-center bg-[#FFFFFF1A] p-[10px] rounded-full hover:scale-110 transition-transform duration-200"
            >
              <IoIosArrowDown className="text-[11px]" />
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;
