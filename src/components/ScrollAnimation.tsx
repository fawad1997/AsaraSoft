import React from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'spring' | 'tween';
  className?: string;
  distance?: number;
  once?: boolean;
  amount?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  direction = 'up',
  type = 'spring',
  className = '',
  distance = 50,
  once = true,
  amount = 0.3
}) => {
  // Define animation variants based on direction
  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    };
    
    const selectedDirection = directions[direction];

    return {
      hidden: {
        opacity: 0,
        ...selectedDirection
      },
      visible: {
        opacity: 1,
        ...Object.keys(selectedDirection).reduce((acc, key) => {
          acc[key] = 0;
          return acc;
        }, {} as Record<string, number>),
        transition: {
          delay,
          duration: type === 'tween' ? 0.8 : undefined,
          type,
          stiffness: type === 'spring' ? 100 : undefined,
          damping: type === 'spring' ? 15 : undefined
        }
      }
    };
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 