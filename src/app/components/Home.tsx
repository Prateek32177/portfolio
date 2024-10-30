"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe,
  Mail,
  MapPin,
  Terminal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function HomeComponent() {
  const [activeProject, setActiveProject] = useState(null);

  // Simplified cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Enterprise-grade analytics with machine learning insights",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      link: "#",
      github: "#",
      details:
        "A comprehensive analytics platform that leverages machine learning to provide actionable insights. Features include real-time data processing, predictive analytics, and customizable dashboards.",
    },
    {
      title: "Crypto Trading Engine",
      description: "High-frequency trading system with real-time analysis",
      tech: ["Node.js", "PostgreSQL", "WebSocket", "Docker"],
      link: "#",
      github: "#",
      details:
        "Advanced trading system capable of processing thousands of transactions per second. Implements sophisticated trading strategies and real-time market analysis.",
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable marketplace with advanced features",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      link: "#",
      github: "#",
      details:
        "Full-featured e-commerce solution with support for multiple vendors, real-time inventory management, and advanced analytics dashboard.",
    },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "TechCorp",
      period: "2021 - Present",
      description:
        "Leading development of cloud-native applications and mentoring junior developers.",
    },
    {
      role: "Full Stack Developer",
      company: "InnovateLabs",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      role: "Frontend Developer",
      company: "StartupX",
      period: "2017 - 2019",
      description:
        "Built responsive web applications and implemented UI/UX improvements.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 cursor-none selection:bg-emerald-500/30 px-4 sm:px-6 md:px-8">
      {/* Cursor */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        className="w-12 h-12 bg-emerald-500 rounded-full fixed z-50 pointer-events-none mix-blend-difference hidden md:block"
      />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-45" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-500/10 via-zinc-900/50 to-transparent" />
      </div>

      {/* Floating Island Navbar */}
      <div className="relative w-full">
        <AnimatePresence>
          <motion.div className="flex max-w-fit top-4 md:top-10 inset-x-0 mx-auto border-transparent dark:border-white/[0.2] dark:bg-black text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 md:py-4 px-4 md:px-10 gap-2 md:gap-4 items-center justify-center rounded-full fixed backdrop-blur-md overflow-visible">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] transition-opacity duration-500 opacity-100" />
            </span>

            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 items-center flex text-neutral-200 dark:hover:text-neutral-300 hover:text-neutral-400"
              >
                <span className="text-xs md:text-sm">{navItem.name}</span>
              </Link>
            ))}
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <main className="relative pt-16">
        {/* Hero Section */}
        <section id="about" className="flex items-center justify-center">
          <div className="max-w-7xl w-full space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 justify-center min-h-[calc(100vh-4rem)]"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full blur opacity-50 group-hover:opacity-75 transition" />
                <img
                  src="/profile_pic.png"
                  alt="Developer portrait"
                  className="relative w-40 h-40 md:w-60 md:h-60 rounded-full object-top object-cover border-2 border-zinc-800 p-4"
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-500 justify-center md:justify-start">
                    <span className="h-px w-8 bg-emerald-500" />
                    <span className="text-sm tracking-wider">
                      FULL-STACK DEVELOPER
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    Hi, I'm Prateek
                    <span className="text-emerald-500">.</span>
                  </h1>

                  <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light">
                    Building the future, one commit at a time
                  </p>
                </div>
                <p className="max-w-2xl text-zinc-400 text-sm md:text-base">
                  With over 8 years of experience in full-stack development, I
                  specialize in building scalable applications and leading
                  engineering teams. Currently focused on AI/ML and distributed
                  systems.
                </p>
                {/* Location and Status */}
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/50 px-3 py-1.5 rounded-full">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    Indore, India
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-zinc-400">
                      Available for opportunities
                    </span>
                  </div>
                </div>
                {/* Social Link */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <Link
                    href="#contact"
                    className="group relative px-3 py-1.5 md:px-4 md:py-2 overflow-hidden rounded-full text-xs md:text-sm font-medium transition-colors hover:text-emerald-500"
                  >
                    <div className="absolute inset-0 border border-emerald-500/50 rounded-full group-hover:border-emerald-500 transition-colors" />
                    <div className="relative flex items-center gap-1">
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                      Get in touch
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="p-1.5 md:p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="p-1.5 md:p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-50" />
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 space-y-4">
                <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                  Technical Expertise
                </h2>
                <div className="space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    My core expertise lies in modern web development, with a
                    focus on building scalable applications using
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "Python",
                      "AWS",
                      "Docker",
                      "Kubernetes",
                      "GraphQL",
                      "PostgreSQL",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-white/85 text-xs md:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    I specialize in cloud-native architectures and have
                    extensive experience with microservices, serverless
                    computing, and DevOps practices. My approach combines
                    technical excellence with a strong focus on user experience
                    and business objectives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-16 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 md:mb-16">
              Experience
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 via-emerald-500/25 to-transparent" />

              {/* Timeline Items */}
              {experience.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16"
                >
                  <div
                    className={`md:text-right ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-2 pl-8 md:pl-0">
                      <h3 className="text-lg md:text-xl font-semibold">
                        {item.role}
                      </h3>
                      <div className="text-emerald-500">{item.company}</div>
                      <div className="text-xs md:text-sm text-zinc-400">
                        {item.period}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                  >
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-zinc-800/50 text-sm md:text-base ml-8 md:ml-0 md:mr-0">
                      {item.description}
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-2 md:-translate-x-1/2 mt-1.5" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-32 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                A selection of my most impactful work, showcasing
                problem-solving abilities and technical expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Dialog key={project.title}>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="relative h-full p-4 md:p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800/50 overflow-hidden transition-colors hover:bg-zinc-800/50">
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="p-2 md:p-3 bg-zinc-800 rounded-lg">
                              <Terminal className="w-4 h-4 md:w-6 md:h-6 text-emerald-500" />
                            </div>
                            <motion.div
                              whileHover={{ rotate: 45 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                            </motion.div>
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-zinc-400 line-clamp-2 text-sm md:text-base">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border-zinc-800">
                    <DialogTitle>{project.title}</DialogTitle>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base">
                          {project.details}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-sm md:text-base"
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </Link>
                        <Link
                          href={project.github}
                          className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 text-sm md:text-base"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">
                  Let's create something
                  <span className="text-emerald-500"> extraordinary</span>
                </h2>
                <p className="text-zinc-400 max-w-md text-sm md:text-base">
                  Always interested in hearing about new projects and
                  opportunities.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 text-right">
                <div>
                  <div className="text-xs md:text-sm text-zinc-400">Email</div>
                  <div className="text-base md:text-lg">hello@prateek.dev</div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-zinc-400">
                    Location
                  </div>
                  <div className="text-base md:text-lg">San Francisco, CA</div>
                </div>
              </div>
            </div>
            <Separator className="my-8 md:my-12 bg-zinc-800" />
            <div className="text-center text-xs md:text-sm text-zinc-400">
              © 2024 Prateek Jain. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animate-gradient {
            animation: gradient 3s ease infinite;
            background-size: 200% 200%;
          }
        `}
      </style>
    </div>
  );
}
