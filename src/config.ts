import { PortfolioConfig } from "./types";

export const portfolioData: PortfolioConfig = {
  personalInfo: {
    name: "Prateek",
    title: "SENIOR WEB ENGINEER",
    tagline: "Building the future, one commit at a time",
    bio: "Experienced Full-stack developer with 4 years of experience building high-performance web applications for leading retail giants. An avid problem solver with strong passion of addressing user needs and developing products from concept to launch.",
    location: "Indore, India",
    email: "prateek32177@gmail.com",
    availability: true,
    profileImage: "/profile_pic.png",
    social: {
      github: "https://github.com/Prateek32177",
      twitter: "https://x.com/Prateek53788134",
      linkedin: "https://www.linkedin.com/in/prateek-jain-031106131/",
      medium: "https://medium.com/@prateekJain11",
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
          role: "Web & Performance Engineer",
          description: [
            "Spearheaded UI performance optimization initiatives that enhanced Core Web Vitals, achieving 30% improvement in Cumulative Layout Shift (CLS), 20% enhancement in Largest Contentful Paint (LCP), and 15% reduction in Total Blocking Time (TBT).",
            "Contributed to the development of a secure role-based access authentication application using Node.js and Passport.",
            "Developed and transitioned reusable components for the Global home page, enabling seamless integration across the global view platform and boosting user engagement by 25%.",
            "Engineered a flexible A/B/n testing framework that accommodates product variations without recurring code changes.",
            "Reduced manual efforts by 80% by automating performance metrics aggregation from SpeedCurve.",
          ],
          technologies: [
            "React.js",
            "TypeScript",
            "Node.js",
            "GitHub Actions",
            "Monorepo",
            "SpeedCurve",
            "Passport",
          ],
        },
        {
          title: "Walmart",
          role: "Frontend Engineer",
          description: [
            "Developed the UI for Work Allocation and Transition (WAT) system, transforming the markup/markdown module into a next-gen interface featuring real-time charts leveraging Chart.js..",
            "Implemented optimization techniques like debouncing and throttling to efficiently retrieve user roles from a dataset with hundred thousand users, significantly enhancing response time and overall application performance.",
          ],
          technologies: [
            "React.js",
            "JavaScript",
            "Material UI",
            "Chart.js",
            "AG Grid",
          ],
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
      tech: ["Next.js", "ShadcnUI", "Supabase Auth", "Supabase Postgres DB"],
      link: "https://deazyqr.vercel.app/",
      github: "https://github.com/Prateek32177/deazyqr/tree/test-env",
      period: "Dec 2023",
    },
    {
      title: "TextlyAI",
      description:
        "AI-Based Text Classification and Categorization Utility App",
      longDescription:
        "App that employs OpenAI Api to classify and structure disorganized text, outputting organized data in JSON, tabular, or plain text format.",
      tech: ["React.js", "OpenAI API", "Firebase", "Material UI"],
      link: "https://flowaii.web.app/",
      github: "https://github.com/Prateek32177/TextlyAI",
      period: "July 2023",
    },
    {
      title: "DineEazy",
      description: "In-Restaurant food ordering app",
      longDescription:
        "An innovative in-restaurant food ordering app that transforms dining by offering a pay once, reorder multiple times feature. Customers can easily track their food’s progress in real time and make convenienttable-side payments using QR codes, enhancing their overall dinning experience.",
      tech: ["React.js", "Redux", "Firebase", "Material UI", "Custom Css"],
      link: "https://deazy-52098.web.app/",
      github:
        "https://github.com/Prateek32177/DineEazy/tree/master/dinningsolution",
      period: "Dec 2022",
    },
    {
      title: "CheckTrack",
      description: "One Stop Solution for Interview Tracking",
      longDescription:
        "Progressive Web App for managing and tracking interview processes.",
      tech: [
        "React.js",
        "Redux",
        "Firebase Hoisting & DB",
        "Chart.js",
        "Material UI",
        "OAuth [Google Provider]",
        "Service Workers",
      ],
      link: "https://authapp-f5a50.web.app/dashboard",
      github: "https://github.com/Prateek32177/CheckTrack/tree/InterviewTrack",
      period: "Mar 2021",
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
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const featuredBlog = {
  title: "#55 to 95: Performance Journey of Brokersify",
  description:
    "Boosting Brokersify! How We Consistently Hitting 95+ Performance Score for Brokersify.",
  link: "https://medium.com/@prateekJain11/boosting-brokersify-how-we-consistently-hitting-95-performance-for-brokersify-c7ae61a1ca0a",
};
