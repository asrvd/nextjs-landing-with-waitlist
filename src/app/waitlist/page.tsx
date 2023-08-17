"use client";

import WaitlistForm from "@/components/Waitlist/WaitlistForm";
import { motion } from "framer-motion";

export default function WaitlistPage() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } },
  };
  return (
    <main className="flex flex-col min-h-screen min-w-screen font-sans justify-center items-center gap-24">
      <section
        className="w-full flex flex-col justify-center items-center px-8 lg:px-32 min-h-screen gap-16"
        id="features"
      >
        <motion.div
          className="flex flex-col justify-center items-center gap-4"
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h2
            className="lg:w-2/3 w-full text-center text-neutral-50 leading-none lg:mt-16"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Ready to join our waitlist?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 256 256"
              className="inline-block ml-2 text-emerald-400"
            >
              <path
                fill="currentColor"
                d="M116.5 158.5a58 58 0 1 0-57 0a93.6 93.6 0 0 0-48.4 35.4a6 6 0 0 0 1.4 8.4a6.6 6.6 0 0 0 3.5 1.1a6.1 6.1 0 0 0 4.9-2.5a82 82 0 0 1 134.2-.1a6 6 0 0 0 8.4 1.5a6.1 6.1 0 0 0 1.4-8.4a94.4 94.4 0 0 0-48.4-35.4ZM42 108a46 46 0 1 1 46 46a46 46 0 0 1-46-46Zm203 94.3a6.6 6.6 0 0 1-3.5 1.1a5.9 5.9 0 0 1-4.9-2.6a82 82 0 0 0-67.1-34.8a6 6 0 0 1 0-12a46 46 0 0 0 0-92a48.3 48.3 0 0 0-12.5 1.7a6 6 0 1 1-3.2-11.5a55.6 55.6 0 0 1 15.7-2.2a58 58 0 0 1 28.6 108.5a93.8 93.8 0 0 1 48.3 35.4a6.1 6.1 0 0 1-1.4 8.4Z"
              />
            </svg>
          </motion.h2>
          <motion.p
            className="text-neutral-200 font-[450] text-xl w-full lg:w-2/3 text-center"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            itaque adipisci, sequi cum quasi assumenda doloremque tempora quod
            quidem dolor.
          </motion.p>
        </motion.div>
        <WaitlistForm />
      </section>
    </main>
  );
}
