'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Abdel-Moneim
        </motion.div>
        <motion.button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
        <AnimatePresence>
          <motion.nav 
            className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={navItemVariants}>
              <Link href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Education
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </motion.div>
          </motion.nav>
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 