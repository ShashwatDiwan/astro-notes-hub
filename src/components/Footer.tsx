import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-4 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary glow-sm">
            <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">Master CET Sheet</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 EbookStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
