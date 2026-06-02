"use client";

export default function StarsBackground() {
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          `
          radial-gradient(white 1px, transparent 1px),
          radial-gradient(white 1px, transparent 1px)
          `,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 40px",
      }}
    />
  );
}