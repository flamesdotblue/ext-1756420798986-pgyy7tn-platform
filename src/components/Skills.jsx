import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layout, Rocket } from 'lucide-react';

const skills = [
  { label: 'Frontend', icon: Layout, color: 'from-pink-500 to-rose-500', xp: 92, tags: ['React', 'Tailwind', 'Vite', 'Framer Motion'] },
  { label: 'Backend', icon: Database, color: 'from-sky-500 to-cyan-400', xp: 78, tags: ['Node', 'Express', 'Prisma', 'PostgreSQL'] },
  { label: 'Systems', icon: Cpu, color: 'from-lime-400 to-green-500', xp: 70, tags: ['CI/CD', 'Vercel', 'Docker', 'Testing'] },
  { label: 'Craft', icon: Code, color: 'from-amber-400 to-orange-500', xp: 88, tags: ['DX', 'A11y', 'Design', 'Perf'] },
];

function XPBar({ value }) {
  return (
    <div className="w-full h-3 bg-black/60 border border-white/10 rounded-sm overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className="h-full bg-gradient-to-r from-lime-300 to-emerald-400"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[linear-gradient(0deg,rgba(20,20,20,1)_0%,rgba(8,8,8,1)_100%)]">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#2a2a2a_1px,_transparent_0)] [background-size:16px_16px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Rocket className="text-lime-300" size={20} />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">Skill Tree Unlocked</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 120, damping: 15 }}
              className="relative rounded-lg p-4 border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_6px_0_#000]"
            >
              <div className={`absolute inset-x-0 -top-px h-1 bg-gradient-to-r ${s.color}`} />
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="text-lime-300" size={18} />
                <h3 className="font-bold tracking-wide">{s.label}</h3>
                <span className="ml-auto text-[11px] text-white/70">XP {s.xp}</span>
              </div>
              <XPBar value={s.xp} />
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-white/10 bg-white/5 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-white/70">
                <div className="rounded p-2 bg-white/5 border border-white/10">Lvl {Math.floor(s.xp / 10)}</div>
                <div className="rounded p-2 bg-white/5 border border-white/10">Buff +{Math.floor((s.xp % 10) / 2)}</div>
                <div className="rounded p-2 bg-white/5 border border-white/10">Rate {s.xp}%</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 }}
          className="mt-10 p-5 rounded-lg border border-lime-300/30 bg-gradient-to-r from-lime-300/10 to-emerald-400/10"
        >
          <p className="text-sm text-white/90 text-center">
            Always grinding for the next upgrade — experimenting with new patterns, performance tweaks, and playful UX.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
