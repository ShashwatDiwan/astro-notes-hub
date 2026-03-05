/**
 * Milestone Item Component
 * Displays individual milestone entries in the dashboard
 */

import React from 'react';

interface MilestoneItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: string;
  actionColor?: string;
  onActionClick?: () => void;
}

export const MilestoneItem: React.FC<MilestoneItemProps> = ({
  icon,
  title,
  description,
  action,
  actionColor = '#00c3c9',
  onActionClick,
}) => {
  return (
    <div className="flex items-start gap-4 py-6 border-b border-white/5 last:border-b-0">
      <div className="flex-shrink-0 text-xl">{icon}</div>
      <div className="flex-1">
        <p className="text-white font-medium">{title}</p>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
      {action && (
        <button
          onClick={onActionClick}
          className="flex-shrink-0 text-sm font-semibold py-2 px-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          style={{ color: actionColor }}
        >
          {action}
        </button>
      )}
    </div>
  );
};

export default MilestoneItem;
