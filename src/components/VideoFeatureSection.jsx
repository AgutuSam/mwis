import { useState } from "react";
import VideoPopup from "./VideoPopup";
const VideoFeatureSection = () => {
  const [popup, showPopup] = useState(false);
  const handlePopup = () => {
    showPopup((state) => !state);
  };
  return (
    <>
      <section className="relative mx-auto my-[60px] flex flex-col items-center justify-center px-4 lg:my-[130px]">
        <span className="absolute -top-4 left-1/2 -z-10 hidden -translate-x-1/2 text-[96px] font-semibold uppercase leading-none text-slate-100 md:inline-block">
          Challenger
        </span>
        <span className="border-l-2 border-blue-dark px-2.5 font-semibold text-blue-dark">
          Videos
        </span>
        <h2 className="max-w-[778px] text-center text-[21px] font-semibold leading-normal text-blue xs:text-[38px] lg:text-5xl">
          Click to watch the Investor Conference
        </h2>
        <button
          className="mt-4 grid aspect-square h-[75px] place-content-center bg-blue-dark "
          onClick={handlePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="h-[28px] fill-white"
          >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        </button>
      </section>
      {popup && <VideoPopup click={handlePopup} />}
    </>
  );
};

export default VideoFeatureSection;
