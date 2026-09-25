import { motion } from 'framer-motion';
import { Zap, GraduationCap, Code2, TrendingUp } from 'lucide-react';

export function WhyWorkWithMe() {
  const cards = [
    {
      id: "01",
      title: "Live Deployed Websites",
      description: "Successfully built and deployed multiple functional web applications from scratch, handling everything from design to deployment.",
      icon: Zap,
      tags: ["Next.js", "Firebase", "Vercel"],
      glowColor: "from-orange-500/80 to-amber-500/20",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
    },
    {
      id: "02",
      title: "Academic Background",
      description: "Currently pursuing B.Tech in Artificial Intelligence and Machine Learning, building a strong foundation in AI/ML and software development.",
      icon: GraduationCap,
      tags: ["B.Tech AIML", "SIMATS", "Chennai"],
      glowColor: "from-purple-500/80 to-fuchsia-500/20",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
    {
      id: "03",
      title: "UI/UX & Product Thinking",
      description: "Strong frontend focus with a modern design mindset for building clean, user-friendly and premium digital experiences.",
      icon: Code2,
      tags: ["UI/UX", "React", "Tailwind"],
      glowColor: "from-blue-500/80 to-cyan-500/20",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20",
    },
    {
      id: "04",
      title: "Growth Mindset",
      description: "Quick learner and practical builder constantly exploring new technologies, taking up real-world projects and improving every day.",
      icon: TrendingUp,
      tags: ["Learn", "Build", "Improve"],
      glowColor: "from-emerald-500/80 to-teal-500/20",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20",
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
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
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

              <div className="relative h-full p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col transition-transform duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-b from-white/[0.08] to-transparent">
                
                {/* Header row: Icon & Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${card.iconBg} border border-white/10 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${card.glowColor}`}></div>
                    <card.icon className={`w-6 h-6 relative z-10 ${card.iconColor}`} />
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-[11px] font-bold shadow-inner">
                    {card.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-white/60 text-[13px] leading-relaxed mb-10 flex-grow">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-medium tracking-wide transition-colors hover:bg-white/10 hover:text-white/90"
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
