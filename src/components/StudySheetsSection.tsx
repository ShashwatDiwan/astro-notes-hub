const sheets = [
  {
    subject: "Physics",
    count: "24 Sheets",
    title: "Modern Physics & Optics",
    description: "Complete formula sheet and 50+ solved numericals for high-weightage chapters.",
    updated: "Updated 2 days ago",
    color: "hsl(var(--primary))",
    image: "https://cet-sheet.vercel.app/assets/Adobe%20Express%20-%20file-ByNV7Ugg.png",
  },
  {
    subject: "Chemistry",
    count: "18 Sheets",
    title: "Organic Synthesis Hub",
    description: "Mechanism charts for all named reactions and reagent usage tables.",
    updated: "Updated 1 week ago",
    color: "hsl(25 95% 55%)",
    image: "https://cet-sheet.vercel.app/assets/Remove%20background%20project-DZDZcWY1.png",
  },
  {
    subject: "Maths",
    count: "32 Sheets",
    title: "Calculus Mastery Pack",
    description: "Shortcuts for Integration, Differentiation, and Differential Equations.",
    updated: "Updated Today",
    color: "hsl(270 70% 60%)",
    image: "https://cet-sheet.vercel.app/assets/Remove%20background%20project%20(1)-BFmS4UJB.png",
  },
];

const StudySheetsSection = () => {
  return (
    <section id="sheets" className="px-4 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            📚 Study Sheets
          </h2>
          <p className="mt-4 text-muted-foreground">
            Download and practice with our curated master sheets for every topic in the CET syllabus.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {sheets.map((sheet) => (
            <div key={sheet.subject} className="group rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/30">
              <div className="aspect-[4/3] overflow-hidden bg-secondary/50 flex items-center justify-center p-4">
                <img src={sheet.image} alt={`${sheet.subject} Master Sheet`} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ backgroundColor: `${sheet.color}20`, color: sheet.color }}>{sheet.subject}</span>
                  <span className="text-xs text-muted-foreground">{sheet.count}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{sheet.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{sheet.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">{sheet.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySheetsSection;
