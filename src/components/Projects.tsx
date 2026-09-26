'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Dynamically import all images from the Projects folder at the root
const projectImages = import.meta.glob('../../Projects/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });

const projects = Object.entries(projectImages).map(([path, url]) => {
  const filename = path.split('/').pop()?.split('.')[0] || 'Project';
  // Capitalize name
  const formattedName = filename.charAt(0).toUpperCase() + filename.slice(1);
  return { id: filename.toLowerCase(), name: formattedName, icon: url as string };
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-32 z-10 font-sans">
      <div className="container mx-auto max-w-6xl px-4 relative z-20">
        
        {/* Header Section */}
        <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-slate-900 uppercase shadow-sm border border-slate-200 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>Selected Projects</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-6 text-4xl font-sans font-bold tracking-tight md:text-6xl"
          >
            My Latest Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mx-auto"
          >
            Discover the apps and platforms I've built, carefully crafted for performance and user experience.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <motion.div 
                variants={itemVariants}
                className="group relative flex flex-col items-center justify-center gap-6 p-4 transition-all duration-500 h-full"
              >
                {/* Minimal background glow on hover instead of a solid card */}
                <div className="absolute inset-0 rounded-[2rem] bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500 pointer-events-none" />
                
                <div className="relative h-28 w-28 md:h-36 md:w-36 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4">
                  <img 
                    src={project.icon} 
                    alt={project.name} 
                    className="h-full w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
                  />
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-2 mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight text-center font-sans transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="h-0.5 w-0 bg-white/50 group-hover:w-12 transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}