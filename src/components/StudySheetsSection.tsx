import { useState } from 'react';
import { FloatingCard } from './common/FloatingCard';
import { TabNavigation } from './common/TabNavigation';
import { SyllabusTable } from './common/SyllabusTable';
import { subjectSyllabusData } from '@/services/dataService';
import type { SubjectType, SyllabusChapter, TableColumn } from '@/types';

// Define consistent table columns for syllabus
const syllabusColumns: TableColumn[] = [
  {
    key: 'chapter',
    label: 'Chapter',
    align: 'left',
    width: '30%',
  },
  {
    key: 'notes',
    label: 'Notes',
    align: 'center',
    width: '14%',
  },
  {
    key: 'short',
    label: 'Short',
    align: 'center',
    width: '14%',
  },
  {
    key: 'pyqs',
    label: 'PYQs',
    align: 'center',
    width: '14%',
  },
  {
    key: 'revise',
    label: 'Revise',
    align: 'center',
    width: '14%',
  },
  {
    key: 'weight',
    label: 'Weight',
    align: 'right',
    width: '14%',
    render: (value: string) => (
      <span style={{ color: 'hsl(38 92% 50%)' }} className="font-semibold">
        {value}
      </span>
    ),
  },
];

const subjectOptions = [
  { label: 'Physics', value: 'Physics' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'Maths', value: 'Maths' },
];

export default function StudySheetsSection() {
  const [activeSubject, setActiveSubject] = useState<SubjectType>('Physics');

  const currentData: SyllabusChapter[] = subjectSyllabusData[activeSubject] || [];

  return (
    <section id="sheets" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FloatingCard showTopHighlight={false}>
          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-white mb-6">Study Sheets</h2>

              {/* Subject Tabs */}
              <TabNavigation
                options={subjectOptions}
                activeValue={activeSubject}
                onChange={(value) => setActiveSubject(value as SubjectType)}
              />
            </div>

            {/* Table */}
            <SyllabusTable columns={syllabusColumns} data={currentData} />
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}
