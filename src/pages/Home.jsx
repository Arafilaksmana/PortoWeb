import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import EntryOverlay from "../components/EntryOverlay.jsx";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayExited, setOverlayExited] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Setup overlay timeout to hide it after 2 seconds
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1800);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Callback when overlay exit animation completes
  const handleOverlayExitComplete = () => {
    setOverlayExited(true);
  };

  const backgroundPosition = `center ${scrollY * 0.1}px`;

  return (
    <>
      <EntryOverlay
        show={showOverlay}
        onExitComplete={handleOverlayExitComplete}
      />

      <div
        style={{ backgroundPosition }}
        className="bg-[url('/arafi.png')] bg-top bg-cover lg:bg-cover w-full min-h-svh flex"
      >
        <div className="text-white tracking-tight text-3xl ml-3 lg:ml-auto mr-auto lg:mr-[20%] lg:my-auto self-end pb-12 lg:pb-0">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={overlayExited ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              I'm Dirga
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={overlayExited ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Frontend & Designer
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-black text-[#e0e0e0] px-4 lg:px-8 py-12 lg:py-20">
        <h3 className="text-3xl lg:text-6xl w-full lg:w-3/4 tracking-tight">
          Combining <span className="text-white">logic</span> and{" "}
          <span className="text-white">design</span> to create engaging digital
          experiences.
        </h3>
        <div className="flex lg:justify-end mt-8 lg:mt-12 lg:pr-12">
          <p className="w-full lg:w-1/2 lg:text-justify">
            Final-year student passionate about frontend development. I’ve built
            several projects focused on clean, user-friendly interfaces and love
            collaborating on meaningful digital experiences.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1/2">
            <img src="" alt="" />
          </div>
          <div className="flex-1/2 lg:mr-12 mt-15">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="font-[IBM] uppercase">Experience</div>
            </div>
            <div className="mt-8">
              <div className="font-light text-white/50">[ 01 ]</div>
              <div className="text-3xl uppercase text-white mt-3">
                Programming Instructor
              </div>
              <div className="flex justify-between font-light text-[14px]">
                <div className="mt-3">TIKOM</div>
                <div className="mt-3">2024</div>
              </div>
            </div>
            <hr className="mt-4 text-white/10" />
            <div className="mt-6">
              <div className="font-light text-white/50">[ 02 ]</div>
              <div className="text-3xl uppercase text-white mt-3">
                Frontend Developer
              </div>
              <div className="flex justify-between font-light text-[14px]">
                <div className="mt-3">DEVART</div>
                <div className="mt-3">2024</div>
              </div>
            </div>
            <hr className="mt-4 text-white/10" />
            <div className="mt-6">
              <div className="font-light text-white/50">[ 03 ]</div>
              <div className="text-3xl uppercase text-white mt-3">
                Frontend Developer
              </div>
              <div className="flex justify-between font-light text-[14px]">
                <div className="mt-3">SCHOLARIUM</div>
                <div className="mt-3">2023</div>
              </div>
            </div>
            <hr className="mt-4 text-white/10" />
          </div>
        </div>
      </div>

      {/* <div className="h-[200px]"></div> */}
    </>
  );
}
