"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./Header";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:hidden">
      <button
        className="bg-neutral-400/10 hover:bg-neutral-500/10 border border-teal-600/40 text-neutral-50 p-2 rounded-lg text-center cursor-pointer hover:border-teal-500/40 duration-200 ease-in-out"
        ref={btnRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6ZM40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M204.2 195.8a5.9 5.9 0 1 1-8.4 8.4L128 136.5l-67.8 67.7a5.9 5.9 0 0 1-8.4-8.4l67.7-67.8l-67.7-67.8a5.9 5.9 0 0 1 8.4-8.4l67.8 67.7l67.8-67.7a5.9 5.9 0 0 1 8.4 8.4L136.5 128Z"
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 min-w-[190px] bg-teal-950 border border-teal-600/60 z-[100] flex flex-col p-2 rounded-lg"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                className="text-neutral-100/80 hover:text-neutral-100 hover:bg-teal-900/40 p-2 rounded-lg duration-200 ease-in-out flex gap-2 items-center"
                href={item.path}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
