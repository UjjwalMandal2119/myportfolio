// Centralised portfolio content — edit this file to update your info.
export const profile = {
  name: 'Ujjwal Mandal',
  role: 'Full-Stack Developer · DevOps & Cloud · Java · Python',
  tagline:
    'CS student who ships full MERN products, solves deep problems in Java (750+ DSA), automates with Python, and deploys on AWS with DevOps practices.',
  location: 'Hazaribag, Jharkhand, India',
  email: 'ujjwal815351@gmail.com',
  phone: '+91 8294823430',
  github: 'https://github.com/UjjwalMandal2119',
  githubUser: 'UjjwalMandal2119',
  linkedin: 'https://www.linkedin.com/in/ujjwal-mandal-5a1112213/',
  leetcode: 'https://leetcode.com/u/ujjwal815351/',
};

export const skills = [
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend',
    accent: 'text-cyan-300',
    items: [
      'HTML5, CSS3, JavaScript, TypeScript',
      'React.js, Next.js, Tailwind CSS',
      'Responsive & accessible UI',
    ],
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend',
    accent: 'text-violet-300',
    items: ['MERN Stack (Node.js, Express, MongoDB)', 'REST APIs & data modeling', 'Auth & payments integration'],
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Languages & DSA',
    accent: 'text-emerald-300',
    items: ['Java — 750+ DSA problems solved', 'Python — automation & scripting', 'Git, GitHub, clean-code practices'],
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud & DevOps',
    accent: 'text-pink-300',
    items: ['AWS EC2 + Nginx deployments', 'CI/CD pipelines (GitHub Actions)', 'Linux, networking, cloud computing'],
  },
];

export const whyMe = {
  pitch:
    "Most developers stop at the code. I carry features from idea to production — writing clean UI, building robust APIs, automating with Python, and deploying on AWS with Nginx from day one. That end-to-end ownership makes me a reliable addition to any product or platform team.",
  stats: [
    { value: '750+', label: 'DSA problems solved in Java' },
    { value: 'MERN', label: 'Full-stack product builds' },
    { value: 'AWS + Nginx', label: 'Production deployments' },
    { value: '2+', label: 'Languages at scale (Java, Python)' },
  ],
  pillars: [
    {
      icon: 'fa-solid fa-cloud',
      accent: 'text-cyan-300',
      card: 'border-cyan-300/20 bg-cyan-400/[0.06]',
      iconBg: 'bg-cyan-400/10',
      title: 'DevOps & Cloud',
      text: "Production deployments on AWS EC2 with Nginx, hands-on Linux, networking and CI/CD. I don't just deliver code — I ship it and keep it running.",
    },
    {
      icon: 'fa-brands fa-java',
      accent: 'text-violet-300',
      card: 'border-violet-300/20 bg-violet-400/[0.06]',
      iconBg: 'bg-violet-400/10',
      title: 'Java & Algorithms',
      text: '750+ DSA problems solved in Java — optimized logic, clean code, and the algorithmic foundation to build fast, scalable systems.',
    },
    {
      icon: 'fa-brands fa-python',
      accent: 'text-emerald-300',
      card: 'border-emerald-300/20 bg-emerald-400/[0.06]',
      iconBg: 'bg-emerald-400/10',
      title: 'Python',
      text: 'Python for automation, scripting and backend tooling — turning repetitive workflows into efficient, reliable, repeatable processes.',
    },
    {
      icon: 'fa-solid fa-layer-group',
      accent: 'text-pink-300',
      card: 'border-pink-300/20 bg-pink-400/[0.06]',
      iconBg: 'bg-pink-400/10',
      title: 'Full-Stack MERN',
      text: 'End-to-end product building: React frontends, Node/Express APIs and MongoDB — designed, built and deployed as one coherent whole.',
    },
  ],
};
