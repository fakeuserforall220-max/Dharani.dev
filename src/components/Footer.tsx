import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <a href="#home" className="text-2xl font-space font-bold text-white tracking-tighter mb-2">
              Dharani<span className="text-brand-purple">.</span>
            </a>
            <p className="text-gray-500 text-sm">
              Building sleek, immersive web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} Dharani Govardhan. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
