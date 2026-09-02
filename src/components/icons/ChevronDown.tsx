import React from "react";

export const ChevronDown: React.FC<{ className?: string; size?: number }> = ({ 
  className, 
  size = 16 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);
