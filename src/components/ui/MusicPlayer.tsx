"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
      alert(
        "No se pudo reproducir la música. Verifica que exista el archivo /public/music/song.mp3"
      );
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          text-white
          shadow-lg
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <span className="text-xl">
          {isPlaying ? "⏸️" : "🎵"}
        </span>

        <span className="font-medium">
          {isPlaying
            ? "Pausar música"
            : "Nuestra canción"}
        </span>
      </button>
    </>
  );
}