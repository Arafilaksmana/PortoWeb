import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const words = ["Frontend", "Optimize", "Interface"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // 2 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 lg:px-8 pt-4">
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex h-[15dvh] lg:h-[40dvh]">
          <div className="w-1/2 lg:w-1/3">Dirga</div>
          <div className="w-1/2 lg:w-1/3 flex justify-end lg:justify-start">
            <span className="flex flex-col leading-5 mt-0 lg:mt-1">
              <span className="hidden lg:block">Based in</span>
              <span className="text-black/50">Yogyakarta, IDN</span>
            </span>
          </div>
        </div>

        {/* Konten */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
          {/* Kiri */}
          <div className="flex-col w-full lg:w-1/3 hidden lg:flex">
            <div className="overflow-hidden">
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span>Get in touch</span>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="text-black/50">Arfilaks.dev@gmail.com</span>
              </motion.div>
            </div>
          </div>

          {/* Kanan */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden">
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="text-6xl lg:text-5xl tracking-tight">
                  I am
                  <div className="w-[110px] lg:w-[140px] h-14 inline-block align-middle mx-2">
                    <img
                      src="PROPICT.jpg"
                      alt="Dirga"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                  Dirga. A Frontend & Designer who creates{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWordIndex]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-black/60 inline-block"
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>{" "}
                  based on user needs.
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
