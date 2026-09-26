import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowDown, CheckCircle2, ChevronRight, LayoutDashboard, Calculator, CheckSquare, Users, MessageSquare, BookOpen, Bot, Trophy, Smartphone } from 'lucide-react';
import DepthText from '../ui/DepthText';
import academeLogo from '../../../Projects/academe.png';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AcademeCaseStudy() {
  return (
    <div className="font-urbanist text-white">
      
      {/* 1. PROJECT HERO */}
      <section className="mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Title & Description */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex items-center gap-4 mb-6"
            >
              <img src={academeLogo} alt="AcadeMe Logo" className="w-16 h-16 object-contain filter drop-shadow-md" />
              <p className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                Project Case Study
              </p>
            </motion.div>
            
            <div className="mb-6 h-24 md:h-32 flex items-center w-full relative z-10 pointer-events-auto">
              <DepthText
                text="AcadeMe"
                layers={15}
                depth={1.5}
                faceColor="#ffffff"
                depthColor="#3b82f6"
                tilt={10}
                pointerTracking={true}
                perspective={1000}
                autoOrbit={true}
                fontSize="clamp(4rem, 8vw, 6rem)"
                fontWeight={900}
                shadow={true}
              />
            </div>
            
            <motion.h2 
              variants={fadeInUp} initial="hidden" animate="visible"
              className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight"
            >
              Educational Productivity & Academic Tracking Platform
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl leading-relaxed"
            >
              A student-focused academic management platform designed to bring everyday college activities into one unified dashboard.
            </motion.p>
          </div>

          {/* Right: Info Card */}
          <motion.div 
            variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-1">Project Type</p>
              <p className="font-semibold text-white">Educational Web Application</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-1">Role</p>
              <p className="font-semibold text-white">Full-Stack Developer</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-1">Status</p>
              <p className="font-semibold text-white">Deployed & Actively Developed</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-1">Technology</p>
              <p className="font-semibold text-white">React · Firebase · Firestore · PWA · AI</p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
              <a href="https://acade-me.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-[#7A9EBA] rounded-xl font-bold hover:bg-white/90 shadow-lg hover:-translate-y-0.5 transition-all group">
                Live Demo <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://github.com/dharanigovardhan2008/AcadeMe" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-colors group">
                GitHub <Code2 size={16} className="group-hover:rotate-6 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32"
      >
        <h3 className="text-3xl font-bold mb-8">Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-lg text-white/80 leading-relaxed flex flex-col justify-center">
            <p>
              College students often have to use multiple disconnected sources to manage academics—attendance records, grades, course details, faculty information, learning resources, and other student activities.
            </p>
            <p className="mt-4">
              AcadeMe was developed to centralize these workflows into a single student-oriented platform with a dashboard that makes academic information easier to access, track, and understand.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Platform", value: "Web + PWA" },
              { label: "Category", value: "Education" },
              { label: "Development", value: "Full-Stack" },
              { label: "Core Focus", value: "Productivity" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex flex-col justify-center text-center shadow-lg">
                <span className="text-xs font-bold tracking-widest text-white/60 uppercase mb-2">{item.label}</span>
                <span className="font-bold text-white text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. THE PROBLEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <h3 className="text-3xl font-bold mb-6">The Problem</h3>
        <p className="text-2xl font-medium text-white mb-4 leading-snug">
          "College students often manage academics across multiple disconnected systems."
        </p>
        <p className="text-lg text-white/70 mb-12 max-w-3xl">
          Students face interconnected challenges that fragment their academic experience, from error-prone manual grade calculations to a lack of visibility into attendance buffers and scattered study materials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <CheckSquare size={24} />, title: "Attendance", desc: "No visibility into safe attendance buffer" },
            { icon: <Calculator size={24} />, title: "Grades", desc: "Manual calculation is error-prone" },
            { icon: <Users size={24} />, title: "Faculty Info", desc: "No reliable peer feedback system" },
            { icon: <BookOpen size={24} />, title: "Resources", desc: "Study materials are scattered" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#7A9EBA] mb-4 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. THE SOLUTION */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32 text-center"
      >
        <h3 className="text-3xl font-bold mb-12">The Solution</h3>
        
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="bg-white/10 border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg text-lg font-bold text-white/80">
            Fragmented Academic Data
          </div>
          
          <div className="h-12 w-px bg-gradient-to-b from-white/30 to-white my-2"></div>
          <ArrowDown size={20} className="text-white mb-2" />
          
          <div className="bg-white text-[#7A9EBA] px-12 py-6 rounded-3xl shadow-xl text-2xl font-black w-full md:w-auto tracking-tight">
            AcadeMe Platform
          </div>
          
          <ArrowDown size={20} className="text-white mt-4 mb-2" />
          <div className="h-12 w-px bg-gradient-to-t from-white/30 to-white my-2"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {['Track', 'Analyze', 'Learn', 'Participate'].map((word, i) => (
              <div key={i} className="bg-white/10 border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase text-white shadow-lg">
                {word}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. KEY FEATURES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32"
      >
        <h3 className="text-3xl font-bold mb-10">Key Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: "01", icon: <LayoutDashboard size={20}/>, title: "Academic Dashboard", desc: "Centralized overview of academic performance, attendance, courses and productivity." },
            { num: "02", icon: <Calculator size={20}/>, title: "CGPA Calculator", desc: "Interactive grade-based CGPA calculation with visual feedback." },
            { num: "03", icon: <CheckSquare size={20}/>, title: "Attendance Tracker", desc: "Track subject attendance and calculate classes that can be missed or required." },
            { num: "04", icon: <Users size={20}/>, title: "Faculty Directory", desc: "Browse faculty information, departments, courses and contact details." },
            { num: "05", icon: <MessageSquare size={20}/>, title: "Faculty Reviews", desc: "Submit ratings and feedback and interact with reviews." },
            { num: "06", icon: <BookOpen size={20}/>, title: "Resources Hub", desc: "Access concept maps, papers, syllabus, lab manuals, important questions, MCQs and videos." },
            { num: "07", icon: <Bot size={20}/>, title: "AI Study Assistant", desc: "AI-powered assistant for study plans, explanations and summaries." },
            { num: "08", icon: <Trophy size={20}/>, title: "Gamification", desc: "Points and leaderboard system encouraging student participation." },
            { num: "09", icon: <Smartphone size={20}/>, title: "PWA Support", desc: "Installable application experience with notification support." },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white text-slate-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-brand-purple"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-slate-400 tracking-widest">{feature.num}</span>
                <div className="text-[#7A9EBA] bg-[#7A9EBA]/10 p-3 rounded-full group-hover:bg-[#7A9EBA] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. TECH STACK */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <h3 className="text-3xl font-bold mb-10">Technology Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { 
              category: "Frontend", 
              items: ["React", "Vite", "React Router", "JavaScript / JSX", "Lucide React", "Recharts"] 
            },
            { 
              category: "Backend / Cloud", 
              items: ["Firebase Authentication", "Firebase Firestore", "Firebase Cloud Messaging"] 
            },
            { 
              category: "AI", 
              items: ["Groq API", "GPT-OSS-120B"] 
            },
            { 
              category: "Platform", 
              items: ["Progressive Web App", "Service Worker", "Web App Manifest", "Vercel"] 
            },
          ].map((stack, i) => (
            <div key={i}>
              <h4 className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-4">{stack.category}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech, j) => (
                  <span key={j} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-semibold text-white backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 7. ENGINEERING */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32"
      >
        <h3 className="text-3xl font-bold mb-10">Engineering Highlights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Authentication", desc: "Firebase Authentication with email/password and Google login." },
            { title: "State Management", desc: "React Context for application-wide authentication and data state." },
            { title: "Data Layer", desc: "Firestore for users, courses, faculty, reviews and academic information." },
            { title: "Caching", desc: "Session-based caching with TTL to reduce unnecessary requests." },
            { title: "Optimistic Updates", desc: "Immediate UI feedback while asynchronous data persistence happens in the background." },
            { title: "Responsive Design", desc: "Responsive layouts designed for desktop and mobile devices." },
            { title: "Error Handling", desc: "Protected routes and error boundary handling." },
            { title: "Notifications", desc: "PWA notification and service-worker event handling." },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:bg-white/20 transition-colors">
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. PROJECT ARCHITECTURE */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl text-center overflow-x-auto"
      >
        <h3 className="text-3xl font-bold mb-12">Project Architecture</h3>
        
        <div className="inline-flex flex-col items-center min-w-[300px]">
          <div className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg w-64 border border-white/20">
            React Application
          </div>
          
          <div className="h-8 w-px bg-white/40 relative">
            <ChevronRight size={16} className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/60 rotate-90" />
          </div>
          <div className="h-4"></div>
          
          <div className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg w-64 border border-white/20">
            React Router
          </div>

          <div className="h-8 w-px bg-white/40 relative">
            <ChevronRight size={16} className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/60 rotate-90" />
          </div>
          <div className="h-4"></div>
          
          <div className="border border-white/30 rounded-2xl p-6 bg-white/5 backdrop-blur-sm shadow-sm w-64 relative">
            <span className="absolute -top-3 left-4 bg-[#7A9EBA] px-2 text-xs font-bold text-white uppercase tracking-wider rounded">Context Layer</span>
            <div className="flex flex-col gap-3 mt-2">
              <div className="bg-white/20 p-3 rounded-lg font-semibold text-sm border border-white/30">AuthContext</div>
              <div className="bg-white/20 p-3 rounded-lg font-semibold text-sm border border-white/30">DataContext</div>
            </div>
          </div>

          <div className="h-8 w-px bg-white/40 relative">
            <ChevronRight size={16} className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/60 rotate-90" />
          </div>
          <div className="h-4"></div>

          <div className="border border-white/20 rounded-2xl p-6 bg-white text-slate-900 shadow-xl w-64 relative">
            <span className="absolute -top-3 left-4 bg-slate-900 px-2 text-xs font-bold text-white uppercase tracking-wider rounded">Firebase</span>
            <div className="flex flex-col gap-3 mt-2">
              <div className="bg-slate-100 p-3 rounded-lg font-semibold text-sm border border-slate-200">Authentication</div>
              <div className="bg-slate-100 p-3 rounded-lg font-semibold text-sm border border-slate-200">Firestore</div>
              <div className="bg-slate-100 p-3 rounded-lg font-semibold text-sm border border-slate-200">Notifications</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. MY CONTRIBUTION */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32"
      >
        <h3 className="text-3xl font-bold mb-8">My Contribution</h3>
        <p className="text-lg text-white/80 mb-8 max-w-2xl">
          I designed and developed the AcadeMe platform as an end-to-end student productivity system:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
          {[
            "Application architecture",
            "React frontend",
            "Firebase integration",
            "Authentication",
            "Firestore data management",
            "Attendance system",
            "CGPA calculator",
            "Faculty review system",
            "Gamification",
            "AI assistant integration",
            "PWA implementation",
            "Responsive UI/UX",
            "Deployment"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white font-medium">
              <CheckCircle2 size={18} className="text-[#3b82f6]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 10. CHALLENGES & LEARNING */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32"
      >
        <h3 className="text-3xl font-bold mb-10">Challenges & Learnings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl">
            <h4 className="font-bold text-xl mb-3">Real-time Data Sync</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Keeping UI state synchronized with Firestore required carefully designing listeners and understanding when to use one-time fetches vs. real-time snapshot subscriptions to balance UX and database read limits.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl">
            <h4 className="font-bold text-xl mb-3">Performance</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Implemented robust caching strategies using sessionStorage and optimistic UI updates to ensure the application feels instantaneous, masking the inherent latency of network requests.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl">
            <h4 className="font-bold text-xl mb-3">PWA & Notifications</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Navigating the complexities of service workers was challenging. Successfully configuring the web app manifest and handling foreground/background notifications created a truly native app feel.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl">
            <h4 className="font-bold text-xl mb-3">AI Integration</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Integrating an external AI API involved managing asynchronous streaming states, parsing raw markdown responses safely, and creating a cohesive chat interface within an academic context.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 11. PROJECT METRICS / SNAPSHOT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-32 bg-white text-slate-900 rounded-3xl p-10 shadow-2xl overflow-hidden relative"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { value: "01", label: "Academic Dashboard" },
            { value: "09+", label: "Core Features" },
            { value: "PWA", label: "Installable Experience" },
            { value: "AI", label: "Study Assistant" },
          ].map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-[#7A9EBA]">{metric.value}</span>
              <span className="text-slate-500 font-bold text-sm md:text-base uppercase tracking-wider">{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 12. FINAL CTA */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-center"
      >
        <h3 className="text-4xl font-black mb-4 tracking-tight">Explore AcadeMe</h3>
        <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto">
          See how the complete application works in practice.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://acade-me.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7A9EBA] rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-white/90 transition-all group text-lg">
            View Live Project <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="https://github.com/dharanigovardhan2008/AcadeMe" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-2xl font-bold hover:bg-white/10 hover:-translate-y-1 transition-all group text-lg">
            View Source Code <Code2 size={20} className="group-hover:rotate-6 transition-transform" />
          </a>
        </div>
      </motion.section>
      
    </div>
  );
}
