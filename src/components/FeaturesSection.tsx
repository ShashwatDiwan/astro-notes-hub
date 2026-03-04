import { BookOpen } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.png";

const FeaturesSection = () => {
  return (
    <section className="relative px-4 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--section-glow)" }} />

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Interactive Learning</span>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl leading-tight">
              Master Every Topic with{" "}
              <span className="text-gradient">Data-Driven Sheets</span>
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our sheets are not just PDFs. They are designed using cognitive learning patterns that help you retain complex information up to 3x faster than traditional methods.
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-12">
              <div>
                <p className="text-4xl font-extrabold text-foreground">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Conceptual Charts</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-4xl font-extrabold text-foreground">20k+</p>
                <p className="mt-1 text-sm text-muted-foreground">Practice Problems</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[350px] w-[400px] rounded-full bg-primary/10 blur-[120px] glow-blob-slow" />
            </div>
            <div className="relative rounded-2xl border border-border overflow-hidden glow-border" style={{ boxShadow: "0 20px 60px -15px hsl(187 94% 43% / 0.2), 0 0 0 1px hsl(220 15% 14%)" }}>
              <img 
                src={dashboardImage} 
                alt="Interactive dashboard preview showing study progress" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
