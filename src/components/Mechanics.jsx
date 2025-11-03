import React from 'react';
import { Puzzle, Zap, Layers, Users, Shield, GitBranch } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Splinter Generation',
    desc: '5+ aturan fisika × 8 arsitektur × 20 bahaya. Kombinasi prosedural yang terus berevolusi—tak ada dua dunia yang sama.',
    badge: 'Procedural Infinity',
  },
  {
    icon: Zap,
    title: 'Adaptive Puzzles',
    desc: 'Teka-teki merespons kondisi dunia, tekanan waktu, kebutuhan NPC, dan ekonomi sumber daya.',
    badge: 'Never Same Twice',
  },
  {
    icon: Layers,
    title: 'Anomaly Tools',
    desc: 'Interaksi dinamis dengan Anchor, Phase Shifter, Temporal Mirror, Gravity Inverter, Resonance Tuner, dan Data Reconstructor.',
    badge: 'Dynamic Interaction',
  },
  {
    icon: Users,
    title: 'Companion Bonds',
    desc: '5 NPC dengan tujuan tersembunyi. Kepercayaan membuka skill unik, jalur alternatif, dan konsekuensi mendalam.',
    badge: 'Deep Branching',
  },
  {
    icon: Shield,
    title: 'Corruption Progression',
    desc: 'Ancaman hidup yang menyebar: menginfeksi dunia, alat, dan pikiran. Tahapan infeksi mengubah cara main.',
    badge: 'Living Threat',
  },
  {
    icon: GitBranch,
    title: 'Choice Architecture',
    desc: 'Keputusan setiap 3 hari membentuk pohon kemungkinan eksponensial dengan ratusan akhir unik.',
    badge: 'Exponential Outcomes',
  },
];

export default function Mechanics() {
  return (
    <section id="mechanics" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Mekanik Inti
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-300">
          Setiap sesi membentuk dunia unik. Pelajari logika fisika, buat keputusan sulit, dan pertahankan realitas.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-gradient-to-br from-violet-500/20 to-cyan-400/20 p-2 text-violet-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-zinc-200">
                  {f.badge}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{f.desc}</p>

              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-400/25 opacity-0 blur-2xl transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
