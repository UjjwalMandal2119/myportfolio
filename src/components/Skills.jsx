import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <span className="section-badge">
          <i className="fa-solid fa-wand-magic-sparkles" /> Skills
        </span>
        <h2 className="heading">Tools &amp; technologies I orbit with</h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="glass-card group p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5">
              <i className={`${skill.icon} text-xl ${skill.accent}`} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-white">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <i className="fa-solid fa-circle-check mt-1 text-xs text-cyan-400/70" />
                  <span className="group-hover:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
