import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Mail } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black font-space mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">Me</span>
          </h2>
        </motion.div>

        {/* Card Container */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-card-wrapper"
          >
            <div className="about-card group">
              {/* Mail Button */}
              <a href="mailto:your.email@example.com" className="mail-button">
                <Mail className="w-6 h-6" />
              </a>

              {/* Profile Picture */}
              <div className="profile-picture">
                <div className="profile-image-placeholder">
                  <Terminal className="w-24 h-24 text-brand-purple" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="card-bottom">
                <div className="card-content">
                  <span className="profile-name">Dharani Govardhan</span>
                  <span className="profile-title">Full Stack Developer & AIML Student</span>
                  <span className="profile-about">
                    I'm a 1st-year AIML student who builds modern, responsive web applications. 
                    Specializing in bridging AI with beautiful frontend experiences. 
                    6+ live projects and counting!
                  </span>
                </div>

                <div className="card-bottom-actions">
                  <div className="social-links">
                    {/* GitHub */}
                    <a href="#" aria-label="GitHub" className="social-link">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href="#" aria-label="LinkedIn" className="social-link">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    {/* Twitter/X */}
                    <a href="#" aria-label="Twitter" className="social-link">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                  <a href="#contact" className="contact-button">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Below Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { icon: Terminal, value: "6+", label: "Live Projects" },
            { icon: Code, value: "1st", label: "Year AIML" },
            { icon: Cpu, value: "24/7", label: "Learning" },
            { icon: Mail, value: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass border border-white/10 rounded-2xl p-6 text-center hover:border-brand-purple/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-brand-purple" />
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .about-card-wrapper {
          perspective: 1000px;
        }

        .about-card {
          width: 320px;
          height: 420px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1));
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 3px;
          position: relative;
          box-shadow: 0 70px 30px -50px rgba(124, 58, 237, 0.3);
          transition: all 0.5s ease-in-out;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-card:hover {
          border-top-left-radius: 55px;
          box-shadow: 0 80px 40px -50px rgba(124, 58, 237, 0.5);
        }

        .mail-button {
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
          background: transparent;
          border: none;
          z-index: 10;
          color: rgba(124, 58, 237, 0.6);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mail-button:hover {
          color: #7c3aed;
          transform: scale(1.1);
        }

        .profile-picture {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 29px;
          z-index: 1;
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.2));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .profile-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease-in-out;
        }

        .about-card:hover .profile-picture {
          width: 120px;
          height: 120px;
          top: 10px;
          left: 10px;
          border-radius: 50%;
          z-index: 3;
          border: 7px solid rgba(124, 58, 237, 0.5);
          box-shadow: 0 5px 15px rgba(124, 58, 237, 0.3);
          transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
        }

        .about-card:hover .profile-picture:hover {
          transform: scale(1.3);
          border-radius: 20px;
        }

        .about-card:hover .profile-image-placeholder {
          transform: scale(0.8);
        }

        .card-bottom {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: linear-gradient(135deg, #7c3aed, #3b82f6);
          top: 80%;
          border-radius: 29px;
          z-index: 2;
          box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }

        .about-card:hover .card-bottom {
          top: 150px;
          border-radius: 80px 29px 29px 29px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 1.5rem;
          right: 1.5rem;
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .profile-name {
          font-size: 1.5rem;
          color: white;
          font-weight: bold;
          font-family: 'Space Grotesk', sans-serif;
        }

        .profile-title {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .profile-about {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 0.5rem;
          line-height: 1.5;
        }

        .card-bottom-actions {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: white;
          transition: all 0.3s ease;
          filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
        }

        .social-link:hover {
          color: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .contact-button {
          background: white;
          color: #7c3aed;
          border: none;
          border-radius: 20px;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          font-weight: 600;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
