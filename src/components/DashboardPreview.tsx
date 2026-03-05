import { Home, BookOpen, BarChart3, Zap, FlaskConical, Calculator, CheckCircle2 } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative px-4 py-0 -mt-32">
      {/* Semi-circular glow blob behind dashboard - bright at center, fades sideways */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-30" style={{ top: '-50px', width: '1400px', height: '700px' }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 600px 300px at center top, rgba(0,195,201,0.28) 0%, rgba(0,195,201,0.18) 15%, rgba(0,195,201,0.06) 35%, transparent 65%)',
          filter: 'blur(120px)',
          borderRadius: '50% 50% 0% 0%'
        }} />
      </div>

      <div className="container relative pt-16">
        <div className="glow-border mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border relative" style={{ background: 'linear-gradient(90deg, #0a0a0c 0%, #080809 100%)' }}>
          {/* thin centered top highlight with fade effect - bright at center, fades sideways */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/5 h-[1.5px] rounded-full" style={{ 
            background: 'linear-gradient(90deg, rgba(0,195,201,0) 0%, rgba(0,195,201,0.6) 35%, rgba(0,195,201,0.8) 50%, rgba(0,195,201,0.6) 65%, rgba(0,195,201,0) 100%)',
            boxShadow: '0 0 25px rgba(0,195,201,0.7), 0 0 45px rgba(0,195,201,0.4), 0 0 80px rgba(0,195,201,0.15)' 
          }} />
          <div className="flex min-h-[500px]">
            {/* Sidebar (left tone slightly lighter) */}
            <div className="hidden w-56 flex-shrink-0 border-r border-white/5 p-5 md:block" style={{ background: "#0a0a0c" }}>
              <div className="mb-8 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white glow-sm">
                  <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">Study Portal</span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-2.5 rounded-lg bg-white/10 px-3 py-2 cursor-pointer hover:bg-white/10 transition-colors">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-white">Overview</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-white font-medium transition-colors cursor-pointer rounded-lg hover:bg-white/10">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Performance</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-white font-medium transition-colors cursor-pointer rounded-lg hover:bg-white/10">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Sheets</span>
                </div>
        
              </nav>
            </div>

            {/* Main content (right tone slightly darker) */}
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

              {/* Subject cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { name: "Physics", progress: 65, icon: Zap, color: `hsl(var(--physics))` },
                  { name: "Chemistry", progress: 32, icon: FlaskConical, color: `hsl(38 92% 50%)` },
                  { name: "Mathematics", progress: 88, icon: Calculator, color: `hsl(263 70% 50%)` },
                ].map((subject) => (
                  <div key={subject.name} className="rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/20 hover:glow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: subject.color, opacity: 0.12 }}>
                        <subject.icon className="h-4 w-4" style={{ color: subject.color }} />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{subject.progress}% Done</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{subject.name}</p>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full transition-all" style={{ width: `${subject.progress}%`, backgroundColor: subject.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom section with Status and Milestones */}
              <div className="mt-auto flex gap-6">
               
                {/* Recent Milestones - Bottom Right */}
                <div className="flex-1">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Recent Milestones</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Completed "Optics" Theory Sheet</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold text-white border border-white/20 rounded-md px-3 py-1 hover:bg-white/10 transition-colors">Review</button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-[hsl(45_90%_55%)]" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Started "Organic Chemistry" Quick Revision</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                      <button className="text-xs font-semibold text-white border border-white/20 rounded-md px-3 py-1 hover:bg-white/10 transition-colors">Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
