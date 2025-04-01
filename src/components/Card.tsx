// src/components/ui/Card.tsx

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-white rounded-md shadow-lg p-6 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
};

export const CardContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
