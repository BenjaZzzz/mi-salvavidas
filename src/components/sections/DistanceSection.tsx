"use client";

import { motion } from "framer-motion";

export default function DistanceSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center"
      >
        La distancia 🌎
      </motion.h2>

      <div className="mt-16 flex items-center gap-8 text-center">
        <div>
          <div className="text-6xl">🇩🇴</div>
          <p className="mt-2 text-lg">
            República Dominicana
          </p>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-5xl"
        >
          ❤️
        </motion.div>

        <div>
          <div className="text-6xl">🇺🇸</div>
          <p className="mt-2 text-lg">
            Ohio
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl text-center mt-16"
      >
        <p className="text-xl leading-relaxed">
          Desde el 13 de mayo no hemos podido vernos.
        </p>

        <p className="text-xl leading-relaxed mt-6">
          Y aunque hablamos todos los días,
          hay cosas que ninguna pantalla puede reemplazar.
        </p>

        <p className="text-xl leading-relaxed mt-6">
          Extraño abrazarte.
        </p>

        <p className="text-xl leading-relaxed mt-4">
          Extraño verte.
        </p>

        <p className="text-xl leading-relaxed mt-4">
          Extraño tus ataques de cariño.
        </p>

        <p className="text-2xl font-semibold mt-10 text-pink-300">
          Pero nunca he dejado de sentirte cerca ❤️
        </p>
      </motion.div>
    </section>
  );
}