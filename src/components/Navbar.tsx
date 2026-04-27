import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 md:pt-6"
      >
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          <div
            className={cn(
              "rounded-full transition-all duration-500 px-4 md:px-8 py-3 md:py-4",
              "bg-white/70 backdrop-blur-xl border border-white/20",
              "shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
              isScrolled && "shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-gray-100/50 bg-white/90"
            )}
          >
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="text-xl md:text-2xl font-space font-bold text-gray-900 tracking-tighter group flex items-center gap-1"
              >
                Dharani<span className="text-violet-600 group-hover:animate-pulse">.</span>
              </a>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-10">
                <ul className="flex items-center gap-10">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-600 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-full text-sm font-bold bg-gray-900 text-white hover:bg-black transition-all shadow-lg shadow-gray-200 hover:scale-105 active:scale-95"
                >
                  Let's Talk
                </a>
              </nav>

              {/* Mobile Nav Toggle */}
              <button
                className="md:hidden p-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden bg-white/95 backdrop-blur-2xl rounded-3xl border border-gray-100 shadow-2xl overflow-hidden shadow-gray-200/50"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-space font-bold text-gray-500 hover:text-gray-900 py-2 transition-colors flex justify-between items-center group"
                >
                  {item.name}
                  <span className="opacity-0 group-hover:opacity-100 text-violet-600 transition-opacity">→</span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-4 text-center rounded-2xl font-bold bg-gray-900 text-white hover:bg-black transition-all"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
