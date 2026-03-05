import { CTAButton } from "./common/CTAButton";

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
            <CTAButton
              href="#sheets"
              label="View Study Sheets"
              variant="primary"
              showArrow={true}
            />
            <CTAButton
              href="#progress"
              label="Track My Progress"
              variant="secondary"
              showArrow={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
