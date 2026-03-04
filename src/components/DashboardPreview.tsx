import { Home, BookOpen, BarChart3, Zap, FlaskConical, Calculator, CheckCircle2 } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative px-4 pb-24 -mt-8">
      <div className="container">
        <div className="glow-border mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex min-h-[460px]">
            {/* Sidebar */}
            <div className="hidden w-60 flex-shrink-0 border-r border-border bg-sidebar p-6 md:block">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <BookOpen className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-base font-bold text-foreground tracking-tight">Study Portal</span>
              </div>
              <nav className="space-y-1.5">
                <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent px-4 py-2.5">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Overview</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Performance</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Study Sheets</span>
                </div>
              </nav>
            </div>

            {/* Main */}
            <div className="flex-1 p-6 md:p-8">
              {/* Status */}
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Current Status</div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs text-primary font-semibold">Learning Active</span>
              </div>

              {/* Welcome */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">Welcome back, Student</h3>
                  <p className="mt-1 text-sm text-muted-foreground">You have completed 45% of your Physics syllabus.</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-primary">78%</span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mt-1">Target Readiness</p>
                </div>
              </div>

              {/* Subject cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { name: "Physics", progress: 65, icon: Zap, color: "hsl(var(--primary))" },
                  { name: "Chemistry", progress: 32, icon: FlaskConical, color: "hsl(25 95% 55%)" },
                  { name: "Mathematics", progress: 88, icon: Calculator, color: "hsl(270 70% 60%)" },
                ].map((s) => (
                  <div key={s.name} className="rounded-xl border border-border bg-secondary/60 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${s.color} 15%, transparent)` }}>
                        <s.icon className="h-4 w-4" style={{ color: s.color }} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{s.progress}% Done</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">{s.name}</p>
                    <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full" style={{ width: `${s.progress}%`, backgroundColor: s.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Milestones */}
              <div className="mt-8">
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Recent Milestones</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Completed "Optics" Theory Sheet</p>
                        <p className="text-xs text-muted-foreground mt-0.5">2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-primary border border-primary/30 rounded-lg px-4 py-1.5 hover:bg-primary/10 transition-colors">Review</button>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Started "Organic Chemistry" Quick Revision</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Yesterday</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-primary border border-primary/30 rounded-lg px-4 py-1.5 hover:bg-primary/10 transition-colors">Continue</button>
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
