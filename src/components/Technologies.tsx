'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, 
  SiMysql, SiPostgresql, SiMongodb, SiDocker, 
  SiTensorflow, SiPytorch, SiTailwindcss, SiGit, SiVercel, 
  SiFigma, SiFirebase, SiJavascript, SiRedux, SiGraphql, 
  SiPrisma, SiRedis, SiSupabase, SiLinux, SiCplusplus 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const integrations = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const columnLayout = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18],
  [19, 20, 21],
  [22, 23],
  [24],
];

function IntegrationCard({ app }: { app: (typeof integrations)[0] }) {
  const Icon = app.icon;
  return (
    <div 
      className="group bg-white relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 shadow-xl sm:h-20 sm:w-20 lg:h-24 lg:w-24 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
      title={app.name}
    >
      <Icon 
        className="text-slate-700 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-all duration-300 group-hover:drop-shadow-md" 
        style={{ color: app.color }} 
      />
      {/* Tooltip */}
      <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-slate-800 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-200 pointer-events-none">
        {app.name}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="relative h-full w-full overflow-hidden py-32 z-10">
      <div className="container mx-auto max-w-5xl px-4 relative z-20">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center duration-700 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-slate-800 uppercase shadow-sm border border-white/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span>Core Arsenal</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-6 text-4xl font-display font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Technologies I Use
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto"
          >
            A comprehensive stack built for highly scalable, intelligent, and production-ready applications.
          </motion.p>
        </div>

        <div className="relative mx-auto mb-16 max-w-4xl md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4 md:hidden"
          >
            {integrations.map((app) => (
              <IntegrationCard key={app.name} app={app} />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden items-center justify-center gap-2 md:flex lg:gap-4"
          >
            {columnLayout.map((colIndices, i) => (
              <div key={i} className="flex flex-col gap-2 lg:gap-4">
                {colIndices.map((index) => {
                  const app = integrations[index];
                  return <IntegrationCard key={app.name} app={app} />;
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
