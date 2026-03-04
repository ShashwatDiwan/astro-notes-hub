const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      {/* Grid pattern - vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.02) 2px, transparent 2px)",
          backgroundSize: "1px 6px",
          maskImage: "linear-gradient(to right, black 1px, transparent 1px)",
          WebkitMaskImage: "linear-gradient(to right, black 1px, transparent 1px)",
          maskSize: "48px 100%",
          WebkitMaskSize: "48px 100%",
        }}
      />
      {/* Grid pattern - horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 2px, transparent 2px)",
          backgroundSize: "6px 1px",
          maskImage: "linear-gradient(to bottom, black 1px, transparent 1px)",
          WebkitMaskImage: "linear-gradient(to bottom, black 1px, transparent 1px)",
          maskSize: "100% 48px",
          WebkitMaskSize: "100% 48px",
        }}
      />

      {/* Blue Glow Spots */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
    </div>
  );
};

export default GlobalBackground;
