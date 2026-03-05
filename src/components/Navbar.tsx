import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'hsl(222 47% 3%)' }}>
      <div className="max-w-[1200px] mx-auto flex h-[72px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-9 w-9 object-contain" />
          <span className="text-base font-bold text-white">Master Cet Sheet</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-white">Home</a>
          <a href="#progress" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-white">Progress</a>
          <a href="#sheets" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-white">Sheets</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors sm:inline">Login</span>
          <button className="rounded-lg border border-white/10 bg-white px-6 py-2 text-sm font-semibold text-black transition-all hover:brightness-95 shadow-sm">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
