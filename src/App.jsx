import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <NavBar />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
