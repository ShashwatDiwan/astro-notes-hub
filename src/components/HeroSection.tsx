import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Animated glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[160px] glow-blob" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-secondary/15 blur-[140px] glow-blob-slow" />

      {/* Teal glow effect */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-glow)" }} />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.35) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 55%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 55%, black 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div className="mb-8 animate-fade-up flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 glow-sm">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-medium tracking-wide text-primary uppercase">Admission Open for 2024–25</span>
      </div>

      {/* Heading */}
      <h1 className="animate-fade-up max-w-4xl text-center font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl" style={{ animationDelay: "0.1s" }}>
        EbookStore's Master{" "}
        <span className="text-gradient">CET Sheet</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 animate-fade-up max-w-2xl text-center text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
        Your comprehensive study companion for CET preparation.
        <br />
        Track progress, master formulas, and ace your exams with ease.
      </p>

      {/* CTAs */}
      <div className="mt-10 animate-fade-up flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
        <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 text-sm font-medium glow-button transition-all">
          View Study Sheets <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted hover:border-primary/30 px-8 text-sm font-medium transition-all">
          Track My Progress
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
