/**
 * Navigation Link Component
 */

import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  label, 
  isActive = false,
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Get target element
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm transition-colors ${
        isActive
          ? 'font-bold text-white'
          : 'font-semibold text-muted-foreground hover:text-white'
      }`}
    >
      {label}
    </a>
  );
};

export default NavLink;
