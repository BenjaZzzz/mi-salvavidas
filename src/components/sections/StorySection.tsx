"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      id="story"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            uppercase
            tracking-[0.3em]
            text-pink-300
            text-sm
            mb-8
          "
        >
          Nuestra historia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-16
          "
        >
          Todo comenzó con un mensaje 📱
        </motion.h2>

        <div className="space-y-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Nos conocimos por redes sociales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Como cualquier otra conversación...
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Fui yo quien dio el primer paso.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Sin imaginar que estaba escribiéndole a alguien que cambiaría mi vida.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.3 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Alguien que poco a poco se convertiría en una parte fundamental de mis días.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.8 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Y aunque en ese momento no lo sabía...
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.3 }}
            className="
              mt-16
              text-4xl
              md:text-6xl
              font-bold
              bg-gradient-to-r
              from-pink-300
              via-white
              to-purple-300
              bg-clip-text
              text-transparent
            "
          >
            Esa persona eras tú ❤️
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.8 }}
            className="
              text-2xl
              md:text-3xl
              font-semibold
              mt-10
            "
          >
            Dineysi
          </motion.p>
        </div>
      </div>
    </section>
  );
}