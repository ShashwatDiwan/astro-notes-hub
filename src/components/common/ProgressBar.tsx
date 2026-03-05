/**
 * Reusable Progress Bar Component
 */

import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  color = '#00c3c9',
  size = 'md',
  showPercentage = true,
  className = '',
}) => {
  const heightClass = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }[size];

  return (
    <div className={`w-full ${className}`}>
      {label && <p className="text-sm text-white/70 mb-2">{label}</p>}
      <div className={`${heightClass} w-full bg-white/10 rounded-full overflow-hidden`}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {showPercentage && (
        <p className="text-xs text-white/60 mt-1">{percentage}% Complete</p>
      )}
    </div>
  );
};

export default ProgressBar;
