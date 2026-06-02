"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPhotos } from "@/data/gallery";

export default function PhotoGallerySection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === galleryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryPhotos.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-5xl font-bold mb-12 text-center">
        Nuestros recuerdos 📸
      </h2>

      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={galleryPhotos[current].src}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={galleryPhotos[current].src}
              alt="Recuerdo"
              width={500}
              height={700}
              className="
                rounded-3xl
                object-cover
                w-full
                h-[500px]
              "
            />

            <p className="mt-6 text-center text-lg">
              {galleryPhotos[current].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <button
            onClick={previous}
            className="
              px-6 py-3
              rounded-xl
              bg-white/10
              border border-white/20
            "
          >
            ←
          </button>

          <button
            onClick={next}
            className="
              px-6 py-3
              rounded-xl
              bg-white/10
              border border-white/20
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}