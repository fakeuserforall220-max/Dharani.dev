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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: "#0F0F13" }}
    >
      {/* ============ BACKGROUND SYSTEM ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Layer 1 — Base Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Layer 2 — Fine Sub Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Layer 3 — Glowing Dots at Intersections */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.35) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Layer 4 — Center Glow Radial */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Layer 5 — Edge Vignette to fade grid at borders */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, #0F0F13 100%)
            `,
          }}
        />

        {/* Layer 6 — Ambient Color Blobs */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Layer 7 — Horizontal Scan Line Accent */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "30%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.4) 30%, rgba(139,92,246,0.6) 50%, rgba(139,92,246,0.4) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: "70%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.2) 30%, rgba(59,130,246,0.35) 50%, rgba(59,130,246,0.2) 70%, transparent 100%)",
          }}
        />

        {/* Layer 8 — Vertical Scan Line Accent */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "25%",
            width: "1px",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.2) 30%, rgba(139,92,246,0.35) 50%, rgba(139,92,246,0.2) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "75%",
            width: "1px",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.15) 30%, rgba(59,130,246,0.25) 50%, rgba(59,130,246,0.15) 70%, transparent 100%)",
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
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit text-sm font-medium text-violet-300 border border-violet-500/30 bg-violet-500/10 shadow-lg shadow-violet-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
              </span>
              Full Stack Developer · AIML Student
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.1] tracking-tighter text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
                Dharani Govardhan
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed max-w-xl">
              I'm a first-year AIML student and full stack developer who builds
              modern, responsive, and real-world web applications with a focus on
              clean design, performance, and practical functionality.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold overflow-hidden transition-all text-[15px] text-white"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)",
                }}
              >
                View Projects{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[15px] text-gray-300 border border-gray-700 hover:border-violet-500/50 hover:text-white transition-all"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Scene */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full hidden md:block"
            style={{ y: y1 }}
          >
            {/* Center Main Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [5, 12, 5],
                rotateY: [-12, -5, -12],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 rounded-[2.5rem] p-8 flex flex-col justify-between z-20"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(139,92,246,0.25)",
                boxShadow:
                  "0 0 0 1px rgba(139,92,246,0.1), 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Card Top Bar */}
              <div
                className="flex items-center justify-between pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                </div>
                <Terminal className="text-violet-400 w-5 h-5" />
              </div>

              {/* Code Block */}
              <div className="flex-1 py-6 font-mono text-sm space-y-2">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-400">dharani</span>{" "}
                  <span className="text-gray-500">= {"{"}</span>
                </p>
                <div className="pl-4 ml-1" style={{ borderLeft: "2px solid rgba(139,92,246,0.2)" }}>
                  <p>
                    <span className="text-gray-500">name:</span>{" "}
                    <span className="text-emerald-400">"Dharani G."</span>
                    <span className="text-gray-600">,</span>
                  </p>
                  <p>
                    <span className="text-gray-500">role:</span>{" "}
                    <span className="text-emerald-400">"Full Stack"</span>
                    <span className="text-gray-600">,</span>
                  </p>
                  <p>
                    <span className="text-gray-500">aiml:</span>{" "}
                    <span className="text-violet-400">true</span>
                    <span className="text-gray-600">,</span>
                  </p>
                </div>
                <p className="text-gray-500">{"}"};</p>
                <p className="mt-4">
                  <span className="text-violet-400">await</span>{" "}
                  <span className="text-gray-400">dharani.</span>
                  <span className="text-blue-400">build</span>
                  <span className="text-gray-500">();</span>
                </p>
              </div>

              {/* Glow Behind Card */}
              <div
                className="absolute inset-0 rounded-[2.5rem] -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }}
              />
            </motion.div>

            {/* Floating Code2 Icon */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 lg:right-10 w-32 h-32 rounded-3xl flex items-center justify-center z-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(59,130,246,0.25)",
                boxShadow: "0 0 30px rgba(59,130,246,0.15), 0 20px 40px rgba(0,0,0,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Code2 className="w-12 h-12 text-blue-400" />
            </motion.div>

            {/* Floating Cpu Icon */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 h-28 rounded-full flex items-center justify-center z-30"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(249,115,22,0.25)",
                boxShadow: "0 0 30px rgba(249,115,22,0.15), 0 20px 40px rgba(0,0,0,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Cpu className="w-10 h-10 text-orange-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
