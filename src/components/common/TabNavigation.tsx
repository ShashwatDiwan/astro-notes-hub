/**
 * Reusable Tab Navigation Component
 */

import React from 'react';

interface TabOption {
  label: string;
  value: string;
}

interface TabNavigationProps {
  options: TabOption[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  options,
  activeValue,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeValue === option.value
              ? 'bg-white text-black'
              : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
