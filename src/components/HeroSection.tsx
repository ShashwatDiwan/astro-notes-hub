import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center w-full min-h-[75vh] overflow-hidden py-16 px-6">
      {/* Futuristic centered semi-circular glow + subtle grid */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-12 pt-8">
        {/* Hero Text */}
        <div className="animate-fade-up relative z-20 flex flex-col items-center text-center gap-6 max-w-[900px]">
          {/* (Badge removed per design) */}

          {/* Heading */}
          <h1 className="text-4xl lg:text-[68px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            EbookStore's Master{" "}
            <span className="text-primary relative">
              Cet Sheet
              <span className="absolute inset-0" />
            </span>
            
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[600px] leading-[1.6]">
            Your comprehensive study companion for CET preparation. Track progress, master formulas, and ace your exams with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#sheets"
              className="group relative flex items-center justify-center bg-white rounded-lg px-10 h-[52px] overflow-hidden no-underline transition-all duration-200 hover:bg-neutral-100 legacy-typography"
              style={{ boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-black font-medium whitespace-nowrap">View Study Sheets</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </a>
            <a
              href="#progress"
              className="flex items-center justify-center border border-white/10 hover:border-white/30 bg-white/5 rounded-lg px-10 h-[52px] text-white font-medium transition-colors legacy-typography"
            >
              Track My Progress
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
