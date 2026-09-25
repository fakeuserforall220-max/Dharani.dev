import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Code2, Bot, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 px-4 md:px-8 xl:px-16 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left w-full lg:w-[65%] z-20 pb-20">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-white/90">Available for Opportunities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-display font-black tracking-tighter text-white leading-[1.0] mb-4 whitespace-nowrap"
          >
            <span className="text-white/90">Hi, I'm</span> <br className="hidden sm:block" />
            <span className="text-white">Dharani Govardhan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base font-bold tracking-widest text-white/70 uppercase mb-6"
          >
            AIML ENGINEER & PRODUCT BUILDER
          </motion.p>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-white/80 font-sans font-medium max-w-lg leading-relaxed mb-8 whitespace-normal"
          >
            I'm a B.Tech AIML student who loves turning ideas into real products. I enjoy working at the intersection of AI, full-stack development and problem solving, and I'm always exploring new technologies to build useful and impactful solutions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 font-sans w-full sm:w-auto mb-12"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,255,255,0.3)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="text-base tracking-wide">View My Work</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-bold transition-all duration-300 border border-white/40 hover:bg-white/10 hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="text-base tracking-wide">Contact Me</span>
              <Mail size={18} className="text-white group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-start gap-4 sm:gap-8 w-full"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-display">5+</span>
              <span className="text-xs sm:text-sm text-white/70 font-medium mt-1">Projects Built</span>
            </div>
            
            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-display">AIML</span>
              <span className="text-xs sm:text-sm text-white/70 font-medium mt-1">Core Focus</span>
            </div>

            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>

            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-display">Full-Stack</span>
              <span className="text-xs sm:text-sm text-white/70 font-medium mt-1">Product Development</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image & Floating Elements */}
        <div className="absolute lg:relative right-0 bottom-0 w-full lg:w-[45%] h-full min-h-[600px] flex items-end justify-center lg:justify-end z-10 pointer-events-none opacity-20 lg:opacity-100 lg:pointer-events-auto">
          
          {/* Orbital Lines SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none opacity-40 z-0">
            <svg viewBox="0 0 500 500" className="w-[120%] h-[120%] lg:-ml-20">
              <path d="M 50 250 Q 150 50 350 150 T 450 400" fill="transparent" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-50" />
              <path d="M 100 400 C 150 450 300 350 400 200" fill="transparent" stroke="white" strokeWidth="1" className="opacity-30" />
              <circle cx="250" cy="250" r="200" fill="transparent" stroke="white" strokeWidth="0.5" className="opacity-20" />
            </svg>
          </div>

          {/* Abstract blobs/shapes behind person */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none mix-blend-overlay z-0"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-[-2%] right-0 w-full h-[85%] lg:h-[110%] flex items-end justify-end z-10"
          >
            {/* The User's Profile Image */}
            <img 
              src="/profile/gopi.png" 
              alt="Dharani Govardhan" 
              className="h-full w-auto object-cover object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] origin-bottom transform lg:scale-110 lg:translate-x-12"
            />
          </motion.div>

          {/* Floating Glass Icon 1 (Code) */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] left-[5%] lg:left-[-5%] p-5 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 z-20"
          >
            <Code2 size={32} className="text-white" />
          </motion.div>

          {/* Floating Glass Icon 2 (Robot/AI) */}
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[50%] right-[0%] lg:right-[-10%] p-5 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 z-20"
          >
            <Bot size={32} className="text-white" />
          </motion.div>

          {/* Floating Glass Icon 3 (Chart/Data) */}
          <motion.div 
            animate={{ y: [-12, 12, -12], rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[10%] lg:right-[5%] p-4 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 z-20"
          >
            <BarChart3 size={28} className="text-white" />
          </motion.div>

          {/* Floating small dot 1 */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-[40%] right-[25%] w-3 h-3 bg-white rounded-full z-20 shadow-[0_0_10px_white]"
          />

          {/* Floating small dot 2 */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[45%] left-[20%] w-2 h-2 bg-white rounded-full z-20 shadow-[0_0_10px_white]"
          />

        </div>

      </div>
    </section>
  );
}
