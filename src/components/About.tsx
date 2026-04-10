import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Code, Zap, Target, Brain, Layers, Terminal, Database, Layout, GitBranch, Figma } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const mainCards = [
    {
      id: 'intro',
      frontImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
      frontTitle: 'Who Am I?',
      backTitle: 'Dharani Govardhan',
      items: [
        { icon: <BookOpen className="w-5 h-5" />, text: '1st Year AIML Student' },
        { icon: <Layout className="w-5 h-5" />, text: 'Saveetha School of Engineering' },
        { icon: <Code className="w-5 h-5" />, text: 'Full Stack Developer' },
        { icon: <Target className="w-5 h-5" />, text: 'Building real-world projects' },
        { icon: <Brain className="w-5 h-5" />, text: 'AI & Web Development Enthusiast' }
      ]
    },
    {
      id: 'journey',
      frontImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
      frontTitle: 'My Journey',
      backTitle: 'The Story',
      items: [
        { icon: <Layers className="w-5 h-5" />, text: 'Started: Self-taught web development' },
        { icon: <Zap className="w-5 h-5" />, text: 'Achievement: 6+ live websites' },
        { icon: <Target className="w-5 h-5" />, text: 'Curiosity into solutions' },
        { icon: <Brain className="w-5 h-5" />, text: 'Bridging AI/ML with Web Tech' },
        { icon: <Terminal className="w-5 h-5" />, text: 'Tutorials to real-world impact' }
      ]
    },
    {
      id: 'skills',
      frontImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
      frontTitle: 'What I Do',
      backTitle: 'Tech Arsenal',
      items: [
        { icon: <Layout className="w-5 h-5" />, text: 'Frontend: React, TypeScript, Tailwind' },
        { icon: <Database className="w-5 h-5" />, text: 'Backend: Node.js, Express, MongoDB' },
        { icon: <Brain className="w-5 h-5" />, text: 'AI/ML: Python, TensorFlow' },
        { icon: <Figma className="w-5 h-5" />, text: 'Design: Figma, Responsive UI/UX' },
        { icon: <GitBranch className="w-5 h-5" />, text: 'Tools: Git, VS Code, Vercel' }
      ]
    },
    {
      id: 'passion',
      frontImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
      frontTitle: 'My Passion',
      backTitle: 'What Drives Me',
      items: [
        { icon: <Target className="w-5 h-5" />, text: 'Building solutions that matter' },
        { icon: <Code className="w-5 h-5" />, text: 'Clean code, beautiful interfaces' },
        { icon: <Brain className="w-5 h-5" />, text: 'Exploring AI possibilities' },
        { icon: <GitBranch className="w-5 h-5" />, text: 'Open source contributions' },
        { icon: <Zap className="w-5 h-5" />, text: 'Continuous learning & growth' }
      ]
    }
  ];

  const stats = [
    { 
      value: '6+', 
      label: 'Live Projects', 
      icon: <Target className="w-6 h-6" /> 
    },
    { 
      value: '1st', 
      label: 'Year AIML', 
      icon: <BookOpen className="w-6 h-6" /> 
    },
    { 
      value: '10+', 
      label: 'Technologies', 
      icon: <Code className="w-6 h-6" /> 
    },
    { 
      value: '∞', 
      label: 'Learning Hours', 
      icon: <Zap className="w-6 h-6" /> 
    }
  ];

  const techStack = [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-600 to-green-700' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-500 to-blue-500' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-500 to-green-600' },
    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-600 to-red-600' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'from-blue-500 to-purple-500' }
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

        {/* Hover Reveal Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {mainCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`hover-card ${flippedCards[card.id] ? 'active' : ''}`}>
                {/* Front Content */}
                <div className="front-content">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src={card.frontImage}
                      alt={card.frontTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white group-hover:bottom-8 transition-all duration-500">
                      <h3 className="text-2xl font-bold mb-2">{card.frontTitle}</h3>
                      <p className="text-sm text-gray-300">Hover to reveal details</p>
                    </div>
                  </div>
                </div>

                {/* Back Content (reveals on hover) */}
                <div className="back-content">
                  <div className="glass border border-white/10 rounded-3xl p-6 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-6">{card.backTitle}</h3>
                    <ul className="space-y-3 flex-1">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                          <span className="text-brand-purple flex-shrink-0">
                            {item.icon}
                          </span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center">
                      <div className="inline-block px-4 py-2 rounded-full bg-brand-purple/20 backdrop-blur-sm border border-brand-purple/30 text-xs text-brand-purple">
                        Hover for more
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-brand-purple">
                  {stat.icon}
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
        .hover-card {
          position: relative;
          width: 220px;
          height: 320px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          cursor: pointer;
          perspective: 1000px;
          overflow: hidden;
          margin: 0 auto;
        }

        .front-content,
        .back-content {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .front-content {
          transform-style: preserve-3d;
        }

        .back-content {
          transform: rotateY(180deg);
        }

        /* Corner reveals - matching your card pattern */
        .hover-card::before,
        .hover-card::after {
          position: absolute;
          content: "";
          width: 20%;
          height: 20%;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(59, 130, 246, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .hover-card::before {
          top: 0;
          right: 0;
          border-radius: 0 15px 0 100%;
          z-index: 10;
        }

        .hover-card::after {
          bottom: 0;
          left: 0;
          border-radius: 0 100% 0 15px;
          z-index: 10;
        }

        /* On hover - corners expand to fill card */
        .hover-card:hover::before,
        .hover-card:hover::after {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }

        /* Flip on click/tap for mobile */
        .hover-card.active .front-content {
          transform: rotateY(180deg);
        }

        .hover-card.active .back-content {
          transform: rotateY(0deg);
        }

        /* Mobile tap support */
        @media (pointer: coarse) {
          .hover-card::before,
          .hover-card::after {
            display: none;
          }
          
          .hover-card.active .front-content {
            transform: rotateY(180deg);
          }
          
          .hover-card.active .back-content {
            transform: rotateY(0deg);
          }
        }
      `}</style>
    </section>
  );
}
