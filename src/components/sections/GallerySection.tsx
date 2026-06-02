"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              tracking-[0.3em]
              text-pink-300
              text-sm
              mb-6
            "
          >
            Mi persona favorita ❤️
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              mb-12
            "
          >
            Tú
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              shadow-2xl
              bg-black
            "
          >
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source
                src="/videos/dineysi.mp4"
                type="video/mp4"
              />

              Tu navegador no soporta video.
            </video>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed"
          >
            Hay muchas cosas que extraño desde que te fuiste.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xl md:text-2xl leading-relaxed"
          >
            Extraño abrazarte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-8 text-xl md:text-2xl leading-relaxed"
          >
            Extraño verte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="mt-8 text-xl md:text-2xl leading-relaxed"
          >
            Y extraño tus ataques de cariño.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="
              mt-16
              text-3xl
              md:text-5xl
              font-bold
              bg-gradient-to-r
              from-pink-300
              via-white
              to-purple-300
              bg-clip-text
              text-transparent
            "
          >
            Pero nunca dejo de sentirte cerca ❤️
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5 }}
            className="
              mt-10
              text-lg
              md:text-xl
              text-white/70
            "
          >
            Porque cada recuerdo contigo sigue viviendo en mí.
          </motion.p>
        </div>
      </div>
    </section>
  );
}