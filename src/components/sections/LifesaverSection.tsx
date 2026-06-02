"use client";

import { motion } from "framer-motion";

export default function LifesaverSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl"
        >
          Después de dos años...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-3xl mt-8"
        >
          He entendido algo muy importante.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="text-2xl md:text-3xl mt-8"
        >
          Un salvavidas no siempre te rescata del agua.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
          className="text-2xl md:text-3xl mt-8"
        >
          A veces aparece cuando más lo necesitas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 4 }}
          className="text-2xl md:text-3xl mt-8"
        >
          A veces te ayuda a seguir adelante.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 5 }}
          className="text-2xl md:text-3xl mt-8"
        >
          A veces te recuerda que no estás solo.
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 6,
            duration: 1.5,
          }}
          className="
            mt-24
            text-6xl
            md:text-8xl
            font-bold
            text-pink-300
          "
        >
          Tú eres mi salvavidas ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 7 }}
          className="mt-10 text-xl"
        >
          Y quiero que nunca lo olvides.
        </motion.p>
      </div>
    </section>
  );
}