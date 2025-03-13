import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

// Particle component to create a modern background effect
const Particles = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount and add resize listener
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Generate particles based on screen size
    const particleCount = isMobile ? 20 : 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isMobile ? (Math.random() * 1.5 + 0.5) : (Math.random() * 2 + 1),
        speed: isMobile ? (Math.random() * 0.3 + 0.1) : (Math.random() * 0.5 + 0.1)
      });
    }
    
    setParticles(newParticles);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-indigo-300 opacity-40"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, window.innerHeight * particle.speed * -1],
            opacity: [0.1, 0.8, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 10 / particle.speed,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const firstPart = "Innovating Tomorrow with ";
  const secondPart = "AsaraSoft";
  
  const cardVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };
  
  return (
    <motion.div 
      id="home" 
      className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 pt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Particles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6 overflow-hidden"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="inline-block" 
                variants={letterVariants}
              >
                {firstPart}
              </motion.span>
              <motion.span 
                className="inline-block text-indigo-400" 
                variants={letterVariants}
              >
                {secondPart}
              </motion.span>
              <motion.span 
                className="inline-block w-2 h-12 bg-indigo-400 ml-1 align-text-top"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We transform businesses through cutting-edge AI, Web Development, and IT solutions. 
              Based in Texas, serving clients worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <ScrollAnimation delay={0.3} direction="right">
              <motion.div 
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-indigo-500/30"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                  className="mb-4 bg-indigo-500/20 w-16 h-16 flex items-center justify-center rounded-lg"
                >
                  <Brain className="h-10 w-10 text-indigo-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                <p className="text-gray-300">Advanced AI models and machine learning solutions</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.5} direction="left">
              <motion.div 
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-indigo-500/30"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="mb-4 bg-indigo-500/20 w-16 h-16 flex items-center justify-center rounded-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    repeatType: "loop"
                  }}
                >
                  <Globe className="h-10 w-10 text-indigo-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
                <p className="text-gray-300">Scalable and responsive web applications</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.7} direction="up" className="col-span-2">
              <motion.div 
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-indigo-500/30 col-span-2"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="mb-4 bg-indigo-500/20 w-16 h-16 flex items-center justify-center rounded-lg"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(99, 102, 241, 0)",
                      "0 0 0 10px rgba(99, 102, 241, 0.2)",
                      "0 0 0 20px rgba(99, 102, 241, 0)",
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    repeatType: "loop"
                  }}
                >
                  <Shield className="h-10 w-10 text-indigo-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Solutions</h3>
                <p className="text-gray-300">End-to-end IT services and security solutions</p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.div>
  );
}