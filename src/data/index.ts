import type { Project, SkillCategory, Education, ContactLink, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    issue: '#01',
    title: 'ChatFusion - Real-Time Communication Platform',
    description:
      'A real-time communication platform built for instant messaging and live video and audio calls, leveraging WebRTC and WebSockets for seamless connectivity.',
    tech: ['Next.js', 'Supabase', 'WebRTC', 'Socket.io', 'Redis', 'TypeScript'],
    githubUrl: 'https://github.com/abhiKumar0/ChatFusion',
    liveUrl: 'https://chatfusion-1-n273.onrender.com',
    color: '#E63946',
    accentColor: '#FFD60A',
  },
  {
    id: 2,
    issue: '#02',
    title: 'CodeBattle - Competitive Coding Battle Arena',
    description:
      'CodeBattle is a premium, real-time competitive coding platform that pits developers against each other in fast-paced coding duels. Players can match up in rank-based duels, initialize custom private battle rooms with duration presets and specific problem search filters, and spectate ongoing matches in real-time.',
    tech: ['Java', 'Spring Boot', 'Next.js', 'WebSockets', 'TypeScript'],
    githubUrl: 'https://github.com/abhiKumar0/CodeBattle',
    liveUrl: '#',
    color: '#111111',
    accentColor: '#4CC9F0',
  },
  {
    id: 3,
    issue: '#03',
    title: 'BarsVsBars - Rap Battle Platform',
    description:
      'BarsVsBars is a comprehensive rap battle platform that brings together MCs from around the world to compete in epic lyrical battles. Built with modern web technologies, it features real-time battle management, audio uploads, community voting, and a complete user authentication system with email verification.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Socket.io', 'Node.js'],
    githubUrl: 'https://github.com/Team-Codexium/BVB-2.0',
    liveUrl: '#',
    color: '#FFD60A',
    accentColor: '#111111',
  },
  {
    id: 4,
    issue: '#04',
    title: 'Scholarly — Academic Research Companion',
    description:
      'Scholarly is a browser extension designed to supercharge your academic literature reviews. It seamlessly augments Google Scholar, Scopus, and ORCID with real-time journal quality metrics (SJR, SNIP, CiteScore), author position analytics, corresponding author indicators, and comprehensive institutional affiliation histories.',
    tech: ['WXT', 'TypeScript', 'Vite', 'React'],
    githubUrl: '#',
    liveUrl: '#',
    color: '#4CC9F0',
    accentColor: '#111111',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend',
    color: '#E63946',
    bgColor: '#1a0a0b',
    skills: ['Java ⚡', 'Spring Boot', 'REST APIs', 'Microservices', "Express.js", 'Node.js'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    color: '#4CC9F0',
    bgColor: '#0a1520',
    skills: ['React.js ⚡', 'TypeScript', 'JavaScript','Next.js','Tailwind CSS', 'ShadCN/UI', 'Zustand', 'Tanstack Query'],
  },
  {
    id: 'databases',
    name: 'Databases',
    color: '#FFD60A',
    bgColor: '#1a1500',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    id: 'tools',
    name: 'Tools',
    color: '#F8F9FA',
    bgColor: '#141414',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Kubernetes', 'Postman'],
  },
  {
    id: 'concepts',
    name: 'Concepts',
    color: '#E63946',
    bgColor: '#0f0a0b',
    skills: ['WebRTC', 'WebSockets', 'System Design', 'Distributed Systems', 'OOP', 'DSA', 'CI/CD', 'Networking'],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Motilal Nehru National Institute of Technology (MNNIT), Allahabad',
    duration: '2024 – 2027',
    description:
      'Specializing in software engineering, distributed systems, and advanced algorithms. Building scalable systems and real-world applications as part of coursework and personal projects.',
    status: 'Ongoing',
    cpi: '8.36',
  },
];

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'abhishek.ksh03@gmail.com',
    href: 'mailto:abhishek.ksh03@gmail.com',
    icon: 'email',
    color: '#E63946',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/abhiKumar0',
    href: 'https://github.com/abhiKumar0',
    icon: 'github',
    color: '#F8F9FA',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhishekk018',
    href: 'https://www.linkedin.com/in/abhishekk018/',
    icon: 'linkedin',
    color: '#4CC9F0',
  },
];
