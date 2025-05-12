import { motion, AnimatePresence } from "framer-motion";

const helloText = "Hello";

const letterAnimation = {
  initial: { y: "100%", opacity: 0, scale: 0.8 },
  animate: { y: "0%", opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  // No exit animation for letters to keep them stable
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function EntryOverlay({ show, onExitComplete }) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            color: "white",
            fontSize: "4rem",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            style={{ display: "flex", gap: "0.1em", overflow: "visible" }}
          >
            {helloText.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                style={{ display: "inline-block", overflow: "visible" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
