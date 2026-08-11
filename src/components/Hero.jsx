import { profile } from '../data';
import photo from '../assets/ujjwal.jpg';

const socials = [
  { href: profile.github, icon: 'fa-brands fa-github', label: 'GitHub' },
  { href: profile.linkedin, icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: profile.leetcode, icon: 'fa-solid fa-code', label: 'LeetCode' },
];

function SolarSystem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[400px]">
      {/* Orbit rings */}
      <div className="absolute inset-0 orbit-ring" />
      <div className="absolute inset-[13%] orbit-ring" />
      <div className="absolute inset-[27%] orbit-ring" />

      {/* Orbiting planets */}
      <div className="absolute inset-0 animate-orbit-a">
        <span
          className="orbiting-planet h-3 w-3 bg-gradient-to-br from-nebula-cyan to-nebula-indigo shadow-lg shadow-nebula-cyan/60"
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>
      <div className="absolute inset-[13%] animate-orbit-b">
        <span
          className="orbiting-planet h-2 w-2 bg-gradient-to-br from-nebula-pink to-nebula-violet shadow-md shadow-nebula-pink/60"
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>
      <div className="absolute inset-[27%] animate-orbit-c">
        <span
          className="orbiting-planet h-2.5 w-2.5 bg-gradient-to-br from-amber-300 to-nebula-pink shadow-md shadow-amber-300/50"
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>

      {/* Sun glow + photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-nebula-violet/40 blur-3xl animate-pulse-glow sm:h-48 sm:w-48" />
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-nebula-violet/40 animate-float sm:h-44 sm:w-44">
          <img src={photo} alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-5 pt-24 pb-16 md:flex-row md:gap-16">
      <div className="flex-1 text-center md:text-left">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for internships & collaborations
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="text-gradient">Ujjwal Mandal</span>
        </h1>
        <p className="mt-2 text-lg font-medium text-slate-300">{profile.role}</p>
        <p className="mt-5 max-w-xl text-base text-slate-400">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a href="#projects" className="btn-primary">
            <i className="fa-solid fa-rocket" /> View Projects
          </a>
          <a href={`mailto:${profile.email}`} className="btn-secondary">
            <i className="fa-solid fa-paper-plane" /> Get In Touch
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:text-cyan-300"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <SolarSystem />
      </div>
    </section>
  );
}
