import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<string>('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const mouseEnterLink = () => setCursorVariant('hover');
    const mouseLeaveLink = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Add event listeners to clickable elements
    const handleLinks = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input[type="submit"]');
      links.forEach(link => {
        link.addEventListener('mouseenter', mouseEnterLink);
        link.addEventListener('mouseleave', mouseLeaveLink);
      });
    };

    // Run initially
    handleLinks();

    // Re-run when DOM might change
    const observer = new MutationObserver(handleLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      observer.disconnect();
    };
  }, []);

  // Variants for the cursor animations
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(99, 102, 241, 0.3)',
      mixBlendMode: 'difference' as const
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
      mixBlendMode: 'difference' as const
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      mixBlendMode: 'difference' as const
    }
  };

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-50 pointer-events-none rounded-full"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.8 }}
    />
  );
};

export default CustomCursor; 