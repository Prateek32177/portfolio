'use client';

import React, { useState } from 'react';
import config from '@/config.json';
import Link from 'next/link';
import { Mail, Github, Linkedin, ExternalLink, Star, Code2, Zap, Plus, Minus } from 'lucide-react';

export const HomeComponent = () => {
  const { personalInfo, featuredProjects, otherProjects, openSourceProjects, technologies } = config;
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
      {/* Hero Section with Decorative Element */}
      <section className="pt-24 pb-40 px-6 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Decorative orb-like element */}
          <div className="mb-16 relative h-48 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#2db69d]/30 to-[#2db69d]/5 blur-3xl"></div>
          </div>

          <div className="animate-fade-in-up">
            <p className="text-sm text-[#888888] mb-6 font-medium tracking-wide">
              Hello, I'm
            </p>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-[#ffffff] leading-tight">
              {personalInfo.name}
            </h1>
            
            <div className="mb-12">
              <p className="text-2xl md:text-3xl font-serif text-[#e5e5e5] mb-4 leading-tight">
                I help <span className="underline decoration-2 decoration-[#2db69d] underline-offset-4">{personalInfo.tagline.split('I help ')[1]}</span>
              </p>
            </div>

            <p className="text-base md:text-lg text-[#999999] mb-8 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2db69d] text-[#0f0f0f] font-semibold rounded-lg hover:bg-[#1fa883] transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2db69d] text-[#2db69d] font-semibold rounded-lg hover:bg-[#2db69d] hover:text-[#0f0f0f] transition-all duration-300"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <div className="flex gap-4 text-sm text-[#888888]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2db69d] rounded-full"></span>
                New Delhi, India
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2db69d] rounded-full"></span>
                Available for work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Best Section */}
      <section className="py-20 px-6 md:px-8 lg:px-16 border-t border-[#222222]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-[#ffffff] animate-fade-in-up">What I build best</h2>
          
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="pl-4 border-l-2 border-[#2db69d]">
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Design-forward full-stack applications with strong engineering fundamentals and polished user experiences.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-[#2db69d]">
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Open source packages and SDKs that solve real problems and reduce boilerplate for developers.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-[#2db69d]">
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Performance-optimized React/Next.js products that prioritize accessibility and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Open Source Section */}
      <section className="py-20 px-6 md:px-8 lg:px-16 border-t border-[#222222]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-[#ffffff] animate-fade-in-up">Featured Open Source</h2>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="border border-[#2db69d] rounded-xl p-8 bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#ffffff] mb-2">Tern</h3>
                  <p className="text-[#888888] mb-4">Universal webhook signature verification SDK</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 text-sm text-[#2db69d]">
                    <Star size={16} className="fill-[#2db69d]" />
                    41
                  </span>
                </div>
              </div>

              <p className="text-[#d0d0d0] mb-6 leading-relaxed">
                Zero-dependency TypeScript framework supporting 19+ webhook platforms. Used in production by teams worldwide.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#2db69d]/15 text-[#2db69d] text-xs font-medium rounded-full border border-[#2db69d]/30">
                  19+ Platforms
                </span>
                <span className="px-3 py-1 bg-[#2db69d]/15 text-[#2db69d] text-xs font-medium rounded-full border border-[#2db69d]/30">
                  Zero Dependencies
                </span>
                <span className="px-3 py-1 bg-[#2db69d]/15 text-[#2db69d] text-xs font-medium rounded-full border border-[#2db69d]/30">
                  Production Ready
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/hookflo/tern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href="https://www.npmjs.com/package/@hookflo/tern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  NPM
                </a>
                <a 
                  href="https://tern.hookflo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="py-20 px-6 md:px-8 lg:px-16 border-t border-[#222222]">
        <div className="max-w-5xl mx-auto space-y-0">
          {/* How I Run Projects */}
          <div className="border-b border-[#222222]">
            <button
              onClick={() => toggleSection('process')}
              className="w-full py-8 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h2 className="text-3xl font-serif font-bold text-[#ffffff]">How I run a project</h2>
              {expandedSections['process'] ? (
                <Minus size={28} className="text-[#2db69d]" />
              ) : (
                <Plus size={28} className="text-[#2db69d]" />
              )}
            </button>
            {expandedSections['process'] && (
              <div className="pb-8 pl-4 border-l-2 border-[#2db69d] animate-fade-in">
                <p className="text-[#d0d0d0] leading-relaxed">
                  I focus on clear communication, iterative development, and delivering working prototypes quickly. I emphasize understanding requirements deeply before building, maintaining clean architecture throughout, and ensuring code quality through testing and documentation.
                </p>
              </div>
            )}
          </div>

          {/* About Me */}
          <div className="border-b border-[#222222]">
            <button
              onClick={() => toggleSection('about')}
              className="w-full py-8 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h2 className="text-3xl font-serif font-bold text-[#ffffff]">About me</h2>
              {expandedSections['about'] ? (
                <Minus size={28} className="text-[#2db69d]" />
              ) : (
                <Plus size={28} className="text-[#2db69d]" />
              )}
            </button>
            {expandedSections['about'] && (
              <div className="pb-8 pl-4 border-l-2 border-[#2db69d] space-y-4 animate-fade-in">
                <p className="text-[#d0d0d0] leading-relaxed">
                  I'm a design engineer passionate about building beautiful, performant products. My background spans design, frontend development, and open source maintenance, giving me a unique perspective on crafting experiences that are both delightful and technically sound.
                </p>
                <p className="text-[#d0d0d0] leading-relaxed">
                  Through open source work like Tern, I've learned the importance of solving real problems with clean, zero-dependency solutions. I thrive at the intersection of design and engineering—where thoughtful UX meets robust code.
                </p>
              </div>
            )}
          </div>

          {/* Need a Designer-Engineer */}
          <div className="border-b border-[#222222]">
            <button
              onClick={() => toggleSection('collab')}
              className="w-full py-8 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h2 className="text-3xl font-serif font-bold text-[#ffffff]">Need a designer-engineer?</h2>
              {expandedSections['collab'] ? (
                <Minus size={28} className="text-[#2db69d]" />
              ) : (
                <Plus size={28} className="text-[#2db69d]" />
              )}
            </button>
            {expandedSections['collab'] && (
              <div className="pb-8 pl-4 border-l-2 border-[#2db69d] animate-fade-in">
                <p className="text-[#d0d0d0] leading-relaxed mb-4">
                  I'm available for contract work on design-forward products, open source contributions, and technical consulting. Reach out with your project details and let's discuss how I can help bring your vision to life.
                </p>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#2db69d] text-[#0f0f0f] font-semibold rounded-lg hover:bg-[#1fa883] transition-all duration-300">
                  <Mail size={18} />
                  Get in touch
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-8 lg:px-16 border-t border-[#222222]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-[#ffffff] animate-fade-in-up">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {Object.entries(technologies).map(([category, techs]: [string, any]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-[#2db69d] mb-4 uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(typeof techs === 'object' && !Array.isArray(techs) ? Object.keys(techs) : techs).map((tech: string, idx: number) => (
                    <span key={idx} className="px-3 py-2 bg-[#1a1a1a] text-[#d0d0d0] text-sm border border-[#333333] rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section className="py-20 px-6 md:px-8 lg:px-16 border-t border-[#222222]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <p className="text-lg text-[#d0d0d0] mb-8">
              Let's create something remarkable together
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2db69d] hover:text-[#1fa883] font-medium transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-[#666666]">© 2024 Prateek Jain. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
