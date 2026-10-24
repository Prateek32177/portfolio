"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Rss } from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, openSourceProjects, featuredBlog } = config;
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
      setOrbOffset({ x: (dx / Math.max(distance, 1)) * strength * 18, y: (dy / Math.max(distance, 1)) * strength * 18 });
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
          <span className="topline-note">{personalInfo.location}</span>
          <a className="topline-contact" href={`mailto:${personalInfo.email}`}>say hello <ArrowUpRight size={13} /></a>
        </header>

        <article className="story" aria-labelledby="intro-title">
          <p className="chapter">A small corner of the internet</p>
          <h1 id="intro-title">I&apos;m {personalInfo.name}.</h1>
          <p className="lead">{personalInfo.title}, founder of <a href="https://hookflo.com" target="_blank" rel="noreferrer">Hookflo</a>, maintainer of <a href="https://github.com/tern-tools/tern" target="_blank" rel="noreferrer">Tern</a>, and a serial builder of useful, occasionally unusual things.</p>
          <p>{bio}</p>
          <p>I like the part before the answer: the wondering, the sketching, the first strange prototype. Most of my work lives somewhere between software, design, and a stubborn curiosity about how things could feel better.</p>
          <nav className="social-row" aria-label="Social links">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
            <a href={personalInfo.social.medium} target="_blank" rel="noreferrer"><Rss size={14} /> Notes</a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={14} /> Email</a>
          </nav>
        </article>

        <section className="work" aria-label="Selected work">
          <p className="chapter">A few chapters from the workbench</p>
          {featuredProjects.map((project, index) => (
            <a className="work-item" key={project.title} href={project.link} target="_blank" rel="noreferrer">
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="work-content"><strong>{project.title}</strong><small>{project.description}</small></span>
              <ArrowUpRight className="work-arrow" size={16} />
            </a>
          ))}
          {openSourceProjects.slice(0, 1).map((project) => (
            <a className="work-item" key={project.title} href={project.github} target="_blank" rel="noreferrer">
              <span className="work-index">03</span>
              <span className="work-content"><strong>{project.title}</strong><small>{project.description}</small></span>
              <ArrowUpRight className="work-arrow" size={16} />
            </a>
          ))}
        </section>

        <section className="postscript">
          <p className="chapter">The important footnote</p>
          <p>When I&apos;m not somewhere deep in a product, you&apos;ll find me making art, playing Valorant, riding my bicycle, or disappearing into music. If you&apos;re around, I&apos;d love to hop on a cycle and talk about the thing you&apos;re making.</p>
          <div className="aside-links">
            <a href={personalInfo.social.art} target="_blank" rel="noreferrer">the art <ArrowUpRight size={13} /></a>
            <a href={featuredBlog.link} target="_blank" rel="noreferrer">a note <ArrowUpRight size={13} /></a>
            <a href={`mailto:${personalInfo.email}`}>write to me <ArrowUpRight size={13} /></a>
          </div>
        </section>

        <footer className="footer-line">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span>made with curiosity</span>
        </footer>
      </div>
    </main>
  );
};
