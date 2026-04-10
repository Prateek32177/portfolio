'use client';

import React from 'react';
import config from '@/config.json';
import Link from 'next/link';
import { Mail, Github, Linkedin, ExternalLink, Star, Code2, Users, Package } from 'lucide-react';

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies, featuredBlog, articles } = config;

  const ternProject = {
    title: 'Tern',
    tagline: 'Universal Webhook Verification SDK',
    description: 'Zero-dependency TypeScript framework supporting 19+ platforms (Stripe, Clerk, GitHub, Supabase, etc.) with production-ready adapters for Next.js, Express, and Cloudflare Workers.',
    impact: 'Eliminates webhook verification boilerplate across 19+ platforms',
    stats: {
      stars: 41,
      contributors: 4,
      platforms: 19,
    },
    tags: ['TypeScript', 'Zero Dependencies', 'Production-Ready'],
    github: 'https://github.com/Hookflo/tern',
    npm: 'https://www.npmjs.com/package/@hookflo/tern',
    docs: 'https://tern.hookflo.com',
  };

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-[var(--border-color)] backdrop-blur-sm bg-[#0f0f0f]/80">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-serif font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
            {personalInfo.name}
          </Link>
          <div className="flex gap-8 text-sm">
            <a href="#featured" className="link-underline">Featured</a>
            <a href="#open-source" className="link-underline">Open Source</a>
            <a href="#tech" className="link-underline">Stack</a>
            <a href="#contact" className="link-underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section container-narrow">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-[var(--text-primary)]">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
            I help design engineers and founders build scalable, high-performance products with clean architectures and thoughtful interfaces.
          </p>

          <p className="text-base text-[var(--text-tertiary)] mb-10 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              Get in Touch
            </a>
            <a href={personalInfo.social.github} className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section container-narrow border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--text-primary)]">What I Bring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Design Engineering',
              description: 'Strong focus on visual design paired with robust engineering. I build interfaces that are both beautiful and performant.'
            },
            {
              title: 'Performance First',
              description: 'Every line of code matters. I optimize for speed, efficiency, and user experience metrics.'
            },
            {
              title: 'Open Source Impact',
              description: 'Creator of Tern SDK (41+ stars). Passionate about tools that solve real problems for developers.'
            },
            {
              title: 'Scalable Systems',
              description: 'Experience building platforms handling 10K+ daily events with zero-downtime architectures.'
            }
          ].map((item, i) => (
            <div key={i} className={`card p-6 animate-fade-in-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">{item.title}</h3>
              <p className="text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Open Source - Tern Showcase */}
      <section id="open-source" className="section container-narrow border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--text-primary)]">Featured Open Source</h2>
        
        <div className="card p-8 md:p-12 animate-fade-in-up">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] mb-2">
                {ternProject.title}
              </h3>
              <p className="text-lg text-[var(--accent-primary)]">{ternProject.tagline}</p>
            </div>
            <div className="text-[var(--accent-primary)]">
              <Star size={28} fill="currentColor" />
            </div>
          </div>

          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            {ternProject.description}
          </p>

          <p className="text-sm text-[var(--accent-primary)] font-medium mb-8 bg-[var(--accent-primary)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-primary)]/30">
            {ternProject.impact}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-[var(--border-color)]">
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">{ternProject.stats.stars}+</div>
              <div className="text-sm text-[var(--text-tertiary)]">GitHub Stars</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">{ternProject.stats.platforms}</div>
              <div className="text-sm text-[var(--text-tertiary)]">Platform Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">{ternProject.stats.contributors}</div>
              <div className="text-sm text-[var(--text-tertiary)]">Contributors</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {ternProject.tags.map((tag, i) => (
              <span key={i} className="badge badge-primary">{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a href={ternProject.github} className="btn btn-primary flex items-center gap-2">
              <Github size={16} /> GitHub
            </a>
            <a href={ternProject.docs} className="btn btn-secondary flex items-center gap-2">
              <ExternalLink size={16} /> Documentation
            </a>
            <a href={ternProject.npm} className="btn btn-secondary flex items-center gap-2">
              <Package size={16} /> npm
            </a>
          </div>
        </div>

        {/* Other Open Source Projects */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Other Open Source</h3>
          <div className="space-y-4">
            {openSourceProjects.filter(p => p.title !== 'Tern OSS').map((project, i) => (
              <div key={i} className="card p-4 md:p-6 hover:scale-105 transform">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2">{project.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                  </div>
                  <a href={project.github} className="ml-4 flex-shrink-0">
                    <Github size={20} className="text-[var(--accent-primary)]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Products */}
      <section id="featured" className="section container-narrow border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--text-primary)]">Featured Products</h2>
        
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`card p-8 md:p-12 animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>
                  {project.period && <p className="text-sm text-[var(--text-tertiary)]">{project.period}</p>}
                </div>
              </div>

              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech?.map((tech, i) => (
                  <span key={i} className="badge badge-neutral text-xs">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <a href={project.link} className="btn btn-primary flex items-center gap-2">
                    <ExternalLink size={16} /> Visit
                  </a>
                )}
                {project.cta && (
                  <a href={project.cta.link} className="btn btn-secondary flex items-center gap-2">
                    {project.cta.text}
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="btn btn-secondary flex items-center gap-2">
                    <Github size={16} /> Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-16 border-t border-[var(--border-color)] pt-12">
          <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => (
              <div key={i} className="card p-6">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{project.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.link && (
                    <a href={project.link} className="text-xs btn btn-ghost">View</a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-xs btn btn-ghost">Code</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="section container-narrow border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--text-primary)]">Tech Stack</h2>
        
        <div className="space-y-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--text-tertiary)] mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {(items as string[]).map((item, i) => (
                  <span key={i} className="badge badge-neutral text-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {featuredBlog && (
        <section className="section container-narrow border-t border-[var(--border-color)]">
          <h2 className="text-3xl font-serif font-bold mb-8 text-[var(--text-primary)]">Featured Writing</h2>
          
          <a href={featuredBlog.link} className="card p-8 md:p-12 block hover:border-[var(--accent-primary)]">
            <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-3">{featuredBlog.date}</p>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-3">{featuredBlog.title}</h3>
            <p className="text-[var(--text-secondary)]">{featuredBlog.description}</p>
          </a>

          {articles.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">More Articles</h3>
              <div className="space-y-4">
                {articles.map((article, i) => (
                  <a key={i} href={article.link} className="card p-4 md:p-6 block">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-[var(--text-tertiary)] mb-2">{article.date}</p>
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">{article.title}</h4>
                        <p className="text-sm text-[var(--text-secondary)]">{article.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="section container-narrow border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-serif font-bold mb-8 text-[var(--text-primary)]">Let&apos;s Connect</h2>
        
        <p className="text-[var(--text-secondary)] mb-8 max-w-xl">
          I&apos;m always interested in discussing design engineering, open source projects, or building something cool together. Feel free to reach out!
        </p>

        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary flex items-center gap-2">
            <Mail size={16} /> Email Me
          </a>
          <a href={personalInfo.social.github} className="btn btn-secondary flex items-center gap-2">
            <Github size={16} /> GitHub
          </a>
          <a href={personalInfo.social.linkedin} className="btn btn-secondary flex items-center gap-2">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={personalInfo.social.twitter} className="btn btn-secondary flex items-center gap-2">
            <ExternalLink size={16} /> Twitter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-8 mt-16">
        <div className="container-narrow text-center text-sm text-[var(--text-tertiary)]">
          <p>Built with Next.js, React, and Tailwind CSS</p>
          <p className="mt-2">© 2025 Prateek Jain. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
