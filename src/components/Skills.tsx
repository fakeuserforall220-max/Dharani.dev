import { motion } from "framer-motion";
import { 
  Code2, PenTool, Database, Sparkles, Layout, 
  Smartphone, Cloud, ShieldCheck, Zap, Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "Next-Gen Frontend",
    icon: Layout,
    // Modern abstract code
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80", 
    color: "bg-blue-50 text-blue-600",
    skills: ["Next.js 15", "React Server Actions", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    title: "GenAI & LLM Apps",
    icon: Sparkles,
    // Futuristic AI brain
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", 
    color: "bg-purple-50 text-purple-600",
    skills: ["LangChain", "OpenAI API", "Vector Databases", "Prompt Engineering", "RAG"],
  },
  {
    title: "Backend Engineering",
    icon: Database,
    // Datacenter/Servers
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80", 
    color: "bg-emerald-50 text-emerald-600",
    skills: ["Hono.js", "Bun", "PostgreSQL", "Drizzle ORM", "Redis", "WebSockets"],
  },
  {
    title: "Cloud & Serverless",
    icon: Cloud,
    // Abstract Cloud
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", 
    color: "bg-cyan-50 text-cyan-600",
    skills: ["AWS Lambda", "Supabase", "Firebase", "Vercel Edge", "Docker"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    // Mobile interface
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", 
    color: "bg-orange-50 text-orange-600",
    skills: ["React Native", "Expo Router", "NativeWind", "iOS/Android Dev"],
  },
  {
    title: "Creative Tech",
    icon: Zap,
    // Motion/Abstract
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80", 
    color: "bg-amber-50 text-amber-600",
    skills: ["Three.js", "GSAP", "Framer Motion", "Shaders", "SVG Animation"],
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    // Digital Lock
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", 
    color: "bg-red-50 text-red-600",
    skills: ["OAuth 2.0", "JWT", "HTTPS/SSL", "Web Crypto API", "Security Audits"],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    // Minimalist keyboard/setup
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80", 
    color: "bg-slate-50 text-slate-600",
    skills: ["Git/GitHub", "Turborepo", "CI/CD", "Testing (Vitest)", "Neovim"],
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
            Continuously evolving with the latest industry standards. 
            Focused on building scalable, AI-integrated, and highly performant digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid - Responsive 4 columns */}
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
                <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={category.image} 
                      alt="" 
                      loading="lazy"
                      className="w-full h-full object-cover transition-opacity duration-500"
                      onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                      style={{ opacity: 0 }} // Start invisible to avoid "broken link" flash
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-900 border border-white/50 z-20">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-8 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${category.color}`}>
                      Trending
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-space font-bold text-gray-900 mb-5 tracking-tight group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[10px] font-bold bg-gray-50 text-gray-400 border border-gray-100 rounded-xl uppercase tracking-tighter group-hover:bg-white group-hover:border-gray-200 group-hover:text-gray-900 transition-all duration-300"
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
