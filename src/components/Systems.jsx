import React from 'react';
import { Cpu, Database, Shuffle, Activity, Settings, Save } from 'lucide-react';

export default function Systems() {
  return (
    <section id="systems" className="relative w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Arsitektur Sistem</h2>
            <p className="mt-2 max-w-2xl text-zinc-300">
              Fondasi teknis yang mendukung dunia prosedural, fisika anomali, dan konsekuensi naratif berlapis.
            </p>
          </div>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Lihat Roadmap
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SystemCard
            icon={Shuffle}
            title="SplinterGenerator"
            desc="Membangun dunia berdasarkan seed: arsitektur, aturan fisika, bahaya, sumber daya, dan posisi NPC."
            chips={["Seed-Based", "Procedural", "Reproducible"]}
          />
          <SystemCard
            icon={Activity}
            title="PhysicsAnomalyEngine"
            desc="Mesin multi-fisika yang menggabungkan aturan seperti gravitasi terbalik, waktu mundur, dan gesekan ekstrem."
            chips={["Composable", "Deterministic", "Performance"]}
          />
          <SystemCard
            icon={Cpu}
            title="EventCoordinator"
            desc="Mengikat konsekuensi keputusan lintas hari, memperbarui dunia, NPC, dan tingkat korupsi secara global."
            chips={["Decision Nodes", "Global State"]}
          />
          <SystemCard
            icon={Database}
            title="NPCRelationshipGraph"
            desc="Graf relasi dan kepercayaan yang memengaruhi jalur dialog, skill, dan kemungkinan penggabungan kesadaran."
            chips={["Trust", "Branches", "Memories"]}
          />
          <SystemCard
            icon={Settings}
            title="PuzzleSolver"
            desc="Validator solusi yang beradaptasi dengan fisika aktif, tekanan waktu, inventaris, dan kebutuhan companion."
            chips={["Adaptive", "Constraint-Based"]}
          />
          <SystemCard
            icon={Save}
            title="SaveSystem"
            desc="Simpanan garis waktu bercabang dengan kemampuan kembali ke node keputusan tanpa menghapus konsekuensi."
            chips={["Timelines", "Checkpoints"]}
          />
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
          <p className="font-medium text-zinc-200">Formula Prosedural</p>
          <p className="mt-2">
            Seed = (Session_ID + Day_Number + Player_Choices_Hash)
          </p>
          <p className="mt-1">
            Splinter = GenerateSplinter(Seed) → Physics, Architecture, Hazards, NPCLocations, CorruptionProgress
          </p>
        </div>
      </div>
    </section>
  );
}

function SystemCard({ icon: Icon, title, desc, chips }) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-gradient-to-br from-violet-500/20 to-cyan-400/20 p-2 text-violet-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips?.map((c) => (
          <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
            {c}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-2xl" />
    </article>
  );
}
