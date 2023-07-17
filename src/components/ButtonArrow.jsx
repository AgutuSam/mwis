const ButtonArrow = ({ children, className, style }) => {
  return (
    <button
      className={`btn--arrow flex items-center justify-center bg-blue px-8 py-4 text-white ${className}`}
      style={style}
    >
      <span className="span--1 inline-block h-[1px] w-0 bg-current transition-all"></span>
      <span className="span--text text-base transition-all">{children}</span>
      <span className="span--2 ml-4 inline-block h-[1px] w-[58px] bg-current transition-all"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="8"
        viewBox="0 -960 200 400"
        width="4"
        className="fill-current"
      >
        <path d="m 0,-560 v -400 l 200,200 z" />
      </svg>
    </button>
  );
};

export default ButtonArrow;
