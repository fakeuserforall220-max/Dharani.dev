import { motion } from "framer-motion";
import { Code2, PenTool, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    // Reliable high-quality coding image
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-blue-50 text-blue-600",
    skills: ["React", "Next.js", "Tailwind", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools & Workflow",
    icon: Database,
    // Reliable workstation/Git image
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-slate-50 text-slate-600",
    skills: ["Git", "GitHub", "Vercel", "Vite", "NPM", "Docker"],
  },
  {
    title: "AI & Machine Learning",
    icon: Sparkles,
    // Reliable AI/Technology image
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-purple-50 text-purple-600",
    skills: ["Python", "ML Basics", "Neural Networks", "Data Analysis"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    // Reliable design/Figma image
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-rose-50 text-rose-600",
    skills: ["Figma", "Prototyping", "Wireframing", "Responsive UI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold text-gray-900 mb-6 tracking-tighter">
            Technical <span className="text-gray-400">Arsenal</span>
          </h2>
          <p className="text-gray-500 text-xl font-sans">
            A selection of technologies and creative tools I use to build production-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] bg-[#EDEDED] overflow-hidden flex items-center justify-center p-0">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={category.image} 
                      alt="" // Empty alt to prevent text showing if image loads slowly
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge - Fixed visibility */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-900 border border-white/50 z-20">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${category.color}`}>
                      Core Skill
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-space font-bold text-gray-900 mb-4 tracking-tight">
                    {category.title}
                  </h3>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[10px] font-bold bg-gray-50 text-gray-500 border border-gray-100 rounded-xl uppercase tracking-tighter group-hover:bg-white group-hover:border-blue-100 group-hover:text-gray-700 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
