import { useState } from 'react';
import { Home, BookOpen, Zap, FlaskConical, Calculator, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingCard } from "./common/FloatingCard";
import { SubjectCard } from "./common/SubjectCard";
import { MilestoneItem } from "./common/MilestoneItem";
import { dashboardSubjectsData, dashboardMilestonesData } from "@/services/dataService";

type DashboardTab = 'overview' | 'exam-guide' | 'syllabus';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  return (
    <section id="progress" className="relative px-4 py-0 -mt-32">
      {/* Semi-circular glow blob behind dashboard - bright at center, fades sideways */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-30" style={{ top: '-50px', width: '1400px', height: '700px' }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 600px 300px at center top, rgba(0,195,201,0.28) 0%, rgba(0,195,201,0.18) 15%, rgba(0,195,201,0.06) 35%, transparent 50%)',
          filter: 'blur(120px)',
          borderRadius: '50% 50% 0% 0%'
        }} />
      </div>

      <div className="container relative pt-16">
        <FloatingCard className="mx-auto max-w-5xl">
          {/* thin centered top highlight with fade effect - bright at center, fades sideways */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/6 h-[1.2px] rounded-full" style={{ 
            background: 'linear-gradient(90deg, rgba(0,195,201,0) 0%, rgba(0,195,201,0.6) 35%, rgba(0,195,201,0.8) 50%, rgba(0,195,201,0.6) 65%, rgba(0,195,201,0) 100%)',
            boxShadow: '0 0 25px rgba(0,195,201,0.7), 0 0 45px rgba(0,195,201,0.4), 0 0 80px rgba(0,195,201,0.15)' 
          }} />
          
          <div className="flex min-h-[500px]">
            {/* Sidebar (left tone slightly lighter) */}
            <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Main content (right tone slightly darker) */}
            {activeTab === 'overview' && <OverviewContent />}
            {activeTab === 'exam-guide' && <ExamGuideContent />}
            {activeTab === 'syllabus' && <SyllabusContent />}
          </div>
        </FloatingCard>
      </div>
    </section>
  );
};

/**
 * Dashboard Sidebar Component
 */
interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems: { icon: React.ComponentType<any>; label: string; value: DashboardTab }[] = [
    { icon: Home, label: 'Overview', value: 'overview' },
    { icon: Zap, label: 'Exam Guide', value: 'exam-guide' },
    { icon: BookOpen, label: 'Syllabus', value: 'syllabus' },
  ];

  return (
    <div className="hidden w-56 flex-shrink-0 border-r border-white/5 p-5 md:block" style={{ background: "#0a0a0c" }}>
      <div className="mb-8 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white glow-sm">
          <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold text-foreground">Dashboard</span>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => onTabChange(item.value)}
            className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 cursor-pointer transition-colors ${
              activeTab === item.value
                ? 'bg-white/10'
                : 'text-muted-foreground hover:text-white hover:bg-white/10'
            }`}
          >
            <item.icon className={`h-4 w-4 ${activeTab === item.value ? 'text-primary' : ''}`} />
            <span className="text-sm font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

/**
 * Overview Content Component (default dashboard view)
 */
const OverviewContent = () => {
  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col" style={{ background: '#080809', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Welcome section at top */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Welcome back, Student</h3>
          <p className="mt-1 text-sm text-muted-foreground">You have completed 45% of your Physics syllabus.</p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px hsl(187 94% 43% / 0.3)" }}>78%</span>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total Progress</p>
        </div>
      </div>

      {/* Subject cards - using reusable SubjectCard component */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-8">
        {dashboardSubjectsData.map((subject) => (
          <SubjectCard
            key={subject.name}
            name={subject.name}
            percentage={subject.percentage}
            color={subject.color}
          />
        ))}
      </div>

      {/* Bottom section with Milestones */}
      <div className="mt-auto">
        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Recent Milestones</h4>
        <div className="space-y-0">
          {dashboardMilestonesData.map((milestone, idx) => (
            <MilestoneItem
              key={idx}
              icon={milestone.icon}
              title={milestone.title}
              description={milestone.description}
              action={milestone.action}
              actionColor={milestone.actionColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Exam Guide Content Component - MHTCET Information (Compact)
 */
const ExamGuideContent = () => {
  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col" style={{ background: '#080809', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Header with title and total marks */}
      <div className="mb-6 flex items-start justify-between pb-4 border-b border-white/10">
        <div>
          <h3 className="text-xl font-semibold text-foreground">MHTCET</h3>
          <p className="text-xs text-muted-foreground mt-1">Maharashtra State Common Entrance Test</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-primary" style={{ textShadow: "0 0 20px hsl(187 94% 43% / 0.3)" }}>200</span>
          <p className="text-xs font-medium uppercase text-muted-foreground">Marks</p>
        </div>
      </div>

      {/* Key Info Pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
    
          <span className="text-xs font-medium text-white">3 Hours</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">

          <span className="text-xs font-medium text-white">Objective MCQs</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">

          <span className="text-xs font-medium text-green-400">No Negative</span>
        </div>
      </div>

      {/* Subject Marks & Marking Scheme - 2 Column */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Subject Marks */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Marks by Subject</p>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Physics</span>
              <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded text-xs">50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Chemistry</span>
              <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded text-xs">50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Mathematics</span>
              <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded text-xs">100</span>
            </div>
          </div>
        </div>

        {/* Marking Per Question */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Per Question</p>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Physics</span>
              <span className="font-semibold text-white bg-primary/20 px-2 py-0.5 rounded text-xs text-primary">+1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Chemistry</span>
              <span className="font-semibold text-white bg-primary/20 px-2 py-0.5 rounded text-xs text-primary">+1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Mathematics</span>
              <span className="font-semibold text-white bg-primary/20 px-2 py-0.5 rounded text-xs text-primary">+2</span>
            </div>
          </div>
        </div>
      </div>

    

      
        {/* Prep Strategy */}
        
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Prep Strategy</p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary flex-shrink-0">✓</span>
              <span>Master Class 12 (80% focus)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary flex-shrink-0">✓</span>
              <span>Don't ignore Class 11 (20%)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary flex-shrink-0">✓</span>
              <span>Speed & accuracy essential</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary flex-shrink-0">✓</span>
              <span>Rigorous mock test practice</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary flex-shrink-0">✓</span>
              <span>Prioritize Maths (highest marks)</span>
            </li>
          </ul>
        </div>
  );
};

/**
 * Sheets Content Placeholder
 */
const SheetsContent = () => {
  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col" style={{ background: '#080809', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <p className="text-muted-foreground">View the Study Sheets section below for detailed syllabus information</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Syllabus Content - Subject Navigation with Class 11 & 12
 */
type SubjectName = 'Physics' | 'Chemistry' | 'Mathematics';

const syllabusData: Record<SubjectName, { class11: string[]; class12: string[] }> = {
  Physics: {
    class11: [
      'Motion in a Plane',
      'Laws of Motion',
      'Gravitation',
      'Thermal Properties of Matter',
      'Sound',
      'Optics',
      'Electrostatics',
      'Semiconductors',
    ],
    class12: [
      'Rotational Motion',
      'Kinetic Theory of Gases & Thermodynamics',
      'Wave Theory of Light',
      'Interference & Diffraction',
      'Electrostatics',
      'Current Electricity',
      'Magnetic Effects of Electric Current',
      'Magnetism',
      'Electromagnetic Induction',
      'Electrons & Photons',
      'Atoms, Molecules & Nuclei',
    ],
  },
  Chemistry: {
    class11: [
      'Some Basic Concepts of Chemistry',
      'Structure of Atom',
      'Chemical Bonding',
      'Redox Reactions',
      'Elements of Groups 1 & 2 (s-Block)',
      'States of Matter (Gases & Liquids)',
      'Adsorption & Colloids',
      'Hydrocarbons',
      'Basic Principles of Organic Chemistry',
    ],
    class12: [
      'Solid State',
      'Solutions',
      'Ionic Equilibria',
      'Chemical Thermodynamics',
      'Electrochemistry',
      'Chemical Kinetics',
      'Elements of Groups 16, 17 & 18',
      'Transition & Inner Transition Elements',
      'Coordination Compounds',
      'Organic Compounds (Halogen, Alcohols, Phenols, Ethers, Aldehydes, Ketones, Carboxylic Acids, Nitrogen)',
      'Biomolecules',
    ],
  },
  Mathematics: {
    class11: [
      'Trigonometry II',
      'Straight Line',
      'Circle',
      'Measures of Dispersion',
      'Probability',
      'Complex Numbers',
      '3-D Geometry',
      'Permutations & Combinations',
      'Functions',
      'Limits',
      'Continuity',
    ],
    class12: [
      'Mathematical Logic',
      'Matrices',
      'Trigonometric Functions',
      'Pair of Straight Lines',
      'Line, Plane & Vectors',
      'Differentiation',
      'Applications of Derivatives',
      'Integration',
      'Applications of Definite Integrals',
      'Differential Equations',
      'Probability Distribution',
    ],
  },
};

const SyllabusContent = () => {
  const [currentSubject, setCurrentSubject] = useState<SubjectName>('Physics');
  const subjects = Object.keys(syllabusData) as SubjectName[];
  
  const handlePrevSubject = () => {
    const currentIndex = subjects.indexOf(currentSubject);
    const prevIndex = (currentIndex - 1 + subjects.length) % subjects.length;
    setCurrentSubject(subjects[prevIndex]);
  };

  const handleNextSubject = () => {
    const currentIndex = subjects.indexOf(currentSubject);
    const nextIndex = (currentIndex + 1) % subjects.length;
    setCurrentSubject(subjects[nextIndex]);
  };

  const data = syllabusData[currentSubject];
  const subjectIcons: Record<SubjectName, string> = {
    Physics: '',
    Chemistry: '',
    Mathematics: '',
  };

  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col" style={{ background: '#080809', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Subject Navigation Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={handlePrevSubject}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-primary"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="text-center flex-1">
          <h3 className="text-2xl font-semibold text-foreground">{subjectIcons[currentSubject]} {currentSubject}</h3>
        </div>

        <button
          onClick={handleNextSubject}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-primary"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Class 11 & 12 Chapters */}
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-y-auto">
        {/* Class 11 */}
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3 pb-2 border-b border-white/10">Class 11</h4>
          <ul className="space-y-1.5">
            {data.class11.map((chapter, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span className="text-muted-foreground leading-tight">{chapter}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Class 12 */}
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3 pb-2 border-b border-white/10">Class 12</h4>
          <ul className="space-y-1.5">
            {data.class12.map((chapter, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs">
                <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                <span className="text-muted-foreground leading-tight">{chapter}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subject Indicators at bottom */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setCurrentSubject(subject)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              currentSubject === subject
                ? 'bg-white text-black'
                : 'bg-white/5 text-muted-foreground hover:bg-white/10'
            }`}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardPreview;
