export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: CompanyProject[];
}

export interface CompanyProject {
  title: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link?: string;
  github?: string;
  period:string;
}

export interface Achievement {
  title: string;
  link?: string;
}

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    availability: boolean;
    profileImage: string;
    social: {
      github?: string;
      twitter?: string;
      linkedin?: string;
      medium?: string;
    };
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
}
