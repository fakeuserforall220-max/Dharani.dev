import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Brain, Cpu, Sparkles } from "lucide-react";
import React, { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse tracking for the 3D Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA] cursor-default"
    >
      {/* --- LAYER 1: ADVANCED BLUEPRINT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Grid */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `linear-gradient(#E5E7EB 1.5px, transparent 1.5px), linear-gradient(90deg, #E5E7EB 1.5px, transparent 1.5px)`,
            backgroundSize: '50px 50px' 
          }}
        />
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-violet-100/20 to-transparent z-10"
        />

        {/* Huge Outlined Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <h2 className="text-[20vw] font-space font-black text-gray-200/30 uppercase tracking-tighter">
            Architect
          </h2>
        </div>

        {/* Ambient Mesh Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-violet-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT CONTENT: TYPOGRAPHY & CTA --- */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-200 text-[10px] font-black tracking-[0.3em] uppercase text-gray-900 mb-10 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                System.Status: Online
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-[110px] font-space font-bold leading-[0.85] tracking-tighter text-gray-900 mb-10">
                Crafting <br />
                <span className="italic font-light text-gray-400">Digital</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
                  Intelligenze.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-500 font-sans leading-relaxed max-w-xl mb-12">
                I am <span className="text-gray-900 font-bold">Dharani Govardhan</span>, 
                merging industrial-grade <span className="text-violet-600">Full Stack</span> systems 
                with advanced <span className="text-blue-600">Neural Engineering</span>.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <a
                  href="#projects"
                  className="group relative px-12 py-6 bg-gray-900 text-white rounded-[2rem] font-bold text-lg overflow-hidden transition-all shadow-2xl shadow-gray-300"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    Launch Projects <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                {/* Micro-stats */}
                <div className="hidden md:flex gap-8 border-l border-gray-200 pl-8">
                  <div>
                    <p className="text-2xl font-space font-bold text-gray-900">06+</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Deployments</p>
                  </div>
                  <div>
                    <p className="text-2xl font-space font-bold text-gray-900">1st</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Year AIML</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT VISUAL: INTERACTIVE 3D STACK --- */}
          <div className="lg:col-span-5 relative perspective-2000 hidden lg:block">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full aspect-[4/5]"
            >
              {/* Card 1: The Base (Shadow Layer) */}
              <div className="absolute inset-4 bg-gray-200/20 rounded-[4rem] blur-2xl translate-z-[-50px]" />

              {/* Card 2: The UI Layer */}
              <div className="absolute inset-0 bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.05)] p-12 flex flex-col justify-between overflow-hidden translate-z-[50px]">
                <div className="flex items-center justify-between border-b border-gray-50 pb-8">
                  <Terminal size={24} className="text-violet-500" />
                  <div className="flex gap-2">
                    <div className="w-8 h-1.5 rounded-full bg-gray-100" />
                    <div className="w-4 h-1.5 rounded-full bg-gray-100" />
                  </div>
                </div>

                <div className="flex-1 py-10">
                  <p className="font-mono text-sm text-gray-400 mb-6 tracking-tight">
                    <span className="text-violet-500">import</span> {'{ GPT }'} <span className="text-violet-500">from</span> 'brain';
                  </p>
                  <h3 className="text-4xl font-space font-bold text-gray-900 leading-[1.1] mb-6">
                    Building the <br /> Next-Gen <br /> <span className="text-gray-300 italic">Interface.</span>
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-lg border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-700 tracking-tighter uppercase">Ready for Production</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center">
                           <Sparkles size={14} className="text-gray-300" />
                        </div>
                      ))}
                   </div>
                   <Cpu className="text-gray-200" size={32} />
                </div>
              </div>

              {/* Card 3: Floating "AI" Element */}
              <motion.div
                style={{ translateZ: "120px" }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white p-8 flex flex-col items-center justify-center text-center z-30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl shadow-violet-200">
                  <Brain size={32} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Logic.v15</p>
                <p className="text-sm font-bold text-gray-900 mt-1 uppercase tracking-tighter">Neural Engine</p>
              </motion.div>
            </motion.div>

            {/* Floating Tech Chips */}
            {['Next.js 15', 'PyTorch', 'Bun'].map((tech, i) => (
              <motion.div
                key={tech}
                animate={{ 
                  y: [0, i % 2 === 0 ? -40 : 40, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0]
                }}
                transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${i === 0 ? 'top-0 -left-20' : i === 1 ? 'bottom-20 -left-32' : 'top-1/2 -right-20'} px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest z-0`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
