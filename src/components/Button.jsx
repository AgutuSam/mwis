const Button = ({ children, className }) => {
  return (
    <button
      className={`p-2 text-xs text-white transition-colors xs:px-8 xs:py-4 xs:text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
