import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Brain, Zap, Cpu } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for the 3D cards
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]"
    >
      {/* --- PREMIUM BLUEPRINT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Grid */}
        <div 
          className="absolute inset-0 opacity-[0.3]" 
          style={{ 
            backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)`,
            backgroundSize: '45px 45px' 
          }}
        />
        {/* Radial masking so the grid fades at the edges */}
        <div className="absolute inset-0 bg-[#FAFAFA] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Soft Mesh Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-100/40 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT: High-Impact Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[11px] font-black tracking-[0.2em] uppercase text-violet-600 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Available for Projects
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-space font-bold leading-[0.9] tracking-tighter text-gray-900 mb-8">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
                Intelligence.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-sans leading-relaxed max-w-xl mb-12">
              I'm <span className="text-gray-900 font-bold tracking-tight">Dharani Govardhan</span>. 
              I build production-grade web systems powered by Artificial Intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] font-bold text-lg flex items-center gap-3 hover:bg-black transition-all shadow-2xl shadow-gray-300"
              >
                Explore Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-[1.5rem] font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: Layered 3D Perspective Card */}
          <motion.div
            className="lg:col-span-5 relative perspective-1000 hidden lg:block"
            style={{ y: y1, rotate }}
          >
            {/* The Main Terminal Card */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [-5, 5, -5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full aspect-[4/5] bg-white rounded-[3rem] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.06)] p-10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-100 border border-red-200" />
                  <div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-200" />
                  <div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-200" />
                </div>
                <Terminal className="text-gray-300 w-5 h-5" />
              </div>

              {/* Code Content */}
              <div className="flex-1 py-10 font-mono text-sm leading-relaxed text-gray-400">
                <p><span className="text-violet-500">import</span> {'{ Brain }'} <span className="text-violet-500">from</span> 'aiml';</p>
                <div className="mt-8 space-y-2">
                  <p className="text-gray-900 font-bold text-xl leading-tight">
                    Building the next <br /> 
                    generation of <br />
                    digital products.
                  </p>
                  <p className="text-blue-600 font-bold tracking-tighter pt-4">Status: Deploying_Success</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600">
                    <Cpu size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Hardware Accel.</span>
                </div>
                <div className="text-right">
                  <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/2 bg-violet-500"
                    />
                  </div>
                </div>
              </div>

              {/* Subtle mesh inside the card */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Floating Secondary Icon Card */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-44 h-44 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center z-20"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Brain size={28} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Domain</p>
              <p className="text-sm font-bold text-gray-900">Neural Tech</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
