"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function AnniversaryConfetti() {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: {
          y: 0.6,
        },
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}