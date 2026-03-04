import { Home, BookOpen, BarChart3, Zap, FlaskConical, Calculator, CheckCircle2 } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative px-4 pb-20">
      {/* Glow blob behind dashboard */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-primary/10 blur-[180px] glow-blob-slow" />
      </div>

      <div className="container relative">
        <div className="glow-border mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border glass-card">
          <div className="flex min-h-[420px]">
            {/* Sidebar */}
            <div className="hidden w-56 flex-shrink-0 border-r border-border p-5 md:block" style={{ background: "hsl(222 35% 5% / 0.8)" }}>
              <div className="mb-8 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary glow-sm">
                  <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">Study Portal</span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-2.5 rounded-lg bg-primary/10 px-3 py-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Overview</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Performance</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Study Sheets</span>
                </div>
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Current Status</div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-primary font-medium">Learning Active</span>
              </div>

              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Welcome back, Student</h3>
                  <p className="mt-1 text-sm text-muted-foreground">You have completed 45% of your Physics syllabus.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary" style={{ textShadow: "0 0 20px hsl(187 94% 43% / 0.3)" }}>78%</span>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Target Readiness</p>
                </div>
              </div>

              {/* Subject cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { name: "Physics", progress: 65, icon: Zap, color: "hsl(var(--primary))" },
                  { name: "Chemistry", progress: 32, icon: FlaskConical, color: "hsl(25 95% 55%)" },
                  { name: "Mathematics", progress: 88, icon: Calculator, color: "hsl(270 70% 60%)" },
                ].map((subject) => (
                  <div key={subject.name} className="rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/20 hover:glow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `${subject.color}20` }}>
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

              {/* Recent Milestones */}
              <div className="mt-6">
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Recent Milestones</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Completed "Optics" Theory Sheet</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-primary border border-primary/30 rounded-md px-3 py-1 hover:bg-primary/10 transition-colors">Review</button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-[hsl(45_90%_55%)]" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Started "Organic Chemistry" Quick Revision</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-primary border border-primary/30 rounded-md px-3 py-1 hover:bg-primary/10 transition-colors">Continue</button>
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
