import { profile } from '../data';

const highlights = [
  { icon: 'fa-solid fa-briefcase', text: 'Full-Stack (MERN) Developer' },
  { icon: 'fa-solid fa-code', text: '750+ DSA problems on platforms' },
  { icon: 'fa-solid fa-cloud', text: 'AWS EC2 + Nginx deployment' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <span className="section-badge">
          <i className="fa-solid fa-user-astronaut" /> About
        </span>
        <h2 className="heading">A developer exploring the web cosmos</h2>
      </div>

      <div className="mt-10 glass-card p-8 text-center sm:p-12">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
          Passionate CS student from <span className="font-semibold text-white">{profile.location}</span>{' '}
          building responsive web applications with the MERN stack. Recently shipped an
          e-commerce platform (<span className="font-semibold text-cyan-300">VCart</span>) to AWS
          EC2 with Nginx. Strong in data structures, algorithms, networking and cloud
          computing — currently levelling up in AWS &amp; DevOps for full-stack roles.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <i className={`${h.icon} mb-3 block text-2xl text-cyan-300`} />
              <p className="text-sm font-medium text-slate-300">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
