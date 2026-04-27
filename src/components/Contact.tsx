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
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Soft Light Background Blurs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-space font-bold text-gray-900 mb-4 tracking-tighter">
            Let's <span className="text-violet-600">Connect</span>
          </h2>
          <div className="w-20 h-1.5 bg-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-space font-bold text-gray-900 mb-6 leading-[1.1]">
                Have an idea? Let's build it together.
              </h3>
              <p className="text-gray-500 text-xl font-sans leading-relaxed max-w-md">
                I'm always open to discussing web development projects or collaborative opportunities. Reach out and let's create something extraordinary.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <a href="mailto:contact@dharani.dev" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-violet-200 group-hover:shadow-md transition-all duration-300">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl text-gray-900 font-semibold group-hover:text-violet-600 transition-colors">contact@dharani.dev</p>
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
                      className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100 shadow-sm hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5 text-gray-500 hover:text-violet-600" />
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
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-gray-200/60 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-300 focus:bg-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-300 focus:bg-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-300 focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-3 w-full px-8 py-5 bg-gray-900 text-white rounded-2xl font-bold overflow-hidden transition-all hover:bg-black disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-xl shadow-gray-200"
              >
                <span className="relative z-10 text-lg">{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
