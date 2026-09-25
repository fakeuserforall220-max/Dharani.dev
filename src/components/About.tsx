import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, ChevronRight, Terminal, Folder, FolderOpen } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [hoveredFolder, setHoveredFolder] = useState(false);

  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech — Artificial Intelligence & Machine Learning",
      institution: "Saveetha Institute of Medical and Technical Sciences (SIMATS)",
      description: "Currently pursuing B.Tech in Artificial Intelligence & Machine Learning.",
      status: "Present",
      years: "2025 – 2029",
      color: "from-blue-400 to-cyan-300"
    },
    {
      icon: BookOpen,
      degree: "11th – 12th — Intermediate",
      institution: "Chaitanya Junior College",
      description: "Completed higher secondary education.",
      status: "Completed",
      years: "2023 – 2025",
      color: "from-purple-400 to-fuchsia-300"
    },
    {
      icon: School,
      degree: "Schooling — SSC",
      institution: "Nirmala High School",
      description: "Completed school education.",
      status: "Completed",
      years: "Upto 2023",
      color: "from-emerald-400 to-teal-300"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Techy Folder Breadcrumb Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 text-[13px] text-white/70 mb-16 font-medium font-mono"
        >
          <a href="#home" className="flex items-center gap-1.5 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10">
            <Terminal size={14} />
            <span>~</span>
          </a>
          <ChevronRight size={14} className="opacity-40" />
          
          <div 
            className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            onMouseEnter={() => setHoveredFolder(true)}
            onMouseLeave={() => setHoveredFolder(false)}
          >
            {hoveredFolder ? <FolderOpen size={14} className="text-blue-300" /> : <Folder size={14} className="text-blue-300" />}
            <span>about_me</span>
          </div>
          
          <ChevronRight size={14} className="opacity-40" />
          
          <div className="flex items-center gap-1.5 text-white px-2 py-1 rounded-md bg-white/10 border border-white/10 shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>education.md</span>
          </div>
        </motion.nav>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight">
            Educational <span className="font-serif italic text-blue-200 tracking-normal">Details</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/5 before:via-white/20 before:to-white/5">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon / Marker */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#7A9EBA]/50 backdrop-blur-md bg-white/10 shadow-lg shadow-black/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-30`} />
                <item.icon className="w-5 h-5 text-white drop-shadow-md" />
              </div>

              {/* Glass Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-black/20">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border ${item.status === 'Present' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30' : 'bg-white/10 text-white/70 border-white/10'}`}>
                    {item.status}
                  </span>
                  <span className="text-xs font-bold text-white/70 font-mono tracking-wider">
                    {item.years}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-sans text-white mb-2 leading-tight drop-shadow-sm">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-medium text-white/60 mb-5 font-display tracking-wide uppercase">
                  {item.institution}
                </h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
