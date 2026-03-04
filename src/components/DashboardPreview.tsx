import { Home, BookOpen, BarChart3 } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative px-4 pb-20">
      <div className="container">
        <div className="glow-border mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex min-h-[320px]">
            {/* Sidebar */}
            <div className="hidden w-56 flex-shrink-0 border-r border-border bg-sidebar p-5 md:block">
              <div className="mb-8 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                  <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">Study Portal</span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-2.5 rounded-lg bg-sidebar-accent px-3 py-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Overview</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-sidebar-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Sheets</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-sidebar-foreground">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Analytics</span>
                </div>
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Welcome back, Student</h3>
                  <p className="mt-1 text-sm text-muted-foreground">You have completed 45% of your Physics syllabus.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">78%</span>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Target Readiness</p>
                </div>
              </div>

              {/* Subject cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { name: "Physics", progress: 45, chapters: 12 },
                  { name: "Chemistry", progress: 62, chapters: 15 },
                  { name: "Mathematics", progress: 38, chapters: 18 },
                ].map((subject) => (
                  <div key={subject.name} className="rounded-xl border border-border bg-secondary/50 p-4">
                    <p className="text-sm font-medium text-foreground">{subject.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{subject.chapters} chapters</p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${subject.progress}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{subject.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
