import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z6OqndBWfxN9di8k/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />
        <div className="relative">
          <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase bg-black/60 border border-white/10 px-3 py-1 rounded-full text-lime-200 shadow-[0_0_0_2px_rgba(163,230,53,0.2)]">
            Player 1: Developer
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">
            Retro. Blocky. <span className="text-lime-300">Brilliant.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/80">
            I craft immersive, gamified web experiences with modern tech and a love for pixel-perfect detail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-lime-300 text-black rounded shadow-[0_4px_0_#1a2e05] active:translate-y-[2px] active:shadow-[0_2px_0_#1a2e05] border-2 border-black"
            >
              <Rocket size={16} /> Power Up Skills
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black/70 text-lime-300 rounded border border-lime-300 hover:bg-black/90 transition-colors"
            >
              <Star size={16} /> Start a Quest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
