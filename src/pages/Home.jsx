import { useRef, useEffect, useState } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import { ButtonArrow, EmailForm, LoadingScreen } from "../components";
import Carousel from "../components/Carousel";

const Home = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true });
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <Carousel />
      <section className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-4 py-[130px] xl:flex-row xl:items-center">
        <div className="w-full xl:w-1/2">
          <span className="border-l-2 border-blue-dark px-2.5 font-semibold text-blue-dark">
            Working With Government
          </span>
          <h2 className="text-[21px] font-semibold leading-normal text-blue xs:text-[35px] md:text-[38px] xl:text-5xl">
            His Excellency Dr. William Samoei Ruto, C.G.H.,
          </h2>
          <p className="mb-12 leading-loose text-gray">
            The government of Kenya has embraced the concept of private-public
            partnerships (PPPs) as an innovative and effective economic and
            financial model for developing critical infrastructure projects,
            such as the construction of dams. By engaging the private sector,
            the government aims to leverage their expertise, resources, and
            efficiency to accelerate the implementation of dam projects, which
            are vital for sustainable economic growth and development.
          </p>
          <ButtonArrow className="bg-blue-dark">View More</ButtonArrow>
        </div>
        <div className="relative w-auto overflow-hidden xl:w-1/2" ref={imgRef}>
          <img src="/img/Home/img-1.jpg" alt="image" />
          <div
            className={`absolute top-0 h-full w-full ${
              isInView ? "-left-full" : "left-0"
            } bg-blue transition-all delay-700 duration-500`}
          />
          <div
            className={`absolute top-0 h-full w-full ${
              isInView ? "-left-full" : "left-0"
            } bg-white transition-all duration-500`}
          />
        </div>
      </section>
      <EmailForm />
    </>
  );
};

export default Home;
