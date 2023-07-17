import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Accordian, Banner, EmailForm, LoadingScreen } from "../components";
import { faqData } from "../data/faq";
const Faq = () => {
  const [id, setId] = useState(1);
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
        link={"/frequently_asked_questions"}
        page={"FAQ"}
        img={"faq.jpg"}
        heading={"FAQ"}
      />
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 py-[60px] lg:py-[90px] xl:py-[130px]">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center">
          <span className="border-l-2 border-blue-dark px-2.5 font-semibold text-blue-dark">
            Standard In Industrial Contracting.
          </span>
          <h2 className="text-[21px] font-semibold leading-normal text-blue xs:text-[35px] md:text-[38px] xl:text-5xl">
            Have questions / Not sure how to proceed?
          </h2>
          <span className="text-gray">
            In case you dont find what you are looking for feel free to contact
            us.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          {faqData.map(({ question, answer }, i) => (
            <Accordian
              question={question}
              answer={answer}
              key={`faq-${i}`}
              setId={setId}
              open={id === i + 1 ? true : false}
              id={i + 1}
            />
          ))}
        </div>
      </section>
      <EmailForm />
    </>
  );
};

export default Faq;
