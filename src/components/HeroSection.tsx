import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Teal glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-glow)" }} />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div className="mb-10 animate-fade-up flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Admission Open for 2024–25</span>
      </div>

      {/* Heading */}
      <h1 className="animate-fade-up max-w-5xl text-center font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
        EbookStore's Master{" "}
        <span className="text-gradient">CET Sheet</span>
      </h1>

      {/* Subheading */}
      <p className="mt-8 animate-fade-up max-w-2xl text-center text-base text-muted-foreground md:text-lg leading-relaxed" style={{ animationDelay: "0.2s" }}>
        Your comprehensive study companion for CET preparation.
        <br />
        Track progress, master formulas, and ace your exams with ease.
      </p>

      {/* CTAs */}
      <div className="mt-12 animate-fade-up flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
        <Button size="lg" className="h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-10 text-sm font-semibold tracking-wide">
          View Study Sheets <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="h-14 rounded-full border-foreground/20 text-foreground hover:bg-foreground/10 px-10 text-sm font-semibold tracking-wide">
          Track My Progress
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
