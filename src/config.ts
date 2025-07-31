import { PortfolioConfig, Themes, GradientClasses } from "./types";

export const portfolioData: PortfolioConfig = {
  personalInfo: {
    name: "Prateek",
    title: "SENIOR WEB ENGINEER",
    tagline: "Building the future, one commit at a time.",
    bio: "Full-stack developer with 4.5+ years of experience building high-performance, design-forward web applications for leading retail giants. An avid problem solver with strong passion of addressing user needs, and taking products from concept to launch.",
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
      role: "Senior Frontend Engineer",
      company: "Accenture",
      location: "Indore, India",
      period: "Dec 2024 – Present",
      projects: [
        {
          title: "Process Visualization Tool",
          role: "Lead Frontend Engineer",
          description: [
            "Contributing in library of reusable, visually rich UI components for high-impact organizational process visualization Platform",
            "Implemented UI performance techniques to consistently achieve First Contentful Paint (FCP) under 2.5s and Largest Contentful Paint (LCP) under 3s on production-scale data.",

            "Notable contribution in implementing priority loading strategies for LCP elements, resulting in a 28% improvement in Lighthouse performance scores.",
            "Cross-team Collaboration with CMS, backend and design teams to align on business logic, API requirements, and UI/UX consistency, ensuring smooth cross-team delivery.",
          ],
          technologies: [
            "React.js",
            "TypeScript",
            "React Flow",
            "Framer Motion",
            "Tailwind CSS",
            "Figma",
            "Lighthouse",
          ],
        },
      ],
    },
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Indore, India",
      period: "Feb 2021 – Oct 2024",
      projects: [
        {
          title: "BestBuy",
          role: "Web & Performance Engineer",
          description: [
            "Drove UI performance optimization initiatives that enhanced Core Web Vitals, achieving 30% improvement in Cumulative Layout Shift (CLS), 20% enhancement in Largest Contentful Paint (LCP), and 15% reduction in Total Blocking Time (TBT).",
            "Contributed to the development of a secure role-based access authentication application using Node.js and Passport.",
            "Transitioned reusable components for the Global home page, enabling seamless integration across the global view platform and boosting user engagement by 25%.",
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
          title: "Fortune 5 Consumer Retail Enterprise",
          role: "Frontend Engineer",
          description: [
            "Developed UI for Work Allocation and Transition (WAT) system, including real-time charts with Chart.js.",
            "Optimized user role retrieval with debouncing/throttling, improving performance for large datasets.",
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
        "Dynamic QR management SaaS web app with time-expiring dynamic QR codes.",
      longDescription:
        "Comprehensive QR management solution featuring time-based expiration.",
      tech: ["Next.js", "ShadcnUI", "Supabase Auth", "Supabase Postgres DB"],
      link: "https://deazyqr.vercel.app/",
      github: "https://github.com/Prateek32177/deazyqr/tree/test-env",
      period: "Dec 2023",
    },
    {
      title: "TextlyAI",
      description: "AI-based text classification and categorization utility.",
      longDescription:
        "Uses OpenAI API to classify and structure disorganized text, outputting organized data in JSON, table, or plain text.",
      tech: ["React.js", "OpenAI API", "Firebase", "Material UI"],
      link: "https://flowaii.web.app/",
      github: "https://github.com/Prateek32177/TextlyAI",
      period: "July 2023",
    },
    {
      title: "DineEazy",
      description: "In-restaurant food ordering app.",
      longDescription:
        "Transforms dining with pay-once, reorder-multiple-times feature, real-time order tracking, and QR-based table payments.",
      tech: ["React.js", "Redux", "Firebase", "Material UI", "Custom CSS"],
      link: "https://deazy-52098.web.app/",
      github:
        "https://github.com/Prateek32177/DineEazy/tree/master/dinningsolution",
      period: "Dec 2022",
    },
    {
      title: "CheckTrack",
      description: "Interview tracking PWA.",
      longDescription:
        "Progressive web app for managing and tracking interview processes.",
      tech: [
        "React.js",
        "Redux",
        "Firebase Hosting & DB",
        "Chart.js",
        "Material UI",
        "OAuth (Google)",
        "Service Workers",
      ],
      link: "https://authapp-f5a50.web.app/dashboard",
      github: "https://github.com/Prateek32177/CheckTrack/tree/InterviewTrack",
      period: "Mar 2021",
    },
  ],
  technicalExpertise: {
    shortDescription:
      "Core expertise in modern web development, building scalable applications using:",
    longDescription:
      "Specialized in performant web apps, responsive PWAs, microfrontend architectures, and performance optimization.",
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
          "ShadcnUI",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Core Java", "REST APIs"],
      },
      {
        category: "Tools & Testing",
        items: [
          "Git",
          "GitHub Actions",
          "Jest",
          "RTL",
          "Lighthouse",
          "Framer Motion",
        ],
      },
      {
        category: "Database & Cloud",
        items: ["PostgreSQL", "Firebase", "Supabase"],
      },
      {
        category: "AI & Context Enginnering",
        items: [
          "Beginner with building RAG models",
          "Pinecone/pgvector",
          "Semantic search",
        ],
      },
      {
        category: "Cross-team Collaboration",
        items: [
          "Working with CMS backend teams for business logic and API requirements",
          "Collaborating with design teams for UI/UX and Figma handoff",
        ],
      },
    ],
  },
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

export const featuredProject = {
  title: "Brokersify | Real Estate Agent Matching Platform",
  description:
    "Brokersify is a comprehensive real estate platform connecting users with top-rated local agents and providing brokers a CRM tool to manage leads effectively. The application streamlines property transactions by matching clients with professional real estate representatives.",
  longDescription:
    "A comprehensive Real Estate Broker Matching and CRM Platform.",
  tech: [
    "Next.js",
    "ShadcnUI",
    "Supabase Auth",
    "Supabase Postgres DB",
    "Google Analytics",
    "Resend",
    "PWA",
  ],
  link: "https://brokersify.in/",
  period: "Oct 2024",
};

export const themes: Themes = {
  emerald: {
    primary: "emerald",
    secondary: "blue",
  },

  yellow: {
    primary: "yellow",
    secondary: "orange",
  },
  pink: {
    primary: "rose",
    secondary: "emerald",
  },
};

export const gradientClasses: GradientClasses = {
  emerald: {
    light: "from-emerald-500/10 via-emerald-500/5",
    medium: "from-emerald-400/15 via-emerald-500/10",
    strong: "from-emerald-300/20 via-emerald-500/15",
  },
  yellow: {
    light: "from-yellow-500/10 via-yellow-500/5",
    medium: "from-yellow-400/15 via-yellow-500/10",
    strong: "from-yellow-300/20 via-yellow-500/15",
  },
  pink: {
    light: "from-gray-500/10 via-gray-500/5",
    medium: "from-gray-400/15 via-gray-500/10",
    strong: "from-gray-300/20 via-gray-500/15",
  },
};
