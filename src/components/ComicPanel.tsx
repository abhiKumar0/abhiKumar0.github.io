import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  shadowColor?: string;
  animate?: boolean;
}

export default function ComicPanel({
  children,
  className = '',
  borderColor = '#F8F9FA',
  shadowColor = '#F8F9FA',
  animate = true,
}: ComicPanelProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        border: `3px solid ${borderColor}`,
        boxShadow: `6px 6px 0px ${shadowColor}`,
      }}
      whileHover={
        animate
          ? {
              x: -2,
              y: -2,
              boxShadow: `8px 8px 0px ${shadowColor}`,
              transition: { duration: 0.15 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
