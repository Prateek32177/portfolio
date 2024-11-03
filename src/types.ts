export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: CompanyProject[];
}

export interface CompanyProject {
  title: string;
  role: string;
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
  period: string;
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
  technicalExpertise: {
    shortDescription: string;
    longDescription: string;
    skills: {
      category: string;
      items: string[];
    }[];
  };
}

export interface Theme {
  primary: string;
  secondary: string;
}

export interface GradientStrength {
  light: string;
  medium: string;
  strong: string;
}

export type Themes = {
  [key: string]: Theme;
};

export type GradientClasses = {
  [key: string]: GradientStrength;
};

export type DefaultTheme = "emerald" | "pink" | "yellow";
