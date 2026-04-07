import { motion } from "framer-motion";
import { Code2, Cpu, Braces } from "lucide-react";

const stats = [
  {
    value: "1st",
    label: "YEAR AIML",
    color: "from-cyan-300 to-blue-500",
    bg: "bg-[#14111d]",
  },
  {
    value: "100%",
    label: "DEDICATION",
    color: "from-white to-white",
    bg: "bg-[#13283a]",
  },
  {
    value: "6+",
    label: "LIVE PROJECTS",
    color: "from-white to-white",
    bg: "bg-[#14111d]",
  },
  {
    value: "24/7",
    label: "LEARNING",
    color: "from-orange-400 to-orange-200",
    bg: "bg-[#14111d]",
  },
];

const tags = [
  {
    icon: Code2,
    label: "Full Stack Dev",
    iconColor: "text-cyan-400",
  },
  {
    icon: Cpu,
    label: "AIML Enthusiast",
    iconColor: "text-violet-500",
  },
  {
    icon: Braces,
    label: "Creative Coder",
    iconColor: "text-orange-500",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-[#050816] via-[#090312] to-[#14051f]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold leading-tight tracking-tight text-white">
              Decoding the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Future
              </span>
              .
            </h2>

            <div className="mt-8 space-y-8 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                I'm <span className="text-white font-medium">Dharani Govardhan</span>, a
                1st-year AIML student with a strong passion for building modern web
                applications. While my academic foundation is in Artificial
                Intelligence and Machine Learning, I actively create immersive,
                functional, and real-world digital experiences through full stack
                development.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                Having already built{" "}
                <span className="text-white font-semibold">
                  6+ live, production-ready websites
                </span>
                , I focus on bridging clean frontend experiences with practical backend
                functionality. I don’t just write code — I build digital products that
                are modern, useful, and impactful.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-4">
              {tags.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-white backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                  >
                    <Icon className={`h-5 w-5 ${tag.iconColor}`} />
                    <span className="text-base font-medium">{tag.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-[28px] border border-white/10 ${stat.bg} min-h-[180px] flex flex-col items-center justify-center text-center px-6 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md`}
              >
                <h3
                  className={`text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                >
                  {stat.value}
                </h3>
                <p className="mt-4 text-sm md:text-base tracking-wide text-gray-500 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
