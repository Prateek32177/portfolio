"use client";

import { motion } from "framer-motion";
import {
  Github,
  Globe,
  MapPin,
  Terminal,
  Twitter,
  ExternalLink,
  Linkedin,
  Copy,
  Building,
  Check,
  Sun,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  navItems,
  featuredBlog,
  featuredProject,
  themes,
  gradientClasses,
} from "@/config";
import type { PortfolioConfig, DefaultTheme } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getButtonClasses } from "@/lib/utils";

export function HomeComponent({
  data,
  defaultTheme = "emerald",
}: {
  data: PortfolioConfig;
  defaultTheme: DefaultTheme;
}) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const handleScrollToSection = (event: React.MouseEvent, link: string) => {
    event.preventDefault();

    if (link.startsWith("#")) {
      const element = document.getElementById(link.slice(1));

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(data.personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const cycleTheme = () => {
    const themeKeys: DefaultTheme[] = Object.keys(themes) as DefaultTheme[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };
  return (
    <div
      className={`min-h-screen bg-[#010106] text-zinc-200 selection:bg-${themes[theme].primary}-500/30 px-4 sm:px-6 md:px-8`}
    >
      <div className="fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.975' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
        <div
          className="absolute inset-0 opacity-10 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='microNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23microNoiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div
          className="absolute inset-0 opacity-15 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='microNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23microNoiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="absolute top-0 left-0 w-full to-transparent h-full">
          <div
            className={`absolute inset-0 bg-gradient-to-b ${gradientClasses[theme].strong} to-transparent`}
            style={{
              filter: "blur(80px)",
            }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b ${gradientClasses[theme].medium} to-transparent`}
            style={{
              filter: "blur(60px)",
            }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b ${gradientClasses[theme].light} to-transparent`}
            style={{
              filter: "blur(40px)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  80% 100% at 50% 0%,
                  transparent 30%,
                  rgba(24, 24, 27, 0.4) 50%,
                  rgba(24, 24, 27, 0.8) 100%
                )
              `,
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/10 to-zinc-900/30" />
      </div>

      {/* Navbar */}
      <div className="relative w-full">
        <motion.nav
          className={`border-[0.5px] border-${themes[theme].primary}-500/30 flex max-w-fit top-8 md:top-10 inset-x-0 mx-auto backdrop-blur-sm shadow-xl text-zinc-200 z-[5000] py-2 md:py-4 px-4 md:px-10 gap-2 md:gap-4 items-center justify-center rounded-lg fixed`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {navItems.map((navItem, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link || ""}
              onClick={(e) =>
                navItem.link?.startsWith("#")
                  ? handleScrollToSection(e, navItem.link)
                  : undefined
              }
              className={`relative text-sm text-zinc-300 hover:text-${themes[theme].primary}-400 transition-colors`}
            >
              <span className="text-xs md:text-sm">{navItem.name}</span>
            </a>
          ))}
        </motion.nav>
      </div>

      <main className="relative pt-24">
        <section id="about" className="flex items-center justify-center">
          <div className="max-w-6xl w-full space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 justify-center min-h-[calc(100vh-8rem)]"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full blur opacity-50 group-hover:opacity-75 transition " />
                <Image
                  src={data.personalInfo.profileImage}
                  width={200}
                  height={200}
                  alt={`${data.personalInfo.name}'s portrait`}
                  className="relative w-40 h-40 md:w-60 md:h-60 rounded-full object-top object-cover border-[1px] border-zinc-500  p-2"
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <div className="space-y-2">
                  <div
                    className={`flex items-center gap-2 text-${themes[theme].primary}-500 justify-center md:justify-start`}
                  >
                    <span
                      className={`h-px w-8 bg-${themes[theme].primary}-500`}
                    />
                    <span className="text-sm tracking-wider">
                      {data.personalInfo.title}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    Hi, I&apos;m {data.personalInfo.name}
                    <span className={`text-${themes[theme].primary}-500`}>
                      .
                    </span>
                  </h1>
                </div>
                <p className="max-w-md text-zinc-400 text-sm md:text-base">
                  {data.personalInfo.bio}
                </p>
                {/* Location and Status */}
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-full">
                    <MapPin
                      className="w-3 h-3 md:w-4 md:h-4"
                      aria-hidden="true"
                    />
                    <span>{data.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${themes[theme].primary}-400 opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 bg-${themes[theme].primary}-500`}
                      ></span>
                    </span>
                    <span className="text-zinc-400">
                      Available for Opportunities
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm justify-center md:justify-start">
                  <Button
                    asChild
                    className={getButtonClasses(theme)}
                    size={"sm"}
                  >
                    <a href={`mailto:${data.personalInfo.email}`}>
                      Get in Touch
                    </a>
                  </Button>
                  <a
                    href={data.personalInfo.social.github}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.twitter}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5  h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.linkedin}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.medium || ""}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="Medium Profile"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66  0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Featured Content */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${themes[theme].primary}-500/20 to-${themes[theme].secondary}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`rounded-lg relative bg-zinc-800/50 backdrop-blur-sm p-6 h-full border border-zinc-700/50 group-hover:border-${themes[theme].primary}-500/50 transition-colors duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-extrabold text-${themes[theme].primary}-500 text-lg`}
                    >
                      B.
                    </span>
                    <Badge
                      variant="secondary"
                      className={`bg-${themes[theme].primary}-500/10 text-${themes[theme].primary}-400 hover:bg-inherit`}
                    >
                      Featured Project
                    </Badge>
                  </div>
                  <h4
                    className={`text-xl font-bold mb-2 text-${themes[theme].primary}-400 group-hover:text-${themes[theme].primary}-300 transition-colors duration-300 max-w-sm`}
                  >
                    {featuredProject.title}
                  </h4>
                  <p className="text-zinc-300 text-sm mb-4 max-w-md">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={featuredProject.link}
                      className={`flex items-center gap-2 text-zinc-400 hover:text-${themes[theme].primary}-400 text-sm transition-colors  duration-300`}
                    >
                      <Globe className="w-4 h-4" aria-hidden="true" />
                      View Live Project
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${themes[theme].primary}-500/20 to-${themes[theme].secondary}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`relative rounded-lg bg-zinc-800/50 backdrop-blur-sm p-6 h-full border border-zinc-700/50 group-hover:border-${themes[theme].primary}-500/50 transition-colors duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 text-${themes[theme].primary}-500`}
                      aria-hidden="true"
                    >
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    <Badge
                      variant="secondary"
                      className={`bg-${themes[theme].primary}-500/10 text-${themes[theme].primary}-400 hover:bg-inherit`}
                    >
                      Featured Blog
                    </Badge>
                  </div>
                  <h4
                    className={`text-xl font-bold mb-2 text-${themes[theme].primary}-400 group-hover:text-${themes[theme].primary}-300 transition-colors duration-300`}
                  >
                    {featuredBlog.title}
                  </h4>
                  <p className="text-zinc-300 text-sm mb-4 max-w-md">
                    {featuredBlog.description}
                  </p>
                  <a
                    href={featuredBlog.link}
                    className={`flex items-center gap-2 text-zinc-400 hover:text-${themes[theme].primary}-400 text-sm transition-colors duration-300`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Read Article
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-${themes[theme].primary}-500/10 via-transparent to-${themes[theme].primary}-500/10 opacity-50`}
              />
              <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 md:p-8 space-y-4">
                <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                  <div className="p-2  rounded-lg backdrop-brightness-50">
                    <Terminal
                      className={`w-4 h-4 text-${themes[theme].primary}-500`}
                      aria-hidden="true"
                    />
                  </div>
                  Technical Expertise
                </h2>
                <div className="space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {data.technicalExpertise.shortDescription}
                  </p>
                  {data.technicalExpertise.skills.map(
                    (skillCategory, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-sm font-medium text-zinc-300">
                          {skillCategory.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillCategory.items.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-zinc-700/50 hover:bg-zinc-700 transition-colors text-zinc-200 text-xs md:text-sm"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {data.technicalExpertise.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 md:mb-16">
              Experience
            </h2>
            <div className="relative space-y-12">
              <div
                className={`absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-${themes[theme].primary}-500 via-${themes[theme].primary}-500/50 to-transparent`}
                aria-hidden="true"
              />

              {data.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative grid md:grid-cols-[1fr,3fr] gap-8 pl-8"
                >
                  <div
                    className={`absolute left-0 top-0 w-4 h-4 bg-${themes[theme].primary}-500 rounded-full transform -translate-x-[7px] mt-1.5`}
                    aria-hidden="true"
                  />

                  <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50">
                    <Building
                      className={`w-8 h-8 text-${themes[theme].primary}-500 mb-4`}
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className={`text-${themes[theme].primary}-400`}>
                      {exp.role}
                    </p>
                    <p className="text-zinc-400 text-sm">{exp.period}</p>
                  </div>
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <Card
                        key={projectIndex}
                        className={`bg-zinc-800/50 border-zinc-700/50 group hover:border-${themes[theme].primary}-500/50 transition-colors duration-300`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col items-start">
                            <h4
                              className={`text-lg font-bold mb-2 text-${themes[theme].primary}-400 group-hover:text-${themes[theme].primary}-300 transition-colors duration-300`}
                            >
                              {project.title}
                            </h4>
                            <Badge
                              variant="secondary"
                              className={`bg-${themes[theme].primary}-500/10 text-${themes[theme].primary}-400 mb-4 hover:bg-inherit`}
                            >
                              {project.role}
                            </Badge>
                          </div>
                          <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm mb-4 ">
                            {project.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-zinc-700/50 text-zinc-300 text-xs hover:bg-inherit"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-center">
                Passion Projects
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                A selection of my most impactful work, showcasing
                problem-solving abilities and technical expertise
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`bg-zinc-800/50 border-zinc-700/50 overflow-hidden group h-full backdrop-blur-sm transition-colors hover:bg-zinc-800/80 hover:border-${themes[theme].primary}-500/50`}
                  >
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="relative flex-grow">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="p-2 backdrop-brightness-50 rounded-lg">
                              <Terminal
                                className={`w-4 h-4 text-${themes[theme].primary}-500`}
                                aria-hidden="true"
                              />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-zinc-700 text-zinc-300 text-xs hover:bg-inherit"
                            >
                              {project.period}
                            </Badge>
                          </div>
                          <div>
                            <h3
                              className={`text-lg font-bold text-${themes[theme].primary}-400 mb-1 transition-colors`}
                            >
                              {project.title}
                            </h3>
                            <p className="text-zinc-300 text-sm line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 py-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-zinc-700/50 text-zinc-300 text-xs hover:bg-inherit"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-3 mt-auto border-t border-zinc-700">
                        <a
                          href={project.link}
                          className={`flex items-center gap-2 text-${themes[theme].primary}-400 hover:text-${themes[theme].primary}-300 text-sm cursor-pointer`}
                        >
                          <Globe className="w-4 h-4" aria-hidden="true" />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 text-sm cursor-pointer"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          Source
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <footer id="contact" className="py-20 px-4 bg-zinc-800/30 rounded-md">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Let&apos;s create something
                  <span className={`text-${themes[theme].primary}-500`}>
                    {" "}
                    extraordinary
                  </span>
                </h2>
                <p className="text-zinc-400 max-w-md text-sm md:text-base">
                  Always interested in hearing about new projects and
                  opportunities.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={data.personalInfo.social.github}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.twitter}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.linkedin}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                  <a
                    href={data.personalInfo.social.medium || ""}
                    className={`text-zinc-400 hover:text-${themes[theme].primary}-400 transition-colors duration-300 relative group`}
                    aria-label="Medium Profile"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    <span
                      className={`absolute -inset-2 rounded-full bg-${themes[theme].primary}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-right">
                <div>
                  <div className="text-xs md:text-sm text-zinc-400">Email</div>
                  <div className="text-sm flex items-center gap-1 justify-end flex-wrap">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyEmail}
                      className={`text-zinc-400 hover:text-${themes[theme].primary}-400 hover:bg-${themes[theme].primary}-500/15`}
                    >
                      {emailCopied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {emailCopied ? "Email copied" : "Copy email"}
                      </span>
                    </Button>
                    {data.personalInfo.email}
                  </div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-zinc-400">
                    Location
                  </div>
                  <div className="text-xs md:text-sm">
                    {data.personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-8 md:my-12 bg-zinc-700" />
            <div className="text-center text-xs md:text-sm text-zinc-400">
              © 2024 {data.personalInfo.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
      <Button
        size="icon"
        className={`fixed bottom-4 right-4 rounded-full border-[1px] border-gray-500/30 `}
        onClick={cycleTheme}
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-${themes[theme].primary}-500`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
