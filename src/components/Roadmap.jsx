import React from 'react';
import { Rocket, Calendar, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 — Vertical Slice (3 bulan)',
    detail:
      '2–3 splinter, 2 companion, inti fisika, dan generasi prosedural dasar untuk membuktikan fantasy dan loop gameplay.',
  },
  {
    title: 'Phase 2 — Full Campaign (4 bulan)',
    detail:
      '5 companion, 25+ variasi splinter, sistem korupsi lengkap, penyimpanan bercabang, dan konten naratif utama.',
  },
  {
    title: 'Phase 3 — Polish (2 bulan)',
    detail:
      'Refinement audio/visual, optimisasi performa, penyeimbangan puzzle dan progresi, serta QA mendalam.',
  },
  {
    title: 'Phase 4 — Post-Launch',
    detail:
      'DLC, anomali baru, chapter alternatif, dan dukungan komunitas berkelanjutan.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full bg-gradient-to-b from-black to-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">Roadmap Pengembangan</h2>
          <div className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 sm:flex">
            <Rocket className="h-4 w-4 text-violet-300" />
            Built for replayability
          </div>
        </div>

        <ol className="relative mt-10 space-y-6 border-l border-white/10 pl-6">
          {phases.map((p) => (
            <li key={p.title} className="group relative">
              <span className="absolute -left-3 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Calendar className="h-4 w-4 text-violet-300" />
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-zinc-200">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
