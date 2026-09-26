import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowDown, ShoppingBag, Box, Brush, MonitorPlay, ShoppingCart, CreditCard, PackageCheck, Server, Database, Lock, Image as ImageIcon, ChevronRight, Layers, FileCode2, LayoutTemplate } from 'lucide-react';
import DepthText from '../ui/DepthText';
import wolfLogo from '../../../Projects/wolftheory.png';

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

export default function WolfTheoryCaseStudy() {
  return (
    <div className="font-urbanist text-white max-w-7xl mx-auto selection:bg-white/20">
      
      {/* 01 — HERO */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src={wolfLogo} alt="Wolf Theory Logo" className="w-16 h-16 object-cover rounded-xl filter drop-shadow-md border border-white/20" />
            <p className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              Project / 05
            </p>
          </motion.div>
          
          <div className="mb-6 h-20 md:h-28 flex items-center w-full relative z-10 pointer-events-auto">
            <DepthText
              text="WOLF THEORY"
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
            className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight max-w-2xl tracking-wide uppercase"
          >
            A streetwear store that doubles as a customization studio.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-12 font-medium"
          >
            An interactive streetwear commerce platform where products can be explored, customized, previewed in 3D, and ordered through a complete full-stack workflow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://wolfka.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all text-sm tracking-wider uppercase">
              <ExternalLink size={16} /> View Live Store
            </a>
            <a href="https://github.com/dharanigovardhan2008/wolf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase">
              <Code2 size={16} /> View Source
            </a>
          </motion.div>

          {/* PROJECT METADATA */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 py-8 border-y border-white/10 mt-16 text-[10px] font-bold tracking-widest text-white/80 uppercase"
          >
            <span className="px-4 py-2 border border-white/20 rounded-md">Next.js</span>
            <span className="px-4 py-2 border border-white/20 rounded-md">TypeScript</span>
            <span className="px-4 py-2 border border-white/20 rounded-md">PostgreSQL</span>
            <span className="px-4 py-2 border border-white/20 rounded-md">Drizzle</span>
            <span className="px-4 py-2 border border-white/20 rounded-md">Three.js</span>
            <span className="px-4 py-2 border border-white/20 rounded-md">Razorpay</span>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE IDEA */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionLabel text="01 — The Idea" />
            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6 uppercase tracking-tight">
              The product isn't just the t-shirt. The product is the experience of making it.
            </h3>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
              WOLF THEORY moves beyond traditional add-to-cart commerce. It transforms the storefront into a digital studio where customers configure, design, preview, and manage their own pieces in real-time.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest text-white/60 uppercase">
              <span>Browse</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Configure</span> <ArrowDown size={14} className="-rotate-90" />
              <span className="text-white">Design</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Preview</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Cart</span> <ArrowDown size={14} className="-rotate-90" />
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 03 — THE PROBLEM */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="02 — The Problem" />
        
        <div className="max-w-4xl mb-12">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
            Traditional clothing platforms completely separate product discovery from product customization. The customer experience is heavily fragmented between standard shopping carts and clunky third-party print-on-demand iframes. WOLF THEORY unifies these layers into a single, native full-stack application.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 text-center mt-12 bg-white/[0.02] border border-white/10 p-8 rounded-2xl">
           <div className="flex-1 w-full"><ShoppingBag size={24} className="mx-auto mb-4 text-[#7A9EBA]"/> <p className="text-xs font-bold tracking-widest uppercase">Discovery</p></div>
           <ArrowDown size={16} className="-rotate-90 hidden md:block text-white/30" />
           <div className="flex-1 w-full"><LayoutTemplate size={24} className="mx-auto mb-4 text-[#7A9EBA]"/> <p className="text-xs font-bold tracking-widest uppercase">Configuration</p></div>
           <ArrowDown size={16} className="-rotate-90 hidden md:block text-white/30" />
           <div className="flex-1 w-full"><Brush size={24} className="mx-auto mb-4 text-[#7A9EBA]"/> <p className="text-xs font-bold tracking-widest uppercase">Design</p></div>
           <ArrowDown size={16} className="-rotate-90 hidden md:block text-white/30" />
           <div className="flex-1 w-full"><Box size={24} className="mx-auto mb-4 text-[#7A9EBA]"/> <p className="text-xs font-bold tracking-widest uppercase">3D Preview</p></div>
           <ArrowDown size={16} className="-rotate-90 hidden md:block text-white/30" />
           <div className="flex-1 w-full"><CreditCard size={24} className="mx-auto mb-4 text-[#7A9EBA]"/> <p className="text-xs font-bold tracking-widest uppercase">Purchase</p></div>
        </div>
      </motion.section>

      {/* 04 — THE SYSTEM MAP */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="03 — The System" />
        
        <div className="py-12 flex flex-col items-center">
          <div className="px-8 py-4 border border-white/20 bg-white font-black tracking-widest text-black text-xl uppercase text-center w-full max-w-sm mb-8">
            WOLF THEORY
          </div>
          
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 p-8 flex flex-col gap-6 relative">
               <h5 className="text-sm font-bold tracking-widest uppercase text-white/50 border-b border-white/10 pb-4">Catalog</h5>
               <div className="bg-white/5 border border-white/10 p-3 text-center text-xs font-bold tracking-widest uppercase">Products</div>
               <div className="bg-white/5 border border-white/10 p-3 text-center text-xs font-bold tracking-widest uppercase">Cart</div>
            </div>
            
            <div className="border border-white/20 p-8 flex flex-col gap-6 relative">
               <h5 className="text-sm font-bold tracking-widest uppercase text-white border-b border-white/30 pb-4">Customizer Studio</h5>
               <div className="bg-[#7A9EBA]/20 border border-[#7A9EBA]/50 text-[#7A9EBA] p-3 text-center text-xs font-bold tracking-widest uppercase">Design Data</div>
               <div className="bg-[#7A9EBA]/20 border border-[#7A9EBA]/50 text-[#7A9EBA] p-3 text-center text-xs font-bold tracking-widest uppercase">3D View</div>
            </div>

            <div className="border border-white/20 p-8 flex flex-col gap-6 relative">
               <h5 className="text-sm font-bold tracking-widest uppercase text-white/50 border-b border-white/10 pb-4">Account / Admin</h5>
               <div className="bg-white/5 border border-white/10 p-3 text-center text-xs font-bold tracking-widest uppercase">Orders</div>
               <div className="bg-white/5 border border-white/10 p-3 text-center text-xs font-bold tracking-widest uppercase">Settings</div>
            </div>
          </div>
          
          <div className="h-8 w-px bg-white/20 mt-8"></div>
          <div className="w-full max-w-md bg-white/10 border border-white/20 p-4 text-center text-sm font-bold tracking-widest uppercase mt-0">
            CHECKOUT & ORDER PIPELINE
          </div>
        </div>
      </motion.section>

      {/* 06 — THE CUSTOMIZATION STUDIO */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="04 — The Customization Studio" />
        
        <div className="bg-white text-slate-900 border border-white/20 p-8 md:p-16 rounded-3xl shadow-xl">
          <h3 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
            The store becomes a studio.
          </h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
            The customizer is the hero feature of the platform. Backed by a structured Zustand store, it maintains a complex design state including color selection, size, active front/back views, and an array of text and image elements. Users can transform (position, scale, rotate, opacity), reorder, duplicate, and delete layers with full undo/redo history support.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
               <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-6">Zustand State Architecture</h5>
               <ul className="space-y-4 font-mono text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Product Selection</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Color & Size Maps</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Front / Back Canvas Switch</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7A9EBA]"></span> Text Elements Node Array</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7A9EBA]"></span> Image Elements Node Array</li>
                  <li className="flex items-center gap-3 ml-6 text-slate-500">↳ Transform (Pos, Size, Rot)</li>
                  <li className="flex items-center gap-3 ml-6 text-slate-500">↳ Layer Z-Index Ordering</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Undo / Redo History Stack</li>
               </ul>
             </div>
             
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-white flex flex-col justify-center">
               <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-6 border-b border-white/10 pb-4">Live 3D Texture Update</h5>
               <div className="flex flex-col gap-4 text-xs font-bold tracking-widest text-white/60 uppercase">
                  <span>2D Canvas Data</span>
                  <ArrowDown size={14} className="text-[#7A9EBA]" />
                  <span>Texture Rasterization</span>
                  <ArrowDown size={14} className="text-[#7A9EBA]" />
                  <span className="text-white">Three.js Mesh Material</span>
               </div>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 08 — CART + CHECKOUT */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="05 — Cart & Commerce Pipeline" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h4 className="text-2xl font-black mb-6">Cart Complexity</h4>
            <p className="text-lg text-white/90 leading-relaxed font-medium mb-8">
              The cart implementation handles a unique challenge: customized products cannot be merged like standard items. While standard variants collapse into a single item with a <code className="bg-white/10 px-2 py-0.5 rounded text-sm">quantity++</code>, customized items remain mathematically unique, storing distinct customization references and preview URLs.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-black mb-6">Pricing Engine</h4>
            <p className="text-lg text-white/90 leading-relaxed font-medium mb-6">
              Pricing is centralized in a dedicated utility rather than scattered UI arithmetic. The final item cost computes:
            </p>
            <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl text-sm font-mono text-white/70">
              <span className="text-white font-bold">BASE_PRICE</span><br/>
              + VARIANT_ADJUSTMENT<br/>
              + FRONT_PRINT_FEE (if active)<br/>
              + BACK_PRINT_FEE (if active)<br/>
              + CUSTOMIZATION_FEE<br/>
              <span className="text-[#7A9EBA] border-t border-white/20 pt-2 mt-2 block">= FINAL_ITEM_PRICE</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 09 — ORDER LIFECYCLE & 10 — ADMIN */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
             <SectionLabel text="06 — Admin Operations" />
             <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6 uppercase tracking-tight">
              The storefront is only half the product.
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              WOLF THEORY possesses a dedicated operational backend. Authorized admins manage products, variants, styles, inventory, user accounts, and move orders through their lifecycle (Processing → Fulfillment → Delivery → Completed).
            </p>
          </div>
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
             <h5 className="text-[10px] font-bold tracking-widest text-[#7A9EBA] uppercase mb-6">Admin Routing Architecture</h5>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {["Products", "Inventory", "Orders", "Customers", "Bulk Orders", "Styles", "Settings"].map(route => (
                 <div key={route} className="border border-white/20 py-4 px-4 rounded-xl bg-white/5 text-white text-xs font-bold tracking-widest uppercase text-center flex items-center justify-center">
                   {route}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </motion.section>

      {/* 11 — DATA ARCHITECTURE */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="07 — Data Architecture" />
        
        <div className="bg-white text-slate-900 border border-white/20 p-8 md:p-12 rounded-3xl overflow-x-auto shadow-xl">
           <div className="flex items-center gap-4 mb-8">
              <Database size={24} className="text-[#7A9EBA]"/>
              <span className="font-bold tracking-widest uppercase text-sm">PostgreSQL + Drizzle ORM Schema</span>
           </div>
           <pre className="text-sm font-mono text-slate-600 leading-loose">
{`USERS (Credentials/Roles)
 ├── ORDERS
 │    └── ORDER_ITEMS
 │         ├── PRODUCT_VARIANT_REF
 │         └── CUSTOMIZATION_REF (JSONB State)
 │
 ├── WISHLISTS
 │
PRODUCTS
 ├── PRODUCT_IMAGES
 └── PRODUCT_VARIANTS
      ├── COLORS
      └── SIZES
 
STORE_SETTINGS & AUDIT_LOGS`}
           </pre>
        </div>
      </motion.section>

      {/* 16 — ENGINEERING HIGHLIGHTS */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-24 md:mb-40"
      >
        <SectionLabel text="08 — Technical Highlights" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/5 border border-white/20 p-8 rounded-3xl hover:-translate-y-1 transition-transform">
             <Lock size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Auth & Security</h4>
             <p className="text-white/70 text-sm leading-relaxed font-medium">
                Implements NextAuth with credentials authentication, robust bcrypt password verification, Zod schema validation, and secure JWT session management defining active user roles.
             </p>
          </div>
          <div className="bg-white/5 border border-white/20 p-8 rounded-3xl hover:-translate-y-1 transition-transform">
             <ImageIcon size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Media Pipeline</h4>
             <p className="text-white/70 text-sm leading-relaxed font-medium">
                Integrated Cloudinary uploading API routes handling product photography and dynamic user customization media storage directly from the Next.js server.
             </p>
          </div>
          <div className="bg-white/5 border border-white/20 p-8 rounded-3xl hover:-translate-y-1 transition-transform">
             <Database size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">PostgreSQL & Drizzle</h4>
             <p className="text-white/70 text-sm leading-relaxed font-medium">
                Strongly typed relational database architecture mapping Products, Variants, Colors, Orders, and JSONB Customization states using Drizzle ORM.
             </p>
          </div>
          <div className="bg-white/5 border border-white/20 p-8 rounded-3xl hover:-translate-y-1 transition-transform">
             <CreditCard size={32} className="text-[#7A9EBA] mb-6" />
             <h4 className="text-xl font-black mb-4">Commerce Engine</h4>
             <p className="text-white/70 text-sm leading-relaxed font-medium">
                Razorpay payment integration coupled with a centralized pricing calculation utility that accounts for base variants, print location fees, and customization markups.
             </p>
          </div>
        </div>
      </motion.section>

      {/* FINAL OUTCOME */}
      <motion.section 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-32 md:mb-48 text-center max-w-4xl mx-auto flex flex-col items-center pt-16 border-t border-white/10"
      >
        <SectionLabel text="WOLF THEORY" />
        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">
          DESIGN IT.<br/>WEAR IT.<br/>MAKE IT YOURS.
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-16 leading-relaxed font-medium">
          Rather than building another simple clothing catalog, WOLF THEORY connects product discovery, deep personalization, 3D visualization, checkout, and admin operations into one premium full-stack commerce system.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wolfka.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-black hover:bg-white/90 hover:-translate-y-1 transition-all text-sm tracking-widest uppercase">
            View Live Project
          </a>
          <a href="https://github.com/dharanigovardhan2008/wolf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-black hover:bg-white/5 hover:-translate-y-1 transition-all text-sm tracking-widest uppercase">
            View GitHub
          </a>
        </div>
      </motion.section>

    </div>
  );
}
