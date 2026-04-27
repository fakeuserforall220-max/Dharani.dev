import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
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
        className="fixed top-0 left-0 right-0 z-50 pt-6 md:pt-8"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between relative">
            
            {/* LEFT: Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-space font-bold text-gray-900 tracking-tighter flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <span className="text-lg">D</span>
                </div>
                Dharani
              </a>
            </div>

            {/* CENTER: Floating Capsule (Desktop Only) */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className={cn(
                "flex items-center gap-8 px-10 py-3 rounded-full bg-white border border-gray-100 transition-all duration-300",
                "shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
                isScrolled && "shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-gray-200"
              )}>
                <ul className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* RIGHT: Black Action Button */}
            <div className="hidden lg:block flex-shrink-0">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-black text-white rounded-full text-[15px] font-bold transition-all shadow-xl shadow-gray-200"
              >
                Let's Talk
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={14} className="text-white" />
                </div>
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="lg:hidden p-3 rounded-full bg-white border border-gray-100 text-gray-600 shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-8"
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
