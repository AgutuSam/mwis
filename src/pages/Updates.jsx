import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Banner,
  Card,
  VideoFeatureSection,
  LoadingScreen,
} from "../components";
import { cardsData } from "../data/updates";
const Updates = () => {
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
      <Banner
        link={"/Updates"}
        page={"Updates"}
        img={"updates.jpg"}
        heading={"News & Events"}
      />
      <section className="mx-auto grid max-w-7xl grid-cols-1 place-items-start gap-8 gap-y-16 px-4 py-[60px] md:grid-cols-2 lg:grid-cols-3 lg:py-[130px]">
        {cardsData.map(({ image, logo, heading, text, className }, i) => (
          <Card
            key={`card-${i}`}
            image={image}
            logo={logo}
            heading={heading}
            text={text}
            className={className}
          />
        ))}
      </section>
      <VideoFeatureSection />
    </>
  );
};

export default Updates;
