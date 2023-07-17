import { motion } from "framer-motion";
const LoadingScreen = () => {
  return (
    <motion.section
      className="fixed left-0 top-0 z-[200] grid h-screen w-screen place-content-center bg-[#e3ecfd]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="/img/loader.gif" alt="loader" />
    </motion.section>
  );
};

export default LoadingScreen;
