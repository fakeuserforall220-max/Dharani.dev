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
      {/* Background Effects - Exactly as requested */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Globs for white theme */}
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
            style={{ opacity }}
          >
            {/* Badge Style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-violet-600 w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Full Stack Developer · AIML Student
            </div>

            {/* Typography - font-space */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.1] tracking-tighter text-gray-900">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
                Dharani Govardhan
              </span>
            </h1>

            {/* Typography - font-sans */}
            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed max-w-xl">
              I’m a first-year AIML student and full stack developer who builds modern,
              responsive, and real-world web applications with a focus on clean design,
              performance, and practical functionality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105 shadow-lg shadow-gray-200"
              >
                <span className="relative z-10 text-lg">View Projects</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-semibold text-gray-900 hover:bg-gray-50 transition-all shadow-sm"
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
            {/* Center Main Card - Light Version */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [5, 15, 5],
                rotateY: [-15, -5, -15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 bg-white rounded-[2.5rem] border border-gray-100 p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.06)] z-20 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-100" />
                  <div className="w-3 h-3 rounded-full bg-amber-100" />
                  <div className="w-3 h-3 rounded-full bg-emerald-100" />
                </div>
                <Terminal className="text-violet-500 w-5 h-5" />
              </div>

              {/* Typography - font-mono */}
              <div className="flex-1 py-6 font-mono text-sm text-gray-600 space-y-2">
                <p>
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-blue-600">dharani</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-600">"Dharani Govardhan"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-600">"Full Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  focus: <span className="text-emerald-600">["Frontend", "Backend"]</span>,
                </p>
                <p className="pl-4">
                  student: <span className="text-violet-600">true</span>,
                </p>
                <p>{"}"};</p>
                <p className="mt-4">
                  <span className="text-violet-600">await</span>{" "}
                  dharani.<span className="text-blue-600">build</span>();
                </p>
              </div>
            </motion.div>

            {/* Floating Layer 1 - Frontend */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 lg:right-10 w-32 h-32 bg-white rounded-3xl border border-blue-50 flex items-center justify-center shadow-2xl z-10"
            >
              <Code2 className="w-12 h-12 text-blue-500" />
            </motion.div>

            {/* Floating Layer 2 - AIML */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 h-28 bg-white rounded-full border border-orange-50 flex items-center justify-center shadow-2xl z-30"
            >
              <Cpu className="w-10 h-10 text-orange-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
