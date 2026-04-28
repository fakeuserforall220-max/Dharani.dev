import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* ============ PHOTO STYLE BACKGROUND (GRIDS + SPLIT) ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Black Top Header Block from photo */}
        <div className="h-[45vh] w-full bg-[#111] relative overflow-hidden">
             {/* Large Watermark Text like the Photo */}
             <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 tracking-[0.4em] pointer-events-none uppercase">
                TYPING
             </h1>
             
             {/* Your Original Honeycomb Pattern (on black) */}
             <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
              <pattern id="honeycomb-dark" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="white" strokeWidth="0.6" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#honeycomb-dark)" />
            </svg>
        </div>

        {/* The "Like Never Before" White Bar from photo */}
        <div className="h-16 w-full bg-white border-y border-gray-100 flex items-center px-10">
            <div className="text-[10px] font-bold tracking-[0.5em] text-gray-300 uppercase">
                MECHANICAL • WIRELESS • HOT-SWAPPABLE
            </div>
        </div>

        {/* Your Original Patterns (Layered on the white part) */}
        <div className="absolute inset-0 top-[50vh]">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #8B5CF6 35px, #8B5CF6 36px)` }} />
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(circle, #8B5CF6 1.2px, transparent 1.2px)`, backgroundSize: "28px 28px" }} />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        </div>

        {/* Your Original Animated Scanning Line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-violet-500/20 z-10"
        />
      </div>

      {/* ============ CONTENT (SAME AS YOUR OLD CODE) ============ */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content (Unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
            style={{ opacity }}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit text-sm font-semibold bg-white/10 backdrop-blur-md text-violet-400 border border-white/10 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Full Stack Developer · AIML Student
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.05] tracking-tighter"
            >
              <span className="text-gray-900 md:text-white lg:text-gray-900 transition-colors">Hi, I'm</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                Dharani Govardhan
              </span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-500 font-sans leading-relaxed max-w-xl">
              I'm a first-year AIML student and full stack developer who builds
              modern, responsive, and real-world web applications.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold overflow-hidden transition-all text-[15px] text-white bg-black shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-gray-700 bg-white border border-gray-200 hover:border-violet-300 transition-all hover:scale-[1.02]">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Visual (Updated with Keyboard from Photo) */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
            style={{ y: y1 }}
          >
            {/* The Keyboard Image Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 w-full"
            >
               {/* Main Keyboard Image */}
               <img 
                src="https://www.keychron.com/cdn/shop/files/Keychron-K6-wireless-mechanical-keyboard-for-mac-windows-white-backlight-gateron-brown-switch_1800x1800.jpg?v=1661933550" 
                alt="Mechanical Keyboard"
                className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)] rounded-lg"
               />
               
               {/* Floating Code Overlay (Combining your old UI style) */}
               <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-xl hidden md:block"
                >
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <pre className="text-[10px] font-mono text-violet-600">
                    <code>{`System.init("Dharani")`}</code>
                  </pre>
               </motion.div>
            </motion.div>

            {/* Your Original Floating Icons (Repositioned) */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 w-20 h-20 rounded-2xl flex items-center justify-center z-30 bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl"
            >
              <Code2 className="w-8 h-8 text-blue-500" />
            </motion.div>

            {/* Your Original Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3 + i, repeat: Infinity }}
                className="absolute w-2 h-2 bg-violet-400 rounded-full"
                style={{ top: `${20 * i}%`, left: `${10 * i}%` }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
