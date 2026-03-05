/**
 * Reusable Floating Card Component
 * Used for premium floating cards with gradient background
 */

import React from 'react';

interface FloatingCardProps {
  className?: string;
  children: React.ReactNode;
  showTopHighlight?: boolean;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  className = '',
  children,
  showTopHighlight = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl border border-white/10 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(90deg, #0d0d0f 0%, #0c0c0e 100%)',
      }}
    >
      {showTopHighlight && (
        <div
          className="w-2/5 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, rgba(0,195,201,0.8) 0%, rgba(0,195,201,0) 100%)',
            boxShadow: '0 0 20px rgba(0,195,201,0.6)',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default FloatingCard;
