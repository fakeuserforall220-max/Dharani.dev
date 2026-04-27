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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background Effects - Light Version */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-[0.03]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 C200,300 300,700 500,500 C700,300 800,700 1000,500"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>

        {/* Soft Ambient Globs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
            style={{ opacity }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-semibold text-gray-600 w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Full Stack Developer · AIML Student
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-gray-900">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
                Dharani Govardhan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
              I build modern web applications with a focus on clean design, 
              high performance, and practical AI integration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold overflow-hidden transition-all hover:bg-black hover:scale-105 shadow-xl shadow-gray-200"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Scene */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full perspective-1000 hidden md:block"
            style={{ y: y1 }}
          >
            {/* Center Main Card - Styled like a clean physical card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateX: [2, 8, 2],
                rotateY: [-8, -2, -8],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-[420px] bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20"
            >
              <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-100 border border-red-200" />
                  <div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-200" />
                  <div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-200" />
                </div>
                <Terminal className="text-gray-400 w-5 h-5" />
              </div>

              <div className="flex-1 py-8 font-mono text-[13px] leading-relaxed">
                <p className="text-gray-400">
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-blue-600">dharani</span> = {"{"}
                </p>
                <div className="pl-4 space-y-1">
                  <p className="text-gray-500">name: <span className="text-emerald-600">"Dharani G."</span>,</p>
                  <p className="text-gray-500">role: <span className="text-emerald-600">"Full Stack"</span>,</p>
                  <p className="text-gray-500">focus: <span className="text-emerald-600">["React", "AI"]</span>,</p>
                  <p className="text-gray-500">status: <span className="text-violet-600">"Building"</span></p>
                </div>
                <p className="text-gray-400">{"}"};</p>
                
                <div className="mt-8 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-1">Activity</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-gray-600 text-xs">Deploying new features...</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Icon Card 1 */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 right-4 lg:right-12 w-24 h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-xl z-10"
            >
              <Code2 className="w-10 h-10 text-blue-500" />
            </motion.div>

            {/* Floating Icon Card 2 */}
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 left-4 lg:left-12 w-20 h-20 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-xl z-30"
            >
              <Cpu className="w-8 h-8 text-violet-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
