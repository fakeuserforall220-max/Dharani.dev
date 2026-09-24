import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex font-sans items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-slate-700 uppercase">Available for work</span>
          </div>
        </motion.div>

        {/* Main Headline with Serif Font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-slate-900 mb-8 leading-[1.1] italic"
        >
          Building Digital
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 font-sans not-italic">
            Experiences.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-600 font-serif font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I'm Dharani Govardhan, a Full Stack Developer & AI/ML student crafting highly performant, intelligent, and deeply engaging web applications.
        </motion.p>

        {/* Call to Actions (Liquid Glass style - light theme adapted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 font-sans"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/40 hover:bg-white/60 backdrop-blur-2xl text-slate-900 rounded-full font-bold transition-all duration-300 hover:scale-105 border border-white/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.1)] w-full sm:w-auto"
          >
            <span className="text-base tracking-wide">Explore Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-slate-900/5 backdrop-blur-md border border-slate-900/20 rounded-full font-bold text-slate-700 text-base transition-all duration-300 hover:scale-105 hover:text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.05)] w-full sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-sans"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
