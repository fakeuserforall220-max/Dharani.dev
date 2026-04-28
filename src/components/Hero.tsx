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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* ============ LAYERED PATTERN BACKGROUND ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* PATTERN 1 — Hexagonal Honeycomb */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="0.6"
              />
              <path
                d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>

        {/* PATTERN 2 — Diagonal Crosshatch */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(139,92,246,0.7) 35px,
                rgba(139,92,246,0.7) 36px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 35px,
                rgba(99,102,241,0.5) 35px,
                rgba(99,102,241,0.5) 36px
              )
            `,
          }}
        />

        {/* PATTERN 3 — Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.45) 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* PATTERN 4 — Concentric Circle Rings */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
          <defs>
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="#6366F1" strokeWidth="0.4" />
              <circle cx="50" cy="50" r="2" fill="rgba(139,92,246,0.4)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* PATTERN 5 — Triangle Mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="triangles" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
              <polygon points="40,0 80,70 0,70" fill="none" stroke="#A78BFA" strokeWidth="0.5" />
              <polygon points="40,70 0,0 80,0" fill="none" stroke="#818CF8" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>

        {/* PATTERN 6 — Plus/Cross Marks */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
          <defs>
            <pattern id="crosses" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
              <line x1="22" y1="18" x2="22" y2="26" stroke="#8B5CF6" strokeWidth="1" strokeLinecap="round" />
              <line x1="18" y1="22" x2="26" y2="22" stroke="#8B5CF6" strokeWidth="1" strokeLinecap="round" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosses)" />
        </svg>

        {/* PATTERN 7 — Square Grid (main visible grid) */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* PATTERN 8 — Fine Sub Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* ANIMATED — Slow Moving Grid Overlay */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-60px] opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* ANIMATED — Rotating Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] rounded-full opacity-[0.08]"
            style={{ border: "1px solid rgba(139,92,246,0.6)" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="w-[850px] h-[850px] rounded-full opacity-[0.05]"
            style={{ border: "1px solid rgba(99,102,241,0.5)" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[1050px] h-[1050px] rounded-full opacity-[0.03]"
            style={{ border: "1.5px dashed rgba(168,85,247,0.4)" }}
          />
        </div>

        {/* ANIMATED — Scanning Horizontal Line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.15) 20%, rgba(139,92,246,0.35) 50%, rgba(139,92,246,0.15) 80%, transparent 100%)",
            boxShadow: "0 0 15px rgba(139,92,246,0.1)",
          }}
        />

        {/* AMBIENT — Soft Color Blobs */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-[35%] left-[55%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />

        {/* EDGE VIGNETTE — fades patterns toward edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(255,255,255,0.7) 70%, white 100%)",
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
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit text-sm font-semibold bg-violet-50 text-violet-700 border border-violet-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
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
              <span className="text-gray-900">Hi, I'm</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                Dharani Govardhan
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-500 font-sans leading-relaxed max-w-xl"
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
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold overflow-hidden transition-all text-[15px] text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-gray-700 bg-white border border-gray-200 shadow-sm hover:border-violet-300 hover:text-violet-700 hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 rounded-[2.5rem] p-8 flex flex-col justify-between z-20 bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-[0_30px_80px_rgba(139,92,246,0.1),0_10px_30px_rgba(0,0,0,0.05)]"
            >
              {/* Inner dot pattern on card */}
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)`,
                  backgroundSize: "14px 14px",
                }}
              />

              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <Terminal className="w-5 h-5 text-violet-500" />
              </div>

              {/* Code Block */}
              <div className="flex-1 py-6 font-mono text-sm space-y-2 relative z-10">
                <p>
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-blue-600">dharani</span>{" "}
                  <span className="text-gray-400">= {"{"}</span>
                </p>
                <div className="pl-4 ml-1 border-l-2 border-violet-100">
                  <p>
                    <span className="text-gray-500">name:</span>{" "}
                    <span className="text-emerald-600">"Dharani G."</span>
                    <span className="text-gray-300">,</span>
                  </p>
                  <p>
                    <span className="text-gray-500">role:</span>{" "}
                    <span className="text-emerald-600">"Full Stack"</span>
                    <span className="text-gray-300">,</span>
                  </p>
                  <p>
                    <span className="text-gray-500">aiml:</span>{" "}
                    <span className="text-violet-600">true</span>
                    <span className="text-gray-300">,</span>
                  </p>
                </div>
                <p className="text-gray-400">{"}"}</p>
                <p className="mt-4">
                  <span className="text-violet-600">await</span>{" "}
                  <span className="text-gray-500">dharani.</span>
                  <span className="text-blue-600">build</span>
                  <span className="text-gray-400">();</span>
                </p>
              </div>

              {/* Card Glow */}
              <div
                className="absolute inset-0 rounded-[2.5rem] -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.15)",
                }}
              />
            </motion.div>

            {/* Floating Code2 Card */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 lg:right-10 w-32 h-32 rounded-3xl flex items-center justify-center z-10 bg-white/70 backdrop-blur-lg border border-gray-200/60 shadow-[0_20px_50px_rgba(59,130,246,0.08)]"
            >
              <Code2 className="w-12 h-12 text-blue-500" />
            </motion.div>

            {/* Floating Cpu Card */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 h-28 rounded-full flex items-center justify-center z-30 bg-white/70 backdrop-blur-lg border border-gray-200/60 shadow-[0_20px_50px_rgba(249,115,22,0.08)]"
            >
              <Cpu className="w-10 h-10 text-orange-500" />
            </motion.div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, Math.random() * 40 - 20, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="absolute rounded-full"
                style={{
                  width: `${4 + Math.random() * 4}px`,
                  height: `${4 + Math.random() * 4}px`,
                  top: `${15 + Math.random() * 70}%`,
                  left: `${5 + Math.random() * 90}%`,
                  background: i % 3 === 0
                    ? "rgba(139,92,246,0.5)"
                    : i % 3 === 1
                    ? "rgba(99,102,241,0.4)"
                    : "rgba(59,130,246,0.4)",
                  boxShadow: i % 3 === 0
                    ? "0 0 10px rgba(139,92,246,0.3)"
                    : i % 3 === 1
                    ? "0 0 10px rgba(99,102,241,0.25)"
                    : "0 0 10px rgba(59,130,246,0.25)",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
