import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const PROJECTS = [
  {
    title: 'Acade-Me',
    description: 'An academic platform enhancing learning experiences with seamless integration and performance.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    type: 'Featured',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Simats-Seat-Sync',
    description: 'A robust seating arrangement and synchronization system for large-scale university events.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Framer'],
    type: 'Solution',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Expensa',
    description: 'A beautiful, intuitive personal finance and expense tracking application.',
    tags: ['React Native', 'Firebase', 'Redux'],
    type: 'Product',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Safethelock',
    description: 'High-security credential management system with end-to-end encryption.',
    tags: ['Vue.js', 'Rust', 'WebAssembly'],
    type: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Elvera',
    description: 'A premium e-commerce storefront with immersive 3D product viewing capabilities.',
    tags: ['Three.js', 'React', 'GSAP'],
    type: 'Creative',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'Go-Rail-India',
    description: 'A comprehensive railway tracking and ticketing portal with real-time updates.',
    tags: ['React', 'Express', 'Redis'],
    type: 'Utility',
    image: 'https://images.unsplash.com/photo-1474487059418-f2360580c8df?w=800&auto=format&fit=crop&q=60',
    link: '#',
    github: '#',
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Image Container - Styled like your screenshot */}
      <div className="relative aspect-[4/3] rounded-[2rem] bg-[#F4F4F4] overflow-hidden flex items-center justify-center p-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/10"
        >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
        </motion.div>
        
        {/* Overlay Links */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={project.github} className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-lg text-gray-900">
            <FaGithub size={20} />
          </a>
          <a href={project.link} className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-lg text-gray-900">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 py-6">
        <div className="flex items-center mb-4">
          <span className={`px-4 py-1 rounded-full text-[13px] font-semibold tracking-wide ${project.color}`}>
            {project.type}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              {tag} {i !== 2 && "•"}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
            Selected <span className="text-gray-400">Works</span>
          </h2>
          <p className="text-gray-500 text-xl leading-relaxed">
            A curated collection of my live projects. From high-performance utility apps to immersive creative platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
