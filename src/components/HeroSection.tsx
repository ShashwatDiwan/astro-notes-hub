import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden py-24 px-6">
      {/* Massive Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-primary opacity-20 blur-[180px] rounded-full -z-10 pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-16 pt-12">
        {/* Hero Text */}
        <div className="animate-fade-up relative z-20 flex flex-col items-center text-center gap-6 max-w-[900px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Admission Open for 2024-25
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-[68px] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            EbookStore's Master{" "}
            <span className="text-primary relative">
              CET Sheet
              <span className="absolute inset-0 bg-primary/30 blur-2xl -z-10 opacity-50" />
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
              className="group relative flex items-center justify-center bg-white rounded-lg px-10 h-[52px] overflow-hidden no-underline transition-all duration-200 hover:bg-neutral-100"
              style={{ boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-black font-medium whitespace-nowrap">View Study Sheets</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </a>
            <a
              href="#progress"
              className="flex items-center justify-center border border-white/10 hover:border-white/30 bg-white/5 rounded-lg px-10 h-[52px] text-white font-medium transition-colors"
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
