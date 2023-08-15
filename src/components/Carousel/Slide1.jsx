import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Slide1 = () => {
  const elRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setHeight(elRef.current.offsetHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [height]);
  return (
    <motion.div
      className="flex h-full w-full flex-col items-start justify-center bg-[url('/img/bg/dam-1.jpg')] bg-cover bg-center md:items-center"
      ref={elRef}
      key="slide-1"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl px-4 xs:px-8 md:px-12 xl:mb-72 xl:mt-32">
        <motion.div
          className="mb-2 border-l-2 border-orange-500 px-1 py-0 text-xs font-semibold capitalize text-white xs:mb-4 xs:px-3 xs:py-1 sm:text-base"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Providing alternatives in great experiences in building */}
        </motion.div>
        <motion.h1
          className="font-semibold capitalize text-white"
          style={{
            fontSize: height < 900 ? `${height / 10}px` : "80px",
            lineHeight: height < 900 ? `${height / 10}px` : "80px",
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are inviting investors <br /> to partner with us
        </motion.h1>
        <motion.p
          className="mt-6 hidden w-[65%] leading-loose text-white md:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          The government wants to harness private investment and technical
          know-how to overcome financial constraints and deliver high-quality
          dams that meet the country&lsquo;s water and energy needs.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Slide1;
