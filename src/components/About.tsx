import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles, Layers3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Full Stack Developer",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    label: "AIML Student",
    color: "text-violet-400",
  },
  {
    icon: Layers3,
    label: "6+ Live Projects",
    color: "text-orange-400",
  },
  {
    icon: Sparkles,
    label: "Modern Web Apps",
    color: "text-pink-400",
  },
];

const stats = [
  { value: "1st", label: "Year AIML" },
  { value: "6+", label: "Live Projects" },
  { value: "100%", label: "Dedication" },
  { value: "24/7", label: "Learning" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%),linear-gradient(135deg,#050816_0%,#090312_45%,#12051d_100%)]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[8%] bottom-[10%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-brand-purple/30 bg-white/[0.03] px-4 py-2 text-sm font-medium text-brand-violet backdrop-blur-md"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-space font-bold leading-tight tracking-tight text-white"
            >
              Building the future through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                code, logic, and creativity
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-8 space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                I’m <span className="text-white font-medium">Dharani Govardhan</span>, a
                1st-year AIML student and full stack developer passionate about
                building modern, responsive, and real-world digital products.
                While my academic journey is rooted in Artificial Intelligence and
                Machine Learning, my creative strength lies in crafting immersive web
                experiences.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                With <span className="text-white font-semibold">6+ live deployed websites</span>,
                I enjoy turning ideas into polished applications that combine clean
                frontend design with practical backend functionality. My goal is to
                create products that are useful, scalable, and memorable.
              </p>
            </motion.div>

            {/* Highlight Tags */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0e0e12]/80 px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                  >
                    <Icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm md:text-base font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Animated 3D-style Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full"
          >
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-purple/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-blue/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_35%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

              <div className="absolute top-5 left-5 z-20 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
                3D Workspace
              </div>

              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full bg-brand-purple/20 blur-[100px]" />
                <div className="absolute w-64 h-64 rounded-full bg-brand-blue/20 blur-[100px]" />

                {/* Monitor */}
                <motion.div
                  animate={{
                    rotateY: [0, 8, 0, -8, 0],
                    rotateX: [0, 4, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] rounded-2xl border border-white/10 bg-[#0b0f1c] shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-3 rounded-xl bg-[#050816] border border-white/5 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    <div className="p-5 font-mono text-xs sm:text-sm text-gray-400 space-y-2">
                      <p>
                        <span className="text-brand-purple">const</span>{" "}
                        <span className="text-brand-blue">developer</span> = {"{"}
                      </p>
                      <p className="pl-4">
                        name: <span className="text-brand-orange">"Dharani"</span>,
                      </p>
                      <p className="pl-4">
                        role:{" "}
                        <span className="text-brand-orange">
                          "Full Stack Developer"
                        </span>
                        ,
                      </p>
                      <p className="pl-4">
                        builds:{" "}
                        <span className="text-brand-orange">
                          ["Web Apps", "UI", "Backend"]
                        </span>
                        ,
                      </p>
                      <p className="pl-4">
                        student: <span className="text-brand-purple">true</span>
                      </p>
                      <p>{"}"};</p>
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-10 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-xl" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-3 bg-slate-800 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.2)]" />
                </motion.div>

                {/* Floating Chip */}
                <motion.div
                  animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 left-10 sm:left-16 w-20 h-20 rounded-full border border-orange-400/30 bg-orange-400/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                >
                  <Cpu className="w-8 h-8 text-orange-400" />
                </motion.div>

                {/* Floating Code Icon */}
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 right-10 sm:right-16 w-20 h-20 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  <Code2 className="w-8 h-8 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
