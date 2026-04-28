import { motion } from "framer-motion";
import { 
  Cpu, Brain, Database, Sparkles, Layout, 
  Layers, Terminal, BarChart3 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", 
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Engineering",
    icon: Database,
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcCUyMHdpdGglMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D", 
    skills: ["Bun.js", "Node.js", "PostgreSQL", "Drizzle ORM", "Redis"],
  },
  {
    title: "Full Stack Architecture",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", 
    skills: ["T3 Stack", "Server Actions", "Auth.js", "Supabase", "TRPC"],
  },
  {
    title: "Deep Learning (AIML)",
    icon: Brain,
    // NEW High-Quality Neural Network Image
    image: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8fDA%3D", 
    skills: ["PyTorch", "TensorFlow", "Neural Networks", "CNNs / RNNs", "OpenCV"],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    image: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    skills: ["LangChain", "OpenAI API", "RAG", "Vector DBs", "Prompt Eng."],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww", 
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Statistics"],
  },
  {
    title: "MLOps & Tools",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", 
    skills: ["FastAPI", "Docker", "Git/GitHub", "Streamlit", "Model Training"],
  },
  {
    title: "Core Programming",
    icon: Terminal,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", 
    skills: ["C / C++", "Java Basics", "Data Structures", "Algorithms"],
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
            Bridging the gap between high-performance Web Development and 
            advanced Artificial Intelligence.
          </p>
        </motion.div>

        {/* Skills Grid - 4 Columns */}
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
      </div>
    </section>
  );
}
