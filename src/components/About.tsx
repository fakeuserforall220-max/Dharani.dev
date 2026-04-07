import { motion } from "framer-motion";
import { User, Code, Sparkles, BookOpen, BrainCircuit, MonitorSmartphone, Rocket } from "lucide-react";
import { cn } from "../utils/cn";

const stats = [
  { icon: BookOpen, label: "Education", value: "1st Year AIML", color: "text-brand-purple", shadow: "group-hover:shadow-brand-purple/20" },
  { icon: Code, label: "Experience", value: "6+ Live Projects", color: "text-brand-blue", shadow: "group-hover:shadow-brand-blue/20" },
  { icon: Sparkles, label: "Focus", value: "Modern UI/UX", color: "text-brand-orange", shadow: "group-hover:shadow-brand-orange/20" },
];

const skills = ["React.js", "Python", "Machine Learning", "Tailwind CSS", "Framer Motion"];

// Framer Motion Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  },
};

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient Animated Backgrounds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Me</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto md:mx-0 rounded-full" 
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden group border border-white/10 hover:border-brand-purple/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]"
          >
            {/* Inner Hover Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-purple/15 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-[1.8]" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <BrainCircuit className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="text-3xl font-space font-bold text-white">
                  Creative Tech Mindset
                </h3>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-6">
                I’m an <span className="text-white font-semibold bg-white/10 px-2 py-1 rounded-md border border-white/5">AIML student</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue font-semibold">frontend developer</span> focused on creating sleek, responsive, and visually engaging web interfaces.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed mb-8">
                I enjoy transforming ideas into real, interactive experiences that feel smooth, modern, and user-centered. My goal is to build digital products that leave a lasting impression through seamless motion and elegant design.
              </motion.p>

              {/* Skill Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-auto">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium text-gray-300 glass-dark rounded-full border border-white/5 cursor-default hover:text-white hover:border-brand-purple/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Stats/Highlights Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + idx * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.03, x: -5 }}
                  className={cn(
                    "glass rounded-2xl p-5 flex items-center gap-6 border border-white/5 transition-all duration-300 group cursor-pointer hover:bg-white/[0.03]",
                    stat.shadow
                  )}
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors relative overflow-hidden"
                  >
                    {/* Icon Background Glow */}
                    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500", stat.color.replace('text-', 'bg-'))} />
                    <Icon className={cn("w-7 h-7 relative z-10", stat.color)} />
                  </motion.div>
                  
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-2xl font-space font-bold text-white">{stat.value}</p>
                  </div>
                  
                  {/* Subtle decorative arrow/indicator */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                    <Rocket className="w-5 h-5 text-gray-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
