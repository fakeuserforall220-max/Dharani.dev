import { motion } from "framer-motion";
import { User, Code, Sparkles, Quote, Terminal, Database, Palette, Cpu } from "lucide-react";
import { cn } from "../utils/cn";

// Floating 3D-like tech icons
const floatingIcons = [
  { Icon: Terminal, color: "text-brand-blue", bg: "bg-brand-blue/10", top: "10%", left: "15%", delay: 0 },
  { Icon: Database, color: "text-brand-purple", bg: "bg-brand-purple/10", top: "25%", right: "10%", delay: 1 },
  { Icon: Palette, color: "text-brand-orange", bg: "bg-brand-orange/10", bottom: "30%", left: "-5%", delay: 2 },
  { Icon: Cpu, color: "text-green-400", bg: "bg-green-400/10", bottom: "15%", right: "15%", delay: 1.5 },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-brand-orange font-space font-medium tracking-wider mb-2 uppercase">
                Hey, I am a
              </p>
              <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 leading-tight">
                Creative <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                  Developer.
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I’m an <span className="text-white font-semibold">AIML student</span> and <span className="text-brand-blue font-semibold">frontend developer</span> focused on creating sleek, responsive, and visually engaging web interfaces.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-4">
              I transform ideas into interactive experiences that feel smooth and modern. My goal is to build digital products that leave a lasting impression.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass p-4 rounded-2xl border border-white/5 hover:border-brand-purple/30 transition-colors">
                <Code className="w-8 h-8 text-brand-blue mb-2" />
                <p className="text-white font-bold text-xl">6+ Projects</p>
                <p className="text-gray-400 text-sm">Live & Deployed</p>
              </div>
              <div className="glass p-4 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors">
                <Sparkles className="w-8 h-8 text-brand-orange mb-2" />
                <p className="text-white font-bold text-xl">UI/UX</p>
                <p className="text-gray-400 text-sm">Modern Focus</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3D Visual Showcase */}
          <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Background Orbit Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] border border-white/5 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] border border-brand-purple/20 rounded-full"
            />
            <motion.div 
              className="absolute w-[60%] h-[60%] border border-brand-blue/20 rounded-full"
            />

            {/* Floating Tech Icons */}
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  delay: item.delay, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={cn(
                  "absolute glass p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md z-20",
                  item.bg
                )}
                style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
              >
                <item.Icon className={cn("w-8 h-8", item.color)} />
              </motion.div>
            ))}

            {/* Main 3D Character Avatar */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              {/* REPLACE THIS IMAGE SRC WITH YOUR 3D AVATAR */}
              <img 
                src="https://cdn.3dassets.one/images/5f0bb784-9ff2-4c28-86cb-b816ef130d25.png" 
                alt="3D Developer Avatar" 
                className="w-full max-w-[450px] object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]"
              />
            </motion.div>

            {/* Floating Glass Quote Card (Like in your image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 lg:left-0 z-30 glass border border-white/10 p-5 rounded-2xl shadow-2xl max-w-[280px] backdrop-blur-xl bg-black/40"
            >
              <Quote className="text-brand-purple w-6 h-6 mb-2 opacity-50" />
              <p className="text-sm text-gray-300 italic mb-4">
                "Combines logical AIML problem-solving with beautiful frontend design."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue" />
                <div>
                  <p className="text-xs text-white font-bold">Tech Stack</p>
                  <p className="text-[10px] text-gray-400">Modern Web & AI</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
