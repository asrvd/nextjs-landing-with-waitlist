"use client";

import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    let id = setTimeout(() => {
      setSending(false);
      toast.success("You have been added to the waitlist!");
      confetti({
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
      clearTimeout(id);
    }, 2000);
  };

  return (
    <motion.form
      ref={formRef}
      className="w-full lg:w-1/2 rounded-xl border flex flex-col gap-4 bg-teal-900/30 border-teal-600/40 backdrop-blur-2xl drop-shadow-xl p-4 lg:p-8"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <label className="w-full">
          <span className="text-neutral-200">Your Email</span>
          <input
            type="email"
            className="w-full bg-neutral-400/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-700/40 focus:border-teal-400/40 placeholder:text-neutral-300/40"
            placeholder="johndoe@gmail.com"
          />
        </label>
      </div>
      <label className="w-full">
        <span className="text-neutral-200">You want access as a</span>
        <select
          className="w-full bg-neutral-500/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-700/40 focus:border-teal-400/40 placeholder:text-neutral-300/40"
          placeholder="Can we schedule a meet to talk about enterprise plan for our company..."
        >
          <option
            value="company"
            className="bg-neutral-500/10 text-neutral-950"
          >
            Company
          </option>
          <option value="tester" className="bg-neutral-500/10 text-neutral-950">
            Tester
          </option>
        </select>
      </label>
      <button
        className="bg-neutral-400/10 hover:bg-neutral-500/10 border border-teal-600/40 text-neutral-50 mt-2 px-3 py-2 rounded-lg flex items-center gap-2 max-w-max justify-center cursor-pointer hover:border-teal-500/40 duration-200 ease-in-out"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          formRef.current?.reset();
        }}
        disabled={sending}
      >
        {sending ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            >
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
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
              d="m197.7 130.9l-52.2-19.3a2 2 0 0 1-1.1-1.1l-19.3-52.2a13.9 13.9 0 0 0-26.2 0l-19.3 52.2a2 2 0 0 1-1.1 1.1l-52.2 19.3a13.9 13.9 0 0 0 0 26.2l52.2 19.3a2 2 0 0 1 1.1 1.1l19.3 52.2a13.9 13.9 0 0 0 26.2 0l19.3-52.2a2 2 0 0 1 1.1-1.1l52.2-19.3a13.9 13.9 0 0 0 0-26.2Zm-4.1 15l-52.2 19.2a13.7 13.7 0 0 0-8.3 8.3l-19.2 52.2a2 2 0 0 1-3.8 0l-19.2-52.2a13.7 13.7 0 0 0-8.3-8.3l-52.2-19.2a2 2 0 0 1 0-3.8l52.2-19.2a13.7 13.7 0 0 0 8.3-8.3l19.2-52.2a2 2 0 0 1 3.8 0l19.2 52.2a13.7 13.7 0 0 0 8.3 8.3l52.2 19.2a2 2 0 0 1 0 3.8ZM146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6Zm100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Z"
            />
          </svg>
        )}
        {sending ? "Adding..." : "Join Waitlist"}
      </button>
    </motion.form>
  );
}
