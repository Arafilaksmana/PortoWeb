import { motion } from "framer-motion";


function Home() {
  return (
    <>
      <div className="relative min-h-[100svh] w-full flex overflow-hidden">

        <img src="arafi.png" className="w-full h-full absolute inset-0 object-top object-cover z-0" />

        <div className="relative z-10 text-white text-3xl leading-9 ml-3 lg:ml-auto mr-auto lg:mr-[20%] lg:my-auto self-end pb-12 lg:pb-0">
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
