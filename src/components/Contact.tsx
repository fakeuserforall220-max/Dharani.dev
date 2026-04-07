import { motion } from "framer-motion";
import { Mail, Send, Globe, MessageSquare, Terminal } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully! (Mock)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
            Let's <span className="text-brand-purple">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-3xl font-space font-bold text-white mb-4">
                Have an idea? Let's build it together.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing web development projects or collaborative opportunities. Reach out and let's create something extraordinary.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="mailto:contact@dharani.dev" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center border border-white/10 group-hover:border-brand-purple/50 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-brand-purple transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me</p>
                  <p className="text-lg text-white font-medium group-hover:text-brand-purple transition-colors">contact@dharani.dev</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Globe, link: "#" },
                  { icon: MessageSquare, link: "#" },
                  { icon: Terminal, link: "#" },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(124,58,237,0)] hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    >
                      <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:bg-black/60 transition-all duration-300 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:bg-black/60 transition-all duration-300 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:bg-black/60 transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-2 w-full px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-xl font-semibold overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
