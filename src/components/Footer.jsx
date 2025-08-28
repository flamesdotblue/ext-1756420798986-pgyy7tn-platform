import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-sm uppercase tracking-widest text-lime-300">DevQuest</h4>
          <p className="mt-3 text-sm text-white/70 max-w-sm">
            Retro-styled, game-inspired web builds. Let’s team up for your next quest.
          </p>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-wider text-white/60">Warp Points</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-lime-300" href="#home">Home</a></li>
            <li><a className="hover:text-lime-300" href="#skills">Skills</a></li>
            <li><a className="hover:text-lime-300" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-wider text-white/60">Co-op</h5>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/10 hover:border-lime-300 hover:text-lime-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/10 hover:border-lime-300 hover:text-lime-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/10 hover:border-lime-300 hover:text-lime-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} DevQuest — Built with React, Tailwind, and a sprinkle of 8‑bit magic.
      </div>
    </footer>
  );
}
