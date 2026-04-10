"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Github,
  Linkedin,
  Mail,
  Palette,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import { useMemo } from "react";
import config from "../../config.json";

type Project = {
  title: string;
  description: string;
  link: string;
  github?: string;
  tech?: string[];
  cta?: { text: string; link: string };
};

const metricChips = [
  "4.5+ yrs building on web",
  "95+ Lighthouse shipping quality",
  "Performance + Product + Design",
];

export const HomeComponent = () => {
  const {
    personalInfo,
    featuredProjects,
    otherProjects,
    openSourceProjects,
    technologies,
    featuredBlog,
    articles,
  } = config;

  const impactProjects = useMemo(() => featuredProjects.slice(0, 2), [featuredProjects]);

  const highlightBio = (text: string) => {
    let highlightedText = text;

    personalInfo.highlightKeywords?.forEach((keyword) => {
      const regex = new RegExp(`\\*\\*${keyword}\\*\\*`, "gi");
      if (keyword.toLowerCase() === "hookflo.com") {
        highlightedText = highlightedText.replace(
          regex,
          `<a href=\"https://hookflo.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-semibold text-emerald-300 underline underline-offset-2 hover:text-emerald-200\">${keyword}</a>`
        );
      } else {
        highlightedText = highlightedText.replace(regex, `<strong class=\"text-white\">${keyword}</strong>`);
      }
    });

    return highlightedText;
  };

  const handleCtaClick = (e: React.MouseEvent, ctaLink: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(ctaLink, "_blank", "noopener,noreferrer");
  };

  const allTools = [...technologies.frontend, ...technologies.backend, ...technologies.tools];

  return (
    <div className="min-h-screen bg-[#050b14] text-white">
      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <nav className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-emerald-300/30 bg-emerald-500/10 p-1.5">
              <Orb {...emeraldPreset} size={0.8} animationSpeedBase={0.2} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/70">Design Engineer</p>
              <p className="text-sm font-medium text-white">{personalInfo.name}</p>
            </div>
          </div>
          <div className="flex gap-5 text-sm text-white/70">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#oss" className="hover:text-white transition-colors">Open Source</a>
            <a href="#articles" className="hover:text-white transition-colors">Writing</a>
          </div>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-sky-400/10 to-transparent p-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <Sparkles size={14} /> Available for impactful products
            </p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl">{personalInfo.name}</h1>
            <p className="mb-6 text-xl text-white/80">{personalInfo.tagline}</p>
            <p
              className="max-w-2xl text-sm leading-7 text-white/75"
              dangerouslySetInnerHTML={{ __html: highlightBio(personalInfo.bio) }}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {metricChips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Github size={16} /> GitHub</a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Linkedin size={16} /> LinkedIn</a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Twitter size={16} /> X / Twitter</a>
              <a href={personalInfo.social.art} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Palette size={16} /> Art</a>
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white"><Mail size={16} /> Contact</a>
            </div>
          </div>

          <div className="space-y-4" id="work">
            <h2 className="text-sm uppercase tracking-[0.2em] text-white/60">Top Impact Projects</h2>
            {impactProjects.map((project: Project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-white group-hover:text-emerald-200">{project.title}</h3>
                  <ArrowUpRight size={16} className="text-emerald-200" />
                </div>
                <p className="mb-3 text-sm leading-6 text-white/70">{project.description}</p>
                {project.tech && <p className="text-xs text-white/50">{project.tech.slice(0, 4).join(" • ")}</p>}
                {project.cta && (
                  <div className="mt-4">
                    <button
                      onClick={(e) => handleCtaClick(e, project.cta!.link)}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/20 px-3 py-1.5 text-xs text-emerald-100"
                    >
                      {project.cta.text} <ArrowRight size={12} />
                    </button>
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-2">
          <div id="oss">
            <h2 className="mb-4 text-xl font-medium">Open Source that ships</h2>
            <div className="space-y-3">
              {openSourceProjects.map((project: Project) => (
                <a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-emerald-300/40">
                  <div>
                    <p className="text-sm font-medium text-white">{project.title}</p>
                    <p className="text-xs text-white/60">{project.description}</p>
                  </div>
                  <Github size={16} className="mt-0.5 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-medium">Core stack</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">Tools I use to ship</p>
              <div className="flex flex-wrap gap-2">
                {allTools.map((tool) => (
                  <span key={tool} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-4 text-xl font-medium">More projects</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {otherProjects.map((project: Project) => (
              <a key={project.title} href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/30">
                <p className="mb-1 text-sm font-semibold">{project.title}</p>
                <p className="text-xs text-white/60">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-200">Featured write-up</p>
          <h3 className="text-lg font-medium">{featuredBlog.title}</h3>
          <p className="mt-2 text-sm text-white/75">{featuredBlog.description}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-white/70">
            <span className="inline-flex items-center gap-1"><Calendar size={14} /> {featuredBlog.date}</span>
            <a href={featuredBlog.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-200">Read article <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="mt-14 pb-8" id="articles">
          <h2 className="mb-4 text-xl font-medium">Recent articles</h2>
          <div className="space-y-2">
            {articles.map((article) => (
              <a key={article.title} href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-emerald-300/40">
                <div>
                  <p className="text-sm text-white">{article.title}</p>
                  <p className="text-xs text-white/60">{article.description}</p>
                </div>
                <span className="whitespace-nowrap pl-4 text-xs text-white/50">{article.date}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
