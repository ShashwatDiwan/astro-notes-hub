const institutions = [
  "Vidyalankar", "Allen Group", "Resonance", "Akash Inst.", "Career Point", "Pace IIT",
];

const TrustedBySection = () => {
  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Trusted by 10,000+ Students from top institutions
          </p>
        </div>
        <div className="w-full h-[60px] relative overflow-hidden mask-marquee">
          <div className="animate-marquee flex flex-row items-center gap-[84px] h-full whitespace-nowrap">
            <div className="flex items-center gap-[84px] flex-shrink-0">
              {institutions.map((name, i) => (
                <span key={`a-${i}`} className="text-white/40 text-xl font-medium tracking-tight">{name}</span>
              ))}
            </div>
            <div className="flex items-center gap-[84px] flex-shrink-0">
              {institutions.map((name, i) => (
                <span key={`b-${i}`} className="text-white/40 text-xl font-medium tracking-tight">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
