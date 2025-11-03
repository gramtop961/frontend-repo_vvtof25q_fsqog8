import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.2),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-violet-200/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          A puzzle-survival-building universe
        </span>
        <h1 className="bg-gradient-to-br from-white via-violet-100 to-cyan-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          REALITY SPLINTERS
        </h1>
        <p className="mt-6 max-w-3xl text-base text-zinc-300 sm:text-lg">
          Dimensi bertabrakan. Fisika berubah. Setiap pilihan meninggalkan jejak. Stabilkan realitas dalam 99 hari—atau biarkan dunia terpecah selamanya.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#mechanics" className="rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300">
            Jelajahi Mekanik Inti
          </a>
          <a href="#systems" className="rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300">
            Arsitektur Teknis
          </a>
        </div>
      </div>
    </section>
  );
}
