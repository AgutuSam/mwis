const Contact = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-8 px-4 py-[90px] md:flex-row md:px-0">
      <figure className="w-full md:w-1/2">
        <img
          src="/img/logo-dark.png"
          alt="logo"
          className="h-[75px] 2xl:h-auto"
        />
      </figure>
      <div className="flex w-full flex-col items-start justify-center text-white md:w-1/2">
        <h1 className="text-[25px]  font-semibold md:text-[22px] 2xl:text-[25px]">
          Our Contact
        </h1>
        <ul className="ml-2.5 flex flex-col items-start justify-center gap-8 pt-2">
          <li className="">
            <a href="" className="flex items-center justify-center gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 0 384 512"
                className="fill-blue-dark 2xl:h-4"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span className="text-base text-white md:text-sm 2xl:text-base">
                Maji House, Upper hill, Off Ngong road, Nairobi.
              </span>
            </a>
          </li>
          <li className="">
            <a
              href="tel:+1800001658"
              className="flex items-center justify-center gap-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 0 512 512"
                className="fill-blue-dark 2xl:h-4"
              >
                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
              </svg>
              <span className="text-base text-white md:text-sm 2xl:text-base">
                Telephone: +254 020 2716103, 4900000
              </span>
            </a>
          </li>
          <li className="">
            <a
              href="mailto:info@water.go.ke"
              className="flex items-center justify-center gap-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 0 512 512"
                className="fill-blue-dark 2xl:h-4"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <span className="text-base text-white md:text-sm 2xl:text-base">
              info@water.go.ke
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
