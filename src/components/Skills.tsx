import { motion } from "framer-motion";
import { Code2, PenTool, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60", // React/Code image
    color: "bg-purple-50 text-purple-600",
    skills: ["React", "Next.js", "Tailwind", "JavaScript", "HTML5"],
  },
  {
    title: "Tools & Workflow",
    icon: Database,
    image: "https://images.unsplash.com/photo-1618401471353-b98aade122f1?w=800&auto=format&fit=crop&q=60", // GitHub/Dev tools image
    color: "bg-blue-50 text-blue-600",
    skills: ["Git", "GitHub", "Vercel", "Vite", "NPM", "Docker"],
  },
  {
    title: "AI & Machine Learning",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60", // AI/Neural image
    color: "bg-orange-50 text-orange-600",
    skills: ["Python", "ML Basics", "Neural Networks", "Data Analysis"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60", // Figma/Design image
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
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid - Matching Project Card Style */}
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
                {/* Image Container - Matching your reference image */}
                <div className="relative aspect-square rounded-[2rem] bg-[#F4F4F4] overflow-hidden flex items-center justify-center p-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-900 border border-gray-50">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className={`px-4 py-1 rounded-full text-[12px] font-bold tracking-widest uppercase ${category.color}`}>
                      Expertise
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
                        className="px-3 py-1 text-[11px] font-bold bg-gray-50 text-gray-400 border border-gray-100 rounded-lg uppercase tracking-tighter group-hover:border-purple-200 group-hover:text-gray-600 transition-colors"
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
