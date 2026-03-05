import { useState } from "react";

const subjectData = {
  Physics: [
    { chapter: "Mechanics", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "12%" },
    { chapter: "Heat & Thermodynamics", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "8%" },
    { chapter: "Oscillations & Waves", notes: "✓", short: "✓", pyqs: "-", revise: "⭐", weight: "10%" },
    { chapter: "Optics", notes: "-", short: "✓", pyqs: "✓", revise: "⭐", weight: "9%" },
    { chapter: "Modern Physics", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "15%" },
    { chapter: "Electrostatics", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "11%" },
  ],
  Chemistry: [
    { chapter: "Structure of Atom", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "4%" },
    { chapter: "Chemical Bonding", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "Redox Reactions", notes: "-", short: "-", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "s-Block Elements", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "d and f block Elements", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "4%" },
    { chapter: "States of Matter", notes: "-", short: "-", pyqs: "-", revise: "⭐", weight: "4%" },
  ],
  Maths: [
    { chapter: "Functions", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "8%" },
    { chapter: "Limits & Continuity", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "7%" },
    { chapter: "Differentiation", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "10%" },
    { chapter: "Integration", notes: "✓", short: "✓", pyqs: "✓", revise: "⭐", weight: "9%" },
    { chapter: "Vectors", notes: "-", short: "✓", pyqs: "-", revise: "⭐", weight: "8%" },
    { chapter: "3D Geometry", notes: "✓", short: "-", pyqs: "✓", revise: "⭐", weight: "8%" },
  ],
};

const StudySheetsSection = () => {
  const [activeSubject, setActiveSubject] = useState("Physics");

  const subjects = ["Physics", "Chemistry", "Maths"];
  const currentData = subjectData[activeSubject as keyof typeof subjectData] || [];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Floating Card Container */}
        <div className="relative rounded-3xl border border-white/10 overflow-hidden" 
          style={{
            background: "linear-gradient(90deg, #0a0a0c 0%, #080809 100%)",
            boxShadow: "0 25px 50px rgba(0,195,201,0.08), 0 10px 25px rgba(0,0,0,0.5)"
          }}
        >

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Study Sheets</h2>

              {/* Subject Tabs */}
              <div className="flex gap-3 flex-wrap">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => setActiveSubject(subject)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      activeSubject === subject
                        ? "bg-white text-black"
                        : "bg-white/5 border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-semibold text-sm">Chapter</th>
                    <th className="text-center py-4 px-4 text-white/60 font-semibold text-sm">Notes</th>
                    <th className="text-center py-4 px-4 text-white/60 font-semibold text-sm">Short</th>
                    <th className="text-center py-4 px-4 text-white/60 font-semibold text-sm">PYQs</th>
                    <th className="text-center py-4 px-4 text-white/60 font-semibold text-sm">Revise</th>
                    <th className="text-right py-4 px-4 text-white/60 font-semibold text-sm">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-white text-sm font-medium">{row.chapter}</td>
                      <td className="py-4 px-4 text-center text-white/70 text-sm">{row.notes}</td>
                      <td className="py-4 px-4 text-center text-white/70 text-sm">{row.short}</td>
                      <td className="py-4 px-4 text-center text-white/70 text-sm">{row.pyqs}</td>
                      <td className="py-4 px-4 text-center text-lg">{row.revise}</td>
                      <td className="py-4 px-4 text-right text-sm font-semibold" style={{ color: "hsl(38 92% 50%)" }}>
                        {row.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySheetsSection;
