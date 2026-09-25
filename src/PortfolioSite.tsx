import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Lazy load incredibly heavy Spline 3D components to eliminate page lag
const KeyboardDemo = lazy(() => import("./components/keyboard-demo"));
const Globe3DDemo = lazy(() => import("./components/3d-globe-demo"));

// Helper component to only render heavy children when they scroll into view
function LazyRenderOnScroll({ children, height = "500px" }: { children: React.ReactNode, height?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it comes into view
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height, width: "100%" }}>
      {inView ? children : <div className="h-full w-full flex items-center justify-center text-slate-400">Loading 3D Experience...</div>}
    </div>
  );
}

export function PortfolioSite() {
  // Lenis removed for max performance native scrolling
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen text-slate-900 font-sans selection:bg-brand-purple/30 selection:text-brand-purple bg-[#7A9EBA]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhyWorkWithMe />
        <Highlights />
        <Projects />
        <Technologies />
        
        {/* Render 3D components only when ready, fallback to blank space */}
        <LazyRenderOnScroll height="500px">
          <Suspense fallback={<div className="h-[500px] w-full flex items-center justify-center text-slate-400">Loading 3D Keyboard...</div>}>
            <KeyboardDemo />
          </Suspense>
        </LazyRenderOnScroll>

        <LazyRenderOnScroll height="500px">
          <Suspense fallback={<div className="h-[500px] w-full flex items-center justify-center text-slate-400">Loading 3D Globe...</div>}>
            <Globe3DDemo />
          </Suspense>
        </LazyRenderOnScroll>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
