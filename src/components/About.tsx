import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, Heart } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Large Bio Card with Profile Image */}
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
                {/* Profile Picture */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center overflow-hidden ring-2 ring-brand-purple/30"
                >
                  <img 
                    src="/path-to-your-profile-image.jpg" 
                    alt="Dharani Govardhan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold">DG</div>';
                    }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Dharani Govardhan</h3>
                  <p className="text-brand-purple font-semibold">Full Stack Developer & AIML Student</p>
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
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-all backdrop-blur-sm"
                  >
                    <img src={tech.img} alt={tech.name} className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </motion.div>
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

          {/* Skills Cards with Images */}
          {[
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              title: "Frontend Development", 
              desc: "Crafting pixel-perfect, responsive interfaces",
              gradient: "from-blue-500/20 to-cyan-500/20",
              color: "text-blue-400"
            },
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              title: "Backend Engineering", 
              desc: "Building robust and scalable server solutions",
              gradient: "from-purple-500/20 to-pink-500/20",
              color: "text-purple-400"
            },
            { 
              img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
              title: "AI & Machine Learning", 
              desc: "Exploring intelligent systems and algorithms",
              gradient: "from-orange-500/20 to-red-500/20",
              color: "text-orange-400"
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
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4 p-3"
                >
                  <img src={skill.img} alt={skill.title} className="w-full h-full object-contain" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${skill.color} group-hover:text-white transition-colors`}>
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Education Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1 glass border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-full blur-2xl"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4 p-3">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                  alt="Education" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-gray-400 text-sm mb-4">Currently Pursuing</p>
              <div className="space-y-2">
                <p className="text-white font-semibold">B.Tech in AI & Machine Learning</p>
                <p className="text-gray-400 text-sm">1st Year Student</p>
                <p className="text-brand-purple text-sm font-medium">Focused on bridging AI with Web Development</p>
              </div>
            </div>
          </motion.div>

          {/* What I Love Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group"
          >
            <motion.div
              animate={{ 
                x: [-20, 20, -20],
                y: [-20, 20, -20]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-full blur-2xl"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mb-4 p-3">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                  alt="Love" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">What I Love</h3>
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
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-4 p-3">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="Philosophy" 
                  className="w-full h-full object-contain invert"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">My Philosophy</h3>
              <blockquote className="text-gray-300 text-sm italic leading-relaxed border-l-2 border-brand-purple pl-4">
                "Every line of code is an opportunity to create something meaningful. 
                I believe in writing code that not only works, but inspires."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
