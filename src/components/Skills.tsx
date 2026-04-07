import { motion } from "framer-motion";
import { Code2, PenTool, Database, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Git",
    icon: Database,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel", "NPM"],
  },
  {
    title: "Learning / AIML",
    icon: Sparkles,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
    skills: ["Python", "Machine Learning Basics", "Data Structures", "Algorithms"],
  },
  {
    title: "UI / Design",
    icon: PenTool,
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
            Technical <span className="text-brand-blue">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-3xl p-6 border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500", category.bgColor)} />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={cn("w-12 h-12 rounded-xl glass-dark flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300", category.bgColor)}>
                    <Icon className={cn("w-6 h-6", category.color)} />
                  </div>
                  <h3 className="text-xl font-space font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-all hover:bg-white/10 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
