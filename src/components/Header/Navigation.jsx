import { useState } from "react";
import { ButtonArrow } from "../../components";
import HamBurgerMenu from "./HamBurgerMenu";
const navLinks = [
  { link: "Home", path: "/" },
  { link: "Projects", path: "/Projects" },
  { link: "Updates", path: "/Updates" },
  { link: "FAQ's", path: "/frequently_asked_questions" },
  { link: "Get in Touch", path: "/get_in_touch" },
];

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleMobileNav = () => {
    setCollapsed((state) => !state);
  };
  return (
    <>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-4 xs:py-0 2xl:px-0">
        <a href="/" className="py-1.5">
          <img
            src="/img/logo-light.png"
            alt="logo"
            className="h-[55px] xs:h-[100px]"
          />
        </a>
        <div className="ml-auto flex items-center justify-center max-[1030px]:hidden">
          <ul className="flex items-center justify-center text-sm text-blue 2xl:text-base">
            {navLinks.map(({ link, path }) => {
              return (
                <li key={link} className=" mr-4 2xl:mr-8">
                  <a href={path} className="duration-300 hover:text-blue-dark">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          <ButtonArrow>Log in</ButtonArrow>
        </div>
        <HamBurgerMenu handleClick={handleMobileNav} />
      </nav>
      <ul
        className={`absolute z-[100] w-[calc(100%-2rem)] ${
          collapsed ? "h-0" : "h-[300px] pb-4"
        } m-4 mt-0 flex flex-col items-start justify-start overflow-y-auto bg-white text-base text-blue duration-300`}
      >
        {navLinks.map(({ link, path }) => {
          return (
            <li key={link} className="mr-4 p-4 2xl:mr-8">
              <a href={path} className="duration-300 hover:text-blue-dark">
                {link}
              </a>
            </li>
          );
        })}
        <li className="mr-4 p-4 2xl:mr-8">
          <a href="/" className="duration-300 hover:text-blue-dark">
            Log in
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
