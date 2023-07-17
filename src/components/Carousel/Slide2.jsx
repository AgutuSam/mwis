import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const Slide2 = () => {
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
      className="flex h-full w-full flex-col items-start justify-center bg-[url('/img/bg/dam-3.jpg')] bg-cover bg-center md:items-center"
      ref={elRef}
      key="slide-1"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl px-4 xs:px-8 md:px-12">
        <motion.div
          className="mb-2 border-l-2 border-white px-1 py-0 text-xs font-semibold capitalize text-orange-500 xs:mb-4 xs:px-3 xs:py-1 sm:text-base"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Great experience in building
        </motion.div>
        <motion.h1
          className="font-semibold capitalize text-white"
          style={{
            fontSize: height < 900 ? `${height / 10}px` : "92px",
            lineHeight: height < 900 ? `${height / 10}px` : "92px",
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Partnerships with Long <br /> Term Benefits
        </motion.h1>
        <motion.p
          className="mt-6 hidden w-[70%] leading-loose text-white md:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          By engaging the private sector, the government aims to leverage their
          expertise, resources, and efffiency to accelerate the implementation
          od dam projects, which are vital for sustainable economic growth and
          development.
        </motion.p>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button className="mt-4 bg-blue hover:bg-[#002155] xs:mt-10">
            <a href="/">View Projects</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide2;
