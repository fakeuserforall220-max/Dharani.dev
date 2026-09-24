import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Projects from './components/Projects';
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import KeyboardDemo from "./components/keyboard-demo";
import Globe3DDemo from "./components/3d-globe-demo";
import { CloudShader } from "./components/ui/cloud-shader";
import { ToolsScroll } from "./components/ToolsScroll";

export function PortfolioSite() {
  // Lenis removed for max performance native scrolling
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen text-slate-900 font-sans selection:bg-brand-purple/30 selection:text-brand-purple">
      {/* Global Cloud Shader Background */}
      <div className="fixed inset-0 z-[-2]">
        <CloudShader className="h-full w-full" speed={0.5} count={3} />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Highlights />
        <Projects />
        <ToolsScroll />
        <KeyboardDemo />
        <Globe3DDemo />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
