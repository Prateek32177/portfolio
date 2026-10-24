"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Rss } from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies, featuredBlog } = config;
  const orbRef = useRef<HTMLDivElement>(null);
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const strength = distance > 520 ? 0 : Math.min((520 - distance) / 520, 1);
      setOrbOffset({ x: (dx / Math.max(distance, 1)) * strength * 28, y: (dy / Math.max(distance, 1)) * strength * 28 });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const bio = personalInfo.bio.replace(/\*\*/g, "");

  return (
    <main className="story-shell">
      <div className="story-container">
        <header className="story-header">
          <div ref={orbRef} className="orb" style={{ transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)` }} aria-label="A small animated orb">
            <Orb {...emeraldPreset} size={0.35} animationSpeedBase={0.16} />
          </div>
          <span className="availability">{personalInfo.location}</span>
          <a href={`mailto:${personalInfo.email}`} className="contact-link">Say hello <ArrowUpRight size={14} /></a>
        </header>

        <article className="story">
          <p className="story-kicker">{personalInfo.title}</p>
          <h1>{personalInfo.name}</h1>
          <p className="story-lede">{personalInfo.tagline}</p>
          <p className="story-copy">{bio}</p>
          <div className="story-links">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
            <a href={personalInfo.social.medium} target="_blank" rel="noreferrer"><Rss size={14} /> Writing</a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={14} /> Email</a>
          </div>

          <p className="story-transition">Most of my work starts quietly: a question, a rough sketch, a system that could be simpler.</p>
          <div className="story-work">
            {featuredProjects.map((project) => (
              <a className="story-project" key={project.title} href={project.link} target="_blank" rel="noreferrer">
                <span><strong>{project.title}</strong><small>{project.description}</small></span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>

          <p className="story-transition">Along the way, I make tools, contribute to open source, and write down what I learn.</p>
          <div className="story-notes">
            <div><span className="note-label">Open source</span>{openSourceProjects.map((project) => <a key={project.title} href={project.github} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={13} /></a>)}</div>
            <div><span className="note-label">Recently thinking with</span><p>{Object.values(technologies).flat().join(" · ")}</p></div>
          </div>

          <a className="story-article" href={featuredBlog.link} target="_blank" rel="noreferrer"><span><strong>{featuredBlog.title}</strong><small>{featuredBlog.description}</small></span><ArrowUpRight size={16} /></a>
          <p className="story-signoff">If you are working on something thoughtful, <a href={`mailto:${personalInfo.email}`}>write to me</a>.</p>
        </article>

        <footer className="story-footer"><span>© {new Date().getFullYear()} {personalInfo.name}</span><span>{otherProjects.length} other projects</span></footer>
      </div>
    </main>
  );
};
