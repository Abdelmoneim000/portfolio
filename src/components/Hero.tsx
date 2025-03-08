'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const buttonsY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };
  
  const handleResize = () => {
    // Reset any size-dependent state if needed
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Generate stars for the hero background
  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      
      stars.push(
        <div
          key={i}
          className="hero-star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return stars;
  };
  
  return (
    <motion.div 
      className="hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-background">
        <div className="hero-stars">
          {generateStars(100)}
        </div>
        
        <motion.div 
          className="hero-glow"
          style={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30
          }}
        />
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-content-inner"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            Abdel-Moneim Arabi
            <motion.span 
              className="hero-title-highlight"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.h1>
          
          <motion.div 
            className="hero-subtitle-wrapper"
            style={{ y: subtitleY, opacity: subtitleOpacity }}
          >
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="hero-location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Egypt, El-beheira
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="hero-buttons"
            style={{ y: buttonsY, opacity: buttonsOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link href="https://github.com/ab2arabi22" className="btn btn-primary">
              My GitHub
            </Link>
            <Link href="https://linkedin.com/in/" className="btn btn-secondary">
              My LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-text">Scroll Down</div>
      </motion.div>
    </motion.div>
  );
};

export default Hero; 