import Logo from '../assets/Logo.png';
import { NavLink } from './common/NavLink';
import { navigationLinks } from '@/services/dataService';
import { useActiveSection } from '@/hooks/useActiveSection';

const Navbar = () => {
  // Track active section based on scroll position
  const activeSection = useActiveSection(['home', 'dashboard', 'sheets']);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'hsl(222 47% 3%)' }}>
      <div className="max-w-[1200px] mx-auto flex h-[72px] items-center justify-between px-6">
        {/* Logo Section */}
        <NavbarLogo />

        {/* Navigation Links */}
        <NavbarLinks activeSection={activeSection} />

        {/* Auth Buttons */}
        <NavbarAuth />
      </div>
    </nav>
  );
};

/**
 * Logo Component
 */
const NavbarLogo = () => (
  <div className="flex items-center gap-3">
    <img src={Logo} alt="Logo" className="h-9 w-9 object-contain" />
    <span className="text-base font-bold text-white">Master Cet Sheet</span>
  </div>
);

/**
 * Navigation Links Component
 */
interface NavbarLinksProps {
  activeSection: string;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ activeSection }) => (
  <div className="hidden items-center gap-8 md:flex">
    {navigationLinks.map((link) => {
      // Extract section ID from href
      const sectionId = link.href.startsWith('#') ? link.href.slice(1) : link.href;
      const isActive = activeSection === sectionId;
      
      return (
        <NavLink
          key={link.name}
          href={link.href}
          label={link.name}
          isActive={isActive}
        />
      );
    })}
  </div>
);

/**
 * Auth Buttons Component
 */
const NavbarAuth = () => (
  <div className="flex items-center gap-4">
    <span className="hidden text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors sm:inline">
      Login
    </span>
    <button className="rounded-lg border border-white/10 bg-white px-6 py-2 text-sm font-semibold text-black transition-all hover:brightness-95 shadow-sm">
      Register
    </button>
  </div>
);

export default Navbar;
