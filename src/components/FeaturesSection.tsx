import { BookOpen, BarChart3, FileText, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Study Sheets",
    description: "Curated chapter-wise study materials for Physics, Chemistry, and Mathematics.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your completion and revision status across all chapters in real time.",
  },
  {
    icon: FileText,
    title: "Notes & PYQs",
    description: "Access detailed notes, short notes, and previous year questions for every chapter.",
  },
  {
    icon: CheckCircle2,
    title: "Revision Planner",
    description: "Mark chapters as completed and revised to stay on track with your study plan.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to <span className="text-gradient">ace CET</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete toolkit designed to make your CET preparation systematic and effective.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
