import { useRef, useEffect, useState } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import { EmailForm, LoadingScreen, QuickLinks } from "../components";
import Carousel from "../components/Carousel";

const Home = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(imgRef, { once: true });
  const isSectionInView = useInView(sectionRef, { once: true });
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
      <section className="block xl:hidden">
        <QuickLinks />
      </section>
      <section
        ref={sectionRef}
        className={`relative bg-[#006330] py-16 transition-opacity duration-1000 sm:py-24 xl:py-[130px] ${
          isSectionInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute left-0 top-0 z-[1] h-full w-full bg-[url('/img/Home/01.png')] bg-cover bg-center opacity-10"></div>
        <img
          src="/img/Home/demo-5.png"
          alt="blueprint"
          className="absolute -left-12 top-16 z-[1] sm:top-24 xl:top-[130px]"
        />
        <div className="relative z-[2] mx-auto flex max-w-7xl flex-col gap-8 px-4 xl:flex-row">
          <figure className="grid w-full place-content-end">
            <img
              src="/img/Home/AliceWahome.jpg"
              alt="AliceWahome"
              className="w-full max-w-[500px] sm:w-auto"
            />
          </figure>
          <article className="flex w-full flex-col items-center justify-center text-center xl:items-start xl:text-left">
            <h2 className="text-[21px] font-semibold leading-normal text-white xs:text-[35px] md:text-[38px] xl:text-5xl">
              Message from the CS
            </h2>
            <p className="leading-loose text-white">
            Commercialization of water services since 2002 has delivered financial sustainability of water utilities and access to water for millions of Kenyans. We recognize the power of water PPPs building on these achievements to improve on utility performance, leverage finance and technology. They are important means to achieve our goals of 1M acre irrigation and improved water supplies to 6M households.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-4 py-[130px] xl:flex-row ">
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
