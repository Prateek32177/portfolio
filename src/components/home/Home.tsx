'use client';

import React from 'react';
import config from '@/config.json';
import Link from 'next/link';
import { Mail, Github, Linkedin, ExternalLink, Star, Code2, Zap } from 'lucide-react';

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies } = config;

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-sm text-[var(--text-secondary)] mb-4 font-medium">hey, i'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-[var(--text-primary)] leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <p className="text-base text-[var(--text-tertiary)] mb-12 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                Get in Touch
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-8 border-t border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-16 text-[var(--text-primary)]">Featured Work</h2>
          
          <div className="space-y-20">
            {featuredProjects.map((project, idx) => (
              <article key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech && project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[var(--text-secondary)] rounded border border-[var(--border-color)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit {project.cta?.text || 'Project'}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Source Code
                    </a>
                  )}
                </div>

                {idx < featuredProjects.length - 1 && <div className="mt-16 border-b border-[var(--border-color)]" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 px-6 md:px-8 border-t border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-16 text-[var(--text-primary)]">Open Source</h2>
          
          <div className="space-y-8">
            {openSourceProjects.map((project, idx) => (
              <article key={idx} className="p-6 border border-[var(--border-color)] rounded-lg bg-[#1a1a1a]/50 hover:border-[var(--accent-primary)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-serif font-bold mb-2 text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors">
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <section className="py-20 px-6 md:px-8 border-t border-[var(--border-color)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-16 text-[var(--text-primary)]">Other Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="text-lg font-serif font-bold mb-2 text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-8 border-t border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-16 text-[var(--text-primary)]">Tech Stack</h2>
          
          <div className="space-y-8">
            {Object.entries(technologies).map(([category, items], idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 capitalize">
                  {category}
                </h3>
                <div className="space-y-2">
                  {(items as string[]).map((item, i) => (
                    <p key={i} className="text-sm text-[var(--text-secondary)]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section className="py-20 px-6 md:px-8 border-t border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold mb-6 text-[var(--text-primary)]">Let's Work Together</h2>
            <p className="text-base text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Twitter
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>

            <p className="text-xs text-[var(--text-tertiary)]">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
