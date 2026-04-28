import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* ============ MULTI-LAYERED PATTERN & GRID BACKGROUND ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Main Square Grid (60px) */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* 2. Fine Sub Grid (15px) */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "15px 15px",
          }}
        />

        {/* 3. Honeycomb Pattern (From your old code) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#8B5CF6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>

        {/* 4. Concentric Circles (From your old code) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#6366F1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* 5. Intersection Dots */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* 6. Animated Scanning Line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
          }}
        />

        {/* 7. Edge Fade (Vignette) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(255,255,255,0.8) 70%, white 100%)",
          }}
        />
      </div>

      {/* ============ CONTENT ============ */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
            style={{ opacity }}
          >
            <motion.div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit text-sm font-semibold bg-violet-50 text-violet-700 border border-violet-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Full Stack Developer · AIML Student
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.05] tracking-tighter">
              <span className="text-gray-900">Hi, I'm</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                Dharani Govardhan
              </span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-500 font-sans leading-relaxed max-w-xl">
              I'm a first-year AIML student and full stack developer who builds
              modern, responsive, and real-world web applications.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-gray-700 bg-white border border-gray-200 shadow-sm hover:border-violet-300 transition-all hover:scale-[1.02]">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Visual (Keyboard + Your Original Cards) */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full hidden md:block"
            style={{ y: y1 }}
          >
            {/* 1. Main Keyboard Visual (from photo style) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 pointer-events-none"
            >
              <img 
                src="https://www.keychron.com/cdn/shop/files/Keychron-K6-wireless-mechanical-keyboard-for-mac-windows-white-backlight-gateron-brown-switch_1800x1800.jpg?v=1661933550" 
                alt="Keyboard"
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.1)] opacity-90"
              />
            </motion.div>

            {/* 2. Your Original Code Card (Floating on top) */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [5, 12, 5],
                rotateY: [-12, -5, -12],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 rounded-[2.5rem] p-8 flex flex-col justify-between z-20 bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <Terminal className="w-5 h-5 text-violet-500" />
              </div>

              <div className="flex-1 py-6 font-mono text-sm space-y-2">
                <p><span className="text-violet-600">const</span> <span className="text-blue-600">dharani</span> <span className="text-gray-400">= {"{"}</span></p>
                <div className="pl-4 border-l-2 border-violet-100">
                   <p><span className="text-emerald-600">"Full Stack"</span>,</p>
                   <p><span className="text-violet-600">aiml: true</span></p>
                </div>
                <p className="text-gray-400">{"}"}</p>
              </div>
            </motion.div>

            {/* 3. Your Original Floating Icons */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-0 right-0 w-28 h-28 rounded-3xl flex items-center justify-center z-30 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg"
            >
              <Code2 className="w-10 h-10 text-blue-500" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full flex items-center justify-center z-30 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg"
            >
              <Cpu className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
