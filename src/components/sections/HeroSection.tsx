"use client";

import { motion } from "framer-motion";
import CinematicButton from "../ui/CinematicButton";
import StarsBackground from "../ui/StarsBackground";

export default function HeroSection() {
  const scrollToStory = () => {
    document
      .getElementById("story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <StarsBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-sm md:text-base text-pink-300 mb-8"
        >
          2 de junio de 2024 → 2 de junio de 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="
            text-6xl
            md:text-8xl
            font-extrabold
            leading-tight
            bg-gradient-to-r
            from-pink-300
            via-white
            to-purple-300
            bg-clip-text
            text-transparent
          "
        >
          Mi Salvavidas ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="
            mt-12
            text-xl
            md:text-2xl
            text-white/90
            max-w-3xl
            mx-auto
          "
        >
          Hay personas que llegan a tu vida por casualidad...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="
            mt-4
            text-xl
            md:text-2xl
            text-white/90
            max-w-3xl
            mx-auto
          "
        >
          Y hay personas que terminan convirtiéndose en parte de tu mundo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="
            mt-4
            text-xl
            md:text-2xl
            text-white/90
            max-w-3xl
            mx-auto
          "
        >
          Esta historia es sobre una de ellas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-white/5 px-8 py-4 backdrop-blur-sm">
            <span className="text-2xl">❤️</span>

            <span className="text-2xl md:text-3xl font-semibold">
              Dineysi
            </span>

            <span className="text-2xl">❤️</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5 }}
          className="
            mt-10
            text-lg
            md:text-xl
            text-white/70
          "
        >
          Gracias por estos dos años, mi amorchito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.5 }}
          className="mt-16"
        >
          <CinematicButton onClick={scrollToStory}>
            Comenzar nuestra historia ✨
          </CinematicButton>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-20 text-3xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}