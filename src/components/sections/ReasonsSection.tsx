"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    title: "❤️ Tu forma de ser",
    message:
      "Porque eres una persona increíble, auténtica y capaz de iluminar mis días incluso estando lejos.",
  },
  {
    title: "🥰 Tu cariño",
    message:
      "Porque siempre encuentras la forma de hacerme sentir querido y acompañado.",
  },
  {
    title: "😊 Tu sonrisa",
    message:
      "Porque tu sonrisa tiene la capacidad de mejorar cualquier día difícil.",
  },
  {
    title: "🌟 Tu apoyo",
    message:
      "Porque siempre has estado ahí para escucharme, apoyarme y animarme a seguir adelante.",
  },
  {
    title: "🤗 Tus ataques de cariño",
    message:
      "Porque son una de las cosas que más extraño y una de las razones por las que sonrío cuando pienso en ti.",
  },
  {
    title: "💖 Porque eres tú",
    message:
      "Porque no necesito una razón complicada. Te amo simplemente porque eres tú.",
  },
];

export default function ReasonsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-6">
        Razones por las que te amo ❤️
      </h2>

      <p className="text-center text-lg opacity-80 mb-16">
        Toca cada tarjeta para descubrir una razón.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              setSelected(selected === index ? null : index)
            }
            className="
              cursor-pointer
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              p-6
            "
          >
            <h3 className="text-2xl font-semibold">
              {reason.title}
            </h3>

            <AnimatePresence>
              {selected === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  className="mt-4 text-lg overflow-hidden"
                >
                  {reason.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}