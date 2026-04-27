import { motion } from "framer-motion";
import { Code2, PenTool, Database, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Git",
    icon: Database,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel", "NPM"],
  },
  {
    title: "Learning / AIML",
    icon: Sparkles,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    skills: ["Python", "Machine Learning Basics", "Data Structures", "Algorithms"],
  },
  {
    title: "UI / Design",
    icon: PenTool,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
    skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Background Soft Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
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
                className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Subtle internal glow on hover */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500", category.bgColor)} />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 shadow-sm",
                    category.bgColor,
                    category.borderColor
                  )}>
                    <Icon className={cn("w-7 h-7", category.color)} />
                  </div>
                  <h3 className="text-xl font-space font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-[13px] font-semibold rounded-xl bg-gray-50 text-gray-600 border border-gray-100 group-hover:bg-white group-hover:border-gray-200 transition-all duration-300 cursor-default"
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
