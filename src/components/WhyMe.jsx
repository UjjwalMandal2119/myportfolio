import { profile, whyMe } from '../data';

export default function WhyMe() {
  return (
    <section id="why-me" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <span className="section-badge">
          <i className="fa-solid fa-star" /> Why Me
        </span>
        <h2 className="heading">Why teams choose to work with me</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Code alone doesn&apos;t ship products. Here&apos;s what I bring — from idea to production.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
          {/* Left — pitch, stats, CTA */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              I ship code.
              <span className="text-gradient"> I ship it live too.</span>
            </h3>
            <p className="mt-4 leading-relaxed text-slate-400">{whyMe.pitch}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {whyMe.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition hover:border-white/20"
                >
                  <p className="text-xl font-extrabold text-cyan-300 sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <i className="fa-solid fa-paper-plane" /> Hire Me
              </a>
              <a href="#projects" className="btn-secondary">
                <i className="fa-solid fa-rocket" /> See My Work
              </a>
            </div>
          </div>

          {/* Right — differentiator pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {whyMe.pillars.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${p.card}`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${p.iconBg}`}
                >
                  <i className={`${p.icon} text-xl ${p.accent}`} />
                </span>
                <h4 className="mt-3 text-base font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}