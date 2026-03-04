import { useState } from "react";
import { Download, FileText } from "lucide-react";

const sheets = [
  {
    subject: "Physics",
    count: "24 Sheets",
    title: "Modern Physics & Optics",
    description: "Complete formula sheet and 50+ solved numericals for high-weightage chapters.",
    updated: "Updated 2 days ago",
    colorClass: "physics",
    image: "https://cet-sheet.vercel.app/assets/Adobe%20Express%20-%20file-ByNV7Ugg.png",
  },
  {
    subject: "Chemistry",
    count: "18 Sheets",
    title: "Organic Synthesis Hub",
    description: "Mechanism charts for all named reactions and reagent usage tables.",
    updated: "Updated 1 week ago",
    colorClass: "chemistry",
    image: "https://cet-sheet.vercel.app/assets/Remove%20background%20project-DZDZcWY1.png",
  },
  {
    subject: "Maths",
    count: "32 Sheets",
    title: "Calculus Mastery Pack",
    description: "Shortcuts for Integration, Differentiation, and Differential Equations.",
    updated: "Updated Today",
    colorClass: "maths",
    image: "https://cet-sheet.vercel.app/assets/Remove%20background%20project%20(1)-BFmS4UJB.png",
  },
];

const filters = ["All", "Physics", "Chemistry", "Maths"];

const StudySheetsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSheets = activeFilter === "All" ? sheets : sheets.filter((s) => s.subject === activeFilter);

  return (
    <section id="sheets" className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">📚 Study Sheets</h2>
            <p className="text-muted-foreground max-w-xl">Download and practice with our curated master sheets for every topic in the CET syllabus.</p>
          </div>
          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-black font-semibold shadow-[0_0_15px_rgba(0,195,201,0.3)]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSheets.map((sheet) => (
            <div
              key={sheet.title}
              className="group relative bg-card border border-white/5 p-6 rounded-3xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,195,201,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Background icon */}
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-24 h-24" />
              </div>

              <div className="mb-8 relative z-10">
                <div className="overflow-hidden rounded-2xl mb-6 border border-white/5">
                  <img
                    src={sheet.image}
                    alt={`${sheet.subject} Master Sheet`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${sheet.colorClass}/10 text-${sheet.colorClass} uppercase`}>
                    {sheet.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-muted-foreground uppercase">
                    {sheet.count}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{sheet.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sheet.description}</p>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs text-muted-foreground">{sheet.updated}</span>
                <button
                  className="p-3 rounded-xl bg-white/5 hover:bg-primary hover:text-black text-white transition-all duration-300"
                  style={{ boxShadow: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 15px rgba(0,195,201,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySheetsSection;
