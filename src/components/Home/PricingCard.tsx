export default function PricingCard({
  title,
  price,
  perks,
}: {
  title: string;
  price: string;
  perks: string[];
}) {
  return (
    <div
      className={`rounded-xl border border-teal-600/40 backdrop-blur-2xl drop-shadow-xl flex flex-col p-4 lg:p-8 gap-12 ${
        title === "Plus" ? "bg-teal-800/30" : "bg-teal-900/30"
      }`}
    >
      <div className="">
        <h2 className="text-neutral-50">{title}</h2>
        <p className="text-neutral-200">{price}</p>
      </div>
      <div className="border-t border-teal-600/40"></div>
      <div className=" text-neutral-200 flex flex-col gap-2">
        {perks.map((perk, index) => (
          <p key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-emerald-300 inline-block mr-2"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M104 192a8.5 8.5 0 0 1-5.7-2.3l-56-56a8.1 8.1 0 0 1 11.4-11.4l50.3 50.4L210.3 66.3a8.1 8.1 0 0 1 11.4 11.4l-112 112a8.5 8.5 0 0 1-5.7 2.3Z"
              />
            </svg>
            {perk}
          </p>
        ))}
      </div>
      <button className="bg-neutral-300/10 hover:bg-neutral-400/10 border border-teal-600/40 text-neutral-50 px-3 py-2 rounded-lg flex items-center gap-2 justify-center cursor-pointer hover:border-teal-500/40 duration-200 ease-in-out">
        Get Started{" "}
        {title === "Plus" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m197.7 130.9l-52.2-19.3a2 2 0 0 1-1.1-1.1l-19.3-52.2a13.9 13.9 0 0 0-26.2 0l-19.3 52.2a2 2 0 0 1-1.1 1.1l-52.2 19.3a13.9 13.9 0 0 0 0 26.2l52.2 19.3a2 2 0 0 1 1.1 1.1l19.3 52.2a13.9 13.9 0 0 0 26.2 0l19.3-52.2a2 2 0 0 1 1.1-1.1l52.2-19.3a13.9 13.9 0 0 0 0-26.2Zm-4.1 15l-52.2 19.2a13.7 13.7 0 0 0-8.3 8.3l-19.2 52.2a2 2 0 0 1-3.8 0l-19.2-52.2a13.7 13.7 0 0 0-8.3-8.3l-52.2-19.2a2 2 0 0 1 0-3.8l52.2-19.2a13.7 13.7 0 0 0 8.3-8.3l19.2-52.2a2 2 0 0 1 3.8 0l19.2 52.2a13.7 13.7 0 0 0 8.3 8.3l52.2 19.2a2 2 0 0 1 0 3.8ZM146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6Zm100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Z"
            />
          </svg>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
