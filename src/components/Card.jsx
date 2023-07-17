import ButtonArrow from "./ButtonArrow";

const Card = ({ image, logo, heading, text, className }) => {
  return (
    <div
      className={`card flex flex-col items-start justify-center gap-8 ${className}`}
    >
      <div
        className="relative aspect-[1.47] w-full bg-contain bg-bottom transition-all duration-300"
        style={{
          backgroundSize: "120%",
          backgroundImage: `url('/img/Updates/${image}')`,
        }}
      >
        <div className="absolute bottom-0 left-0 grid aspect-square h-[75px] place-content-center bg-blue-dark">
          <img
            src={`/img/Updates/${logo}`}
            alt="logo"
            className="aspect-square h-8 invert"
          />
        </div>
      </div>
      <article>
        <h4 className="text-[25px] font-semibold text-blue">{heading}</h4>
        <p className="leading-loose text-gray">{text}</p>
      </article>
      <ButtonArrow
        className="bg-white hover:bg-white"
        style={{ color: "#1434a4", padding: 0 }}
      >
        <a href="/">Read More</a>
      </ButtonArrow>
    </div>
  );
};

export default Card;
