import { motion } from 'framer-motion';
import { Sparkles, Rocket, Code2, Brain, Coffee, Layers } from 'lucide-react';

export function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-medium text-gray-300">Get to Know Me</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-space mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              Dharani
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate developer turning caffeine into code
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
          
          {/* Hero Card - Spans 2 columns on desktop */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-8 glass border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-blue p-1 overflow-hidden">
                  <img 
                    src="https://ui-avatars.com/api/?name=Dharani+Govardhan&background=0D1117&color=7c3aed&size=200&bold=true&format=svg"
                    alt="Dharani Govardhan"
                    className="w-full h-full object-cover rounded-3xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Dharani Govardhan</h3>
                <p className="text-brand-purple font-semibold mb-4">Full Stack Developer & AI Enthusiast</p>
                
                <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    👋 Hey there! I'm a <span className="text-white font-semibold">1st-year AIML student</span> who 
                    fell in love with web development. What started as curiosity turned into a passion for building 
                    things that make a difference.
                  </p>
                  <p>
                    💻 I believe the best code is the one that <span className="text-white font-semibold">solves real problems</span> while 
                    looking beautiful. Whether it's a sleek frontend or a powerful backend, I'm all about creating 
                    experiences that users love.
                  </p>
                  <p>
                    🚀 When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                    or brewing the perfect cup of coffee.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 glass border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-brand-purple" />
              Quick Stats
            </h3>
            
            <div className="space-y-4">
              {[
                { label: "Projects Completed", value: "6+", icon: "🎯" },
                { label: "Lines of Code", value: "10k+", icon: "💻" },
                { label: "Coffee Consumed", value: "∞", icon: "☕" },
                { label: "Learning Hours", value: "24/7", icon: "📚" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I Do - 3 Cards */}
          {[
            {
              icon: Code2,
              title: "Frontend Magic",
              desc: "React, TypeScript, Tailwind CSS",
              gradient: "from-blue-500/10 to-cyan-500/10",
              iconBg: "from-blue-500 to-cyan-500"
            },
            {
              icon: Layers,
              title: "Backend Power",
              desc: "Node.js, Express, MongoDB",
              gradient: "from-purple-500/10 to-pink-500/10",
              iconBg: "from-purple-500 to-pink-500"
            },
            {
              icon: Brain,
              title: "AI Integration",
              desc: "Python, TensorFlow, Machine Learning",
              gradient: "from-orange-500/10 to-red-500/10",
              iconBg: "from-orange-500 to-red-500"
            }
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="md:col-span-4 glass border border-white/10 rounded-3xl p-6 backdrop-blur-sm group hover:border-brand-purple/30 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}

          {/* Current Focus */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 glass border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-brand-purple" />
              Currently Working On
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20">
                <h4 className="text-white font-semibold mb-2">🎓 Academic Journey</h4>
                <p className="text-gray-400 text-sm">
                  Pursuing B.Tech in AI & Machine Learning while building real-world projects
                </p>
              </div>
              
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <h4 className="text-white font-semibold mb-2">💡 Side Projects</h4>
                <p className="text-gray-400 text-sm">
                  Building innovative web apps that solve everyday problems
                </p>
              </div>
              
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h4 className="text-white font-semibold mb-2">🌱 Learning</h4>
                <p className="text-gray-400 text-sm">
                  Deep diving into advanced React patterns, System Design, and AI/ML
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 glass border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-3">Languages & Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                      <img src={tech.img} alt={tech.name} className="w-4 h-4" loading="lazy" />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-3">Tools & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                      <img src={tech.img} alt={tech.name} className="w-4 h-4" loading="lazy" />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-12 glass border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm text-center"
          >
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4 leading-relaxed">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="text-brand-purple font-semibold">— My development philosophy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
