import { useState } from 'react';
import { profile } from '../data';

const channels = [
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Location',
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Builds a mailto link that pre-fills the user's default email client.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || 'your portfolio visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? `\nReply to: ${form.email}` : ''}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <span className="section-badge">
          <i className="fa-solid fa-satellite-dish" /> Contact
        </span>
        <h2 className="heading">Let&apos;s launch something together</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Have an opportunity, a project, or just want to say hi? Drop me a message — I read every
          email.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Direct mailto card */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold text-white">Reach me directly</h3>
          <p className="mt-2 text-sm text-slate-400">
            Prefer email? One click opens your mail app with a ready-to-send message.
          </p>

          <div className="mt-6 space-y-4">
            {channels.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nebula-violet to-nebula-indigo text-white">
                  <i className={c.icon} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="truncate text-sm font-medium text-slate-200 hover:text-cyan-300">
                      {c.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium text-slate-200">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a href={`mailto:${profile.email}`} className="btn-primary mt-6 w-full">
            <i className="fa-solid fa-envelope-open-text" /> Send me an Email
          </a>
        </div>

        {/* mailto form that fills the email client */}
        <form onSubmit={handleSubmit} className="glass-card space-y-4 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            <i className="fa-solid fa-paper-plane" /> Send Message
          </button>
          <p className="text-center text-xs text-slate-500">
            This opens your email client with your message pre-filled — no data is stored.
          </p>
        </form>
      </div>
    </section>
  );
}
