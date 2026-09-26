import { motion } from 'framer-motion';

export function About() {
  const education = [
    {
      degree: "B.Tech",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Saveetha Institute of Medical and Technical Sciences",
      location: "Chennai, India",
      tags: ["AI / ML", "SOFTWARE", "ENGINEERING"],
      status: "CURRENTLY PURSUING",
      period: "2025 — PRESENT",
      graduation: "2025 → 2029",
      isCurrent: true,
      watermark: "AIML"
    },
    {
      degree: "Higher Secondary",
      field: "Intermediate",
      institution: "Chaitanya Junior College",
      location: "",
      tags: ["SCIENCE", "MATHEMATICS"],
      status: "COMPLETED",
      period: "2023 — 2025",
      graduation: "",
      isCurrent: false,
      watermark: "HSC"
    },
    {
      degree: "Secondary Ed.",
      field: "SSC",
      institution: "Nirmala High School",
      location: "",
      tags: ["GENERAL"],
      status: "COMPLETED",
      period: "2021 — 2023",
      graduation: "",
      isCurrent: false,
      watermark: "SSC"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden font-urbanist selection:bg-white/20">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 relative"
        >
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/30"></span>
              03 / EDUCATION
            </h4>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase relative z-10">
              Education
              <span className="absolute -top-12 -left-4 text-8xl md:text-[9rem] font-black text-white/[0.03] -z-10 select-none">JOURNEY</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/70 font-medium max-w-sm text-right">
            A timeline of where I learned, built, and evolved.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32 group"
            >
              
              {/* LEFT: Year / Duration (Desktop) */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-start pt-4 relative z-20">
                <span className={`text-sm md:text-base font-bold tracking-widest uppercase ${item.isCurrent ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'text-white/50'}`}>
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mt-2 hidden md:block text-right">
                    01
                  </span>
                )}
              </div>

              {/* CENTER: Creative Timeline Line (Desktop) */}
              <div className="hidden md:flex flex-col items-center col-span-1 relative pt-5 z-20">
                {/* Outer Glowing Node */}
                <div className={`relative flex items-center justify-center w-5 h-5 rounded-full ${item.isCurrent ? 'bg-emerald-500/20' : 'bg-transparent'}`}>
                  {/* Inner Dot */}
                  <div className={`w-2 h-2 rounded-full ${item.isCurrent ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-white/30'} z-10 transition-colors duration-500 group-hover:bg-white`} />
                  {/* Pulsing ring if current */}
                  {item.isCurrent && (
                    <motion.div 
                      animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border border-emerald-400/50"
                    />
                  )}
                </div>
                
                {/* Connecting Line */}
                {index !== education.length - 1 && (
                  <div className="absolute top-10 bottom-[-8rem] w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                )}
              </div>

              {/* RIGHT: Education Info */}
              <div className="md:col-span-8 relative">
                
                {/* Mobile line and dot */}
                <div className="md:hidden absolute -left-4 top-5 bottom-[-4rem] flex flex-col items-center z-20">
                   <div className={`w-2 h-2 rounded-full ${item.isCurrent ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-white/30'}`} />
                   {index !== education.length - 1 && (
                     <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent mt-3" />
                   )}
                </div>

                <div className={`relative overflow-hidden ${item.isCurrent ? 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl backdrop-blur-sm' : 'pl-4 md:pl-8'}`}>
                  
                  {/* Massive Background Watermark */}
                  {item.isCurrent && (
                    <span className="absolute -right-4 -bottom-10 text-[120px] md:text-[180px] font-black text-white/[0.02] pointer-events-none select-none z-0 transform rotate-[-5deg]">
                      {item.watermark}
                    </span>
                  )}

                  {item.isCurrent ? (
                    // Current Education Layout (Largest & Creative)
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-lg">
                          {item.degree}
                        </h3>
                        <span className="hidden md:inline-flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest uppercase rounded-full">
                          Focus
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-8 leading-tight max-w-xl">
                        {item.field}
                      </h4>
                      
                      <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-l-2 border-white/20 pl-6">
                        <div>
                          <p className="text-lg font-bold text-white mb-1">{item.institution}</p>
                          <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-12">
                        {item.tags.map((tag, i) => (
                          <motion.span 
                            key={tag}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80 text-[11px] font-bold tracking-widest uppercase rounded-lg backdrop-blur-md"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-end gap-12 border-t border-white/10 pt-8 mt-auto">
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3 flex items-center gap-2">
                            Status
                          </p>
                          <p className="text-sm font-black tracking-widest text-emerald-400 uppercase">{item.status}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                            Timeline
                          </p>
                          <p className="text-sm font-bold tracking-widest text-white uppercase">{item.graduation}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Older Education Layout (Smaller but styled)
                    <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                      <h3 className="text-2xl md:text-3xl font-black text-white/80 uppercase tracking-tighter mb-2">
                        {item.degree}
                      </h3>
                      <h4 className="text-lg font-bold text-white/60 mb-6">
                        {item.institution}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-transparent border border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
