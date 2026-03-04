import { BookOpen } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 bg-glow-spot opacity-50" />

      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left - Text */}
          <div>
            {/* Label with line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Interactive Learning</span>
            </div>

            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl leading-[1.1] tracking-tight">
              Master Every Topic with{" "}
              <span className="text-gradient">Data-Driven</span> Sheets
            </h2>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
              Our sheets are not just PDFs. They are designed using cognitive learning patterns that help you retain complex information up to 3x faster than traditional methods.
            </p>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-16">
              <div>
                <p className="text-4xl font-bold text-foreground tracking-tight">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Conceptual Charts</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground tracking-tight">20k+</p>
                <p className="mt-1 text-sm text-muted-foreground">Practice Problems</p>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="glow-border rounded-2xl border border-border bg-card overflow-hidden">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="ml-3 flex-1 rounded-md bg-secondary h-6" />
              </div>
              {/* Content mockup */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">CET Sheets</span>
                  </div>
                  <div className="ml-auto flex gap-2">
                    {["Features", "Pricing", "Docs"].map(t => (
                      <span key={t} className="text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="text-center py-6">
                  <p className="text-lg font-bold text-foreground">Master your CET preparation</p>
                  <p className="text-xs text-muted-foreground mt-1">Comprehensive study companion</p>
                  <div className="mt-4 mx-auto w-fit rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background">Get started →</div>
                </div>
                {/* Mini dashboard */}
                <div className="rounded-xl border border-border bg-secondary/50 p-4">
                  <div className="flex gap-3">
                    <div className="w-28 space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3 w-3 text-primary" />
                        <span className="text-[10px] font-semibold text-foreground">Dashboard</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground">Agents</div>
                      <div className="text-[10px] text-muted-foreground">Analytics</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-card border border-border p-2.5">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">System Objectives</p>
                        <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">Analyzing data to optimize study patterns...</p>
                      </div>
                      <div className="rounded-lg bg-card border border-border p-2.5">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Live Execution Log</p>
                        <div className="mt-1 space-y-0.5">
                          <p className="text-[10px] text-muted-foreground font-mono">[INFO] Analyzing data...</p>
                          <p className="text-[10px] text-primary font-mono">[SYSTEM] Ready at 14% capacity</p>
                        </div>
                      </div>
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

export default FeaturesSection;
