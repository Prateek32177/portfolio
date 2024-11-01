import { PortfolioConfig } from "./types";

export const portfolioData: PortfolioConfig = {
  personalInfo: {
    name: "Prateek",
    title: "SENIOR WEB ENGINEER",
    tagline: "Building the future, one commit at a time",
    bio: "Experienced Full-stack developer with 3.5 years of experience building high-performance web applications for leading retail giant. An avid problem solver with strong passion of addressing user needs and developing products from concept to launch.",
    location: "Indore, India",
    email: "prateek32177@gmail.com",
    availability: true,
    profileImage: "/profile_pic.png",
    social: {
      github: "https://github.com/Prateek32177",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/prateek-jain-031106131/",
      medium: "https://www.linkedin.com/in/prateek-jain-031106131/",
    },
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Indore, India",
      period: "Feb 2021 – current",
      projects: [
        {
          title: "BestBuy",
          description: [
            "Spearheaded UI performance optimization initiatives that enhanced Core Web Vitals, achieving 30% improvement in Cumulative Layout Shift (CLS), 20% enhancement in Largest Contentful Paint (LCP), and 15% reduction in Total Blocking Time (TBT).",
            "Contributed to the development of a secure role-based access authentication application using Node.js and Passport.",
            "Developed and transitioned reusable components for the Global home page, enabling seamless integration across the global view platform and boosting user engagement by 25%.",
            "Engineered a flexible A/B/n testing framework that accommodates product variations without recurring code changes.",
            "Reduced manual efforts by 80% by automating performance metrics aggregation from SpeedCurve.",
          ],
          technologies: [
            "Node.js",
            "TypeScript",
            "React",
            "GitHub Actions",
            "Passport",
          ],
        },
        {
          title: "Walmart",
          description: [
            "Spearheaded UI performance optimization initiatives that enhanced Core Web Vitals, achieving 30% improvement in Cumulative Layout Shift (CLS), 20% enhancement in Largest Contentful Paint (LCP), and 15% reduction in Total Blocking Time (TBT).",
            "Contributed to the development of a secure role-based access authentication application using Node.js and Passport.",
          ],
          technologies: ["Node.js", "TypeScript", "React"],
        },
      ],
    },
  ],

  projects: [
    {
      title: "DeazyQR",
      description:
        "Dynamic QR Management Saas Web App, having one of a kind Time expiring dynamic QR.",
      longDescription:
        "A comprehensive QR management solution with time-based expiration features.",
      tech: ["Next.js", "ShadcnUI", "Supabase", "PostgreSQL"],
      link: "https://deazyqr.com",
      github: "#",
    },
    {
      title: "TextlyAI",
      description:
        "AI-Based Text Classification and Categorization Utility App",
      longDescription:
        "App that employs OpenAI Api to classify and structure disorganized text, outputting organized data in JSON, tabular, or plain text format.",
      tech: ["React.js", "OpenAI", "Firebase", "Material UI"],
      link: "https://textlyai.com",
      github: "#",
    },
    {
      title: "CheckTrack",
      description: "One Stop Solution for Interview Tracking",
      longDescription:
        "Progressive Web App for managing and tracking interview processes.",
      tech: [
        "React.js",
        "Redux",
        "Firebase",
        "Chart.js",
        "Material UI",
        "Service Workers",
      ],
      link: "https://checktrack.app",
      github: "#",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Core Java", "REST APIs"],
    },
    {
      category: "Tools & Testing",
      items: ["Git", "GitHub Actions", "Jest", "RTL", "Lighthouse"],
    },
    {
      category: "Database & Cloud",
      items: ["PostgreSQL", "Firebase", "Supabase"],
    },
  ],
  achievements: [
    {
      title:
        "Successfully registered a process improvement initiative, achieving $40,000 in cost savings through dynamic A/B testing",
    },
    {
      title: "Reached Pre-elimination round of Codechef Snackdown 2021",
      link: "https://codechef.com/snackdown2021",
    },
    {
      title: "Hackerrank HackFest 2020 Bronze medal",
      link: "https://hackerrank.com/hackfest2020",
    },
    {
      title: "TCS Apple Tribe Java Hackathon ranked under 100 out of 4000",
    },
  ],
};

export const navItems = [
  { name: "Intro", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
