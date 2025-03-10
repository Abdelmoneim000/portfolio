'use client';

import Header from '@/components/Header';
import Parallax from '@/components/Parallax';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Parallax>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </Parallax>
    </main>
  );
}
