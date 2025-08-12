"use client";
import {
  Github,
  Mail,
  Linkedin,
  Twitter,
  FileText,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Palette,
} from "lucide-react";
import { Orb, emeraldPreset } from "react-ai-orb";
import config from "../../config.json";

export const HomeComponent = () => {
  const {
    personalInfo,
    featuredProjects,
    otherProjects,
    technologies,
    featuredBlog,
    articles,
  } = config;

  return (
    <div className="min-h-screen ">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-8 py-8 pb-0 z-10  relative">
        {/* Enhanced Hero */}
        <nav className="flex justify-between items-center pb-6 max-w-5xl mx-auto">
          {/* Enhanced logo with hover animation */}
          <Orb
            {...emeraldPreset}
            animationSpeedBase={0.4}
            size={0.4}
            palette={{
              mainBgStart: "#2db69d",
              mainBgEnd: "#81d5c4",
              shadowColor1: "#699a90",
              shadowColor2: "#1f6f5f",
              shadowColor3: "#1b5f52",
              shadowColor4: "#174f44",
              shapeAStart: "#37c3a8",
              shapeAEnd: "#2db69d",
              shapeBStart: "#8adacc",
              shapeBMiddle: "#81d5c4",
              shapeBEnd: "#77cdbc",
              shapeCStart: "#2db69d",
              shapeCMiddle: "#28a890",
              shapeCEnd: "#239c86",
              shapeDStart: "#92e0d2",
              shapeDMiddle: "#88d8c8",
              shapeDEnd: "#7dd0be",
            }}
          />

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

        <div className="mb-16 animate-fade-in-up" id="about">
          <h1 className="text-4xl  text-[#2db69d] mb-2 font-serif  transition-colors duration-500 cursor-default tracking-tighter">
            {personalInfo.name}
          </h1>
          <p
            className="text-base font-semibold text-gray-500 mb-4 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-normal">Obsessed with</span>{" "}
            {personalInfo.tagline}
          </p>

          <div
            className="mb-6 max-w-3xl animate-fade-in-up text-[14px] sm:text-sm"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-gray-700 leading-relaxed mb-6 tracking-tight">
              {personalInfo.bio}
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div
            className="flex flex-wrap gap-6 text-sm text-gray-600 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group tracking-tighter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">resume</span>
            </a>
            <a
              href={personalInfo.social.twitter}
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">twitter</span>
            </a>
            <a
              href={personalInfo.social.github}
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">github</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">linkedin</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
            >
              <Mail
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline">email</span>
            </a>
            <a
              href={personalInfo.social.art}
              className="flex items-center gap-2 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
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

        {/* Featured Projects */}
        <section className="mb-20 animate-fade-in-up" id="work">
          <h2 className="text-lg font-light text-gray-900 mb-8 font-serif hover:text-teal-700 transition-colors duration-300 cursor-default">
            Featured Work
          </h2>

          <div className="space-y-8 md:space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group hover:transform hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="md:w-2/5">
                    <div className="aspect-video md:aspect-video aspect-[16/10] rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300 overflow-hidden relative">
                      {project.image === "brokersify" ? (
                        <img
                          src="/Brokersify.jpg"
                          alt="Brokersify Platform"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : project.image === "hookflo" ? (
                        <img
                          src="/hookflo-banneer.jpeg"
                          alt="HookFlo Platform"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg flex items-center justify-center">
                          <div className="text-teal-400 text-sm">
                            {project.title}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 md:py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-teal-100 hover:text-teal-700 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 md:gap-4 text-sm">
                      <a
                        href={project.link}
                        className="flex items-center gap-1 text-teal-600 hover:text-teal-700 hover:scale-105 transition-all duration-300 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:rotate-12 transition-transform"
                        />
                        Live Demo
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex items-center gap-1 text-gray-600 hover:text-gray-700 hover:scale-110 transition-all duration-300 group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github
                            size={14}
                            className="group-hover/link:rotate-12 transition-transform"
                          />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-lg font-light text-gray-900 mb-6 font-serif">
              Other Projects
            </h3>
            <div className="space-y-2 md:space-y-3">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start hover:bg-gray-50 p-3 md:p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 group-hover:text-teal-700 transition-colors text-sm md:text-base">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link || project.github || "#"}
                    className="text-teal-600 hover:text-teal-700 hover:scale-110 transition-all duration-300 flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                  </a>
                </div>
              ))}
            </div>
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

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-lg font-light text-gray-900 mb-6 font-serif hover:text-teal-700 transition-colors duration-300 cursor-default">
            Technologies & Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-sm">
            <div className="group hover:transform hover:scale-105 transition-all duration-300 p-4 md:p-5 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-teal-50 border border-transparent hover:border-teal-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-teal-600 transition-colors flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform"></div>
                Frontend
              </h3>
              <div className="grid grid-cols-1 gap-2 text-gray-600">
                {technologies.frontend.map((tech, index) => (
                  <div
                    key={index}
                    className="hover:text-gray-900 transition-all duration-300 cursor-default py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-xs md:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300 p-4 md:p-5 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-teal-50 border border-transparent hover:border-teal-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-teal-600 transition-colors flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform"></div>
                Backend
              </h3>
              <div className="grid grid-cols-1 gap-2 text-gray-600">
                {technologies.backend.map((tech, index) => (
                  <div
                    key={index}
                    className="hover:text-gray-900 transition-all duration-300 cursor-default py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-xs md:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300 p-4 md:p-5 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-teal-50 border border-transparent hover:border-teal-100 sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-teal-600 transition-colors flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform"></div>
                Tools & Cloud
              </h3>
              <div className="grid grid-cols-1 gap-2 text-gray-600">
                {technologies.tools.map((tech, index) => (
                  <div
                    key={index}
                    className="hover:text-gray-900 transition-all duration-300 cursor-default py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-xs md:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog */}
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
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
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
                    <Calendar size={12} />
                    {featuredBlog.date}
                  </span>
                  <a
                    href={featuredBlog.link}
                    className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on Medium
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="mb-12 animate-fade-in-up" id="articles">
          <h2 className="text-2xl font-light text-gray-900 mb-8 font-serif hover:text-teal-700 transition-colors duration-300 cursor-default">
            Recent Articles
          </h2>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-xs text-gray-500 w-20">
                    <Calendar size={12} className="inline mr-1" />
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
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-200 relative">
        <div className="max-w-2xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between text-xs">
            <div>
              <div className=" text-gray-500">Lets connect</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex  items-center gap-3 text-gray-700 hover:text-teal-600"
              >
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div className="text-right text-gray-500">
              <div>Last updated on Jan 8, 2025</div>
              <div className=" mt-1">
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
