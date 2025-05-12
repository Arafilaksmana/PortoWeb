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
        <div className="text-white text-3xl ml-3 lg:ml-auto mr-auto lg:mr-[20%] lg:my-auto self-end pb-12 lg:pb-0">
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

      <div className="bg-black h-dvh">
        <h3 className="text-white">
          I blend logic and aesthetics to craft digital spaces that feel alive.
          Every line of code I write shapes an experience that others can feel
          and use.
        </h3>
      </div>
    </>
  );
}
