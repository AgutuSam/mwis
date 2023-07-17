import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className="shadow-xl">
      <div className="w-full bg-blue">
        <ul className="mx-auto hidden h-11 w-full max-w-7xl items-center justify-end bg-blue px-4 text-xs text-white md:flex 2xl:h-12 2xl:px-0 2xl:text-sm">
          <li className="flex h-full items-center justify-center gap-2 border-x border-l-[rgba(255,255,255,0.1)] border-r-[rgba(255,255,255,0.1)] px-4 py-2.5 transition-all duration-300 hover:text-blue-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 0 512 512"
              className="fill-current 2xl:h-3.5"
            >
              <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
            </svg>
            <a href="tel:+254 700 000 000">+254 700 000 000</a>
          </li>
          <li className="flex h-full items-center justify-center gap-2 border-r border-[rgba(255,255,255,0.1)] px-4 py-2.5 transition-all duration-300 hover:text-blue-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 0 512 512"
              className="fill-current 2xl:h-3.5"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <a href="mailto:info@water.go.ke">info@water.go.ke</a>
          </li>
        </ul>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
