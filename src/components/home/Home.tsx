"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Rss } from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, openSourceProjects, featuredBlog } = config;
  const orbRef = useRef<HTMLDivElement>(null);
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const strength = distance > 420 ? 0 : Math.min((420 - distance) / 420, 1);
      setOrbOffset({ x: (dx / Math.max(distance, 1)) * strength * 14, y: (dy / Math.max(distance, 1)) * strength * 14 });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <main className="portfolio-shell">
      <div className="portfolio-frame">
<header className="topline">
 <span className="topline-mark">{personalInfo.name}</span>
 <span className="topline-note">{personalInfo.location}</span>
 <div className="topline-links">
  <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">in</a>
  <a href={personalInfo.social.github} target="_blank" rel="noreferrer">gh</a>
  <a href={`mailto:${personalInfo.email}`}>email</a>
 </div>
  </header>
  <div ref={orbRef} className="orb" style={{ transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)` }} aria-label="Animated orb">
   <Orb {...emeraldPreset} size={0.3} animationSpeedBase={0.14} />
  </div>
  
  <article className="story" aria-label="About me">
          <p className="eyebrow">Hello, I&apos;m {personalInfo.name}.</p>
          <p className="opening">I keep making things because I can&apos;t quite help it.</p>
          <p>{personalInfo.title}. These days that means building <a href="https://hookflo.com" target="_blank" rel="noreferrer">Hookflo</a>, and maintaining <a href="https://github.com/tern-tools/tern" target="_blank" rel="noreferrer">Tern</a>. It also means following a question until it becomes a product, even when the question seems a little odd.</p>
          <p>Before the things people know me for, there was <a href="#work">Textly AI</a>, a wrapper around the OpenAI API before wrappers were a category; <a href="#work">DeazyQR</a>, a dynamic QR system; <a href="#work">Dineeazy</a>, for restaurants; and a long trail of experiments, including Brokersify, Zipoit, and a few that quietly taught me more than the successful ones did.</p>
          <p>That trail is probably the honest version of my work. Some ideas found their people. Some didn&apos;t. I&apos;ve learned to enjoy both outcomes: the rush of shipping, the humility of being wrong, and the next blank page waiting after each of them.</p>
          <p>I like working close to the surface of an idea — where product, engineering, and taste are still in the same room. If you&apos;re building something with a little conviction behind it, <a href={`mailto:${personalInfo.email}`}>write to me</a>.</p>
          <nav className="social-row" aria-label="Social links">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={13} /> GitHub</a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={13} /> LinkedIn</a>
            <a href={personalInfo.social.medium} target="_blank" rel="noreferrer"><Rss size={13} /> Notes</a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={13} /> Email</a>
          </nav>
        </article>

        <div id="work" className="work-note" aria-label="Selected work">
          <p>Some of the things I&apos;ve made along the way: {featuredProjects.map((project, index) => <span key={project.title}><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>{index < featuredProjects.length - 1 ? ", " : ""}</span>)}{openSourceProjects.slice(0, 1).map((project) => <span key={project.title}>; <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a></span>)}. This is only the visible part — the tip of the iceberg, really. There is more coming.</p>
        </div>

        <p className="postscript">When I&apos;m not at a screen, I&apos;m probably making art, listening to music, playing Valorant, or riding my bicycle. If you&apos;re around, I&apos;d love to hop on with you too.</p>

        <footer className="footer-line">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <a href={featuredBlog.link} target="_blank" rel="noreferrer">a note from the workshop <ArrowUpRight size={11} /></a>
        </footer>
      </div>
    </main>
  );
};
