import { motion } from "framer-motion";
import { ExternalLink, Code, Layout, Layers, Shield, Train, Zap, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { cn } from "../utils/cn";

const projects = [
  {
    title: "Acade-Me",
    link: "https://acade-me.vercel.app/",
    description: "An educational platform designed for streamlined learning experiences.",
    tags: ["React", "Tailwind", "Educational"],
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Simats Seat Sync",
    link: "https://simats-seat-sync.vercel.app/",
    description: "A comprehensive seat synchronization and management dashboard.",
    tags: ["Frontend", "Dashboard", "UI/UX"],
    icon: Layers,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Expensa",
    link: "https://expensa-five.vercel.app/",
    description: "Modern expense tracking application with intuitive analytics.",
    tags: ["React", "Analytics", "Finance"],
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Safe the Lock",
    link: "https://safethelock.vercel.app/",
    description: "Security-focused application emphasizing privacy and data protection.",
    tags: ["Security", "Web App"],
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Elvera",
    link: "https://elvera-navy.vercel.app/",
    description: "Premium e-commerce front-end with sophisticated layouts.",
    tags: ["E-Commerce", "Design"],
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Go Rail India",
    link: "https://go-rail-india.vercel.app/",
    description: "Transportation and ticketing interface for seamless travel booking.",
    tags: ["Travel", "Booking"],
    icon: Train,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Astra",
    link: "https://astra-self.vercel.app/",
    description: "Futuristic web application showcasing advanced frontend interactions.",
    tags: ["Interactive", "3D Elements"],
    icon: Code,
    color: "from-violet-500 to-purple-500",
  },
];

export function Projects() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-black/80" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
              Featured <span className="text-brand-purple">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-brand-purple rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl text-lg">
              A curated selection of my <span className="text-white font-medium">6+ live deployed websites</span>, showcasing my focus on modern UI, responsive layouts, and seamless user experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "group relative glass rounded-3xl p-6 border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden",
                  idx === 0 || idx === 3 ? "md:col-span-2" : "col-span-1"
                )}
              >
                {/* Hover Gradient Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  project.color
                )} />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-space font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
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
