import { motion } from "framer-motion";
import { Code2, PenTool, Database, Sparkles, Layout, Smartphone, Cloud, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-blue-50 text-blue-600",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-emerald-50 text-emerald-600",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "AI & Machine Learning",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1675557009875-436f595b1812?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-purple-50 text-purple-600",
    skills: ["Python", "TensorFlow", "OpenAI API", "Data Analysis", "NLP"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-orange-50 text-orange-600",
    skills: ["React Native", "Expo", "NativeWind", "Mobile UI", "App Store"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-rose-50 text-rose-600",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop", 
    color: "bg-cyan-50 text-cyan-600",
    skills: ["Docker", "AWS", "Vercel", "Git/GitHub", "CI/CD Pipelines"],
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
          className="mb-16 text-left max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-space font-bold text-gray-900 mb-6 tracking-tighter">
            Technical <span className="text-gray-400">Arsenal</span>
          </h2>
          <p className="text-gray-500 text-xl font-sans leading-relaxed">
            I specialize in building end-to-end digital products, combining 
            robust backend systems with immersive, user-centric interfaces.
          </p>
        </motion.div>

        {/* Skills Grid - Responsive 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative aspect-[16/10] rounded-[2rem] bg-[#EDEDED] overflow-hidden flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={category.image} 
                      alt="" 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-900 border border-white/50 z-20 transition-transform group-hover:rotate-12">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-5 py-8 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${category.color}`}>
                      Domain
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-space font-bold text-gray-900 mb-5 tracking-tight">
                    {category.title}
                  </h3>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 text-[10px] font-bold bg-gray-50 text-gray-500 border border-gray-100 rounded-xl uppercase tracking-tighter group-hover:bg-white group-hover:border-gray-200 group-hover:text-gray-900 transition-all duration-300"
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
