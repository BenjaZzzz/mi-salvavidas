"use client";

import { motion } from "framer-motion";
import AnniversaryConfetti from "../ui/AnniversaryConfetti";

export default function FinalSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <AnniversaryConfetti />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-bold"
      >
        Feliz Aniversario ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-xl max-w-3xl"
      >
        Gracias por estos dos años.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-4 text-xl max-w-3xl"
      >
        Gracias por cada conversación.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
        className="mt-4 text-xl max-w-3xl"
      >
        Gracias por cada recuerdo.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className="mt-4 text-xl max-w-3xl"
      >
        Gracias por seguir aquí.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5 }}
        className="mt-16 text-4xl font-bold text-pink-300"
      >
        Te amo, mi amorchito ❤️
      </motion.h2>
    </section>
  );
}