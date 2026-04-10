import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Mail, Sparkles, Rocket, Zap } from 'lucide-react';

export function About() {
  const skills = [
    { 
      icon: Terminal, 
      title: "Full Stack Development", 
      description: "Building end-to-end web applications",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Cpu, 
      title: "AI & Machine Learning", 
      description: "Exploring intelligent systems",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Code, 
      title: "Frontend Design", 
      description: "Crafting beautiful user experiences",
      color: "from-orange-500 to-red-500"
    },
  ];

  const stats = [
    { value: "6+", label: "Live Projects", icon: Rocket },
    { value: "1st", label: "Year AIML", icon: Sparkles },
    { value: "24/7", label: "Learning", icon: Zap },
    { value: "100%", label: "Dedication", icon: Terminal },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <h2 className="text-4xl md:text-6xl font-black font-space">
            Turning Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              Digital Reality
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass border border-white/10 rounded-3xl p-8 space-y-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dharani Govardhan</h3>
                  <p className="text-brand-purple font-semibold">Full Stack Developer & AIML Student</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hey there! I'm a <span className="text-white font-semibold">1st-year AIML student</span> with 
                  a passion for building things that live on the internet. My journey in web development started 
                  with curiosity and evolved into a full-blown obsession.
                </p>
                <p>
                  I specialize in creating <span className="text-white font-semibold">modern, responsive, 
                  and user-friendly</span> web applications. Whether it's a sleek landing page or a complex 
                  full-stack application, I love the challenge of bringing ideas to life.
                </p>
                <p>
                  With <span className="text-brand-purple font-bold">6+ live projects</span> under my belt, 
                  I'm constantly learning, experimenting, and pushing the boundaries of what's possible with code.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <span className="text-gray-400 text-sm">Connect:</span>
                <div className="flex gap-2">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass border border-white/10 hover:border-brand-purple flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass border border-white/10 hover:border-brand-purple flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass border border-white/10 hover:border-brand-purple flex items-center justify-center transition-all duration-300 group"
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-brand-purple transition-colors" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            >
              Let's Work Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass border border-white/10 rounded-2xl p-6 backdrop-blur-xl group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-600 group-hover:text-brand-purple transition-colors"
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-black font-space text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
