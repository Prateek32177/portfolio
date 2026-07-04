"use client";
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import { useEffect, useRef, useState } from "react";
import config from "../../config.json";

export const HomeComponent = () => {
  const {
    personalInfo,
    featuredProjects,
    technologies,
  } = config;
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const orbRect = orbRef.current.getBoundingClientRect();
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const orbCenterX = orbRect.left + orbRect.width / 2;
        const orbCenterY = orbRect.top + orbRect.height / 2;

        setMousePosition({ x: cursorX, y: cursorY });

        const deltaX = cursorX - orbCenterX;
        const deltaY = cursorY - orbCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 600;
        const attractionStrength = 0.4;

        if (distance < maxDistance && distance > 0) {
          const force = Math.min(
            (attractionStrength * (maxDistance - distance)) / maxDistance,
            1
          );
          const directionX = deltaX / distance;
          const directionY = deltaY / distance;
          const maxOffset = 80;
          const offsetX = directionX * force * maxOffset;
          const offsetY = directionY * force * maxOffset;
          setOrbOffset({ x: offsetX, y: offsetY });
        } else {
          setOrbOffset({ x: 0, y: 0 });
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getAttractionIntensity = () => {
    if (!orbRef.current) return 0;
    const distance = Math.sqrt(
      orbOffset.x * orbOffset.x + orbOffset.y * orbOffset.y
    );
    return Math.min(distance / 80, 1);
  };

  const attractionIntensity = getAttractionIntensity();

  const highlightBio = (text: string) => {
    let highlightedText = text;
    personalInfo.highlightKeywords?.forEach((keyword) => {
      const regex = new RegExp(`\\*\\*${keyword}\\*\\*`, "gi");
      if (keyword.toLowerCase() === "hookflo.com") {
        highlightedText = highlightedText.replace(
          regex,
          `<a href="https://hookflo.com" target="_blank" rel="noopener noreferrer" class="font-bold text-accent underline hover:text-accent-dark transition-colors">${keyword}</a>`
        );
      } else {
        highlightedText = highlightedText.replace(
          regex,
          `<strong>${keyword}</strong>`
        );
      }
    });
    return highlightedText;
  };

  const handleCtaClick = (e: React.MouseEvent, ctaLink: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(ctaLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Main Content */}
      <main className="min-h-screen flex flex-col justify-between py-8 relative z-10">
        {/* Navigation Header */}
        <nav className="flex justify-center px-6">
          <div className="flex gap-8 text-sm text-muted">
            <a
              href="/thoughts"
              className="hover:text-foreground transition-all duration-300 relative group"
            >
              thoughts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-foreground transition-all duration-300 relative group"
            >
              contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </nav>

        {/* Hero Section - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-0">
          {/* Orb */}
          <div
            ref={orbRef}
            className="relative transition-transform duration-200 ease-out mb-8"
            style={{
              transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)`,
              filter: `drop-shadow(0 0 ${
                10 + attractionIntensity * 15
              }px rgba(201, 169, 97, ${0.25 + attractionIntensity * 0.35}))`,
            }}
          >
            <Orb
              {...emeraldPreset}
              animationSpeedBase={0.2 + attractionIntensity * 0.3}
              size={0.4}
              palette={{
                ...emeraldPreset.palette,
                shapeBStart: "",
                shapeBMiddle: "",
                shapeBEnd: "",
                shapeCStart: "",
                shapeCMiddle: "",
                shapeCEnd: "",
                shapeDStart: "",
                shapeDMiddle: "",
                shapeDEnd: "",
                shadowColor3: "",
                shadowColor4: "",
                mainBgStart: `hsl(${40 + attractionIntensity * 5}, ${
                  75 + attractionIntensity * 10
                }%, ${55 + attractionIntensity * 15}%)`,
                mainBgEnd: `hsl(${45 + attractionIntensity * 5}, ${
                  70 + attractionIntensity * 10
                }%, ${60 + attractionIntensity * 15}%)`,
                shadowColor1: "#a68548",
                shadowColor2: "#6b5839",
                shapeAStart: `hsl(${42 + attractionIntensity * 5}, ${
                  78 + attractionIntensity * 8
                }%, ${58 + attractionIntensity * 12}%)`,
                shapeAEnd: `hsl(${48 + attractionIntensity * 5}, ${
                  72 + attractionIntensity * 8
                }%, ${63 + attractionIntensity * 12}%)`,
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-3xl">
            {/* Tagline */}
            <p className="text-xs md:text-sm text-muted-light mb-4 tracking-widest uppercase font-mono">
              {personalInfo.tagline}
            </p>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
              {personalInfo.name}
            </h1>

            {/* Bio */}
            <p
              className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8"
              dangerouslySetInnerHTML={{ __html: highlightBio(personalInfo.bio) }}
            />

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href={personalInfo.social.twitter}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={personalInfo.social.github}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                title="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={personalInfo.social.art}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                target="_blank"
                rel="noreferrer"
                title="Art"
              >
                <Palette size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Projects - Minimal Grid */}
        <section className="px-6 py-12 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-serif font-light text-foreground mb-8">
              Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-border/30 rounded-lg hover:bg-border/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-serif text-accent group-hover:text-accent-dark transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={18} className="text-accent mt-1" />
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  {project.cta && (
                    <button
                      onClick={(e) => handleCtaClick(e, project.cta.link)}
                      className="inline-flex items-center gap-2 text-xs bg-accent text-background px-4 py-2 rounded-md hover:bg-accent-dark transition-all duration-300"
                    >
                      {project.cta.text}
                      <ArrowUpRight size={14} />
                    </button>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack - Minimal */}
        <section className="px-6 py-8 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-serif font-light text-foreground mb-6">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
                  Frontend
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {technologies.frontend.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
                  Backend
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {technologies.backend.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
                  Tools
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {technologies.tools.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-6 border-t border-border">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-muted">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-accent transition-colors"
            >
              {personalInfo.email}
            </a>
            <span>{personalInfo.location}</span>
          </div>
        </footer>
      </main>
    </div>
  );
};
