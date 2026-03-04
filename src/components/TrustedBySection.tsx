const institutions = [
  "Vidyalankar", "Allen Group", "Resonance", "Akash Inst.", "Career Point", "Pace IIT",
  "Vidyalankar", "Allen Group", "Resonance", "Akash Inst.", "Career Point", "Pace IIT",
];

const TrustedBySection = () => {
  return (
    <section className="px-4 py-16 border-t border-border/50">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by <span className="text-foreground font-medium">10,000+</span> Students from top institutions
        </p>
        <div className="mask-marquee overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {institutions.map((name, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-semibold text-muted-foreground/40">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
