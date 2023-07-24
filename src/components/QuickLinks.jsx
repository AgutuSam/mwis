const links = [
  {
    link: "https://ppp.water.go.ke/dashboard",
    logo: "/img/Home/project.png",
    text: "View Projects",
  },
  {
    link: "/",
    logo: "/img/Home/documents.png",
    text: "Upload Tender Document",
  },
  { link: "/", logo: "/img/Home/news.png", text: "News & Events" },
  {
    link: "/",
    logo: "/img/Home/performance.png",
    text: "Structure & Key Performance",
  },
];

const QuickLinks = () => {
  return (
    <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 gap-8 bg-blue-dark px-4 py-12 sm:grid-cols-2 lg:mt-0 xl:grid-cols-4">
      {links.map(({ link, logo, text }, i) => (
        <figure
          key={`link-${i}`}
          className="flex items-center justify-start gap-5 sm:justify-center"
        >
          <img src={logo} alt={logo} className="aspect-square h-[62px]" />
          <figcaption className="text-xl text-white sm:max-w-[184px]">
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default QuickLinks;
