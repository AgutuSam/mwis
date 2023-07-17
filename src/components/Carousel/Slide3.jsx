import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const Slide3 = () => {
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
      className="flex h-full w-full flex-col items-end justify-center bg-[url('/img/bg/dam-2.jpg')] bg-cover bg-left md:items-center"
      ref={elRef}
      key="slide-1"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl px-4 text-end xs:px-8 md:px-12">
        <motion.h1
          className="font-semibold capitalize text-white"
          style={{
            fontSize: height < 900 ? `${height / 10}px` : "92px",
            lineHeight: height < 900 ? `${height / 10}px` : "92px",
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Promoting Investment <br /> And Economic Growth
        </motion.h1>
        <motion.p
          className="mt-6 hidden leading-loose text-white md:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Water is a key and critical component in Agriculture which the
          Government of Kenya has prioritised and as a key sector of econnomic
          growth
        </motion.p>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Button className="mr-12 mt-4 bg-[#002155] hover:bg-blue xs:mt-10">
            <a href="/">Get in Touch</a>
          </Button>
          <Button className="mt-4 bg-blue hover:bg-[#002155] xs:mt-10">
            <a href="/">Explore More</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide3;
