import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "1st Year AIML",
    color: "text-brand-violet",
    border: "border-brand-violet/30",
    bg: "from-brand-violet/10 to-transparent",
  },
  {
    icon: Briefcase,
    label: "Projects",
    value: "6+ Live Websites",
    color: "text-brand-blue",
    border: "border-brand-blue/30",
    bg: "from-brand-blue/10 to-transparent",
  },
  {
    icon: Code2,
    label: "Role",
    value: "Full Stack Developer",
    color: "text-brand-orange",
    border: "border-brand-orange/30",
    bg: "from-brand-orange/10 to-transparent",
  },
  {
    icon: Sparkles,
    label: "Focus",
    value: "Modern Web Apps",
    color: "text-pink-400",
    border: "border-pink-400/30",
    bg: "from-pink-400/10 to-transparent",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 px-4 py-2 text-sm text-brand-violet glass mb-5">
            About Me
          </span>

          <h2 className="text-4xl md:text-6xl font-space font-bold text-white leading-tight">
            More than just code — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              I build real digital experiences
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left Main 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotateY: 4, rotateX: -2, scale: 1.01 }}
            className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10 min-h-[520px] shadow-[0_0_50px_rgba(124,58,237,0.08)] overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* glow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-blue/10" />
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-purple/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-violet/20 to-brand-blue/20 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                    <span className="text-3xl font-bold text-white">DG</span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Dharani Govardhan
                    </h3>
                    <p className="text-brand-violet mt-1">
                      Full Stack Developer · AIML Student
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I’m a first-year AIML student and full stack developer passionate
                  about building modern, responsive, and real-world digital
                  products. I enjoy combining clean design, practical functionality,
                  and smooth user experiences to create websites that feel both
                  polished and purposeful.
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
                  Even at an early stage in my journey, I’ve already built and
                  deployed multiple live websites, exploring both frontend and
                  backend development while continuously pushing toward better UI,
                  performance, and product quality.
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-brand-violet/30 bg-brand-violet/10 text-brand-violet text-sm shadow-[0_0_20px_rgba(124,58,237,0.12)]">
                  Full Stack
                </span>
                <span className="px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-sm shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                  6+ Live Projects
                </span>
                <span className="px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm shadow-[0_0_20px_rgba(249,115,22,0.12)]">
                  AIML Student
                </span>
                <span className="px-4 py-2 rounded-full border border-pink-400/30 bg-pink-400/10 text-pink-400 text-sm shadow-[0_0_20px_rgba(236,72,153,0.12)]">
                  Modern Web Apps
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    rotateX: 4,
                    rotateY: -4,
                  }}
                  className={`relative rounded-[26px] border ${card.border} bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.04)]`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.bg}`} />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-black/20 flex items-center justify-center">
                      <Icon className={`w-7 h-7 ${card.color}`} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">{card.label}</p>
                      <h4 className="text-xl font-semibold text-white leading-snug">
                        {card.value}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
