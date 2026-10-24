"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Rss } from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies, featuredBlog } = config;
  const orbRef = useRef<HTMLDivElement>(null);
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });
  const bio = personalInfo.bio.replace(/\*\*/g, "");

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const strength = distance > 460 ? 0 : Math.min((460 - distance) / 460, 1);
      setOrbOffset({ x: (dx / Math.max(distance, 1)) * strength * 22, y: (dy / Math.max(distance, 1)) * strength * 22 });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <main className="portfolio-shell">
      <div className="portfolio-frame">
        <header className="topline">
          <div ref={orbRef} className="orb" style={{ transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)` }} aria-label="Animated orb">
            <Orb {...emeraldPreset} size={0.34} animationSpeedBase={0.15} />
          </div>
          <span className="topline-note">{personalInfo.location} / {personalInfo.title}</span>
          <a className="topline-contact" href={`mailto:${personalInfo.email}`}>Let&apos;s talk <ArrowUpRight size={13} /></a>
        </header>

        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 id="intro-title">{personalInfo.name}</h1>
          <p className="intro-line">I build useful things for the internet, and sometimes things that are just a little bit strange.</p>
          <p className="intro-copy">{bio}</p>
          <nav className="social-row" aria-label="Social links">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
            <a href={personalInfo.social.medium} target="_blank" rel="noreferrer"><Rss size={14} /> Notes</a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={14} /> Email</a>
          </nav>
        </section>

        <div className="story-marker" aria-hidden="true"><span /> a few things I&apos;ve made</div>
        <section className="work-list" aria-label="Selected work">
          {featuredProjects.map((project, index) => (
            <a className="work-item" key={project.title} href={project.link} target="_blank" rel="noreferrer">
              <span className="work-index">0{index + 1}</span>
              <span className="work-content"><strong>{project.title}</strong><small>{project.description}</small></span>
              <ArrowUpRight className="work-arrow" size={17} />
            </a>
          ))}
          {openSourceProjects.slice(0, 1).map((project) => (
            <a className="work-item" key={project.title} href={project.github} target="_blank" rel="noreferrer">
              <span className="work-index">03</span>
              <span className="work-content"><strong>{project.title}</strong><small>{project.description}</small></span>
              <ArrowUpRight className="work-arrow" size={17} />
            </a>
          ))}
        </section>

        <section className="aside-story">
          <p>When I&apos;m not shipping at Hookflo or maintaining Tern, I&apos;m usually making art, playing Valorant, riding a bicycle, or looking for a good reason to start another project.</p>
          <div className="aside-links">
            <a href={personalInfo.social.art} target="_blank" rel="noreferrer">See the art <ArrowUpRight size={13} /></a>
            <a href={featuredBlog.link} target="_blank" rel="noreferrer">Read a note <ArrowUpRight size={13} /></a>
          </div>
        </section>

        <section className="closing-note">
          <span className="closing-dot" />
          <p>If you&apos;re around and building something with a pulse, say hi. I&apos;d love to hop on a cycle, talk shop, or make something with you.</p>
          <a href={`mailto:${personalInfo.email}`}>Find me <ArrowUpRight size={14} /></a>
        </section>

        <footer className="footer-line">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span>{otherProjects.length} side quests · {Object.values(technologies).flat().slice(0, 3).join(" · ")}</span>
        </footer>
      </div>
    </main>
  );
};
