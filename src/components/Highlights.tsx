import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import { cn } from "../utils/cn";

const highlights = [
  {
    title: "Live Deployed Websites",
    value: "6+",
    description: "Successfully built and deployed multiple functional web applications from scratch.",
    icon: Zap,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 border-brand-orange/20",
  },
  {
    title: "Academic Background",
    value: "1st Yr",
    description: "Currently pursuing B.Tech in Artificial Intelligence and Machine Learning.",
    icon: Target,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 border-brand-purple/20",
  },
  {
    title: "Core Expertise",
    value: "UI/UX",
    description: "Strong frontend focus with a modern mindset for building premium user interfaces.",
    icon: CheckCircle2,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    title: "Growth Mindset",
    value: "Fast",
    description: "Quick learner and practical builder constantly exploring new web technologies.",
    icon: TrendingUp,
    color: "text-brand-violet",
    bg: "bg-brand-violet/10 border-brand-violet/20",
  },
];

export function Highlights() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
            Why Work With <span className="text-brand-orange">Me</span>
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "glass rounded-3xl p-8 border hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group hover:-translate-y-2",
                  item.bg
                )}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={cn("w-6 h-6", item.color)} />
                  </div>
                  <h3 className={cn("text-4xl font-space font-bold", item.color)}>
                    {item.value}
                  </h3>
                </div>
                
                <h4 className="text-xl font-space font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
