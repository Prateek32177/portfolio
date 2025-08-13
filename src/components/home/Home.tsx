"use client";
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  Palette,
  Calendar,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import { useEffect, useRef, useState } from "react";
import config from "../../config.json";

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
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const orbRect = orbRef.current.getBoundingClientRect();

        // Get cursor position relative to viewport
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        // Get orb's current position on screen
        const orbCenterX = orbRect.left + orbRect.width / 2;
        const orbCenterY = orbRect.top + orbRect.height / 2;

        setMousePosition({ x: cursorX, y: cursorY });

        // Calculate attraction force (opposite charges attract)
        const deltaX = cursorX - orbCenterX;
        const deltaY = cursorY - orbCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Physics: Coulomb's law for attraction (F = k * q1 * q2 / r²)
        const maxDistance = 600; // Increased for better page-wide response
        const attractionStrength = 0.4; // Slightly stronger for better responsiveness

        if (distance < maxDistance && distance > 0) {
          // Normalize direction and apply inverse square law
          const force = Math.min(
            (attractionStrength * (maxDistance - distance)) / maxDistance,
            1
          );
          const directionX = deltaX / distance;
          const directionY = deltaY / distance;

          // Apply attraction with smooth easing
          const maxOffset = 80; // Increased maximum movement for better visibility
          const offsetX = directionX * force * maxOffset;
          const offsetY = directionY * force * maxOffset;

          setOrbOffset({ x: offsetX, y: offsetY });
        } else {
          // Return to original position when cursor is far
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
    return Math.min(distance / 80, 1); // Normalize to 0-1
  };

  const attractionIntensity = getAttractionIntensity();

  // Function to highlight keywords in bio
  const highlightBio = (text: string) => {
    let highlightedText = text;
    personalInfo.highlightKeywords?.forEach((keyword) => {
      const regex = new RegExp(`\\*\\*${keyword}\\*\\*`, "gi");
      if (keyword.toLowerCase() === "hookflo.com") {
        highlightedText = highlightedText.replace(
          regex,
          `<a href="https://hookflo.com" target="_blank" rel="noopener noreferrer" class="font-bold text-teal-600 underline hover:text-teal-700 transition-colors">${keyword}</a>`
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

  // Handle CTA click to prevent parent link navigation
  const handleCtaClick = (e: React.MouseEvent, ctaLink: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(ctaLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8 relative z-10">
        <nav className="flex justify-between items-center pb-8">
          <div
            ref={orbRef}
            className="relative transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)`,
              filter: `drop-shadow(0 0 ${
                10 + attractionIntensity * 15
              }px rgba(45, 182, 157, ${0.3 + attractionIntensity * 0.4}))`,
            }}
          >
            <Orb
              {...emeraldPreset}
              animationSpeedBase={0.1 + attractionIntensity * 0.3}
              size={0.35}
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
                ...emeraldPreset.palette,
                mainBgStart: `hsl(${165 + attractionIntensity * 20}, ${
                  60 + attractionIntensity * 25
                }%, ${60 + attractionIntensity * 20}%)`,
                mainBgEnd: `hsl(${175 + attractionIntensity * 20}, ${
                  70 + attractionIntensity * 25
                }%, ${65 + attractionIntensity * 20}%)`,
                shadowColor1: "#699a90",
                shadowColor2: "#1f6f5f",
                shapeAStart: `hsl(${165 + attractionIntensity * 25}, ${
                  65 + attractionIntensity * 20
                }%, ${65 + attractionIntensity * 15}%)`,
                shapeAEnd: `hsl(${175 + attractionIntensity * 25}, ${
                  75 + attractionIntensity * 20
                }%, ${70 + attractionIntensity * 15}%)`,
              }}
            />
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a
              href="/thoughts"
              className="hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group"
            >
              thoughts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group"
            >
              prateek://contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl text-[#2db69d] mb-2 font-serif transition-colors duration-500 cursor-default tracking-tighter">
            {personalInfo.name}
          </h1>
          <p
            className="text-base font-semibold text-gray-600 mb-4 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-normal">Obsessed with</span>{" "}
            {personalInfo.tagline}
          </p>
          <p
            className="text-gray-700 text-sm leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: highlightBio(personalInfo.bio) }}
          />

          <div className="flex gap-4 text-sm">
            <a
              href={personalInfo.social.twitter}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">twitter</span>
            </a>
            <a
              href={personalInfo.social.github}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">github</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">linkedin</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
            >
              <Mail
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">email</span>
            </a>
            <a
              href={personalInfo.social.art}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <Palette
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">art</span>
            </a>
          </div>
        </div>
        {/* 
        <section className="mb-10">
          <h2 className="text-lg text-teal-600 mb-3 font-light font-serif">
            Work
          </h2>
          <div className="space-y-3 text-sm">
            <div className="pl-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-teal-600">
                  Senior Full Stack Developer
                </span>
                <span className="text-sm text-gray-500">2024-Present</span>
              </div>
              <div className="text-gray-600 text-sm mb-1">Tech Startup</div>
              <div className="text-gray-700">
                Leading development of scalable web applications
              </div>
            </div>

            <div className="pl-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-teal-600">
                  Frontend Developer
                </span>
                <span className="text-sm text-gray-500">2021-2024</span>
              </div>
              <div className="text-gray-600 text-sm mb-1">Digital Agency</div>
              <div className="text-gray-700">
                Crafted responsive user interfaces for diverse clients
              </div>
            </div>
          </div>
        </section> */}

        <section className="mb-10">
          <h2 className="text-lg font-light text-teal-600 mb-3 font-serif">
            Products with Active Users
          </h2>
          <div className="space-y-4 text-sm">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-3 py-1 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:scale-[1.02] group cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </span>
                  <div className="flex gap-2 relative z-10">
                    <ArrowUpRight
                      size={16}
                      className="text-teal-600 group-hover:text-teal-700 transition-colors"
                    />
                    {project.github && (
                      <Github size={16} className="text-black/60" />
                    )}
                  </div>
                </div>
                <div className="text-gray-700 mb-1">{project.description}</div>
                <div className="text-xs text-gray-500 mb-2">
                  {project.tech.join(" • ")}
                </div>
                {/* CTA for HookFlo - using button instead of nested anchor */}
                {project.cta && (
                  <div className="mt-2">
                    <button
                      onClick={(e) => handleCtaClick(e, project.cta.link)}
                      className="inline-flex items-center gap-1 text-xs bg-teal-600 text-white px-3 py-1.5 rounded-md hover:bg-teal-700 transition-all duration-300 hover:scale-105 group-hover:bg-teal-700"
                    >
                      {project.cta.text}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform duration-300"
                      />
                    </button>
                  </div>
                )}
              </a>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-lg font-light text-gray-900 mb-2 font-serif">
              Other Projects
            </h3>
            <div>
              {otherProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link || project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-start hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 group-hover:text-teal-700 transition-colors text-sm">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-teal-600 hover:text-teal-700 hover:scale-110 transition-all duration-300 flex-shrink-0 md:w-4 md:h-4"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-light text-gray-900 mb-2 font-serif">
            Open Source Contribution
          </h2>
          <div className="space-y-1 text-sm pl-3">
            {openSourceProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-1 hover:bg-gray-50 rounded-lg px-2 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
              >
                <div>
                  <span className="text-teal-600 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </span>
                  <br />
                  <span className="text-gray-600 text-sm">
                    {project.description}
                  </span>
                </div>
                <Github size={16} className="text-black/60 flex-shrink-0" />
              </a>
            ))}
          </div>
          {/* GitHub CTA */}
          <div className="mt-8 md:mt-12 p-2 px-3 text-xs bg-teal-50 rounded-lg border border-teal-100 hover:bg-teal-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-teal-700">
                  Explore more projects on{" "}
                  <a
                    href={personalInfo.social.github}
                    className="font-medium underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  . Most of them are open-source.
                </span>
              </div>
              <ArrowRight
                size={16}
                className="text-teal-500 group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-light text-gray-900 mb-2 font-serif">
            Tech Stack
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed pl-3">
            <div className="mb-2">
              <span className="text-teal-600 font-medium text-sm">
                Frontend:
              </span>
              <br />
              <span className="text-sm text-gray-700">
                {technologies.frontend.join(", ")}
              </span>
            </div>

            <div className="mb-2">
              <span className="text-teal-600 font-medium text-sm">
                Backend:
              </span>
              <br />
              <span className="text-sm text-gray-700">
                {technologies.backend.join(", ")}
              </span>
            </div>

            <div className="mb-2">
              <span className="text-teal-600 font-medium text-sm">Tools:</span>
              <br />
              <span className="text-sm text-gray-700">
                {technologies.tools.join(", ")}
              </span>
            </div>
          </div>
        </section>

        <section className="mb-8 animate-fade-in-up">
          <div className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border border-teal-100 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-xs text-teal-600 font-medium uppercase tracking-wide">
                    Featured Article
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  <a
                    href={featuredBlog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featuredBlog.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {featuredBlog.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {featuredBlog.date}
                  </span>
                  <a
                    href={featuredBlog.link}
                    className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on Medium
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="mb-12 animate-fade-in-up" id="articles">
          <h2 className="text-lg font-light text-gray-900 mb-3 font-serif">
            Recent Articles
          </h2>

          <div className="space-y-4">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-baseline gap-4">
                  <div className="flex-shrink-0 text-xs flex items-center text-gray-500 w-20">
                    <Calendar size={14} className="inline mr-1" />
                    {article.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      <a href={article.link}>{article.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={personalInfo.social.medium}
              className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 hover:scale-105 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all articles
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-200 relative">
        <div className="max-w-2xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="text-gray-500">Lets connect</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600"
              >
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div className="text-right text-gray-500">
              <div>Last updated on Aug 13, 2025</div>
              <div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
