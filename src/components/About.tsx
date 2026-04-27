import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Sparkles, Award, Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Terminal, value: "6+", label: "Live Projects", color: "from-blue-600 to-blue-400" },
    { icon: Award, value: "1st", label: "Year AIML", color: "from-purple-600 to-purple-400" },
    { icon: Zap, value: "24/7", label: "Learning", color: "from-orange-600 to-orange-400" },
    { icon: Sparkles, value: "100%", label: "Dedication", color: "from-violet-600 to-violet-400" },
  ];

  const skills = [
    { icon: Terminal, label: "Full Stack Dev", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Cpu, label: "AIML Enthusiast", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: Code, label: "Creative Coder", color: "text-orange-600", bg: "bg-orange-50" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#FAFAFA]">
      {/* Background Elements - Subdued for Light Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-violet-600 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black font-space mb-4 text-gray-900">
            Decoding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">Future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
                I'm <span className="text-gray-900 font-bold">Dharani Govardhan</span>, a 1st-year AIML student with an insatiable curiosity for intelligent systems and cutting-edge web technologies.
              </p>
              <p className="text-lg text-gray-500 font-sans leading-relaxed">
                While my academic roots are in Artificial Intelligence, my creative playground is the frontend world. I don't just write code; I craft digital ecosystems that blend functionality with immersive experiences.
              </p>
              <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50">
                <p className="text-lg text-gray-600 font-sans leading-relaxed">
                  Having already built <span className="text-purple-600 font-bold">6+ live, production-ready websites</span>, I specialize in bridging the gap between highly functional backend logic and cinematic frontend experiences.
                </p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">What I Do</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md`}
                  >
                    <skill.icon className={`${skill.color} w-5 h-5 group-hover:scale-110 transition-transform`} />
                    <span className="font-bold text-sm text-gray-700">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-200"
              >
                View My Work
                <Code className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white rounded-[2rem] p-6 lg:p-10 border border-gray-100 hover:border-purple-200 transition-all duration-500 relative overflow-hidden shadow-xl shadow-gray-200/40">
                    
                    {/* Icon */}
                    <div className="flex justify-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-3.5 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Value */}
                    <h3 className={`text-4xl lg:text-5xl font-black font-space text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-2`}>
                      {stat.value}
                    </h3>

                    {/* Label */}
                    <p className="text-gray-400 text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] group-hover:text-gray-600 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Quote - Simplified Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-16 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-violet-500 to-blue-500" />
            <blockquote className="relative z-10">
              <p className="text-2xl lg:text-3xl font-medium text-gray-800 italic leading-relaxed font-sans">
                "Turning complex problems into elegant solutions, one line of code at a time."
              </p>
              <footer className="mt-6 text-violet-600 font-bold tracking-widest uppercase text-sm">— Dharani Govardhan</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
