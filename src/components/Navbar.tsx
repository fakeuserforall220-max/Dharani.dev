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
  const [activeSection, setActiveSection] = useState("home");

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
              "rounded-full transition-all duration-300 px-4 md:px-6 py-3 md:py-4",
              "bg-brand-black/50 backdrop-blur-md border border-white/10",
              "shadow-lg shadow-black/20",
              isScrolled && "bg-brand-black/70 shadow-xl"
            )}
          >
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="text-xl md:text-2xl font-space font-bold text-white tracking-tighter"
              >
                Dharani<span className="text-brand-purple">.</span>
              </a>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setActiveSection(item.href.slice(1))}
                        className={cn(
                          "text-sm font-medium transition-all duration-300 relative group px-4 py-1.5 rounded-full",
                          activeSection === item.href.slice(1)
                            ? "text-white bg-brand-purple/20 border border-brand-purple/50"
                            : "text-gray-300 hover:text-white"
                        )}
                      >
                        {item.name}
                        {activeSection !== item.href.slice(1) && (
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-purple transition-all duration-300 group-hover:w-full" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-brand-purple hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] text-white"
                >
                  Let's Talk
                </a>
              </nav>

              {/* Mobile Nav Toggle */}
              <button
                className="md:hidden text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden bg-brand-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveSection(item.href.slice(1));
                  }}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-white/5 transition-all duration-300 rounded-lg px-4",
                    activeSection === item.href.slice(1)
                      ? "text-white bg-brand-purple/20 border-brand-purple/50"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 text-center rounded-lg font-medium bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
