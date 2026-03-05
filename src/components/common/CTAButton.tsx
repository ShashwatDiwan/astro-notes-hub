/**
 * Call-to-Action Button Component
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  showArrow?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  label,
  variant = 'primary',
  onClick,
  showArrow = true,
}) => {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        onClick={onClick}
        className="group relative flex items-center justify-center bg-white rounded-lg px-10 h-[52px] overflow-hidden no-underline transition-all duration-200 hover:bg-neutral-100 legacy-typography"
        style={{ boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-black font-medium whitespace-nowrap">{label}</span>
          {showArrow && <ArrowRight className="w-4 h-4 text-black" />}
        </div>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-center border border-white/10 hover:border-white/30 bg-white/5 rounded-lg px-10 h-[52px] text-white font-medium transition-colors legacy-typography"
    >
      {label}
    </a>
  );
};

export default CTAButton;
