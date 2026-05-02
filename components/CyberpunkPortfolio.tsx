"use client";

import { useEffect, useState } from "react";
import {
  experience,
  heroSlides,
  portfolioSections,
  projects,
  socials,
  technologies,
  type PortfolioSectionId,
} from "@/data/portfolio";

export default function CyberpunkPortfolio() {
  const [activeSection, setActiveSection] =
    useState<PortfolioSectionId>("home");
  const activeSlide = 0;

  useEffect(() => {
    const updateActiveSection = () => {
      const checkpoint = window.scrollY + window.innerHeight * 0.38;
      const currentSection = portfolioSections.reduce<PortfolioSectionId>(
        (current, section) => {
          const element = document.getElementById(section.id);

          if (!element) {
            return current;
          }

          return element.offsetTop <= checkpoint ? section.id : current;
        },
        "home",
      );

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const activeIndex = portfolioSections.findIndex(
    (section) => section.id === activeSection,
  );

  return (
    <main className="cyber-shell min-h-screen text-zinc-950">
      <LevelProgress activeIndex={activeIndex} />
      <SideMenu activeSection={activeSection} />

      <div className="scanline-overlay" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 lg:pl-72">
        <HeroSection activeSlide={activeSlide} />
        <ProjectsSection />
        <AboutSection />
        <TechnologiesSection />
        <ExperienceSection />
        <SocialsSection />
      </div>
    </main>
  );
}

function LevelProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-black/20 bg-[#a9b3be]/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md lg:left-72">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
        {portfolioSections.map((section, index) => {
          const isActive = activeIndex === index;
          const isComplete = index < activeIndex;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex min-w-0 flex-1 items-center gap-2"
              aria-label={`Level ${section.level}: ${section.label}`}
            >
              <span
                className={`level-node grid h-9 w-9 shrink-0 place-items-center rounded-full border text-xs font-black transition ${
                  isActive
                    ? "active border-red-600 text-white"
                    : isComplete
                      ? "border-black text-black"
                      : "border-black/30 text-black/45"
                }`}
              >
                {section.level}
              </span>
              <span className="hidden truncate text-[0.62rem] font-black uppercase tracking-[0.24em] text-black/55 group-hover:text-red-700 sm:block">
                Level {index + 1}
              </span>
              {index < portfolioSections.length - 1 ? (
                <span
                  className={`h-px flex-1 ${
                    index < activeIndex ? "bg-red-600" : "bg-black/25"
                  }`}
                />
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SideMenu({ activeSection }: { activeSection: PortfolioSectionId }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-black/20 bg-[#a9b3be]/88 px-9 py-28 backdrop-blur-md lg:block">
      <div className="mb-14">
        <p className="text-xs font-black uppercase tracking-[0.42em] text-black/55">
          CORP.
        </p>
        <h1 className="mt-3 text-2xl font-black uppercase tracking-[0.18em] text-black">
          Portfolio
        </h1>
      </div>

      <nav aria-label="Portfolio sections" className="space-y-3">
        {portfolioSections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`menu-option group relative block px-5 py-2 text-sm font-black uppercase tracking-[0.2em] transition ${
                isActive ? "active text-black" : "text-black/55 hover:text-black"
              }`}
            >
              <span className="relative z-10">{section.label}</span>
            </a>
          );
        })}
      </nav>

      <p className="mt-10 text-sm leading-6 text-black/55">
        Navigate the main story of Carlos Zavala. Scroll or select a level to
        load each portfolio module.
      </p>
    </aside>
  );
}

function HeroSection({ activeSlide }: { activeSlide: number }) {
  return (
    <section
      id="home"
      className="section-panel editorial-hero relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.src}-${slide.position}`}
            className={`hero-slide absolute inset-0 bg-cover bg-center transition duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundPosition: slide.position,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(169,179,190,0.96),rgba(169,179,190,0.7)_36%,rgba(239,35,55,0.15)_68%,rgba(0,0,0,0.4)),radial-gradient(circle_at_72%_42%,rgba(239,35,55,0.45),transparent_36%)]" />

      <div className="relative z-10 max-w-5xl">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-black/55">
          Level 01 / Home
        </p>
        <h2
          className="glitch-text text-5xl font-black uppercase leading-none tracking-[0.08em] text-black sm:text-7xl lg:text-8xl"
          data-text="Carlos Zavala"
        >
          Carlos Zavala
        </h2>
        <p className="mt-5 text-2xl font-black uppercase tracking-[0.28em] text-red-700">
          Full Stack Developer
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
          Building polished interfaces, resilient product systems, and cinematic
          web experiences with a clean engineering core.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <ContentSection
      id="projects"
      eyebrow="Level 02 / Mission Archive"
      title="Projects"
      description="Selected builds presented as active missions in the portfolio mainframe."
    >
      <div className="project-stage">
        <div className="project-section-character" aria-hidden="true" />
        <div className="project-showcase">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-collage-card project-card-${index + 1}`}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-label={`${project.title} preview`}
                role="img"
              />
              <div className="project-copy">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-black/55">
                    {project.type}
                  </p>
                  <span className="project-size-badge">
                    Size {index === 0 ? "XL" : index === 1 ? "M" : "L"}
                  </span>
                </div>
                <h3 className="text-3xl font-black uppercase leading-none tracking-[0.04em] text-black sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-black/62">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span key={tool} className="project-dot-pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}

function AboutSection() {
  return (
    <ContentSection
      id="about"
      eyebrow="Level 03 / Character File"
      title="About Me"
      description="A developer profile tuned for product interfaces, technical clarity, and memorable interaction design."
    >
      <div className="about-board">
        <div className="about-image" aria-hidden="true" />
        <div className="about-content">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-black/55">
            Digital Profile
          </p>
          <h3 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl">
            Full stack developer crafting product interfaces with cinematic UI
            instincts and reliable engineering.
          </h3>
          <p className="mt-7 max-w-md text-sm font-semibold leading-6 text-black/58">
            I build front-end and full-stack experiences that feel intentional:
            fast to use, clear to maintain, and visually distinct.
          </p>

          <div className="about-feature-grid">
            {[
              ["Product UI", "Reusable components and clear interaction flows."],
              ["Full Stack", "Typed frontends connected to practical backend APIs."],
              ["Visual Systems", "Game-inspired layouts, motion, and hierarchy."],
              ["Reliable Build", "Maintainable code that is ready to evolve."],
            ].map(([label, text]) => (
              <article key={label} className="about-feature">
                <span aria-hidden="true" />
                <h4>{label}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ContentSection>
  );
}

function TechnologiesSection() {
  return (
    <ContentSection
      id="technologies"
      eyebrow="Level 04 / Loadout"
      title="Languages"
      description="A collectible-card lineup of the programming languages, frameworks, and tools in my active loadout."
    >
      <div className="tech-stage">
        <div className="tech-section-character" aria-hidden="true" />
        <div className="tech-card-grid">
          {technologies.map((technology, index) => (
            <article
              key={technology.name}
              className={`tech-card tech-card-${technology.palette}`}
            >
              <div className="tech-card-art" aria-hidden="true">
                <span>{technology.alias}</span>
              </div>
              <div className="tech-card-copy">
                <h3>{technology.name}</h3>
                <p>{technology.role}</p>
              </div>
              <span className="tech-card-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}

function ExperienceSection() {
  return (
    <ContentSection
      id="experience"
      eyebrow="Level 05 / Work Log"
      title="Work Experience"
      description="Roles and responsibilities logged as completed quests."
    >
      <div className="space-y-5">
        {experience.map((item) => (
          <article key={item.role} className="cyber-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.32em] text-red-500">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.08em]">
                  {item.role}
                </h3>
              </div>
              <span className="neon-chip">Active Record</span>
            </div>
            <p className="mt-4 leading-7 text-zinc-300">{item.description}</p>
            <ul className="mt-5 space-y-3 text-zinc-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-red-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ContentSection>
  );
}

function SocialsSection() {
  return (
    <ContentSection
      id="socials"
      eyebrow="Level 06 / Network"
      title="Socials"
      description="Open a channel, inspect the source, or send a message."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="cyber-card group block p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.32em] text-zinc-500">
              Channel
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.12em] text-white group-hover:text-red-400">
              {social.label}
            </h3>
            <p className="mt-3 text-red-300">{social.handle}</p>
          </a>
        ))}
      </div>
    </ContentSection>
  );
}

function ContentSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: PortfolioSectionId;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="section-panel min-h-screen px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.45em] text-black/50">
          {eyebrow}
        </p>
        <div className="mt-4 mb-10 grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <h2 className="text-4xl font-black uppercase tracking-widest text-black sm:text-6xl">
            {title}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-black/60">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
