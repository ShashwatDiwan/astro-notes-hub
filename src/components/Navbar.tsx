import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-nav">
      <div className="max-w-[1200px] mx-auto flex h-[72px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary" style={{ boxShadow: "0 0 15px rgba(0,195,201,0.4)" }}>
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-base font-semibold text-white">Master CET Sheet</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-muted-foreground transition-colors hover:text-white">Home</a>
          <a href="#progress" className="text-sm text-muted-foreground transition-colors hover:text-white">Progress</a>
          <a href="#sheets" className="text-sm text-muted-foreground transition-colors hover:text-white">Study Sheets</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors sm:inline">Login</span>
          <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
