'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="content-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I am a passionate Full Stack Developer with experience in building web applications
            using modern technologies. I enjoy solving complex problems and creating efficient,
            scalable solutions.
          </motion.p>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="https://github.com/ab2arabi22" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span>🔗</span> My GitHub
            </a>
            <a href="https://linkedin.com/in/abdelmoneim-arabi" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span>🔗</span> My LinkedIn
            </a>
            <a href="mailto:ab2arabi22@gmail.com" className="contact-item">
              <span>📧</span> ab2arabi22@gmail.com
            </a>
            <a href="tel:+201033468669" className="contact-item">
              <span>📱</span> +20 1033468669
            </a>
            <a href="https://www.freelancer.com/u/abdelmoneimarabi" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span>🔗</span> Freelancing profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 