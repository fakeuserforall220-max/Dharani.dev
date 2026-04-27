import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import { cn } from "../utils/cn";

const highlights = [
  {
    title: "Live Deployed Websites",
    value: "6+",
    description: "Successfully built and deployed multiple functional web applications from scratch.",
    icon: Zap,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
  },
  {
    title: "Academic Background",
    value: "1st Yr",
    description: "Currently pursuing B.Tech in Artificial Intelligence and Machine Learning.",
    icon: Target,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
  },
  {
    title: "Core Expertise",
    value: "UI/UX",
    description: "Strong frontend focus with a modern mindset for building premium user interfaces.",
    icon: CheckCircle2,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    title: "Growth Mindset",
    value: "Fast",
    description: "Quick learner and practical builder constantly exploring new web technologies.",
    icon: TrendingUp,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
];

export function Highlights() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-gray-900 mb-4">
            Why Work With <span className="text-orange-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
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
                  "bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group hover:-translate-y-2",
                  "relative overflow-hidden"
                )}
              >
                {/* Top Section: Icon and Value */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 shadow-sm",
                    item.bg
                  )}>
                    <Icon className={cn("w-7 h-7", item.color)} />
                  </div>
                  <h3 className={cn("text-4xl font-space font-bold tracking-tighter", item.color)}>
                    {item.value}
                  </h3>
                </div>
                
                {/* Content Section */}
                <h4 className="text-xl font-space font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-500 font-sans leading-relaxed text-sm group-hover:text-gray-600 transition-colors">
                  {item.description}
                </p>

                {/* Subtle bottom accent line that appears on hover */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r",
                  item.color.replace('text', 'from')
                )} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
