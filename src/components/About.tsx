import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, Heart } from 'lucide-react';

export function About() {
  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Static Background - No animation for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-space mb-4 leading-tight">
            Crafting Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              Experiences
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Where creativity meets code, and ideas transform into reality
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
        >
          
          {/* Bio Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center overflow-hidden ring-2 ring-brand-purple/30 flex-shrink-0">
                <img 
                  src="https://ui-avatars.com/api/?name=Dharani+Govardhan&background=7c3aed&color=fff&size=128&bold=true"
                  alt="Dharani Govardhan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Dharani Govardhan</h3>
                <p className="text-brand-purple font-semibold text-sm md:text-base">Full Stack Developer & AIML Student</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
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

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
              {[
                { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <img src={tech.img} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5" loading="lazy" />
                  <span className="text-xs md:text-sm font-medium text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={cardVariants}
            className="glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">Achievements</h3>
            
            <div className="space-y-4 md:space-y-6">
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
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Cards */}
          {[
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              title: "Frontend Development", 
              desc: "Crafting pixel-perfect, responsive interfaces",
              bg: "from-blue-500/10 to-cyan-500/10"
            },
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              title: "Backend Engineering", 
              desc: "Building robust and scalable server solutions",
              bg: "from-purple-500/10 to-pink-500/10"
            },
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
              title: "AI & Machine Learning", 
              desc: "Exploring intelligent systems and algorithms",
              bg: "from-orange-500/10 to-red-500/10"
            }
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${skill.bg} flex items-center justify-center mb-4 p-2 md:p-3`}>
                <img src={skill.img} alt={skill.title} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-1 glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4 p-2 md:p-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                alt="Education" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Education</h3>
            <p className="text-gray-400 text-sm mb-4">Currently Pursuing</p>
            <div className="space-y-2">
              <p className="text-white font-semibold text-sm md:text-base">B.Tech in AI & Machine Learning</p>
              <p className="text-gray-400 text-sm">1st Year Student</p>
              <p className="text-brand-purple text-sm font-medium">Focused on bridging AI with Web Development</p>
            </div>
          </motion.div>

          {/* What I Love */}
          <motion.div
            variants={cardVariants}
            className="glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mb-4 p-2 md:p-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                alt="Love" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">What I Love</h3>
            <ul className="space-y-3 mt-4">
              {[
                'Clean, minimal design',
                'Smooth animations',
                'Problem solving',
                'Learning new tech'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            variants={cardVariants}
            className="glass border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4 p-2 md:p-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="Philosophy" 
                className="w-full h-full object-contain invert"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3">My Philosophy</h3>
            <blockquote className="text-gray-300 text-sm leading-relaxed border-l-2 border-brand-purple pl-4">
              "Every line of code is an opportunity to create something meaningful. 
              I believe in writing code that not only works, but inspires."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
