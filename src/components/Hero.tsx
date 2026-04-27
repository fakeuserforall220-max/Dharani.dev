import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu, Brain } from "lucide-react";
import React, { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse tracking for the 3D Card tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background Effects - KEPT AS REQUESTED */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
          >
            {/* Improved Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-medium text-violet-600 w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Full Stack Developer · AIML Student
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.1] tracking-tighter text-gray-900">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
                Dharani Govardhan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed max-w-xl">
              I’m a first-year AIML student and full stack developer who builds modern,
              responsive, and real-world web applications with a focus on clean design,
              performance, and practical functionality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold overflow-hidden transition-all hover:bg-black hover:scale-105 shadow-xl shadow-gray-200"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-semibold text-gray-900 hover:bg-gray-50 transition-all shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Scene - IMPROVED WITH TILT */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full perspective-2000 hidden md:block">
            {/* Center Main Card */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-[420px] bg-white rounded-[2.5rem] border border-gray-100 p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.06)] z-20"
            >
              <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-100" />
                  <div className="w-3 h-3 rounded-full bg-amber-100" />
                  <div className="w-3 h-3 rounded-full bg-emerald-100" />
                </div>
                <Terminal className="text-violet-500 w-5 h-5" />
              </div>

              <div className="flex-1 py-8 font-mono text-sm text-gray-600 space-y-2">
                <p>
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-blue-600">developer</span> = {"{"}
                </p>
                <div className="pl-4 border-l border-gray-100 ml-1">
                  <p>name: <span className="text-emerald-600">"Dharani G."</span>,</p>
                  <p>role: <span className="text-emerald-600">"Full Stack"</span>,</p>
                  <p>aiml: <span className="text-violet-600">true</span>,</p>
                  <p>status: <span className="text-amber-600">"Building"</span></p>
                </div>
                <p>{"}"};</p>
                
                {/* Visual Progress Bar */}
                <div className="mt-8 pt-4 border-t border-gray-50">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mb-2">
                    <span>Deploying Engine</span>
                    <span>85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["0%", "85%"] }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-violet-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 - Frontend */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-4 lg:right-10 w-32 h-32 bg-white rounded-3xl border border-blue-50 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <Code2 className="w-10 h-10 text-blue-500 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Frontend</span>
            </motion.div>

            {/* Floating Card 2 - AIML */}
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-4 lg:left-10 w-32 h-32 bg-white rounded-full border border-orange-50 flex flex-col items-center justify-center shadow-2xl z-30"
            >
              <Cpu className="w-10 h-10 text-orange-500 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AI Engine</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
