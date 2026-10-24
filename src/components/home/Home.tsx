"use client";

import { useEffect, useRef, useState } from "react";

import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo } = config;
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
          <p className="eyebrow">A note from the workbench</p>
          <p className="opening">I build things for the moment when an idea stops being an idea.</p>
          <p>I&apos;m <strong>Prateek Jain</strong>, a product and frontend-focused engineer. I care about the part people feel: the journey through a product, the pause before a button responds, the layout that makes a complicated thing feel obvious.</p>
          <p>At the moment, I&apos;m the solo founder of <a href="https://hookflo.com" target="_blank" rel="noreferrer"><mark>Hookflo</mark></a> — a unified API for webhooks, an <em>OpenRouter for events</em>. One connection instead of a different integration for every provider.</p>
          <p>I&apos;m also the core maintainer of <a href="https://github.com/tern-tools/tern" target="_blank" rel="noreferrer"><mark>Tern</mark></a> and Tern CLI: zero-dependency, strictly typed webhook verification for teams who want the security without the machinery.</p>
          <p>That is only the current page. Earlier chapters include <a href="#work">Textly AI</a>, an early OpenAI API wrapper; <a href="#work">DeazyQR</a>, dynamic QR codes for dine-in restaurants; <a href="#work">Dineeazy</a>, restaurant ordering; and <a href="#work">Brokersify</a> and <a href="#work">Zipoit</a>. A few shipped. A few folded. All of them left something useful behind.</p>
          <p>Alongside the independent work, I&apos;ve improved high-traffic ecommerce experiences at <a href="#work"><mark>BestBuy.com</mark></a> — the squeezed carousel card, the product grid, the search flow that finally feels lighter. I&apos;ve worked on Core Web Vitals, reduced CLS by 50% and LCP by 30% on key pages, and built an A/B/n testing system with feature flags and Optimizely that saved roughly $40K a year in engineering effort.</p>
          <p>I like the whole loop: a rough thought, a real interface, somebody using it, and the uncomfortable question of how to make it better. When I&apos;m away from a screen, I&apos;m usually making art, listening to music, playing Valorant, or looking for a longer road to cycle. If you&apos;re nearby, <a href={`mailto:${personalInfo.email}`}>say hello</a>.</p>
        </article>

        <footer className="footer-line">
          <span>{personalInfo.location} · IST</span>
          <span className="footer-links"><a href={personalInfo.social.github} target="_blank" rel="noreferrer">GitHub</a><a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${personalInfo.email}`}>Email</a></span>
        </footer>
      </div>
    </main>
  );
};
