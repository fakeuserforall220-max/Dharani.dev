import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, Heart, Code2, Cpu, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Optimized Background - Lower blur radius for better performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Identity</span>
          </div>
        </motion.div>

        {/* Crisp Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Engineering the 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Future of Web & AI
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A developer's journey through clean architecture and intelligent systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Dharani"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=DG&background=10b981&color=fff"; }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dharani Govardhan</h3>
                  <p className="text-emerald-400 font-medium">AIML Engineering Student</p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  I'm a <span className="text-white font-medium">1st-year student</span> specializing in Artificial Intelligence. 
                  My focus is building high-performance web applications that leverage machine learning.
                </p>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mt-auto pt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PyTorch', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <h3 className="text-white font-bold mb-4">Milestones</h3>
            <div className="space-y-6">
              {[
                { icon: Rocket, val: "6+", label: "Projects" },
                { icon: Globe, val: "1st", label: "Year Student" },
                { icon: Zap, val: "Fast", label: "Iteration" }
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <s.icon className="w-5 h-5 text-emerald-500" />
                  <div>
                    <div className="text-xl font-bold text-white leading-none">{s.val}</div>
                    <div className="text-xs text-slate-500 uppercase">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          {[
            { title: "Frontend", icon: Code2, desc: "Modern, reactive UIs using Next.js & React.", color: "emerald" },
            { title: "AI/ML", icon: Cpu, desc: "Neural networks & data analysis pipelines.", color: "cyan" },
            { title: "Philosophy", icon: Heart, desc: "Clean code and empathetic design.", color: "slate" }
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors"
            >
              <item.icon className={`w-8 h-8 text-${item.color}-400 mb-4`} />
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
