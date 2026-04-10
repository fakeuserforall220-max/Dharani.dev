import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Mail, Sparkles, Rocket, Zap, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Flowing Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-brand-purple/30 backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-brand-purple" />
            </motion.div>
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black font-space mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where creativity meets code, and ideas transform into reality
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          
          {/* Large Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 glass border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center"
                >
                  <Terminal className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Dharani Govardhan</h3>
                  <p className="text-brand-purple font-semibold">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hey! I'm a <span className="text-white font-semibold">1st-year AIML student</span> passionate 
                  about creating beautiful, functional web experiences. My journey started with curiosity and 
                  grew into a love for solving real-world problems through code.
                </p>
                <p>
                  I specialize in building <span className="text-white font-semibold">modern, responsive applications</span> that 
                  users love. From sleek interfaces to robust backends, I enjoy every aspect of bringing ideas to life.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Node.js', 'AI/ML', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-brand-purple/30 rounded-full blur-3xl"
            />
            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
              
              {[
                { icon: Rocket, value: "6+", label: "Live Projects" },
                { icon: Zap, value: "24/7", label: "Learning" },
                { icon: Heart, value: "100%", label: "Passion" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Cards */}
          {[
            { 
              icon: Code, 
              title: "Frontend Magic", 
              desc: "Crafting pixel-perfect interfaces",
              gradient: "from-blue-500/20 to-cyan-500/20"
            },
            { 
              icon: Terminal, 
              title: "Backend Power", 
              desc: "Building robust server solutions",
              gradient: "from-purple-500/20 to-pink-500/20"
            },
            { 
              icon: Cpu, 
              title: "AI Integration", 
              desc: "Exploring intelligent systems",
              gradient: "from-orange-500/20 to-red-500/20"
            }
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4"
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 glass border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400">
              Got a project in mind? Let's turn your vision into reality
            </p>
          </div>
          
          <div className="flex gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2"
            >
              Get In Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center hover:border-brand-purple transition-all group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-brand-purple transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 mt-12"
        >
          {[
            { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub' },
            { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', label: 'LinkedIn' },
            { icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', label: 'Twitter' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-brand-purple transition-all group"
              aria-label={social.label}
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
