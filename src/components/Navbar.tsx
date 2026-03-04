import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">Master CET Sheet</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Progress</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Study Sheets</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-muted-foreground sm:inline">Login</span>
          <Button variant="outline" size="sm" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/10">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
