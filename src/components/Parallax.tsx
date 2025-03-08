'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import '../styles/Parallax.css';

const Parallax: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Transform values for different parallax layers
  const nebulaY = useTransform(scrollY, [0, windowSize.height], [0, windowSize.height * 0.1]);
  const deepY = useTransform(scrollY, [0, windowSize.height], [0, windowSize.height * 0.05]);
  const starsY = useTransform(scrollY, [0, windowSize.height], [0, windowSize.height * 0.15]);
  const glowY = useTransform(scrollY, [0, windowSize.height], [0, windowSize.height * 0.08]);
  
  // Mouse parallax transforms
  const nebulaX = useTransform(smoothMouseX, [0, windowSize.width], [windowSize.width * -0.02, windowSize.width * 0.02]);
  const deepX = useTransform(smoothMouseX, [0, windowSize.width], [windowSize.width * -0.01, windowSize.width * 0.01]);
  const glowX = useTransform(smoothMouseX, [0, windowSize.width], [windowSize.width * -0.03, windowSize.width * 0.03]);
  
  // Additional transforms for more dynamic effects
  const nebulaOpacity = useTransform(scrollY, [0, windowSize.height * 0.5], [1, 0.8]);
  const starsScale = useTransform(scrollY, [0, windowSize.height], [1, 1.1]);
  const glowScale = useTransform(scrollY, [0, windowSize.height], [1, 1.2]);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as percentage of window size
      const mouseXPercent = e.clientX / window.innerWidth;
      const mouseYPercent = e.clientY / window.innerHeight;
      
      mouseX.set(mouseXPercent * window.innerWidth);
      mouseY.set(mouseYPercent * window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  // Generate SVG stars for better scalability
  const generateSVGStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.5 + 0.3;
      
      stars.push(
        <svg
          key={i}
          className="star-svg"
          style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size * 4}px`,
            height: `${size * 4}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" fill="white" opacity={opacity} filter="blur(1px)" />
          <circle cx="12" cy="12" r="2" fill="white" opacity={opacity + 0.2} />
          {Math.random() > 0.7 && (
            <>
              <line x1="12" y1="2" x2="12" y2="6" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </>
          )}
        </svg>
      );
    }
    return stars;
  };
  
  // Generate SVG particles
  const generateSVGParticles = (count: number) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 60 + 30;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.4 + 0.1;
      
      particles.push(
        <svg
          key={i}
          className="particle-svg"
          style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size * 5}px`,
            height: `${size * 5}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="3" fill="white" opacity={opacity} filter="blur(1px)" />
          {Math.random() > 0.5 ? (
            <circle cx="5" cy="5" r="1" fill="white" opacity={opacity + 0.2} />
          ) : (
            <path d="M5 2L6 5L9 5L6.5 7L7.5 10L5 8L2.5 10L3.5 7L1 5L4 5L5 2Z" fill="white" opacity={opacity + 0.1} transform="scale(0.5) translate(5, 5)" />
          )}
        </svg>
      );
    }
    return particles;
  };
  
  // Generate SVG shooting stars
  const generateSVGShootingStars = (count: number) => {
    const shootingStars = [];
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 15;
      const duration = Math.random() * 2 + 1;
      const top = Math.random() * 70;
      const left = Math.random() * 100;
      const size = Math.random() * 150 + 100;
      const angle = Math.random() * 60 - 30;
      
      shootingStars.push(
        <div
          key={i}
          className="shooting-star-container"
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: '2px',
            transform: `rotate(${angle - 45}deg)`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: 0,
            animation: `shooting-star ${duration}s ease-out ${delay}s infinite`,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`shootingStarGradient-${i}`} x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </linearGradient>
              <filter id={`shootingStarGlow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <rect width="100" height="2" fill={`url(#shootingStarGradient-${i})`} filter={`url(#shootingStarGlow-${i})`} />
            <circle cx="75" cy="1" r="4" fill="white" opacity="0.8" filter={`url(#shootingStarGlow-${i})`} />
          </svg>
        </div>
      );
    }
    return shootingStars;
  };
  
  // Generate SVG nebula overlay
  const generateSVGNebula = () => {
    return (
      <svg
        className="nebula-svg-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          mixBlendMode: 'screen',
          zIndex: 3,
        }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nebulaGradient1" cx="30%" cy="30%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="rgba(120, 100, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(120, 100, 255, 0)" />
          </radialGradient>
          <radialGradient id="nebulaGradient2" cx="70%" cy="60%" r="60%" fx="70%" fy="60%">
            <stop offset="0%" stopColor="rgba(255, 100, 200, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 100, 200, 0)" />
          </radialGradient>
          <filter id="nebulaBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <ellipse cx="300" cy="300" rx="400" ry="300" fill="url(#nebulaGradient1)" filter="url(#nebulaBlur)" />
        <ellipse cx="700" cy="600" rx="500" ry="400" fill="url(#nebulaGradient2)" filter="url(#nebulaBlur)" />
      </svg>
    );
  };
  
  // Generate cosmic dust particles
  const generateCosmicDust = (count: number) => {
    const dust = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 1.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.15 + 0.05;
      
      dust.push(
        <svg
          key={i}
          style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size * 10}px`,
            height: `${size * 10}px`,
            opacity,
          }}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="white" opacity="0.5" filter="blur(5px)" />
          <circle cx="10" cy="10" r="5" fill="white" opacity="0.7" filter="blur(2px)" />
        </svg>
      );
    }
    return dust;
  };
  
  return (
    <div className="parallax-container" ref={parallaxRef}>
      {/* Deep space layer - furthest back */}
      <motion.div 
        className="parallax-layer parallax-layer-deep"
        style={{ 
          y: deepY,
          x: deepX,
        }}
      />
      
      {/* Deep space glow effect */}
      <motion.div
        className="deep-space-glow"
        style={{
          y: glowY,
          x: glowX,
          scale: glowScale,
        }}
      />
      
      {/* Nebula layer */}
      <motion.div 
        className="parallax-layer parallax-layer-nebula"
        style={{ 
          y: nebulaY, 
          x: nebulaX,
          opacity: nebulaOpacity 
        }}
      />
      
      {/* SVG Nebula overlay for additional detail */}
      <motion.div
        style={{
          y: nebulaY,
          x: nebulaX,
          scale: 1.05,
        }}
      >
        {generateSVGNebula()}
      </motion.div>
      
      {/* Stars layer */}
      <motion.div 
        className="stars-container"
        style={{ 
          y: starsY,
          scale: starsScale
        }}
      >
        {generateSVGStars(200)}
        {generateSVGShootingStars(7)}
      </motion.div>
      
      {/* Cosmic dust particles */}
      <div className="cosmic-dust">
        {generateCosmicDust(100)}
      </div>
      
      {/* Particles layer */}
      <div className="particles-container">
        {generateSVGParticles(40)}
      </div>
      
      {/* Space dust effect */}
      <div className="space-dust" />
      
      {/* Content layer */}
      <motion.div className="parallax-content">
        {children}
      </motion.div>
    </div>
  );
};

export default Parallax; 