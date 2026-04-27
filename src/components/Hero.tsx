import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ExternalLink, Mail, Send, Globe, MessageSquare, Terminal, 
  Code2, PenTool, Database, Sparkles, Layout, Smartphone, Layers, 
  Cpu, Brain, Binary, BarChart3, ArrowRight, Zap, Award 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// --- SHARED BACKGROUND COMPONENT ---
const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Blueprint Grid */}
    <div 
      className="absolute inset-0 opacity-[0.4]" 
      style={{ 
        backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }}
    />
    {/* Radial Fade */}
    <div className="absolute inset-0 bg-[#FAFAFA] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    {/* Ambient Glows */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
  </div>
);

// --- DATA CONFIG ---
const PROJECTS = [
  {
    title: 'Acade-Me',
    description: 'An academic platform enhancing learning experiences with seamless integration.',
    type: 'Problem',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js 15', 'Node.js', 'MongoDB'],
    link: '#', github: '#'
  },
  {
    title: 'Simats-Seat-Sync',
    description: 'Robust seating arrangement and synchronization system for university events.',
    type: 'Solution',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'PostgreSQL', 'Prisma'],
    link: '#', github: '#'
  },
  {
    title: 'Expensa AI',
    description: 'Beautiful, intuitive personal finance app with AI-driven expense tracking.',
    type: 'Solution',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Firebase', 'OpenAI'],
    link: '#', github: '#'
  }
];

const SKILLS = [
  { title: "Frontend Dev", icon: Layout, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", skills: ["Next.js 15", "React 19", "Tailwind"] },
  { title: "Backend Eng.", icon: Database, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80", skills: ["Bun.js", "PostgreSQL", "Drizzle"] },
  { title: "Deep Learning", icon: Brain, image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&w=800&q=80", skills: ["PyTorch", "CNNs", "OpenCV"] },
  { title: "Generative AI", icon: Sparkles, image: "https://images.unsplash.com/photo-1675557009875-436f595b1812?auto=format&fit=crop&w=800&q=80", skills: ["LangChain", "RAG", "Prompt Eng."] }
];

// --- SECTIONS ---

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#FAFAFA] overflow-hidden">
      <BackgroundPattern />
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-violet-600 mb-8 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            Full Stack Developer · AIML Student
          </div>
          <h1 className="text-6xl md:text-8xl font-space font-bold leading-[1] tracking-tighter text-gray-900 mb-8">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">Dharani Govardhan</span>
          </h1>
          <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-xl mb-10">
            I build modern, responsive web applications with a focus on clean design, AI integration, and practical functionality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-gray-200">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-semibold hover:bg-gray-50 transition-all shadow-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative perspective-1000 hidden lg:block">
          <motion.div animate={{ y: [0, -20, 0], rotateX: [5, 10, 5], rotateY: [-10, -5, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full h-96 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-100" />
                <div className="w-3 h-3 rounded-full bg-amber-100" />
                <div className="w-3 h-3 rounded-full bg-emerald-100" />
              </div>
              <Terminal className="text-violet-500 w-5 h-5" />
            </div>
            <div className="flex-1 py-6 font-mono text-sm text-gray-600 space-y-1">
              <p><span className="text-violet-600">const</span> <span className="text-blue-600">dharani</span> = {'{'}</p>
              <p className="pl-4">role: <span className="text-emerald-600">"Full Stack Developer"</span>,</p>
              <p className="pl-4">focus: <span className="text-emerald-600">"AIML Student"</span>,</p>
              <p className="pl-4">status: <span className="text-violet-600">"Building_Future"</span></p>
              <p>{'};'}</p>
              <p className="mt-4"><span className="text-violet-600">await</span> dharani.<span className="text-blue-600">deploy</span>();</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#FAFAFA] overflow-hidden border-y border-gray-100">
      <BackgroundPattern />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-space font-bold text-gray-900 mb-16 tracking-tighter">Technical <span className="text-gray-400">Arsenal</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-square rounded-[2rem] bg-gray-100 overflow-hidden mb-6">
                <img src={skill.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm z-10"><skill.icon size={20} className="text-gray-900" /></div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex mb-4">
                  <span className="px-5 py-1.5 rounded-full bg-[#F0F7FF] text-[#1E6BFF] text-[10px] font-black tracking-widest uppercase inline-block">DOMAIN</span>
                </div>
                <h3 className="text-xl font-space font-bold text-gray-900 mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 rounded-lg border border-gray-100 uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-space font-bold text-gray-900 mb-16 tracking-tighter">Selected <span className="text-gray-400">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div key={i} className="group flex flex-col bg-[#FAFAFA] rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] rounded-[2rem] bg-gray-200 overflow-hidden mb-6">
                <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white rounded-full text-gray-900 shadow-xl"><FaGithub size={20}/></a>
                  <a href={project.link} className="p-3 bg-white rounded-full text-gray-900 shadow-xl"><ExternalLink size={20}/></a>
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="flex mb-4">
                  <span className="px-5 py-1.5 rounded-full bg-[#F0F7FF] text-[#1E6BFF] text-[10px] font-black tracking-widest uppercase">{project.type}</span>
                </div>
                <h3 className="text-2xl font-space font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-sans">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{tag} •</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#FAFAFA] overflow-hidden">
      <BackgroundPattern />
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <h2 className="text-6xl md:text-8xl font-space font-bold text-gray-900 mb-8 tracking-tighter">Let's <span className="text-violet-600">Talk</span></h2>
          <p className="text-xl text-gray-500 font-sans leading-relaxed mb-10 max-w-md">Reach out for collaborations, project inquiries, or just to say hi.</p>
          <a href="mailto:contact@dharani.dev" className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-violet-200 transition-all">
              <Mail className="text-gray-400 group-hover:text-violet-600" size={28}/>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
              <p className="text-xl font-semibold text-gray-900">contact@dharani.dev</p>
            </div>
          </a>
        </div>
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl border border-white">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-violet-400 transition-all font-sans" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-violet-400 transition-all font-sans" placeholder="john@example.com" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-violet-400 transition-all resize-none font-sans" placeholder="Tell me about your idea..." />
            </div>
            <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2">
              Send Message <Send size={20}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="bg-[#FAFAFA] selection:bg-violet-100 selection:text-violet-900">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
