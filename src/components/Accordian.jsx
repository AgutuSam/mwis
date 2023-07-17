const Accordian = ({ question, answer, open, setId, id }) => {
  const handleClick = (e) => {
    setId(+e.target.dataset.id);
  };
  return (
    <div className="w-full border border-[#f5f5f5]">
      <div
        className={`relative flex w-full items-center justify-between gap-4 text-[25px] font-semibold ${
          open ? "bg-blue-dark text-white" : "text-blue"
        } cursor-pointer px-8 py-4 transition-all`}
      >
        <span className="w-full">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15px"
          viewBox="0 0 512 512"
          className={`fill-current ${open ? "rotate-180" : ""} transition-all`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        <div
          className="absolute left-0 top-0 h-full w-full"
          data-id={id}
          onClick={handleClick}
        ></div>
      </div>
      <div
        className="grid transition-all"
        style={{ gridTemplateRows: `${open ? "1fr" : "0fr"}` }}
      >
        <div
          className={`text-gray ${
            open ? "py-4" : "py-0"
          } overflow-hidden px-8 transition-all`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
