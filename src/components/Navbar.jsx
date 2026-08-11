import { profile } from '../data';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-space-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-nebula-violet to-nebula-indigo text-sm">
            <i className="fa-solid fa-rocket" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">UM</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="btn-primary !px-4 !py-2 text-xs sm:text-sm"
        >
          <i className="fa-solid fa-paper-plane" />
          <span className="hidden sm:inline">Hire Me</span>
          <span className="sm:hidden">Mail</span>
        </a>
      </nav>
    </header>
  );
}
