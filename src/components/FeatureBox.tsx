import React from 'react';
import { motion } from 'framer-motion';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="animated-border p-6 float"
    >
      <div className="text-[var(--accent)] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureBox;