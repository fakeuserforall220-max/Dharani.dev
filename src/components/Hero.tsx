import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated SVG Waves */}
        <svg
          className="absolute w-full h-full opacity-30 mix-blend-screen"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,500 C200,300 300,700 500,500 C700,300 800,700 1000,500"
            fill="none"
            stroke="url(#purpleGlow)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,600 C250,400 350,800 600,600 C850,400 950,800 1000,600"
            fill="none"
            stroke="url(#blueGlow)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Enhanced Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] mix-blend-screen" 
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
            style={{ opacity }}
          >
            {/* Improved Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 text-sm font-medium text-brand-violet w-fit shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Full Stack Developer · AIML Student
            </motion.div>

            {/* Enhanced Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.1] tracking-tighter text-white"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue relative">
                Dharani Govardhan
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue opacity-20 blur-2xl -z-10"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed max-w-xl"
            >
              I'm a first-year AIML student and full stack developer who builds modern,
              responsive, and real-world web applications with a focus on clean design,
              performance, and practical functionality.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-black rounded-full font-semibold overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all border border-white/20 hover:border-brand-purple/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links - New */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-gray-400 text-sm">Connect:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass border border-white/10 hover:border-brand-purple flex items-center justify-center transition-all duration-300 group hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-brand-purple transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right 3D Visual Scene */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full perspective-1000"
            style={{ y: y1, scale }}
          >
            {/* Enhanced Center Main Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [5, 15, 5],
                rotateY: [-15, -5, -15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 glass-dark rounded-2xl border border-brand-purple/30 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(124,58,237,0.3)] z-20 backdrop-blur-md hover:shadow-[0_0_80px_rgba(124,58,237,0.4)] transition-shadow duration-500"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                  />
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" 
                  />
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                  />
                </div>
                <Terminal className="text-brand-purple w-5 h-5" />
              </div>

              <div className="flex-1 py-6 font-mono text-sm text-gray-300 space-y-2">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-brand-purple">const</span>{" "}
                  <span className="text-brand-blue">dharani</span> = {"{"}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="pl-4"
                >
                  name: <span className="text-brand-orange">"Dharani Govardhan"</span>,
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="pl-4"
                >
                  role: <span className="text-brand-orange">"Full Stack Developer"</span>,
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="pl-4"
                >
                  focus: <span className="text-brand-orange">["Frontend", "Backend", "Web Apps"]</span>,
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                  className="pl-4"
                >
                  student: <span className="text-brand-purple">true</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                >
                  {"}"}; 
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 }}
                  className="mt-4"
                >
                  <span className="text-brand-purple">await</span>{" "}
                  dharani.<span className="text-brand-blue">build</span>();
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-brand-purple ml-1"
                  />
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Floating Layer 1 */}
            <motion.div
              animate={{ 
                y: [0, 20, 0], 
                x: [0, -10, 0],
                rotateZ: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-10 right-0 lg:right-10 w-32 lg:w-40 h-32 lg:h-40 glass rounded-xl border border-brand-blue/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] backdrop-blur-xl z-10 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-shadow duration-500"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="w-12 h-12 lg:w-16 lg:h-16 text-brand-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              </motion.div>
            </motion.div>

            {/* Enhanced Floating Layer 2 */}
            <motion.div
              animate={{ 
                y: [0, -30, 0], 
                x: [0, 20, 0],
                rotateZ: [0, -5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 lg:w-32 h-28 lg:h-32 glass rounded-full border border-brand-orange/40 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)] backdrop-blur-xl z-30 hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-shadow duration-500"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-10 h-10 lg:w-12 lg:h-12 text-brand-orange drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
              </motion.div>
            </motion.div>

            {/* New Floating Element - Sparkles */}
            <motion.div
              animate={{ 
                y: [0, 15, 0], 
                x: [0, 15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-0 lg:left-5 w-20 lg:w-24 h-20 lg:h-24 glass rounded-lg border border-brand-purple/40 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] backdrop-blur-xl z-15 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-shadow duration-500"
            >
              <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-brand-purple drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
            </motion.div>

            {/* New Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              style={{ y: y2 }}
              className="absolute top-5 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-5 glass border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md z-40"
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <div>
                  <motion.p 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl font-bold text-white"
                  >
                    50+
                  </motion.p>
                  <p className="text-sm text-gray-400">Projects Done</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-brand-purple rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
