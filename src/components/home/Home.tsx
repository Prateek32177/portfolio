"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Rss } from "lucide-react";
import config from "../../config.json";

const linkClass =
  "inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-ink";

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies, featuredBlog } = config;

  return (
    <div className="site-shell">
      <main className="site-container">
        <header className="site-header">
          <Link href="/" className="wordmark" aria-label="Prateek Jain home">
            PJ<span>.</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#writing">Writing</a>
            <a href={`mailto:${personalInfo.email}`}>Contact</a>
          </nav>
        </header>

        <section className="intro" id="about" aria-labelledby="intro-title">
          <p className="eyebrow">{personalInfo.location} · {personalInfo.title}</p>
          <h1 id="intro-title">I build calm, capable software for the web.</h1>
          <p className="intro-copy">{personalInfo.bio.replace(/\*\*/g, "")}</p>
          <div className="link-row">
            <a className={linkClass} href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            <a className={linkClass} href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a className={linkClass} href={personalInfo.social.medium} target="_blank" rel="noreferrer"><Rss size={15} /> Medium</a>
            <a className={linkClass} href={`mailto:${personalInfo.email}`}><Mail size={15} /> Email</a>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><span>01</span><h2 id="work-title">Selected work</h2></div>
          <div className="work-list">
            {featuredProjects.map((project) => (
              <a className="work-item" key={project.title} href={project.link} target="_blank" rel="noreferrer">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="meta">{project.tech.slice(0, 4).join(" · ")}</span>
                </div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="small-list">
            {otherProjects.map((project) => (
              <a className="small-item" key={project.title} href={project.link || project.github || "#"} target="_blank" rel="noreferrer">
                <span>{project.title}</span><ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="section two-column" aria-labelledby="opensource-title">
          <div>
            <div className="section-heading"><span>02</span><h2 id="opensource-title">Open source</h2></div>
            <div className="compact-list">
              {openSourceProjects.map((project) => (
                <a className="compact-item" key={project.title} href={project.github} target="_blank" rel="noreferrer">
                  <span>{project.title}</span><ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="section-heading"><span>03</span><h2>Tools I use</h2></div>
            <p className="tools-copy">{Object.values(technologies).flat().join(" · ")}</p>
          </div>
        </section>

        <section className="section writing" id="writing" aria-labelledby="writing-title">
          <div className="section-heading"><span>04</span><h2 id="writing-title">Writing</h2></div>
          <a className="article-link" href={featuredBlog.link} target="_blank" rel="noreferrer">
            <span><strong>{featuredBlog.title}</strong><small>{featuredBlog.description}</small></span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>

        <footer className="site-footer" id="contact">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span>Available for thoughtful work</span>
        </footer>
      </main>
    </div>
  );
};
