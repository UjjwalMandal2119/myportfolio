import { useMemo } from 'react';

// Generates a set of "stars" rendered as tiny glowing dots.
export default function Starfield({ count = 70 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 stars" />
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {/* Soft nebula glow accents */}
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-nebula-violet/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-nebula-cyan/10 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-nebula-pink/10 blur-[120px]" />
    </div>
  );
}
