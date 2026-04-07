import { motion } from "framer-motion";
import { Code2, Cpu, Braces } from "lucide-react";

const stats = [
  {
    value: "1st",
    label: "YEAR AIML",
    textClass: "bg-gradient-to-r from-cyan-300 to-blue-500",
    cardClass: "bg-[#15121d]",
  },
  {
    value: "100%",
    label: "DEDICATION",
    textClass: "bg-gradient-to-r from-white to-white",
    cardClass: "bg-[#13283a]",
  },
  {
    value: "6+",
    label: "LIVE PROJECTS",
    textClass: "bg-gradient-to-r from-white to-white",
    cardClass: "bg-[#15121d]",
  },
  {
    value: "24/7",
    label: "LEARNING",
    textClass: "bg-gradient-to-r from-orange-400 to-orange-200",
    cardClass: "bg-[#15121d]",
  },
];

const tags = [
  {
    icon: Code2,
    label: "Full Stack Dev",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    label: "AIML Enthusiast",
    color: "text-violet-500",
  },
  {
    icon: Braces,
    label: "Creative Coder",
    color: "text-orange-500",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%),linear-gradient(135deg,#050816_0%,#0a0614_45%,#12051d_100%)]"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[3rem] sm:text-[4rem] lg:text-[5.2rem] leading-[0.95] font-bold tracking-[-0.04em] text-white"
            >
              Decoding the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Future
              </span>
              .
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-10 space-y-10"
            >
              <p className="max-w-[860px] text-[1.15rem] md:text-[1.28rem] leading-[1.75] text-[#9ca3af] font-medium">
                I'm{" "}
                <span className="text-white">Dharani Govardhan</span>, a 1st-year AIML
                student with a strong passion for intelligent systems and modern web
                technologies. While my academic foundation is in Artificial
                Intelligence and Machine Learning, my real creative playground is full
                stack development.
              </p>

              <p className="max-w-[860px] text-[1.15rem] md:text-[1.28rem] leading-[1.75] text-[#9ca3af] font-medium">
                Having already built{" "}
                <span className="text-white font-semibold">
                  6+ live, production-ready websites
                </span>
                , I focus on connecting elegant frontend experiences with practical
                backend functionality. I don’t just build interfaces — I create real
                digital products.
              </p>
            </motion.div>

            {/* tags */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              {tags.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="group inline-flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0e0e12]/80 px-7 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-[#121218]"
                  >
                    <Icon
                      className={`h-5 w-5 ${tag.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                      {tag.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative min-h-[178px] rounded-[28px] border border-white/8 ${stat.cardClass} overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
                  <h3
                    className={`bg-clip-text text-transparent ${stat.textClass} text-[3.6rem] md:text-[4.4rem] font-bold tracking-[-0.05em] leading-none`}
                  >
                    {stat.value}
                  </h3>
                  <p className="mt-4 text-[0.95rem] md:text-[1rem] font-semibold tracking-[0.06em] text-[#8b8f98]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
