"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const messages = [
  {
    title: "❤️ Tus abrazos",
    message:
      "Extraño esos abrazos que hacían que cualquier problema pareciera más pequeño.",
  },
  {
    title: "😊 Tu sonrisa",
    message:
      "Extraño verte sonreír frente a mí y no solamente a través de una pantalla.",
  },
  {
    title: "🥰 Tus ataques de cariño",
    message:
      "Extraño esos momentos inesperados donde me demostrabas cuánto me querías.",
  },
  {
    title: "✨ Estar contigo",
    message:
      "Extraño compartir tiempo contigo, incluso los momentos más simples.",
  },
];

export default function MissingYouSection() {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Lo que extraño de ti ❤️
      </h2>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {messages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="
              cursor-pointer
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-sm
              p-6
            "
            onClick={() =>
              setOpened(opened === index ? null : index)
            }
          >
            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            {opened === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 text-lg"
              >
                {item.message}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}