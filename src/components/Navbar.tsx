import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "../utils/cn";

const navItems = [
  { name: "Services", href: "#about" },
  { name: "Our Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 pt-6 md:pt-8 pointer-events-none"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] flex flex-col items-center gap-6">
          
          {/* TOP ROW: Logo, Nav, and Action Button */}
          <div className="w-full flex items-center justify-between pointer-events-auto">
            
            {/* LEFT: Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-space font-bold text-[#1E6BFF] tracking-tighter flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-[#1E6BFF] rounded-lg flex items-center justify-center text-white">
                    <span className="text-lg font-space">D</span>
                </div>
                Dharani
              </a>
            </div>

            {/* CENTER: Floating Capsule */}
            <nav className="hidden lg:block">
              <div className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-100 transition-all duration-300",
                "shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
                isScrolled && "shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-gray-200"
              )}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-[14px] font-medium px-5 py-2 rounded-full transition-all",
                      item.name === "Our Work" 
                        ? "bg-[#F4F4F4] text-gray-900" 
                        : "text-gray-500 hover:text-gray-900"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* RIGHT: Black Action Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="group flex items-center gap-3 px-6 py-3 bg-[#111] hover:bg-black text-white rounded-full text-[14px] font-bold transition-all shadow-xl shadow-gray-200"
              >
                Let's Talk
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={14} className="text-white" />
                </div>
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="lg:hidden p-3 rounded-full bg-white border border-gray-100 text-gray-600 shadow-sm pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* SUB PILL: Only 2 slots available (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hidden lg:flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 shadow-sm pointer-events-auto cursor-pointer hover:border-gray-200 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[13px] font-medium text-gray-600">Only 2 open slots available!</span>
            <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-[60] lg:hidden bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-space font-bold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-gray-50" />
              <div className="flex items-center gap-3 px-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-sm font-medium text-gray-500">2 slots available</span>
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#111] text-white font-bold"
              >
                Let's Talk <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
