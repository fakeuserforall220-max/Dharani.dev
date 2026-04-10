import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function About() {
  const mainCards = [
    {
      id: 'intro',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
      title: 'Who Am I?',
      backTitle: 'Dharani Govardhan',
      backItems: [
        { icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145125.png', text: '1st Year AIML Student' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145092.png', text: 'Saveetha School of Engineering' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', text: 'Full Stack Developer' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/2785/2785482.png', text: 'Building real-world projects' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/3468/3468377.png', text: 'Passionate about AI & Web' }
      ]
    },
    {
      id: 'journey',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
      title: 'My Journey',
      backTitle: 'The Story',
      backItems: [
        { icon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png', text: 'Started: Self-taught web development' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png', text: 'Achievement: 6+ live websites deployed' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176376.png', text: 'Turning curiosity into real solutions' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341025.png', text: 'Bridging AI/ML with Web Technologies' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/2387/2387679.png', text: 'From tutorials to real-world impact' }
      ]
    },
    {
      id: 'skills',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
      title: 'What I Do',
      backTitle: 'Tech Arsenal',
      backItems: [
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', text: 'Frontend: React, TypeScript, Tailwind' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', text: 'Backend: Node.js, Express, MongoDB' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', text: 'AI/ML: Python, TensorFlow, Neural Networks' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', text: 'Design: Figma, Responsive UI/UX' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', text: 'Tools: Git, VS Code, Vercel, Docker' }
      ]
    },
    {
      id: 'passion',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
      title: 'My Passion',
      backTitle: 'What Drives Me',
      backItems: [
        { icon: 'https://cdn-icons-png.flaticon.com/512/2882/2882631.png', text: 'Building solutions that solve problems' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', text: 'Writing clean, maintainable code' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', text: 'Exploring AI possibilities' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', text: 'Contributing to open source' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588435.png', text: 'Continuous learning & growth' }
      ]
    }
  ];

  const stats = [
    { value: '6+', label: 'Live Projects', icon: 'https://cdn-icons-png.flaticon.com/512/2785/2785482.png' },
    { value: '1st', label: 'Year AIML', icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145125.png' },
    { value: '10+', label: 'Technologies', icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' },
    { value: '24/7', label: 'Learning', icon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' }
  ];

  const techStack = [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-600 to-green-700' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-500 to-blue-500' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-500 to-green-600' },
    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-600 to-red-600' },
    { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-space mb-4 leading-tight">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
              Dharani Govardhan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            AIML Student at Saveetha School of Engineering | Building the future, one line at a time
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto mb-16">
          {mainCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-[450px]"
            >
              <div className="flip-hover-card h-full cursor-pointer">
                {/* Card Front Face */}
                <div className="card-front h-full relative">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>
                </div>

                {/* Card Back Face (Expanded on Hover) */}
                <div className="card-back">
                  <div className="p-6 h-full">
                    <h3 className="text-2xl font-bold text-white mb-6">{card.backTitle}</h3>
                    <ul className="space-y-4">
                      {card.backItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5">
                            <img 
                              src={item.icon} 
                              alt="" 
                              className="w-5 h-5"
                              loading="lazy"
                            />
                          </div>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Corner Pieces */}
                <div className="card-corner-top" />
                <div className="card-corner-bottom" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-4 rounded-full glass border border-white/10 backdrop-blur-sm min-w-[140px]"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-full bg-white/5">
                  <img src={stat.icon} alt={stat.label} className="w-8 h-8" loading="lazy" />
                </div>
                <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-5 py-3 rounded-full bg-gradient-to-r ${tech.color} flex items-center gap-3 shadow-lg`}
              >
                <img src={tech.img} alt={tech.name} className="w-6 h-6" loading="lazy" />
                <span className="text-sm font-semibold text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto glass border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm text-center"
        >
          <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4 leading-relaxed">
            "Building the intersection of AI and beautiful web experiences - because the future deserves great design."
          </blockquote>
          <p className="text-brand-purple font-semibold">— Dharani Govardhan</p>
        </motion.div>
      </div>

      <style jsx>{`
        .flip-hover-card {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1;
          opacity: 0;
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
        }

        .card-corner-top,
        .card-corner-bottom {
          position: absolute;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(59, 130, 246, 0.9));
          transition: all 0.5s ease;
          z-index: 3;
        }

        .card-corner-top {
          width: 15%;
          height: 15%;
          top: 0;
          right: 0;
          border-radius: 0 20px 0 100%;
        }

        .card-corner-bottom {
          width: 15%;
          height: 15%;
          bottom: 0;
          left: 0;
          border-radius: 0 100% 0 20px;
        }

        .flip-hover-card:hover .card-back {
          opacity: 1;
        }

        .flip-hover-card:hover .card-corner-top,
        .flip-hover-card:hover .card-corner-bottom {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .card-corner-top,
          .card-corner-bottom {
            display: none;
          }
          
          .card-back {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
