import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowDown, ChevronRight, LayoutDashboard, Calculator, CheckSquare, Users, MapPin, QrCode, CreditCard, Ticket, Bell, Shield, Smartphone } from 'lucide-react';
import seatsyncLogo from '../../../Projects/seatsync.png';
import DepthText from '../ui/DepthText';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const SectionLabel = ({ text }: { text: string }) => (
  <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase mb-6 md:mb-10 border-b border-white/10 pb-4">
    {text}
  </h4>
);

export default function SeatSyncCaseStudy() {
  return (
    <div className="font-urbanist text-white max-w-7xl mx-auto selection:bg-white/20">
      
      {/* 01 — INTRODUCTION / HERO */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src={seatsyncLogo} alt="SeatSync Logo" className="w-16 h-16 object-cover rounded-xl filter drop-shadow-md border border-white/20" />
            <p className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase">
              Project / 02
            </p>
          </motion.div>
          
          <div className="mb-6 h-20 md:h-28 flex items-center w-full relative z-10 pointer-events-auto">
            <DepthText
              text="SeatSync"
              layers={6}
              depth={0.7}
              faceColor="#ffffff"
              depthColor="#ffffff"
              tilt={0}
              pointerTracking={false}
              autoOrbit={false}
              fontSize="clamp(3.5rem, 8vw, 6rem)"
              fontWeight={900}
              shadow={true}
            />
          </div>
          
          <motion.h2 
            variants={fadeInUp} initial="hidden" animate="visible"
            className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight max-w-2xl"
          >
            Campus Event & Workshop Management Platform
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white max-w-3xl leading-relaxed mb-12"
          >
            SeatSync connects students, event coordinators, and administrators through a unified campus event experience—from discovery and registration to payments, digital tickets, and QR-based attendance.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="https://simats-seat-sync.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#7A9EBA] rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase">
              View Live Project <ExternalLink size={16} />
            </a>
            <a href="https://github.com/dharanigovardhan2008/SimatsSeatSync" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase">
              View Source <Code2 size={16} />
            </a>
          </motion.div>
          
          {/* Metadata Strip */}
          <motion.div 
            variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10"
          >
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">Role</p>
              <p className="font-semibold text-white/90 text-sm">Full-Stack Developer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">Type</p>
              <p className="font-semibold text-white/90 text-sm">Campus Event Platform</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">Platform</p>
              <p className="font-semibold text-white/90 text-sm">Web + PWA</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">Stack</p>
              <p className="font-semibold text-white/90 text-sm">React · TS · Firebase</p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 02 — THE PROBLEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel text="02 — The Problem" />
            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Campus events often depend on disconnected workflows.
            </h3>
          </div>
          
          <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-16">
            {[
              { title: "Event Discovery", desc: "Students need a centralized place to discover and browse events without relying on scattered posters." },
              { title: "Registration", desc: "Organizers need reliable enrollment limits, custom fields, and real-time seat management." },
              { title: "Team Participation", desc: "Team-based events require additional coordination for invitations, joining, and unified enrollment." },
              { title: "Attendance", desc: "Digital registration workflows need to securely connect with physical event entry and presence verification." }
            ].map((item, i) => (
              <div key={i} className="py-8 border-b border-white/10 last:border-0">
                <h4 className="font-bold text-xl mb-3 text-white">{item.title}</h4>
                <p className="text-white/90 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 03 — THE SOLUTION */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="03 — The Solution" />
        <h3 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
          One connected workflow from discovery to attendance.
        </h3>
        
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/20 -z-10 -translate-y-1/2"></div>
          
          {[
            "DISCOVER", "EVENT DETAILS", "REGISTER", "TEAM/INDIV", 
            "PAYMENT", "CONFIRMATION", "DIGITAL TICKET", "QR SCAN", "ATTENDANCE"
          ].map((step, i, arr) => (
            <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-6 w-full md:w-auto relative mb-6 md:mb-0 last:mb-0">
              <div className="md:hidden absolute left-[7px] top-6 bottom-[-24px] w-px bg-white/20 -z-10"></div>
              <div className="w-4 h-4 rounded-full bg-[#7A9EBA] border-2 border-white z-10 flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/90 uppercase whitespace-nowrap text-left md:text-center mt-0 md:mt-2 bg-[#7A9EBA] md:bg-transparent py-1 px-2 md:p-0 rounded-md">
                {step}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 04 — EVENT LIFECYCLE */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="04 — The Event Lifecycle" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
          {[
            { num: "01", title: "DISCOVER", desc: "Browse available campus events and workshops." },
            { num: "02", title: "REGISTER", desc: "Register individually or as a complete team." },
            { num: "03", title: "VERIFY", desc: "Process payment and registration state." },
            { num: "04", title: "TICKET", desc: "Receive a unique digital QR ticket." },
            { num: "05", title: "SCAN", desc: "Coordinator scans the ticket at the venue." },
            { num: "06", title: "ATTEND", desc: "Participant physical attendance is instantly verified." }
          ].map((step, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl font-black text-white/10 mb-4">{step.num}</span>
              <h4 className="font-bold tracking-widest text-sm mb-3 uppercase">{step.title}</h4>
              <p className="text-white/90 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 05 — PLATFORM ROLES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="05 — Platform Roles" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-12">
          {[
            { title: "STUDENT", features: ["Discover events", "Register", "Join teams", "Manage tickets", "Track transactions"] },
            { title: "COORDINATOR", features: ["Create events", "Manage registrations", "View participants", "Scan QR tickets", "Manage events"] },
            { title: "ADMIN", features: ["Manage platform", "Review events", "Manage users", "Monitor registrations", "View analytics"] }
          ].map((role, i) => (
            <div key={i} className={`flex flex-col ${i !== 2 ? 'md:border-r border-white/10 md:pr-12' : 'md:pl-12'}`}>
              <h4 className="font-bold tracking-widest text-sm mb-8 uppercase text-white/80">{role.title}</h4>
              <ul className="space-y-4">
                {role.features.map((feature, j) => (
                  <li key={j} className="text-white/90 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 06 — KEY FEATURES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="06 — Key Features" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="md:col-span-2 bg-white text-slate-900 border border-white/20 p-8 md:p-12 flex flex-col justify-end min-h-[300px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <LayoutDashboard size={32} className="text-[#7A9EBA] mb-auto group-hover:scale-110 origin-left transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">01</span>
            <h4 className="text-2xl font-black">Event Discovery</h4>
          </div>

          <div className="bg-white text-slate-900 border border-white/20 p-8 flex flex-col justify-end min-h-[300px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <CheckSquare size={32} className="text-[#7A9EBA] mb-auto group-hover:scale-110 origin-left transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">02</span>
            <h4 className="text-xl font-black">Registration</h4>
          </div>

          <div className="bg-white text-slate-900 border border-white/20 p-8 flex flex-col justify-end min-h-[250px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <Users size={32} className="text-[#7A9EBA] mb-auto group-hover:scale-110 origin-left transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">03</span>
            <h4 className="text-xl font-black">Team Registration</h4>
          </div>

          <div className="bg-white text-slate-900 border border-white/20 p-8 flex flex-col justify-end min-h-[250px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <Ticket size={32} className="text-[#7A9EBA] mb-auto group-hover:scale-110 origin-left transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">04</span>
            <h4 className="text-xl font-black">Digital Ticketing</h4>
          </div>
          
          <div className="bg-white text-slate-900 border border-white/20 p-8 flex flex-col justify-end min-h-[250px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <CreditCard size={32} className="text-[#7A9EBA] mb-auto group-hover:scale-110 origin-left transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">05</span>
            <h4 className="text-xl font-black">Payment & Auth</h4>
          </div>

          <div className="md:col-span-3 bg-white text-slate-900 border border-white/20 p-8 md:p-12 flex flex-col justify-end min-h-[300px] rounded-3xl shadow-xl group transition-all hover:shadow-2xl hover:-translate-y-1">
            <QrCode size={48} className="text-[#7A9EBA] mb-auto group-hover:scale-110 transition-transform origin-left duration-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 mt-8">06</span>
            <h4 className="text-2xl md:text-3xl font-black mb-2 text-slate-900">QR Attendance Scanning</h4>
            <p className="text-slate-600 max-w-lg text-lg font-medium leading-relaxed">Coordinator-side verification system connecting digital tickets with physical check-ins.</p>
          </div>
        </div>
      </motion.section>



      {/* 08 — TECHNICAL ARCHITECTURE */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="08 — Technical Architecture" />
        
        <div className="py-12 flex flex-col items-center">
          
          <div className="px-6 py-2 border border-white/20 text-xs font-bold tracking-widest text-white/80 uppercase">USER</div>
          
          <div className="h-10 w-px bg-white/20 relative">
            <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="px-8 py-4 border border-white/20 bg-white/[0.02] text-sm font-bold tracking-wider text-white uppercase text-center w-full max-w-xs">
            REACT APPLICATION
          </div>

          <div className="h-10 w-px bg-white/20 relative">
             <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="px-8 py-3 border border-white/20 text-xs font-bold tracking-wider text-white uppercase text-center">
            ROUTING + AUTH
          </div>

          <div className="h-10 w-px bg-white/20 relative">
             <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="w-full max-w-md border border-white/20 bg-white/[0.02] p-8 relative flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-white/80 uppercase mb-6">FIREBASE</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Authentication</div>
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Firestore</div>
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Storage</div>
            </div>
          </div>

          <div className="h-10 w-px bg-white/20 relative">
             <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>
          
          <div className="w-full max-w-md border border-white/20 p-8 relative flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-white/80 uppercase mb-6">SUPPORTING SERVICES</span>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Python API</div>
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Notifications</div>
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Cloudinary</div>
              <div className="border border-white/10 py-3 px-2 text-center text-xs font-semibold text-white/80">Maps</div>
            </div>
          </div>

          <div className="h-10 w-px bg-white/20 relative">
             <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>
          
          <div className="px-6 py-2 border border-white/20 text-xs font-bold tracking-widest text-white/80 uppercase">PWA / SERVICE WORKER</div>

        </div>
      </motion.section>

      {/* 09 — ENGINEERING DETAILS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="09 — Engineering Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Authentication & Authorization", desc: "Firebase auth handling and protected routing logic." },
            { title: "Role-Based Routing", desc: "Conditional navigation states based on student/coordinator privileges." },
            { title: "Firestore Data Management", desc: "Complex document referencing for events, teams, and attendees." },
            { title: "Registration State", desc: "Atomic operations to prevent over-enrollment of seats." },
            { title: "QR Ticketing", desc: "Dynamic QR code generation bound to user identity." },
            { title: "QR Attendance", desc: "Admin scanner parsing ticket payloads to update attendance records." },
            { title: "Payment Transaction States", desc: "Handling asynchronous payment confirmations securely." },
            { title: "Notifications", desc: "Service worker background pushes for event updates." },
            { title: "PWA & Service Worker", desc: "Offline caching, manifest configuration, and installability." },
            { title: "Responsive UI", desc: "Fluid layouts gracefully adapting from desktop to mobile." }
          ].map((item, i) => (
            <div key={i} className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-sm font-bold text-[#7A9EBA] mb-4">{(i+1).toString().padStart(2, '0')}</span>
              <h4 className="font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* TECHNOLOGY STACK */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="Technology Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          {[
            { category: "FRONTEND", items: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS"] },
            { category: "BACKEND / CLOUD", items: ["Firebase Authentication", "Firestore", "Storage"] },
            { category: "SUPPORTING", items: ["Python", "Cloudinary", "Leaflet"] },
            { category: "PWA", items: ["Service Worker", "Web Manifest"] }
          ].map((stack, i) => (
            <div key={i}>
              <h5 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">{stack.category}</h5>
              <div className="flex flex-col gap-3">
                {stack.items.map((tech, j) => (
                  <span key={j} className="text-sm font-medium border border-white/10 px-4 py-2 w-max text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 10 — CHALLENGES & LEARNINGS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="10 — Challenges & Learnings" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { challenge: "Multiple user roles", learning: "Designing separate workflows and access rules for students, coordinators and administrators." },
            { challenge: "Registration state", learning: "Managing event availability, enrollment and ticket states across multiple user interactions." },
            { challenge: "QR attendance", learning: "Connecting digital registration with physical event entry." },
            { challenge: "PWA", learning: "Designing an installable responsive web experience." }
          ].map((item, i) => (
            <div key={i} className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
              <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-2">CHALLENGE</h5>
              <h4 className="text-xl font-black mb-6">{item.challenge}</h4>
              <h5 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">LEARNING</h5>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.learning}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 11 — FINAL OUTCOME */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-32 md:mb-48 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          From event discovery<br/>to verified attendance.
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-16 leading-relaxed">
          SeatSync connects the major stages of a campus event experience into one system for students, coordinators and administrators.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a href="https://simats-seat-sync.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            Visit SeatSync <ExternalLink size={16} />
          </a>
          <a href="https://github.com/dharanigovardhan2008/SimatsSeatSync" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            View Source <Code2 size={16} />
          </a>
        </div>
      </motion.section>
      
    </div>
  );
}
