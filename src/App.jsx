import React from 'react';
import Hero from './components/Hero';
import Mechanics from './components/Mechanics';
import Systems from './components/Systems';
import Roadmap from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <Header />
      <Hero />
      <main>
        <Mechanics />
        <Systems />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
          <span className="bg-gradient-to-br from-white via-violet-100 to-cyan-200 bg-clip-text text-sm font-bold tracking-wider text-transparent">
            REALITY SPLINTERS
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#mechanics" className="hover:text-white">Mekanik</a>
          <a href="#systems" className="hover:text-white">Sistem</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a
            href="#hero"
            className="rounded-md bg-violet-500 px-3 py-1.5 font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
          >
            Mulai
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} Reality Splinters — "Setiap keputusan berbiaya, setiap solusi berkonsekuensi."
        </p>
      </div>
    </footer>
  );
}
