import MobileNav from "./MobileNav";

export const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M240 210h-18v-94.5a13.9 13.9 0 0 0-4.6-10.3l-80-72.8a14.1 14.1 0 0 0-18.8 0l-80 72.8a13.9 13.9 0 0 0-4.6 10.3V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM46 115.5a1.8 1.8 0 0 1 .6-1.4l80-72.8a2 2 0 0 1 2.7 0l80 72.8a1.6 1.6 0 0 1 .7 1.4V210h-52v-50a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v50H46ZM146 210h-36v-50a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Z"
        />
      </svg>
    ),
  },
  {
    name: "Features",
    path: "#features",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.5l-24.2 30.3a5.9 5.9 0 0 0 1 8.4A5.8 5.8 0 0 0 64 230a6 6 0 0 0 4.7-2.3L98.9 190h58.2l30.2 37.7a6 6 0 0 0 4.7 2.3a5.8 5.8 0 0 0 3.7-1.3a5.9 5.9 0 0 0 1-8.4L172.5 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"
        />
      </svg>
    ),
  },
  {
    name: "Pricing",
    path: "#pricing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M128 26a102 102 0 1 0 102 102A102.2 102.2 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm38-70a26.1 26.1 0 0 1-26 26h-6v10a6 6 0 0 1-12 0v-10h-18a6 6 0 0 1 0-12h36a14 14 0 0 0 0-28h-24a26 26 0 0 1 0-52h6V72a6 6 0 0 1 12 0v10h18a6 6 0 0 1 0 12h-36a14 14 0 0 0 0 28h24a26.1 26.1 0 0 1 26 26Z"
        />
      </svg>
    ),
  },
  {
    name: "Contact Us",
    path: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M228.4 189.5a78 78 0 0 0-60.2-115.1a78 78 0 1 0-140.6 67.1L21.2 164A12 12 0 0 0 36 178.8l22.5-6.4a77.3 77.3 0 0 0 29.3 9.2a78 78 0 0 0 109.7 38.8l22.5 6.4a11.9 11.9 0 0 0 14.8-14.8ZM59.3 159.9a4.7 4.7 0 0 0-1.7.3l-24.9 7.1l7.1-24.9a5.6 5.6 0 0 0-.6-4.7a65.9 65.9 0 1 1 23.1 23.1a5.5 5.5 0 0 0-3-.9Zm156.9 30.5l7.1 24.9l-24.9-7.1a5.6 5.6 0 0 0-4.7.6a66.1 66.1 0 0 1-92.6-27A78.1 78.1 0 0 0 174 104a78.9 78.9 0 0 0-1.9-16.9a66.1 66.1 0 0 1 44.7 98.6a5.6 5.6 0 0 0-.6 4.7Z"
        />
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <section className="w-full px-8 py-4 lg:px-32 border-b border-teal-600/60 flex justify-between sticky top-0 backdrop-blur-md z-[100]">
      <h3 className="text-neutral-50 font-normal flex gap-2 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M224 114h-24a6 6 0 0 0 0 12h17.8a90.1 90.1 0 0 1-83.8 83.8V93.4a30 30 0 1 0-12 0v116.4A90.1 90.1 0 0 1 38.2 126H56a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6a102 102 0 0 0 204 0a6 6 0 0 0-6-6ZM110 64a18 18 0 1 1 18 18a18.1 18.1 0 0 1-18-18Z"
          />
        </svg>
        Logo
      </h3>
      <nav className="lg:flex gap-8 justify-center items-center hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
            className="text-neutral-100/80 hover:text-neutral-100 duration-200 ease-in-out"
            href={item.path}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <MobileNav />
    </section>
  );
}
