'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Dynamically import all images from the /projects folder at the root
const projectImages = import.meta.glob('/projects/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });

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
            className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-white uppercase shadow-sm mb-6 border border-white/20"
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
                className="group relative flex flex-col items-center justify-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 shadow-xl hover:shadow-2xl h-full"
              >
                {/* Premium Glow effect behind the logo on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-emerald-500/0 opacity-0 transition-all duration-500 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-emerald-500/20 pointer-events-none blur-xl scale-110" />
                
                <div className="relative h-24 w-24 md:h-28 md:w-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={project.icon} 
                    alt={project.name} 
                    className="h-full w-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                  />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight relative z-10 text-center font-sans transition-colors duration-300">
                  {project.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}