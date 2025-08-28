import React from 'react';
import { Gamepad2, Terminal } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-lime-300" size={22} />
          <span className="text-sm tracking-widest uppercase text-lime-300">DevQuest</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-xs">
          <a href="#home" className="hover:text-lime-300 transition-colors">Home</a>
          <a href="#skills" className="hover:text-lime-300 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-lime-300 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-black transition-colors"
        >
          <Terminal size={14} />
          Start
        </a>
      </div>
    </header>
  );
}
