import { motion } from "framer-motion";
import {
  Cpu, Brain, Database, Sparkles, Layout,
  Layers, Terminal, BarChart3, Code, Globe, Server, Smartphone,
  type LucideIcon,
} from "lucide-react";
import { useSkillCategories } from "../lib/useSkillCategories";

const ICON_MAP: Record<string, LucideIcon> = {
  Cpu, Brain, Database, Sparkles, Layout,
  Layers, Terminal, BarChart3, Code, Globe, Server, Smartphone,
};

export function Skills() {
  const { categories, loading } = useSkillCategories();
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-space font-bold text-gray-900 mb-6 tracking-tighter">
            Technical <span className="text-gray-400">Arsenal</span>
          </h2>
          <p className="text-gray-500 text-xl font-sans leading-relaxed">
            Bridging the gap between high-performance Web Development and 
            advanced Artificial Intelligence.
          </p>
        </motion.div>

        {/* Skills Grid - 4 Columns */}
        {loading ? (
          <div className="text-gray-400 text-lg">Loading skills...</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => {
            const Icon = ICON_MAP[category.icon] || Layout;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-[2rem] bg-gray-200 overflow-hidden flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={category.image} 
                      alt="" 
                      loading="lazy"
                      className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
                      onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-900 border border-white/50 z-20">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-8 flex-1 flex flex-col">
                  {/* The PILL Style from your screenshot */}
                  <div className="flex items-center mb-5">
                    <span className="px-6 py-2 rounded-full bg-[#F0F7FF] text-[#1E6BFF] text-[11px] font-black tracking-[0.15em] uppercase">
                      DOMAIN
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-space font-bold text-gray-900 mb-5 tracking-tight group-hover:text-[#1E6BFF] transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[10px] font-bold bg-gray-50 text-gray-400 border border-gray-100 rounded-xl uppercase tracking-tighter group-hover:bg-white group-hover:border-blue-100 group-hover:text-gray-900 transition-all duration-300"
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
        )}
      </div>
    </section>
  );
}
