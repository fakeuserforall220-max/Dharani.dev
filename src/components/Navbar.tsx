import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
        className="fixed top-0 left-0 right-0 z-50 pt-6 md:pt-8"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Logo */}
            <a href="#home" className="text-2xl font-space font-bold text-[#1E6BFF] tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1E6BFF] rounded-lg flex items-center justify-center text-white font-space">D</div>
              Dharani
            </a>

            {/* CENTER: Floating Capsule */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className={cn(
                "flex items-center gap-2 px-2 py-2 rounded-full bg-white border border-gray-100 shadow-sm transition-all",
                isScrolled && "shadow-md border-gray-200"
              )}>
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="text-[14px] font-medium px-5 py-2 rounded-full text-gray-500 hover:text-gray-900 transition-colors">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* RIGHT: Black Pill Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="group flex items-center gap-3 px-6 py-3 bg-[#111] hover:bg-black text-white rounded-full text-[14px] font-bold transition-all">
                Let's Talk
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={14} className="text-white" />
                </div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-3 rounded-full bg-white border border-gray-100 shadow-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-x-4 top-24 z-[60] lg:hidden bg-white rounded-3xl border border-gray-100 shadow-2xl p-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-space font-bold text-gray-600">{item.name}</a>
              ))}
              <a href="#contact" className="flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#111] text-white font-bold">Let's Talk <ArrowUpRight size={18} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
