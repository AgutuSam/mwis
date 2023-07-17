const Banner = ({ img, page, link, heading }) => {
  return (
    <section
      className=" bg-cover bg-fixed bg-center px-4 pb-[60px] pt-[237px] sm:pb-[130px]"
      style={{ backgroundImage: `url('/img/bg/${img}')` }}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="text-[38px] font-semibold text-white sm:text-[62px]">
          {heading}
        </h1>
        <div className="flex items-center justify-start gap-2 text-white">
          <a href="/" className="flex items-center justify-center gap-2">
            <img src="/img/home.png" alt="home" className="h-[18px] invert" />
            <span className="">Home</span>
          </a>
          <span>/</span>
          <a href={link} className="text-blue-dark">
            {page}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
