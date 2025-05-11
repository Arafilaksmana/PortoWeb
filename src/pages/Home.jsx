import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/arafi.png";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      <div className="bg-[url('/arafi.png')] bg-cover bg-top bg-no-repeat min-h-[100svh] w-full flex">
        <div className="text-white text-3xl leading-9 ml-3 lg:ml-auto mr-auto lg:mr-[20%] lg:my-auto self-end pb-12 lg:pb-0">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={bgLoaded ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              I'm Dirga
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={bgLoaded ? { y: "0%", opacity: 1 } : {}}
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
