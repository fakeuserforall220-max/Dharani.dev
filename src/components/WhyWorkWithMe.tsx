import { motion } from 'framer-motion';
import { Zap, GraduationCap, Code2, TrendingUp } from 'lucide-react';

export function WhyWorkWithMe() {
  const cards = [
    {
      id: "01",
      title: "Live Deployed Websites",
      description: "Successfully built and deployed multiple functional web applications from scratch, handling everything from design to deployment.",
      icon: Zap,
      imageIcon: "/live-deployed.png",
      tags: ["Next.js", "Firebase", "Vercel"],
      glowColor: "from-orange-500/80 to-amber-500/20",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-50",
    },
    {
      id: "02",
      title: "Academic Background",
      description: "Currently pursuing B.Tech in Artificial Intelligence and Machine Learning, building a strong foundation in AI/ML and software development.",
      icon: GraduationCap,
      imageIcon: "/academic-bg.png",
      tags: ["B.Tech AIML", "SIMATS", "Chennai"],
      glowColor: "from-purple-500/80 to-fuchsia-500/20",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
    },
    {
      id: "03",
      title: "UI/UX & Product Thinking",
      description: "Strong frontend focus with a modern design mindset for building clean, user-friendly and premium digital experiences.",
      icon: Code2,
      imageIcon: "/ui-ux.png",
      tags: ["UI/UX", "React", "Tailwind"],
      glowColor: "from-blue-500/80 to-cyan-500/20",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      id: "04",
      title: "Growth Mindset",
      description: "Quick learner and practical builder constantly exploring new technologies, taking up real-world projects and improving every day.",
      icon: TrendingUp,
      imageIcon: "/growth.png",
      tags: ["Learn", "Build", "Improve"],
      glowColor: "from-emerald-500/80 to-teal-500/20",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    }
  ];

  return (
    <section id="why-work-with-me" className="py-24 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full border-[1.5px] border-white/70"></div>
            <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase">
              WHY WORK WITH ME
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight mb-8"
          >
            Why Work With <span className="text-[#89b4f8] relative">
              Me?
              {/* Decorative dashes */}
              <span className="absolute -top-4 -left-6 text-[#89b4f8] text-4xl rotate-[-20deg]">/</span>
              <span className="absolute -top-8 -left-2 text-[#89b4f8] text-3xl rotate-[10deg]">/</span>
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-3xl font-medium leading-relaxed"
          >
            I combine technical skills, creativity and a problem-solving mindset to build digital products that create real-world value.
          </motion.p>

          {/* Hand-drawn Annotation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block absolute right-12 top-0 text-white/90 font-handwriting text-3xl rotate-[-10deg]"
          >
            Turning <br/>Ideas into <br/><span className="pl-4">Impact ⤵</span>
          </motion.div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative h-full"
            >
              {/* Massive glowing blob in the bottom right corner behind the card */}
              <div className="absolute -inset-1 rounded-3xl bg-transparent overflow-hidden pointer-events-none -z-10">
                 <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-tl ${card.glowColor} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              <div className="relative h-full p-8 rounded-[2rem] bg-white text-slate-900 border border-slate-200 shadow-xl flex flex-col transition-transform duration-500 hover:-translate-y-2 overflow-hidden">
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.imageIcon ? 'bg-transparent overflow-visible' : `shadow-sm ${card.iconBg} overflow-hidden`} relative group-hover:scale-110 transition-transform duration-300`}>
                    {card.imageIcon ? (
                      <img src={card.imageIcon} alt={card.title} className="w-16 h-16 object-contain relative z-10 filter drop-shadow-md scale-125" />
                    ) : (
                      <card.icon className={`w-6 h-6 relative z-10 ${card.iconColor}`} />
                    )}
                  </div>
                  
                  <div className="w-8 h-8 flex items-center justify-center text-slate-400 text-[11px] font-bold">
                    {card.id}
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3">
                  {card.title}
                </h3>
                
                <p className="text-slate-600 font-medium text-[13px] leading-relaxed mb-10 flex-grow">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold tracking-wide transition-colors hover:bg-slate-200 hover:text-slate-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
