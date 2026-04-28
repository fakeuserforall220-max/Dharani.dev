import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-white flex flex-col"
    >
      {/* 1. BLACK HEADER BLOCK */}
      <div className="bg-[#111] w-full pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Main Bold Title */}
            <h1 className="text-white text-6xl md:text-8xl lg:text-[120px] font-black tracking-[0.3em] md:tracking-[0.6em] text-center uppercase ml-[0.3em] md:ml-[0.6em]">
              TYPING
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 2. WHITE STRIP WITH SUBTITLE */}
      <div className="w-full bg-white border-y border-gray-100 py-6 px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <h2 className="text-black text-xl md:text-2xl font-bold tracking-[0.4em] uppercase">
            LIKE NEVER BEFORE
          </h2>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
             <span>Mechanical</span>
             <span>Wireless</span>
             <span>Hot-swappable</span>
          </div>
        </motion.div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="container mx-auto px-6 py-20 flex-grow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
               <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                The Portfolio <br />
                Meet All You <br />
                Need
              </h3>
              <p className="text-gray-500 max-w-md leading-relaxed text-sm tracking-wide">
                Dharani Govardhan. First-year AIML student and full stack developer. 
                Building high-performance interfaces with surgical precision and 
                minimalist aesthetics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center gap-2">
                View Projects <ArrowRight size={14} />
              </a>
              <a href="#contact" className="border border-black text-black px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all flex items-center gap-2">
                Contact <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Large Product Image Mockup */}
          <motion.div 
            style={{ y }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group">
               {/* Replace with your actual image */}
               <img 
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1000" 
                alt="Product"
                className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 border-[20px] border-white/50 pointer-events-none" />
            </div>
            {/* Small floating detail card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 shadow-2xl border border-gray-100 hidden md:block"
            >
                <p className="text-[10px] font-black tracking-tighter text-orange-500 uppercase mb-1">Status</p>
                <p className="text-lg font-bold">Open to Work</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 4. "USED BY" / LOGO BAR */}
      <div className="border-t border-gray-100 py-10 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-8">Tech Stack & Tools</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {/* Using simple text or icons to represent logos */}
            <span className="font-bold text-xl tracking-tighter">REACT</span>
            <span className="font-bold text-xl tracking-tighter">PYTHON</span>
            <span className="font-bold text-xl tracking-tighter">TYPESCRIPT</span>
            <span className="font-bold text-xl tracking-tighter">NEXT.JS</span>
            <span className="font-bold text-xl tracking-tighter">TAILWIND</span>
          </div>
        </div>
      </div>
    </section>
  );
}
