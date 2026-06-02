"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function CinematicButton({
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        px-8
        py-4
        rounded-full
        bg-gradient-to-r
        from-pink-500
        to-purple-500
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]
      "
    >
      {children}
    </button>
  );
}