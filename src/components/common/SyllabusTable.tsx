/**
 * Reusable Table Component
 * Handles rendering consistent tables across the application
 */

import React from 'react';

interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
  className?: string;
}

interface SyllabusTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

export const SyllabusTable: React.FC<SyllabusTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-4 px-4 text-white/60 font-semibold text-sm ${
                  col.align === 'center'
                    ? 'text-center'
                    : col.align === 'right'
                      ? 'text-right'
                      : 'text-left'
                } ${col.className || ''}`}
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              {columns.map((col) => {
                const value = row[col.key];
                const cellContent = col.render ? col.render(value, row) : value;

                return (
                  <td
                    key={`${idx}-${col.key}`}
                    className={`py-4 px-4 text-sm ${
                      col.align === 'center'
                        ? 'text-center'
                        : col.align === 'right'
                          ? 'text-right'
                          : 'text-left'
                    } ${col.className || ''}`}
                    style={{ width: col.width }}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusTable;
