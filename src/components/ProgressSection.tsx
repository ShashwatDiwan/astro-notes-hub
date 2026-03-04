import { Zap, FlaskConical, Calculator } from "lucide-react";

const ProgressSection = () => {
  return (
    <section id="progress" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30 border-y border-white/5 pointer-events-none -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">Total Learning Progress</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real-time breakdown of your CET preparation coverage across all core subjects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Total */}
          <div className="flex flex-col items-center p-8 bg-card border border-white/5 rounded-3xl text-center hover:border-primary/30 transition-all duration-300">
            <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
              <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="145.76" className="text-primary" style={{ filter: "drop-shadow(0 0 8px rgba(0,195,201,0.6))" }} />
              </svg>
              <span className="absolute text-2xl font-bold text-white z-20">60%</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Total Progress</h3>
            <p className="text-muted-foreground text-sm">450 / 750 Topics</p>
          </div>

          {/* Physics */}
          <SubjectCard
            name="Physics"
            icon={<Zap className="w-6 h-6" />}
            topics="120 / 250 Topics"
            coverage={48}
            colorClass="physics"
            glowColor="59,130,246"
          />

          {/* Chemistry */}
          <SubjectCard
            name="Chemistry"
            icon={<FlaskConical className="w-6 h-6" />}
            topics="185 / 250 Topics"
            coverage={74}
            colorClass="chemistry"
            glowColor="245,158,11"
          />

          {/* Maths */}
          <SubjectCard
            name="Maths"
            icon={<Calculator className="w-6 h-6" />}
            topics="145 / 250 Topics"
            coverage={58}
            colorClass="maths"
            glowColor="139,92,246"
          />
        </div>
      </div>
    </section>
  );
};

interface SubjectCardProps {
  name: string;
  icon: React.ReactNode;
  topics: string;
  coverage: number;
  colorClass: string;
  glowColor: string;
}

const SubjectCard = ({ name, icon, topics, coverage, colorClass, glowColor }: SubjectCardProps) => (
  <div className={`p-8 bg-card border border-white/5 rounded-3xl space-y-6 hover:border-${colorClass}/30 transition-all duration-300`}>
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-${colorClass}/10 flex items-center justify-center text-${colorClass}`} style={{ boxShadow: `0 0 15px rgba(${glowColor},0.2)` }}>
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{topics}</p>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">Coverage</span>
        <span className="text-white font-medium">{coverage}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full bg-${colorClass} rounded-full`} style={{ width: `${coverage}%`, boxShadow: `0 0 8px rgba(${glowColor},0.4)` }} />
      </div>
    </div>
  </div>
);

export default ProgressSection;
