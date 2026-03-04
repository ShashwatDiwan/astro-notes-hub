const ProgressSection = () => {
  const subjects = [
    { name: "Physics", topics: 120, total: 250, coverage: 48, color: "hsl(var(--primary))" },
    { name: "Chemistry", topics: 185, total: 250, coverage: 74, color: "hsl(25 95% 55%)" },
    { name: "Maths", topics: 145, total: 250, coverage: 58, color: "hsl(270 70% 60%)" },
  ];

  return (
    <section className="px-4 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Total Learning Progress
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real-time breakdown of your CET preparation coverage across all core subjects.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8">
          {/* Overall progress */}
          <div className="flex items-center gap-8 mb-8">
            <div className="relative flex h-28 w-28 flex-shrink-0 items-center justify-center">
              <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray={`${60 * 2.64} ${100 * 2.64}`} strokeLinecap="round" />
              </svg>
              <span className="absolute text-2xl font-bold text-foreground">60%</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Total Progress</h3>
              <p className="text-sm text-muted-foreground">450 / 750 Topics</p>
            </div>
          </div>

          {/* Subject breakdown */}
          <div className="space-y-5">
            {subjects.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">{s.name}</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">{s.topics} / {s.total} Topics</span>
                    <span className="text-xs font-medium text-muted-foreground">Coverage <span className="text-foreground">{s.coverage}%</span></span>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full transition-all" style={{ width: `${s.coverage}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
