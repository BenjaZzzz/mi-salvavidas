"use client";

import { useEffect, useState } from "react";

interface TimeTogether {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CounterSection() {
  const [time, setTime] = useState<TimeTogether>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-06-02T00:00:00");

    const updateCounter = () => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const previousMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        );
        days += previousMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      const diffMs = now.getTime() - startDate.getTime();

      const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
      const seconds = Math.floor(diffMs / 1000) % 60;

      setTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Nuestro tiempo juntos ❤️
      </h2>

      <p className="text-xl mb-16 text-center">
        Desde el 2 de junio de 2024
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        <TimeCard value={time.years} label="Años" />
        <TimeCard value={time.months} label="Meses" />
        <TimeCard value={time.days} label="Días" />
        <TimeCard value={time.hours} label="Horas" />
        <TimeCard value={time.minutes} label="Minutos" />
        <TimeCard value={time.seconds} label="Segundos" />
      </div>
    </section>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-sm
        rounded-3xl
        p-8
        text-center
      "
    >
      <div className="text-5xl font-bold text-pink-300">
        {value}
      </div>

      <div className="mt-2 text-lg">
        {label}
      </div>
    </div>
  );
}