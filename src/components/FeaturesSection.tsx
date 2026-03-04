import dashboardImage from "@/assets/dashboard-preview.png";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-full max-w-[1400px] h-[600px] bg-primary/15 blur-[160px] rounded-full opacity-40" />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest text-xs uppercase">
            <span className="w-8 h-px bg-primary" />
            Interactive Learning
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
            Master Every Topic with <span className="text-primary">Data-Driven</span> Sheets
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our sheets are not just PDFs. They are designed using cognitive learning patterns that help you retain complex information up to 3x faster than traditional methods.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">500+</div>
              <p className="text-sm text-muted-foreground">Conceptual Charts</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">20k+</div>
              <p className="text-sm text-muted-foreground">Practice Problems</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl -z-10" />
          <img
            src={dashboardImage}
            alt="CET Sheets Visualization"
            className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
