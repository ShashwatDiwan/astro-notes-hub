/**
 * Application-wide TypeScript types and interfaces
 */

// Dashboard & Study Portal Types
export interface SubjectProgress {
  name: string;
  percentage: number;
  color: string;
  colorClass: string;
}

export interface StudyMilestone {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: string;
  actionColor?: string;
}

// Study Sheets Types
export interface SyllabusChapter {
  chapter: string;
  notes: string;
  short: string;
  pyqs: string;
  revise: string;
  weight: string;
}

export interface SubjectSyllabus {
  Physics: SyllabusChapter[];
  Chemistry: SyllabusChapter[];
  Maths: SyllabusChapter[];
}

export type SubjectType = keyof SubjectSyllabus;

// Navigation Types
export interface NavbarLink {
  name: string;
  href: string;
}

// Component Props Types
export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export interface TableProps {
  columns: string[];
  data: Record<string, any>[];
  rowClassName?: string;
  cellClassName?: string;
}

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  render?: (value: string) => React.ReactNode;
}

// Hero Section Types
export interface CTAButton {
  label: string;
  action?: () => void;
  variant?: 'primary' | 'secondary';
}

// General API Response Types (for future backend integration)
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface StudentProgress {
  studentId: string;
  overallProgress: number;
  subjects: SubjectProgress[];
  milestones: StudyMilestone[];
  recentActivity?: {
    timestamp: Date;
    action: string;
    details?: string;
  }[];
}
