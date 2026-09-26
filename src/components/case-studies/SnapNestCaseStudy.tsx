import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowDown, Image as ImageIcon, Box, CreditCard, ShoppingBag, Truck, Camera, CheckSquare, Layers, MapPin, Search, Star, Heart, Repeat, Package, ShieldCheck, Printer, Users } from 'lucide-react';
import snapnestLogo from '../../../Projects/snapnest.png';
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
  <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase mb-6 md:mb-10 border-b border-white/10 pb-4">
    {text}
  </h4>
);

export default function SnapNestCaseStudy() {
  return (
    <div className="font-urbanist text-white max-w-7xl mx-auto selection:bg-white/20">
      
      {/* 01 — INTRODUCTION / HERO */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src={snapnestLogo} alt="SnapNest Logo" className="w-16 h-16 object-cover rounded-xl filter drop-shadow-md border border-white/20" />
            <p className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              Project / 03
            </p>
          </motion.div>
          
          <div className="mb-6 h-20 md:h-28 flex items-center w-full relative z-10 pointer-events-auto">
            <DepthText
              text="SnapNest"
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
            Custom Photo Printing,<br/>Reimagined.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-12"
          >
            An e-commerce experience built around personalized photo products, live 3D previews, flexible ordering, and end-to-end fulfillment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://snapnest-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all text-sm tracking-wider uppercase">
              <ExternalLink size={16} /> View Live Project
            </a>
            <a href="https://github.com/dharanigovardhan2008/Snapnest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase">
              <Code2 size={16} /> View Source
            </a>
          </motion.div>

          {/* PROJECT METADATA */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y border-white/10 mt-16"
          >
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Role</p>
              <p className="font-semibold text-white text-sm">Full-Stack Developer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Type</p>
              <p className="font-semibold text-white text-sm">E-Commerce / Printing</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Platform</p>
              <p className="font-semibold text-white text-sm">Web + PWA</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">Stack</p>
              <p className="font-semibold text-white text-sm">Next.js · React · Firebase</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-2">3D / Hosting</p>
              <p className="font-semibold text-white text-sm">Three.js · Vercel</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 01 — THE IDEA */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel text="01 — The Idea" />
            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Turn a photo into something you can actually hold.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              SnapNest is built around personalized physical products rather than standard online shopping. The customer experience centers on a linear, confidence-building journey: Choose, Customize, Preview, Order, Verify, Print, Ship, Receive.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest text-white/60 uppercase">
              <span>Choose</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Customize</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Preview</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Order</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Verify</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Print</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Ship</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Receive</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 02 — THE PROBLEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="02 — The Problem" />
        
        <div className="max-w-4xl mb-12">
          <h3 className="text-3xl md:text-5xl font-black leading-tight">
            Buying a personalized print online should not feel like uploading a file and hoping for the best.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-bold text-xl mb-3 text-white">Customization Uncertainty</h4>
            <p className="text-white/90 leading-relaxed text-lg">Customers need absolute confidence that their personal image will look exactly right on the final physical product before committing to a purchase.</p>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-bold text-xl mb-3 text-white">Print Quality Restrictions</h4>
            <p className="text-white/90 leading-relaxed text-lg">A beautiful digital design can result in a blurry physical poster. Low-resolution images are the primary cause of poor physical output.</p>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-bold text-xl mb-3 text-white">Product Visualization</h4>
            <p className="text-white/90 leading-relaxed text-lg">Flat 2D previews lack scale and context. Customers benefit significantly from seeing their design mapped onto an actual 3D product.</p>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-bold text-xl mb-3 text-white">Order Visibility & Payment</h4>
            <p className="text-white/90 leading-relaxed text-lg">The platform utilizes transaction-ID-based manual verification, which requires a transparent tracking system so customers know exactly where their order is.</p>
          </div>
        </div>
      </motion.section>

      {/* 03 — THE SOLUTION / JOURNEY */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="03 — The Solution" />
        
        <div className="flex flex-col md:flex-row justify-between w-full mt-12 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          {[
            { num: "01", title: "BROWSE", desc: "Customers explore the catalog without needing an account." },
            { num: "02", title: "CUSTOMIZE", desc: "Upload an image and personalize the selected print." },
            { num: "03", title: "PREVIEW", desc: "See the design rendered onto the 3D product model." },
            { num: "04", title: "QUALITY CHECK", desc: "System warns when uploaded images are too low-resolution." },
            { num: "05", title: "ORDER", desc: "Choose delivery or pickup, and review the final order." },
            { num: "06", title: "PAY", desc: "Submit transaction information for manual verification." },
            { num: "07", title: "TRACK", desc: "Follow the order through its fulfillment stages." },
            { num: "08", title: "DELIVER", desc: "Access the completed order, receipt, proof-of-print, and reorder options." }
          ].map((step, i) => (
            <div key={i} className="flex-1 p-6 md:p-4 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group">
              <span className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-2 block">{step.num} / {step.title}</span>
              <p className="text-white/70 text-sm leading-snug hidden md:block opacity-0 group-hover:opacity-100 transition-opacity absolute mt-4 max-w-[120px]">{step.desc}</p>
              <p className="text-white/70 text-sm leading-snug md:hidden mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 04 — 3D PRODUCT CUSTOMIZATION */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="04 — 3D Product Customization" />
        
        <div className="max-w-4xl mb-12">
          <h3 className="text-3xl md:text-5xl font-black leading-tight">
            Preview the product before you order it.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Using Three.js and React Three Fiber, SnapNest provides client-side 3D rendering. When a customer uploads their design, it is immediately mapped onto the selected product model as a live texture, allowing them to examine the physical scale and layout of their personalization.
            </p>
            <div className="flex flex-col gap-4 text-xs font-bold tracking-widest text-white/60 uppercase">
              <div className="flex items-center gap-4"><Camera size={16} className="text-[#7A9EBA]"/> Upload Image</div>
              <div className="h-4 w-px bg-white/20 ml-2"></div>
              <div className="flex items-center gap-4"><Box size={16} className="text-[#7A9EBA]"/> 3D Product Model</div>
              <div className="h-4 w-px bg-white/20 ml-2"></div>
              <div className="flex items-center gap-4"><ImageIcon size={16} className="text-[#7A9EBA]"/> Live Texture Mapping</div>
              <div className="h-4 w-px bg-white/20 ml-2"></div>
              <div className="flex items-center gap-4"><CheckSquare size={16} className="text-white"/> Customized Preview</div>
            </div>
          </div>
          
          <div className="aspect-square bg-white/[0.02] border border-white/10 p-4 flex flex-col group hover:bg-white/[0.04] transition-colors rounded-xl">
            <div className="flex-1 w-full h-full relative overflow-hidden bg-gradient-to-br from-[#7A9EBA]/20 to-transparent flex flex-col items-center justify-center rounded-lg border border-white/5">
               <Box size={80} className="text-[#7A9EBA]/40 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
               <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Live 3D Renderer</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 05 — PRINT QUALITY */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="05 — Print Quality" />
        
        <div className="max-w-4xl mb-12">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            Before a digital design becomes a physical product, the input image matters.
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/60 uppercase flex-wrap">
          <span className="px-4 py-2 border border-white/20 rounded-md">Image Upload</span> <ArrowDown size={14} className="-rotate-90 md:rotate-0 inline-block md:hidden" /><span className="hidden md:inline-block">→</span>
          <span className="px-4 py-2 border border-white/20 rounded-md">Resolution Check</span> <ArrowDown size={14} className="-rotate-90 md:rotate-0 inline-block md:hidden" /><span className="hidden md:inline-block">→</span>
          <span className="px-4 py-2 border border-amber-500/50 text-amber-400 bg-amber-500/10 rounded-md">Quality Warning</span> <ArrowDown size={14} className="-rotate-90 md:rotate-0 inline-block md:hidden" /><span className="hidden md:inline-block">→</span>
          <span className="px-4 py-2 border border-white/20 rounded-md text-white">Customer Decision</span>
        </div>
      </motion.section>

      {/* 06 — ORDER EXPERIENCE & PAYMENT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel text="06 — Order Experience" />
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Customers configure their order through a seamless flow summarizing the product, custom design, and chosen fulfillment method (saved custom addresses, default campus delivery, or self-pickup). 
            </p>
          </div>
          <div>
            <SectionLabel text="07 — Payment Verification" />
            <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
              SnapNest uses a manual payment verification workflow rather than an integrated payment gateway.
            </p>
            <p className="text-white/70 text-sm mb-6">Designed around UPI/cash + transaction ID verification.</p>
            <div className="flex flex-col gap-2 text-xs font-bold tracking-widest text-[#7A9EBA] uppercase border-l-2 border-[#7A9EBA]/30 pl-4">
              <span>Order Placed</span>
              <span className="text-white/40 text-[10px]">↓</span>
              <span>Manual Payment (UPI/Cash)</span>
              <span className="text-white/40 text-[10px]">↓</span>
              <span>Submit Transaction ID</span>
              <span className="text-white/40 text-[10px]">↓</span>
              <span>Admin Verification</span>
              <span className="text-white/40 text-[10px]">↓</span>
              <span className="text-white">Order Verified</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 08 — ORDER TRACKING & PROOF OF PRINT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="08 — Fulfillment & Tracking" />
        
        <div className="bg-white text-slate-900 border border-white/20 p-8 md:p-12 rounded-3xl shadow-xl">
          <h4 className="text-2xl font-black mb-8">Order Lifecycle & Proof-of-Print</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { status: "Placed", icon: ShoppingBag },
              { status: "Verified", icon: ShieldCheck },
              { status: "Printing", icon: Printer },
              { status: "Shipped", icon: Package },
              { status: "Out for Delivery", icon: Truck },
              { status: "Delivered", icon: CheckSquare }
            ].map((stage, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-[#7A9EBA] group-hover:text-white transition-colors duration-300">
                  <stage.icon size={20} className="text-slate-400 group-hover:text-white" />
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stage.status}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-4">09 — Proof of Print</h5>
            <p className="text-slate-600 leading-relaxed font-medium">Before shipping, the platform supports attaching a proof-of-print photo to the order record. This allows customers to see the actual physical manifestation of their design before it even arrives.</p>
          </div>
        </div>
      </motion.section>

      {/* 10 — CUSTOMER FEATURES */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="10 — Customer Features" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <Search size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Discover & Customize</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>Browse without account</li>
              <li>Live 3D Preview</li>
              <li>Image Quality Warnings</li>
            </ul>
          </div>

          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <ShoppingBag size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Order & Track</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>Saved & Campus Addresses</li>
              <li>Self-Pickup / Delivery</li>
              <li>Order Lookup & Tracking</li>
              <li>Download Receipts</li>
            </ul>
          </div>

          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
            <Heart size={32} className="text-[#7A9EBA] mb-6" />
            <h4 className="text-xl font-black mb-4">Retention (11 & 12)</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>Loyalty Points (Discounts)</li>
              <li>Referral Links & Codes</li>
              <li>Wishlists & Reviews</li>
              <li>One-Tap Reorder</li>
            </ul>
          </div>

        </div>
      </motion.section>

      {/* 13 — ADMIN OPERATIONS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="13 — Admin Operations" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
             <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              The business-side control layer.
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Administrators possess an entirely separate workspace to oversee pending verifications, today's orders, and revenue metrics. They manage products, pricing, addresses, homepage reviews, seasonal banners, and handle bulk status updates with CSV exports.
            </p>
          </div>
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-6 text-sm font-bold tracking-widest text-white/80 uppercase">
              <div className="flex items-center gap-4"><Users size={20} className="text-[#7A9EBA]"/> Admin Dashboard</div>
              <div className="grid grid-cols-2 gap-4 pl-9">
                <div className="border border-white/10 py-4 px-4 rounded-lg bg-white/5 text-white">Pending Verifications</div>
                <div className="border border-white/10 py-4 px-4 rounded-lg bg-white/5 text-white">Today's Orders</div>
                <div className="border border-white/10 py-4 px-4 rounded-lg bg-white/5 text-white">Revenue</div>
                <div className="border border-white/10 py-4 px-4 rounded-lg bg-white/5 text-white">Bulk CSV Export</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 14 — TECHNOLOGY & ARCHITECTURE */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="14 — Technology Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 mb-20">
          {[
            { category: "FRONTEND", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
            { category: "3D & ANIMATION", items: ["Three.js", "React Three Fiber", "@react-three/drei", "Framer Motion"] },
            { category: "BACKEND & MEDIA", items: ["Firebase Auth", "Firestore", "Cloudinary"] },
            { category: "INFRA & PWA", items: ["Vercel", "Web App Manifest", "Service Worker"] }
          ].map((stack, i) => (
            <div key={i}>
              <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-6">{stack.category}</h5>
              <div className="flex flex-col gap-3">
                {stack.items.map((item, j) => (
                  <span key={j} className="text-sm font-bold border border-white/10 px-4 py-2 w-max text-white bg-white/5 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <SectionLabel text="15 — System Architecture" />
        <div className="py-12 flex flex-col items-center">
          <div className="px-6 py-2 border border-white/20 text-xs font-bold tracking-widest text-white/80 uppercase">CUSTOMER / ADMIN</div>
          <div className="h-10 w-px bg-white/20 relative">
            <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>
          <div className="px-8 py-4 border border-white/20 bg-white/[0.02] text-sm font-bold tracking-wider text-white uppercase text-center w-full max-w-xs">
            NEXT.JS APPLICATION
          </div>
          <div className="h-10 w-px bg-white/20 relative">
             <ArrowDown size={14} className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white" />
          </div>
          <div className="h-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
             <div className="border border-white/20 bg-white/[0.02] p-6 flex flex-col items-center text-center">
               <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">Auth / DB</span>
               <span className="text-xs font-bold text-white tracking-widest">FIREBASE</span>
             </div>
             <div className="border border-white/20 bg-white/[0.02] p-6 flex flex-col items-center text-center">
               <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">Media</span>
               <span className="text-xs font-bold text-white tracking-widest">CLOUDINARY</span>
             </div>
             <div className="border border-white/20 bg-white/[0.02] p-6 flex flex-col items-center text-center">
               <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-4">Rendering</span>
               <span className="text-xs font-bold text-white tracking-widest">THREE.JS</span>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 16 — ENGINEERING HIGHLIGHTS & ACCESS CONTROL */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="16 & 17 — Engineering & Access Control" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <Layers size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Highlights</h4>
             <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Server/client separation via Next.js</li>
                <li>3D client-side rendering & image quality checks</li>
                <li>Manual payment verification & order state management</li>
                <li>Installable PWA & Responsive UI</li>
             </ul>
          </div>
          <div className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
             <ShieldCheck size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Access & Security</h4>
             <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Customer authentication & persistent sessions</li>
                <li>Customer-owned profile/order access</li>
                <li>Admin role separation & management operations</li>
                <li>Firestore security rules</li>
             </ul>
          </div>
        </div>
      </motion.section>

      {/* 19 — CHALLENGES & LEARNINGS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="19 — Challenges & Learnings" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { challenge: "3D Rendering", learning: "Integrating interactive 3D experiences into a standard e-commerce flow." },
            { challenge: "Image Quality", learning: "Making customers aware of print-quality limitations before ordering." },
            { challenge: "Payment Verification", learning: "Designing transaction verification without an integrated payment gateway." },
            { challenge: "Order Lifecycle", learning: "Representing a physical fulfillment process inside a digital product." },
            { challenge: "Media Handling", learning: "Connecting user uploads with Cloudinary and product customization." },
            { challenge: "Admin Operations", learning: "Building business-side controls for products, payments, orders, and fulfillment." }
          ].map((item, i) => (
            <div key={i} className="bg-white text-slate-900 border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-1 transition-transform">
              <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-2">CHALLENGE: {item.challenge}</h5>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mt-2">{item.learning}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 20 — MY CONTRIBUTION */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="20 — My Contribution" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-3 text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-medium">
            Architected and implemented the entire Full-Stack platform.
          </div>
          <div>
            <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li>Frontend architecture (Next.js)</li>
              <li>Product catalog & Customization</li>
              <li>3D preview (Three.js)</li>
              <li>Authentication (Firebase)</li>
              <li>Firestore data modeling</li>
              <li>Cloudinary uploads</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li>Order system & state management</li>
              <li>Payment verification flow</li>
              <li>Order tracking & Proof-of-print</li>
              <li>Admin dashboard</li>
              <li>Loyalty & Referral systems</li>
            </ul>
          </div>
          <div>
             <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li>Wishlist</li>
              <li>Progressive Web App (PWA)</li>
              <li>Responsive UI (Mobile-first)</li>
              <li>Framer Motion animation system</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FINAL OUTCOME */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-32 md:mb-48 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          From a photo on a phone<br/>to a product at your door.
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-16 leading-relaxed">
          SnapNest connects personalization, visualization, ordering, verification, and fulfillment into one digital experience.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://snapnest-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            Explore SnapNest
          </a>
          <a href="https://github.com/dharanigovardhan2008/Snapnest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-1 transition-all text-sm tracking-wider uppercase">
            View Source
          </a>
        </div>
      </motion.section>

    </div>
  );
}
