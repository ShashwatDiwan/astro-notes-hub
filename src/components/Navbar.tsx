import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden bg-primary/20">
            <img src="https://cet-sheet.vercel.app/assets/Adobe%20Express%20-%20file-ByNV7Ugg.png" alt="Logo" className="h-6 w-6 object-contain" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Master CET Sheet</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">Home</a>
          <a href="#progress" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">Progress</a>
          <a href="#sheets" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">Study Sheets</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-muted-foreground font-medium sm:inline cursor-pointer hover:text-foreground transition-colors">Login</span>
          <Button variant="outline" size="sm" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold px-5">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
