import { motion } from "framer-motion";
import { User, Code, Sparkles, BookOpen } from "lucide-react";
import { cn } from "../utils/cn";

const stats = [
  { icon: BookOpen, label: "Education", value: "1st Year AIML", color: "text-brand-purple" },
  { icon: Code, label: "Experience", value: "6+ Live Projects", color: "text-brand-blue" },
  { icon: Sparkles, label: "Focus", value: "Modern UI/UX", color: "text-brand-orange" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
            About <span className="text-brand-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto md:mx-0 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group border-white/5 hover:border-brand-purple/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150" />
            
            <div className="relative z-10">
              <User className="w-12 h-12 text-brand-purple mb-6" />
              <h3 className="text-2xl font-space font-bold text-white mb-4">
                Creative Tech Mindset
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I’m an <span className="text-white font-medium">AIML student</span> and <span className="text-brand-violet font-medium">frontend developer</span> focused on creating sleek, responsive, and visually engaging web interfaces.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I enjoy transforming ideas into real, interactive experiences that feel smooth, modern, and user-centered. My goal is to build digital products that leave a lasting impression through seamless motion and elegant design.
              </p>
            </div>
          </motion.div>

          {/* Stats/Highlights Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="glass rounded-2xl p-6 flex items-center gap-6 border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 rounded-xl glass-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={cn("w-8 h-8", stat.color)} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">{stat.label}</p>
                    <p className="text-xl font-space font-bold text-white">{stat.value}</p>
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
