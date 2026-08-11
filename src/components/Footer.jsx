import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-space-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; a touch
          of the cosmos. 🚀
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white"
        >
          <i className="fa-solid fa-envelope" /> {profile.email}
        </a>
      </div>
    </footer>
  );
}
