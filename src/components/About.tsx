import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
      front: {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
        title: 'Who Am I?',
        subtitle: 'Click to reveal'
      },
      back: {
        title: 'Dharani Govardhan',
        content: [
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', text: '1st Year AIML Student' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145125.png', text: 'Saveetha School of Engineering' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', text: 'Full Stack Developer' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/2785/2785482.png', text: 'Building real-world projects' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/3468/3468377.png', text: 'Passionate about AI & Web' }
        ]
      }
    },
    {
      id: 'journey',
      front: {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
        title: 'My Journey',
        subtitle: 'Click to reveal'
      },
      back: {
        title: 'The Story',
        content: [
          { icon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png', text: 'Started: Self-taught web dev' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png', text: 'Achievement: 6+ live websites' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176376.png', text: 'Turning curiosity into solutions' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341025.png', text: 'Bridging AI/ML with Web Tech' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/2387/2387679.png', text: 'From tutorials to real impact' }
        ]
      }
    },
    {
      id: 'skills',
      front: {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
        title: 'What I Do',
        subtitle: 'Click to reveal'
      },
      back: {
        title: 'Tech Arsenal',
        content: [
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', text: 'Frontend: React, TypeScript, Tailwind' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', text: 'Backend: Node.js, Express, MongoDB' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', text: 'AI/ML: Python, TensorFlow' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', text: 'Design: Figma, Responsive UI/UX' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', text: 'Tools: Git, VS Code, Vercel' }
        ]
      }
    },
    {
      id: 'passion',
      front: {
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
        title: 'My Passion',
        subtitle: 'Click to reveal'
      },
      back: {
        title: 'What Drives Me',
        content: [
          { icon: 'https://cdn-icons-png.flaticon.com/512/2882/2882631.png', text: 'Building solutions that matter' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', text: 'Clean code, beautiful interfaces' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png', text: 'Exploring AI possibilities' },
          { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', text: 'Open source contributions' },
          { icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588435.png', text: 'Continuous learning & growth' }
        ]
      }
    }
  ];

  const stats = [
    { 
      value: '6+', 
      label: 'Live Projects', 
      icon: 'https://cdn-icons-png.flaticon.com/512/2785/2785482.png' 
    },
    { 
      value: '1st', 
      label: 'Year AIML', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145125.png' 
    },
    { 
      value: '10+', 
      label: 'Technologies', 
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' 
    },
    { 
      value: '24/7', 
      label: 'Learning', 
      icon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' 
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {mainCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flip-card-container h-[400px] cursor-pointer"
              onClick={() => toggleFlip(card.id)}
            >
              <motion.div
                className="flip-card-inner w-full h-full relative"
                animate={{ rotateY: flippedCards[card.id] ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div className="flip-card-face absolute w-full h-full backface-hidden rounded-3xl overflow-hidden">
                  <div className="relative w-full h-full group">
                    <img 
                      src={card.front.image}
                      alt={card.front.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{card.front.title}</h3>
                      <p className="text-sm text-gray-300">{card.front.subtitle}</p>
                      <div className="mt-4 inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs">
                        Tap to flip
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="flip-card-face absolute w-full h-full backface-hidden rounded-3xl overflow-hidden glass border border-white/10 p-6"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-6">{card.back.title}</h3>
                    <ul className="space-y-3 flex-1">
                      {card.back.content.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: flippedCards[card.id] ? 1 : 0, x: flippedCards[card.id] ? 0 : -20 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-gray-300 text-sm"
                        >
                          <img 
                            src={item.icon} 
                            alt="" 
                            className="w-6 h-6 flex-shrink-0"
                            loading="lazy"
                          />
                          <span>{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center">
                      <div className="inline-block px-4 py-2 rounded-full bg-brand-purple/20 backdrop-blur-sm border border-brand-purple/30 text-xs text-brand-purple">
                        Tap to flip back
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <img src={stat.icon} alt={stat.label} className="w-10 h-10" loading="lazy" />
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
        .flip-card-container {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .flip-card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
