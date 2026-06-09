export interface Project {
  id: number;
  issue: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  color: string;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  skills: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  status: string;
  cpi?: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'github' | 'linkedin';
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}
