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
      style={{ backgroundColor: "#08080C" }}
    >
      {/* ============ LAYERED PATTERN BACKGROUND ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* PATTERN 1 — Hexagonal Honeycomb */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="rgba(139,92,246,1)"
                strokeWidth="0.5"
              />
              <path
                d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                fill="none"
                stroke="rgba(139,92,246,1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>

        {/* PATTERN 2 — Diagonal Crosshatch Lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(139,92,246,0.6) 40px,
                rgba(139,92,246,0.6) 41px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(59,130,246,0.6) 40px,
                rgba(59,130,246,0.6) 41px
              )
            `,
          }}
        />

        {/* PATTERN 3 — Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* PATTERN 4 — Large Circle Rings */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
          <defs>
            <pattern id="circles" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(139,92,246,1)" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(59,130,246,1)" strokeWidth="0.3" />
              <circle cx="60" cy="60" r="2" fill="rgba(139,92,246,0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* PATTERN 5 — Triangular Mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="triangles" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
              <polygon points="40,0 80,70 0,70" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="0.4" />
              <polygon points="40,70 0,0 80,0" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>

        {/* PATTERN 6 — Plus/Cross Signs */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="crosses" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <line x1="25" y1="20" x2="25" y2="30" stroke="rgba(139,92,246,0.8)" strokeWidth="0.8" />
              <line x1="20" y1="25" x2="30" y2="25" stroke="rgba(139,92,246,0.8)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosses)" />
        </svg>

        {/* ANIMATED FLOATING GRID — moves slowly */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-50px] opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* GLOWING ORBIT RINGS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[700px] h-[700px] rounded-full border opacity-[0.06]"
            style={{ borderColor: "rgba(139,92,246,0.5)" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="w-[900px] h-[900px] rounded-full border opacity-[0.04]"
            style={{ borderColor: "rgba(59,130,246,0.5)" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[1100px] h-[1100px] rounded-full opacity-[0.03]"
            style={{ border: "1px dashed rgba(168,85,247,0.4)" }}
          />
        </div>

        {/* GLOWING HORIZONTAL SCAN LINES */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,246,0.3) 20%, rgba(139,92,246,0.6) 50%, rgba(139,92,246,0.3) 80%, transparent)",
          }}
        />
        <motion.div
          animate={{ y: ["200%", "-100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.2) 20%, rgba(59,130,246,0.4) 50%, rgba(59,130,246,0.2) 80%, transparent)",
          }}
        />

        {/* AMBIENT GLOW BLOBS */}
        <div
          className="absolute top-[-150px] left-[-150px] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[-150px] right-[-150px] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-[30%] left-[50%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* EDGE VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #08080C 100%)",
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit text-sm font-medium backdrop-blur-md"
              style={{
                color: "rgba(196,167,255,1)",
                border: "1px solid rgba(139,92,246,0.3)",
                background: "rgba(139,92,246,0.08)",
                boxShadow: "0 0 20px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
              </span>
              Full Stack Developer · AIML Student
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.05] tracking-tighter"
            >
              <span className="text-white">Hi, I'm</span> <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #818CF8 30%, #60A5FA 60%, #C084FC 100%)",
                }}
              >
                Dharani Govardhan
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl font-sans leading-relaxed max-w-xl"
              style={{ color: "rgba(156,163,175,1)" }}
            >
              I'm a first-year AIML student and full stack developer who builds
              modern, responsive, and real-world web applications with a focus on
              clean design, performance, and practical functionality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold overflow-hidden transition-all text-[15px] text-white"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #6366F1, #7C3AED)",
                  backgroundSize: "200% 200%",
                  boxShadow: "0 0 25px rgba(124,58,237,0.4), 0 0 80px rgba(124,58,237,0.12)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #6D28D9, #4F46E5, #6D28D9)" }}
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:border-violet-500/50 hover:text-white backdrop-blur-md"
                style={{
                  color: "rgba(209,213,219,1)",
                  border: "1px solid rgba(75,85,99,0.5)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Contact Me
              </a>
            </motion.div>
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
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(139,92,246,0.2)",
                boxShadow:
                  "0 0 0 1px rgba(139,92,246,0.05), 0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Inner pattern on card */}
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)`,
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-4 relative z-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.5)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "rgba(245,158,11,0.5)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "rgba(16,185,129,0.5)" }} />
                </div>
                <Terminal className="w-5 h-5" style={{ color: "rgba(167,139,250,0.8)" }} />
              </div>

              {/* Code Block */}
              <div className="flex-1 py-6 font-mono text-sm space-y-2 relative z-10">
                <p>
                  <span style={{ color: "#C084FC" }}>const</span>{" "}
                  <span style={{ color: "#93C5FD" }}>dharani</span>{" "}
                  <span style={{ color: "rgba(107,114,128,0.8)" }}>= {"{"}</span>
                </p>
                <div className="pl-4 ml-1" style={{ borderLeft: "2px solid rgba(139,92,246,0.15)" }}>
                  <p>
                    <span style={{ color: "rgba(156,163,175,0.7)" }}>name:</span>{" "}
                    <span style={{ color: "#6EE7B7" }}>"Dharani G."</span>
                    <span style={{ color: "rgba(107,114,128,0.5)" }}>,</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(156,163,175,0.7)" }}>role:</span>{" "}
                    <span style={{ color: "#6EE7B7" }}>"Full Stack"</span>
                    <span style={{ color: "rgba(107,114,128,0.5)" }}>,</span>
                  </p>
                  <p>
                    <span style={{ color: "rgba(156,163,175,0.7)" }}>aiml:</span>{" "}
                    <span style={{ color: "#C084FC" }}>true</span>
                    <span style={{ color: "rgba(107,114,128,0.5)" }}>,</span>
                  </p>
                </div>
                <p style={{ color: "rgba(107,114,128,0.8)" }}>{"}"}</p>
                <p className="mt-4">
                  <span style={{ color: "#C084FC" }}>await</span>{" "}
                  <span style={{ color: "rgba(156,163,175,0.6)" }}>dharani.</span>
                  <span style={{ color: "#93C5FD" }}>build</span>
                  <span style={{ color: "rgba(107,114,128,0.5)" }}>();</span>
                </p>
              </div>

              {/* Card Glow */}
              <div
                className="absolute inset-0 rounded-[2.5rem] -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.2)",
                }}
              />
            </motion.div>

            {/* Floating Code2 Card */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 lg:right-10 w-32 h-32 rounded-3xl flex items-center justify-center z-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(59,130,246,0.2)",
                boxShadow: "0 0 40px rgba(59,130,246,0.1), 0 20px 60px rgba(0,0,0,0.4)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Code2 className="w-12 h-12" style={{ color: "rgba(147,197,253,0.8)" }} />
            </motion.div>

            {/* Floating Cpu Card */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 h-28 rounded-full flex items-center justify-center z-30"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(249,115,22,0.2)",
                boxShadow: "0 0 40px rgba(249,115,22,0.1), 0 20px 60px rgba(0,0,0,0.4)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Cpu className="w-10 h-10" style={{ color: "rgba(251,146,60,0.8)" }} />
            </motion.div>

            {/* Small floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, Math.random() * 40 - 20, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  background: i % 2 === 0 ? "rgba(139,92,246,0.6)" : "rgba(59,130,246,0.6)",
                  boxShadow: i % 2 === 0
                    ? "0 0 8px rgba(139,92,246,0.4)"
                    : "0 0 8px rgba(59,130,246,0.4)",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
