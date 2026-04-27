import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#about" },
  { name: "Our Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

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
        className="fixed top-0 left-0 right-0 z-[100] pt-6 md:pt-8"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between relative">
            
            {/* LEFT: Logo */}
            <a href="#home" className="text-2xl font-sans font-extrabold text-[#1E6BFF] tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1E6BFF] rounded-lg flex items-center justify-center text-white font-sans">D</div>
              Dharani
            </a>

            {/* CENTER: Floating Capsule with Inner Pill */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className={cn(
                "flex items-center gap-1 px-2 py-1.5 rounded-full bg-white border border-gray-100 transition-all duration-300",
                "shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
                isScrolled && "shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-gray-200"
              )}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={cn(
                      "text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300",
                      activeItem === item.name 
                        ? "bg-[#F4F4F4] text-gray-900 shadow-sm" // The "Inner Pill"
                        : "text-gray-500 hover:text-gray-900"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* RIGHT: Black Pill Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="group flex items-center gap-4 px-7 py-3.5 bg-[#111] hover:bg-black text-white rounded-full text-[15px] font-bold transition-all shadow-xl shadow-gray-200">
                Book a Call
                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={16} className="text-white" />
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: -20 }} 
            className="fixed inset-x-4 top-24 z-[110] lg:hidden bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveItem(item.name);
                  }} 
                  className={cn(
                    "text-lg font-bold px-6 py-4 rounded-2xl transition-colors",
                    activeItem === item.name ? "bg-gray-50 text-[#1E6BFF]" : "text-gray-600"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-gray-50 my-2" />
              <a href="#contact" className="flex items-center justify-center gap-2 px-5 py-5 rounded-[1.5rem] bg-[#111] text-white font-bold text-lg shadow-lg">
                Book a Call <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
