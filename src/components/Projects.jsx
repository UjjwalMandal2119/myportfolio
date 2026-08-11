import { useEffect, useState } from 'react';
import { profile } from '../data';

const GITHUB_API = `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=100`;

function Card({ repo }) {
  return (
    <div className="glass-card flex flex-col p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
        {repo.fork && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase text-slate-400">
            fork
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm text-slate-400">
        {repo.description || 'No description provided yet.'}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span>
            <i className="fa-solid fa-star mr-1 text-amber-300" />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span>
            <i className="fa-solid fa-code-fork mr-1" />
            {repo.forks_count}
          </span>
        )}
        <span className="ml-auto">
          <i className="fa-regular fa-clock mr-1" />
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
        >
          <i className="fa-brands fa-github" /> View Repo
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" /> Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(GITHUB_API, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setRepos(list.filter((r) => !r.fork).slice(0, 8));
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <span className="section-badge">
          <i className="fa-brands fa-github" /> Projects
        </span>
        <h2 className="heading">Latest work launched from my GitHub</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Live synced from my GitHub repositories — always up to date as I ship new code.
        </p>
      </div>

      <div className="mt-12">
        {error && (
          <div className="glass-card mx-auto max-w-xl p-8 text-center">
            <i className="fa-solid fa-triangle-exclamation mb-3 text-3xl text-amber-300" />
            <p className="text-slate-300">Could not load GitHub projects right now.</p>
            <p className="mt-1 text-sm text-slate-500">{error}</p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary mt-5 !px-5 !py-2 text-xs">
              <i className="fa-brands fa-github" /> Open GitHub
            </a>
          </div>
        )}

        {!repos && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="glass-card h-52 animate-pulse bg-white/5" />
            ))}
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <Card key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        {repos && repos.length === 0 && !error && (
          <div className="glass-card mx-auto max-w-xl p-8 text-center text-slate-400">
            <i className="fa-solid fa-inbox mb-3 text-3xl" />
            <p>No public repositories found yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
