'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div 
          className="social-links"
          variants={socialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a 
            href="https://github.com/ab2arabi22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialItemVariants}
            whileHover={{ y: -5, color: "#0070f3" }}
          >
            GitHub
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/abdelmoneim-arabi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialItemVariants}
            whileHover={{ y: -5, color: "#0070f3" }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="mailto:ab2arabi22@gmail.com" 
            className="social-link"
            variants={socialItemVariants}
            whileHover={{ y: -5, color: "#0070f3" }}
          >
            Email
          </motion.a>
          <motion.a 
            href="tel:+201033468669" 
            className="social-link"
            variants={socialItemVariants}
            whileHover={{ y: -5, color: "#0070f3" }}
          >
            Phone
          </motion.a>
          <motion.a 
            href="https://www.freelancer.com/u/abdelmoneimarabi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialItemVariants}
            whileHover={{ y: -5, color: "#0070f3" }}
          >
            Freelancer
          </motion.a>
        </motion.div>
        <motion.p 
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Abdel-Moneim Arabi. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 