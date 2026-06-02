"use client";

export default function PremiumBackground() {
  return (
    <>
      {/* Fondo base */}
      <div className="fixed inset-0 -z-50 bg-black" />

      {/* Glow superior */}
      <div
        className="
          fixed
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          rounded-full
          blur-3xl
          opacity-20
          -z-40
        "
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, transparent 70%)",
        }}
      />

      {/* Glow izquierdo */}
      <div
        className="
          fixed
          bottom-0
          left-[-250px]
          w-[600px]
          h-[600px]
          rounded-full
          blur-3xl
          opacity-20
          -z-40
        "
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
      />

      {/* Glow derecho */}
      <div
        className="
          fixed
          top-1/2
          right-[-250px]
          w-[600px]
          h-[600px]
          rounded-full
          blur-3xl
          opacity-20
          -z-40
        "
        style={{
          background:
            "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      {/* Viñeta cinematográfica */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </>
  );
}