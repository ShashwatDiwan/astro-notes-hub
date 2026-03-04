import { BookOpen, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Interactive Learning</span>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Master Every Topic with <span className="text-gradient">Data-Driven Sheets</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our sheets are not just PDFs. They are designed using cognitive learning patterns that help you retain complex information up to 3x faster than traditional methods.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-foreground">500+</p>
            <p className="mt-1 text-sm text-muted-foreground">Conceptual Charts</p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-foreground">20k+</p>
            <p className="mt-1 text-sm text-muted-foreground">Practice Problems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
