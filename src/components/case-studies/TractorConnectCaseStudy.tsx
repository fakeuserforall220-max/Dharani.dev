import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowDown, Tractor, Users, UserSquare2, Wrench, Wallet, Map, ChevronRight, Smartphone, Share2, Layers, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import DepthText from '../ui/DepthText';
import tractorLogo from '../../../Projects/tractorconnect.png';

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
  <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase mb-6 md:mb-10 border-b border-white/10 pb-4">
    {text}
  </h4>
);

export default function TractorConnectCaseStudy() {
  return (
    <div className="font-urbanist text-white max-w-7xl mx-auto selection:bg-white/20">
      
      {/* 01 — INTRODUCTION / HERO */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src={tractorLogo} alt="TractorConnect Logo" className="w-16 h-16 object-cover rounded-xl filter drop-shadow-md border border-white/20" />
            <p className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              Project / 04
            </p>
          </motion.div>
          
          <div className="mb-6 h-20 md:h-28 flex items-center w-full relative z-10 pointer-events-auto">
            <DepthText
              text="TractorConnect"
              layers={6}
              depth={0.7}
              faceColor="#ffffff"
              depthColor="#ffffff"
              tilt={0}
              pointerTracking={false}
            />
          </div>
          
          <motion.h3 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight max-w-2xl"
          >
            Smart farm operations,<br/>organized into one system.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-12"
          >
            Digitizing the operational side of farm management—from tractors and drivers to services, maintenance, fields, and finances.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://tractor-connect.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all text-sm tracking-wider uppercase">
              <ExternalLink size={16} /> View Live Project
            </a>
            <a href="https://github.com/dharanigovardhan2008/TractorConnect" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase">
              <Code2 size={16} /> View Source
            </a>
          </motion.div>

          {/* PROJECT METADATA */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mt-16"
          >
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Category</p>
              <p className="font-semibold text-white text-sm">Farm Management System</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Platform</p>
              <p className="font-semibold text-white text-sm">Web + Android (PWA)</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Frontend</p>
              <p className="font-semibold text-white text-sm">Next.js · React · TS</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Backend</p>
              <p className="font-semibold text-white text-sm">Firebase · Firestore</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 01 — CONTEXT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel text="01 — Context" />
            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              From machine management to money movement.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg text-white/90 leading-relaxed">
              TractorConnect brings operational records into one unified system instead of treating tractors, drivers, customers, field activity, services, maintenance, and finances as disconnected paper trails or isolated spreadsheets.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 02 — THE PROBLEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="02 — The Problem" />
        
        <div className="max-w-4xl mb-16">
          <h3 className="text-3xl md:text-4xl font-black leading-tight text-white/50 mb-2">OPERATIONS ARE CONNECTED.</h3>
          <h3 className="text-3xl md:text-5xl font-black leading-tight">THE DATA ISN'T.</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-50">
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Tractor</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Driver</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Customer</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Service</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Payment</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Maintenance</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Expenditure</div>
           <div className="border border-white/20 p-4 text-center text-xs font-bold tracking-widest uppercase">Field</div>
        </div>
        
        <p className="text-lg text-white/80 max-w-3xl">
          Farm operations suffer from extreme fragmentation. Tracking which driver operated which tractor for a specific customer, what the fuel expenditure was for that job, and whether the customer actually paid the balance, is nearly impossible without a relational system.
        </p>
      </motion.section>

      {/* 03 — THE SOLUTION (SYSTEM) */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="03 — The Solution" />
        
        <div className="py-12 flex flex-col items-center">
          <div className="px-8 py-3 border border-white/20 bg-white/[0.02] text-sm font-bold tracking-wider text-white uppercase text-center w-full max-w-md">
            OPERATIONAL DASHBOARD
          </div>
          
          <div className="h-10 w-px bg-white/20 relative">
            <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="flex flex-col md:flex-row gap-4 w-full justify-center max-w-4xl">
             <div className="flex-1 border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-[#7A9EBA] uppercase bg-[#7A9EBA]/10">Tractors</div>
             <div className="flex-1 border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-[#7A9EBA] uppercase bg-[#7A9EBA]/10">Drivers</div>
             <div className="flex-1 border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-[#7A9EBA] uppercase bg-[#7A9EBA]/10">Customers</div>
          </div>
          
          <div className="h-10 w-px bg-white/20 relative">
            <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="w-full max-w-sm border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-white uppercase bg-white/5">
            SERVICES
          </div>

          <div className="h-10 w-px bg-white/20 relative">
            <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>

          <div className="flex flex-col md:flex-row gap-4 w-full justify-center max-w-xl">
             <div className="flex-1 border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10">Finance / Payments</div>
             <div className="flex-1 border border-white/20 py-4 text-center text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10">Maintenance / Fields</div>
          </div>
        </div>
      </motion.section>

      {/* 04 — CORE WORKFLOW */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="04 — Core Workflow" />
        
        <div className="flex flex-wrap gap-4 items-center justify-center mt-12">
          {[
            "Register Tractor",
            "Assign Driver",
            "Link Customer",
            "Manage Service",
            "Track Expenditure",
            "Record Payment",
            "Maintain Tractor",
            "Farm Performance"
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className="px-6 py-4 border border-white/20 bg-white text-slate-900 rounded-full font-bold text-sm tracking-wide shadow-lg">
                {step}
              </div>
              {i < arr.length - 1 && (
                <ChevronRight size={20} className="text-white/40 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* 05 — PLATFORM MODULES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="05 — Platform Modules" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          <div className="md:col-span-12 bg-white text-slate-900 p-8 md:p-12 border border-white/20 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <BarChart3 size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Dashboard</h4>
            <p className="text-slate-600 font-medium max-w-3xl leading-relaxed">
              Provides live statistics aggregated from Firestore subscriptions. Tracks total revenue, pending amounts, monthly cash flow, recent operational activity, customer insights, driver payments, and active tractor counts in real-time.
            </p>
          </div>

          <div className="md:col-span-8 bg-white text-slate-900 p-8 md:p-10 border border-white/20 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <Tractor size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Tractors & Drivers</h4>
            <p className="text-slate-600 font-medium leading-relaxed">
              Maintains distinct profiles. Tractors store purchase information and operational details. Drivers possess contact data, salary information, and payment histories. Drivers are explicitly assigned to specific tractors to track accountability.
            </p>
          </div>

          <div className="md:col-span-4 bg-white text-slate-900 p-8 md:p-10 border border-white/20 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <UserSquare2 size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Customers</h4>
            <p className="text-slate-600 font-medium leading-relaxed">
              Maintains customer records, loyalty metrics, contact information, and entire historic service relationships.
            </p>
          </div>

          <div className="md:col-span-4 bg-white text-slate-900 p-8 md:p-10 border border-white/20 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <Wrench size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Maintenance</h4>
            <p className="text-slate-600 font-medium leading-relaxed">
              Logs ongoing tractor maintenance records, capturing descriptions, dates, and associated costs.
            </p>
          </div>

          <div className="md:col-span-8 bg-white text-slate-900 p-8 md:p-10 border border-white/20 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <Layers size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Services</h4>
            <p className="text-slate-600 font-medium leading-relaxed">
              The operational nexus. A service record explicitly links a Tractor, a Driver, and a Customer. It captures area covered, time spent, specific pricing, and the current payment state (Pending, Partial, or Completed).
            </p>
          </div>

        </div>
      </motion.section>

      {/* 06 — DATA RELATIONSHIPS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="06 — Data Architecture" />
        
        <div className="bg-white/5 border border-white/20 p-8 md:p-12 rounded-3xl overflow-x-auto">
           <pre className="text-sm font-mono text-white/80 leading-loose">
{`USER (Authenticated)
 ├── TRACTORS
 │      └── ASSIGNED DRIVER
 │
 ├── DRIVERS
 │      └── DRIVER PAYMENTS
 │
 ├── CUSTOMERS
 │      └── SERVICE RECORDS (History)
 │
 ├── SERVICES
 │      ├── TRACTOR REF
 │      ├── DRIVER REF
 │      └── CUSTOMER REF
 │
 ├── MAINTENANCE
 │      └── TRACTOR REF
 │
 ├── EXPENDITURES
 │
 └── FIELDS
        └── FIELD TRANSACTIONS`}
           </pre>
        </div>
      </motion.section>

      {/* 07 — REAL-TIME DASHBOARD */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel text="07 — Real-Time Data" />
            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              The dashboard isn't a static report.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              TractorConnect uses active Firestore listeners (`onSnapshot`) to keep application data perfectly synchronized. Values like revenue, pending amounts, and active tractor counts are derived dynamically from live records.
            </p>
            <div className="flex flex-col gap-3 text-xs font-bold tracking-widest text-white/60 uppercase">
              <span>Firestore Collection</span>
              <ArrowDown size={14} className="text-[#7A9EBA]" />
              <span>onSnapshot Subscription</span>
              <ArrowDown size={14} className="text-[#7A9EBA]" />
              <span>Computed Metrics (React State)</span>
              <ArrowDown size={14} className="text-[#7A9EBA]" />
              <span className="text-white">Dashboard UI Rendering</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 08 — FINANCIAL SYSTEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="08 — Financial System" />
        
        <div className="bg-white text-slate-900 border border-white/20 p-8 md:p-12 rounded-3xl shadow-xl">
          <Wallet size={40} className="text-[#7A9EBA] mb-8" />
          <h4 className="text-2xl font-black mb-8">Operational Financial View</h4>
          
          <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-start md:items-center">
            
            <div className="flex-1 border border-slate-200 p-6 rounded-xl bg-slate-50 w-full text-center">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-2">Service Logic</span>
              <p className="font-black text-lg">TOTAL AMOUNT<br/><span className="text-slate-400 text-sm font-medium">— PAID AMOUNT</span><br/>= PENDING PAYMENT</p>
            </div>

            <div className="flex-1 border border-slate-200 p-6 rounded-xl bg-emerald-50 w-full text-center">
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-2">Macro Logic</span>
              <p className="font-black text-lg text-emerald-900">REVENUE<br/><span className="text-emerald-700/60 text-sm font-medium">— (EXPENDITURE + DRIVER PAYMENTS)</span><br/>= PROFIT MARGIN</p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 09 — FIELD MANAGEMENT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel text="09 — Field Management" />
            <h3 className="text-2xl md:text-4xl font-black leading-tight mb-6">
              Tracking the land itself.
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Beyond machine management, the Fields module introduces land plot geometry metaphors. It tracks specific crop cycles, total area, land ownership, dedicated yield tracking, and isolated transaction histories (income vs expense) for specific plots.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/70 uppercase">
              <Map size={16} className="text-[#7A9EBA]"/> Field Geometry
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/70 uppercase pl-4">
              <span className="text-white/30">↓</span> Crop Selection
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/70 uppercase pl-4">
              <span className="text-white/30">↓</span> Area Assessment
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-emerald-400 uppercase pl-4">
              <span className="text-white/30">↓</span> Income / Expense Tracking
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white uppercase pl-4">
              <span className="text-white/30">↓</span> Yield Calculation
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10 — AUTH & ACCESS CONTROL */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="10 — Access Control" />
        
        <div className="max-w-4xl mb-12">
          <h3 className="text-3xl font-black leading-tight mb-4">
            User-Scoped Data Architecture
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            The repository implements authenticated user isolation via Firebase Authentication and Firestore rules. Every document query passes a <code className="text-sm bg-white/10 px-2 py-1 rounded">where("userId", "==", user.uid)</code> constraint, ensuring users only access their own farm's operational data.
          </p>
        </div>
      </motion.section>

      {/* 11 — MOBILE & PWA */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="11 — Mobile Experience" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <Smartphone size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Built to leave the browser.</h4>
             <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                TractorConnect features a mobile-first responsive navigation interface, adapting complex data grids into vertical cards on smaller screens. It's configured as an installable Progressive Web App (PWA).
             </p>
             <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mt-auto">
               WEB <ChevronRight size={12}/> INSTALL <ChevronRight size={12}/> APP-LIKE EXPERIENCE
             </div>
          </div>
          
          <div className="bg-[#7A9EBA] text-white border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <Share2 size={32} className="text-white mb-6" />
             <h4 className="text-xl font-black mb-4">Android & Capacitor</h4>
             <p className="text-white/90 text-sm leading-relaxed font-medium mb-6">
                The repository wraps the Next.js web application utilizing Capacitor for Android deployment.
             </p>
             <div className="mt-auto bg-white/10 p-4 rounded-xl border border-white/20">
               <p className="text-[10px] font-mono font-bold tracking-widest text-white/80 mb-1">appId: com.tractorconnect.app</p>
               <p className="text-[10px] font-mono font-bold tracking-widest text-white/80">appName: Tractor Connect</p>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 12 — TECHNOLOGY STACK */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="12 — Technology Stack" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 mt-12 border-t border-white/10 pt-12">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">FRAMEWORK</p>
            <p className="font-bold text-lg text-white">Next.js</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">UI</p>
            <p className="font-bold text-lg text-white">React, Tailwind CSS</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">LANGUAGE</p>
            <p className="font-bold text-lg text-white">TypeScript</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">DATA & AUTH</p>
            <p className="font-bold text-lg text-white">Firebase</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">VISUALIZATION</p>
            <p className="font-bold text-lg text-white">Chart.js</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">ANIMATION</p>
            <p className="font-bold text-lg text-white">Framer Motion</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">MOBILE</p>
            <p className="font-bold text-lg text-white">Capacitor (Android)</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">PLATFORM</p>
            <p className="font-bold text-lg text-white">Progressive Web App</p>
          </div>
        </div>
      </motion.section>

      {/* 13 — ENGINEERING & CHALLENGES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="13 — Engineering & Challenges" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <Code2 size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Engineering Highlights</h4>
             <ul className="space-y-2 text-sm text-slate-600 font-medium list-disc list-inside">
                <li>Real-time Firestore subscriptions</li>
                <li>User-scoped data architecture</li>
                <li>Modal-driven CRUD workflows</li>
                <li>Computed macro financial metrics</li>
                <li>Hydration & CSR considerations</li>
             </ul>
          </div>
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <Cloud size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">What Was Difficult</h4>
             <ul className="space-y-2 text-sm text-slate-600 font-medium list-disc list-inside">
                <li>Aggregating financial values precisely across partial payments.</li>
                <li>Relating deep records across Tractors, Drivers, Customers, and Services.</li>
                <li>Handling state management elegantly across rapid modal-driven workflows.</li>
             </ul>
          </div>
        </div>
      </motion.section>

      {/* FINAL OUTCOME */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-32 md:mb-48 text-center max-w-4xl mx-auto flex flex-col items-center pt-16 border-t border-white/10"
      >
        <SectionLabel text="TractorConnect" />
        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Smart operations.<br/>Connected records.<br/>One farm system.
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-16 leading-relaxed">
          TractorConnect turns scattered operational records into one connected view of the farm.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://tractor-connect.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            Live Project
          </a>
          <a href="https://github.com/dharanigovardhan2008/TractorConnect" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            GitHub
          </a>
        </div>
      </motion.section>

    </div>
  );
}
