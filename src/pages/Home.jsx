import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
  const [vh, setVh] = useState("100vh");

  useEffect(() => {
    const updateVh = () => {
      setVh(`${window.innerHeight}px`);
    };
    updateVh();

    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <>
      <div
        style={{ height: vh }}
        className="bg-[url('/arafi.png')] bg-cover bg-top bg-no-repeat w-full flex"
      >
        <div className="text-white text-3xl leading-9 ml-3 lg:ml-auto mr-auto lg:mr-[20%] lg:my-auto self-end pb-12 lg:pb-0">
          {/* Bungkus tiap baris teks dengan overflow-hidden agar terlihat seperti muncul dari bawah kontainer */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              I'm Dirga
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Frontend & Designer
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-dvh bg-black"></div>
    </>
  );
}

export default Home;
