import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Sparkles, Award, Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Terminal, value: "6+", label: "Live Projects", color: "from-brand-blue to-blue-400" },
    { icon: Award, value: "1st", label: "Year AIML", color: "from-brand-purple to-purple-400" },
    { icon: Zap, value: "24/7", label: "Learning", color: "from-brand-orange to-orange-400" },
    { icon: Sparkles, value: "100%", label: "Dedication", color: "from-brand-violet to-violet-400" },
  ];

  const skills = [
    { icon: Terminal, label: "Full Stack Dev", color: "brand-blue" },
    { icon: Cpu, label: "AIML Enthusiast", color: "brand-purple" },
    { icon: Code, label: "Creative Coder", color: "brand-orange" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 text-sm font-medium text-brand-violet mb-6"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black font-space mb-4">
            Decoding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">Future</span>
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
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Dharani Govardhan</span>, a 1st-year AIML student with an insatiable curiosity for intelligent systems and cutting-edge web technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                While my academic roots are in Artificial Intelligence, my creative playground is the frontend world. I don't just write code; I craft digital ecosystems that blend functionality with immersive experiences.
              </p>
              <div className="glass border border-brand-purple/20 rounded-2xl p-6 bg-gradient-to-br from-brand-purple/5 to-transparent">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Having already built <span className="text-brand-purple font-bold">6+ live, production-ready websites</span>, I specialize in bridging the gap between highly functional backend logic and cinematic frontend experiences.
                </p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">What I Do</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-white/10 hover:border-brand-purple/50 transition-all duration-300 group cursor-pointer"
                  >
                    <skill.icon className={`text-${skill.color} w-5 h-5 group-hover:scale-110 transition-transform`} />
                    <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">{skill.label}</span>
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-105"
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-brand-purple/30 transition-all duration-300 relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Value */}
                    <h3 className={`text-4xl lg:text-5xl font-black font-space text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-2 text-center`}>
                      {stat.value}
                    </h3>

                    {/* Label */}
                    <p className="text-gray-400 text-xs lg:text-sm font-medium uppercase tracking-wider text-center group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-2xl blur-xl -z-10"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-brand-purple/20 rounded-2xl blur-xl -z-10"
            />
          </motion.div>

        </div>

        {/* Bottom Quote/Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="glass border border-brand-blue/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-brand-blue/5 to-brand-purple/5" />
            <blockquote className="relative z-10">
              <p className="text-xl lg:text-2xl font-medium text-gray-200 italic leading-relaxed">
                "Turning complex problems into elegant solutions, one line of code at a time."
              </p>
              <footer className="mt-4 text-brand-purple font-semibold">— Dharani Govardhan</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
