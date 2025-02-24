import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 md:p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
