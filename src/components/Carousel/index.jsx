import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide1 from "./Slide1";
import Slide3 from "./Slide3";
import Slide2 from "./Slide2";
const Carousel = () => {
  const [slide, setSlide] = useState(1);
  const handleClick = (e) => {
    setSlide(+e.target.dataset.id);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (slide >= 3) setSlide(1);
      else setSlide((slide) => +slide + 1);
      console.log(slide);
    }, 7000);
    return () => clearInterval(interval);
  }, [slide]);
  return (
    <section className=" relative aspect-[1.44] w-full xl:aspect-auto xl:h-[900px]">
      <AnimatePresence>
        {slide === 1 ? <Slide1 /> : slide === 2 ? <Slide2 /> : <Slide3 />}
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 ">
        {[1, 2, 3].map((val) => (
          <span
            className={`aspect-square h-4 cursor-pointer rounded-full border-2 border-white ${
              slide === val ? "bg-white" : ""
            }`}
            data-id={val}
            key={`btn-${val}`}
            onClick={handleClick}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
