const VideoPopup = ({ click }) => {
  return (
    <section className="fixed left-0 top-0 z-[100] grid h-full w-full place-content-center bg-[rgba(0,0,0,0.82)]">
      <div className="relative shadow-xl">
        <iframe
          src="https://www.youtube.com/embed/vDNsgrJwx1E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="aspect-video w-[95vw] sm:w-[90vw] lg:w-[900px]"
        ></iframe>
        <button className="absolute -top-5 right-0" onClick={click}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 384 512"
            className=" fill-slate-400"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default VideoPopup;
