export default function Footer() {
  return (
    <footer className="w-full border-t border-teal-600/60 p-8 lg:px-32 gap-8 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-8 justify-between h-auto">
        <h3 className="text-neutral-50 font-normal break-all">
          Copyright &copy; Logo. All rights reserved.
        </h3>
        <div className="flex gap-4 text-neutral-100/80">
          <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.868 9.868 0 0 0 3.128-1.196a4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
              />
            </svg>
          </a>
          <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normal">App</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Lorem</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Ipsum</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Dolor</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Sit</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normal">Product</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Lorem</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Ipsum</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Dolor</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Sit</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Amet</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Sequi</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-50 font-normalt">Community</h3>
          <ul className="list-none text-neutral-300/80 space-y-2">
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Lorem</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Ipsum</a>
            </li>
            <li>
              <a href="" className="hover:text-neutral-100 duration-200 ease-in-out">Dolor</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
