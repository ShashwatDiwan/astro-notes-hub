/**
 * Data services - contains mock data and future API calls
 */

import type { SubjectSyllabus, SubjectProgress, StudyMilestone } from '@/types';

/**
 * Syllabus data for all subjects
 * This will be replaced with actual API calls to backend later
 */
export const subjectSyllabusData: SubjectSyllabus = {
  Physics: [
    { chapter: "Mechanics", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "12%" },
    { chapter: "Heat & Thermodynamics", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "8%" },
    { chapter: "Oscillations & Waves", notes: "✓", short: "✓", pyqs: "-", revise: "⭐", weight: "10%" },
    { chapter: "Optics", notes: "-", short: "✓", pyqs: "✓", revise: "⭐", weight: "9%" },
    { chapter: "Modern Physics", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "15%" },
    { chapter: "Electrostatics", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "11%" },
  ],
  Chemistry: [
    { chapter: "Structure of Atom", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "4%" },
    { chapter: "Chemical Bonding", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "Redox Reactions", notes: "-", short: "-", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "s-Block Elements", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "d and f block Elements", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "States of Matter", notes: "-", short: "-", pyqs: "-", revise: "⭐", weight: "4%" },
  ],
  Maths: [
    { chapter: "Functions", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "8%" },
    { chapter: "Limits & Continuity", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "7%" },
    { chapter: "Differentiation", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "10%" },
    { chapter: "Integration", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "9%" },
    { chapter: "Vectors", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "8%" },
    { chapter: "3D Geometry", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "8%" },
  ],
};

/**
 * Dashboard subject progress data
 */
export const dashboardSubjectsData: SubjectProgress[] = [
  {
    name: "Physics",
    percentage: 65,
    color: "hsl(217 91% 60%)",
    colorClass: "physics",
  },
  {
    name: "Chemistry",
    percentage: 32,
    color: "hsl(38 92% 50%)",
    colorClass: "chemistry",
  },
  {
    name: "Mathematics",
    percentage: 88,
    color: "hsl(263 70% 50%)",
    colorClass: "maths",
  },
];

/**
 * Dashboard milestones data
 */
export const dashboardMilestonesData: StudyMilestone[] = [
  {
    icon: "✓",
    title: 'Completed "Optics" Theory Sheet',
    description: "2 hours ago",
    action: "Review",
    actionColor: "#00c3c9",
  },
  {
    icon: "⚡",
    title: 'Started "Organic Chemistry" Quick Revision',
    description: "Yesterday",
    action: "Continue",
    actionColor: "#00c3c9",
  },
];

/**
 * Navigation links
 */
export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Dashboard", href: "#progress" },
  { name: "Sheets", href: "#sheets" },
];

/**
 * Service function to fetch student progress (for future API integration)
 */
export async function fetchStudentProgress(studentId: string) {
  // TODO: Replace with actual API call
  return {
    studentId,
    overallProgress: 78,
    subjects: dashboardSubjectsData,
    milestones: dashboardMilestonesData,
  };
}

/**
 * Service function to fetch syllabus data (for future API integration)
 */
export async function fetchSyllabus(subject: string) {
  // TODO: Replace with actual API call
  return subjectSyllabusData[subject as keyof SubjectSyllabus] || [];
}
