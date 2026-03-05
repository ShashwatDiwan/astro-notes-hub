/**
 * Subject Card Component
 * Displays subject progress in the dashboard
 */

import React from 'react';
import { ProgressBar } from './ProgressBar';

interface SubjectCardProps {
  name: string;
  percentage: number;
  color: string;
  icon?: React.ReactNode;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  name,
  percentage,
  color,
  icon,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>}
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-white/60 text-sm">{percentage}% DONE</p>
        </div>
      </div>
      <ProgressBar
        percentage={percentage}
        color={color}
        showPercentage={false}
        size="sm"
      />
    </div>
  );
};

export default SubjectCard;
