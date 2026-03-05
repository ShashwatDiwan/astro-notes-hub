/**
 * Application Constants
 * Centralized configuration values used throughout the application
 */

// Color Scheme
export const COLORS = {
  primary: '#00c3c9',
  primaryRgba: 'rgba(0,195,201)',
  background: '#020617',
  cardLeft: '#0d0d0f',
  cardRight: '#0c0c0e',
  sidebarBg: '#0a0a0c',
  contentBg: '#080809',
  
  // Subject Colors
  physics: 'hsl(217 91% 60%)',
  chemistry: 'hsl(38 92% 50%)',
  maths: 'hsl(263 70% 50%)',
  
  // Text Colors
  white: '#ffffff',
  textSecondary: 'hsl(220 14% 90%)',
  textMuted: 'hsl(220 8% 50%)',
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    primary: '"Urbanist", system-ui, sans-serif',
    fallback: '"DM Sans", "Inter", system-ui, sans-serif',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  weights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
};

// Spacing
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Border Radius
export const BORDER_RADIUS = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  full: '9999px',
};

// Animation
export const ANIMATION = {
  duration: {
    fast: '100ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  },
};

// Navigation
export const NAV_HEIGHT = '72px';

// Glow Effects
export const GLOWS = {
  small: '0 0 15px rgba(0,195,201,0.5)',
  medium: '0 0 25px rgba(0,195,201,0.6)',
  large: '0 0 40px rgba(0,195,201,0.4)',
};
