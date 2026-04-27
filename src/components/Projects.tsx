import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const PROJECTS = [
  {
    title: 'Outdated Digital Presence',
    description: 'Outdated website or app turns away potential clients.',
    type: 'Problem',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60', // Replace with your project screenshot
    color: 'bg-red-50 text-red-500',
    link: '#',
    github: '#'
  },
  {
    title: 'Lack of Technical Expertise',
    description: 'Our expert team bridges the gap between idea and execution.',
    type: 'Solution',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
    color: 'bg-orange-50 text-orange-700',
    link: '#',
    github: '#'
  },
  {
    title: 'Inefficient Processes',
    description: 'Streamlining workflows with AI-driven automation and GenAI.',
    type: 'Problem',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    color: 'bg-yellow-50 text-yellow-700',
    link: '#',
    github: '#'
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
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-[2rem] bg-[#F4F4F4] overflow-hidden flex items-center justify-center p-8">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain rounded-xl shadow-lg shadow-black/5"
        />
        
        {/* Hover Links Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <a href={project.github} className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-md">
            <Github size={20} className="text-gray-900" />
          </a>
          <a href={project.link} className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-md">
            <ExternalLink size={20} className="text-gray-900" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="flex items-center mb-4">
          <span className={`px-4 py-1 rounded-full text-[13px] font-medium ${project.color}`}>
            {project.type}
          </span>
        </div>
        
        <h3 className="text-[28px] leading-tight font-semibold text-gray-900 mb-3 tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-500 text-xl max-w-xl">
            Solving complex problems through design and technology.
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
