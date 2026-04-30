import { useEffect, useRef, useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import type { ProjectMeta } from "@/components/ProjectCard";

const AUTOPLAY_MS = 3500;

const ProjectShowcase = ({
  project,
  priority,
}: {
  project: ProjectMeta;
  priority: boolean;
}) => {
  const images = project.gallery?.length ? project.gallery : [project.thumbnail];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    timerRef.current = window.setTimeout(() => {
      setActive((i) => (i + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, paused, images.length]);

  return (
    <article>
      {/* Full-width image stage */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-surface shadow-soft"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label={`${project.title} images`}
      >
        <div className="relative aspect-[16/10] w-full md:aspect-[21/12]">
          {images.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              width={2100}
              height={900}
              loading={priority && i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out-soft ${i === active ? "opacity-100" : "opacity-0"
                }`}
              aria-hidden={i !== active}
            />
          ))}
        </div>

        {/* Pills overlaid bottom-center */}
        {images.length > 1 && (
          <div
            className="pointer-events-auto absolute inset-x-0 bottom-4 flex justify-center gap-2 md:bottom-6"
            role="tablist"
            aria-label={`${project.title} slides`}
          >
            {images.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative h-1.5 overflow-hidden rounded-full backdrop-blur-sm transition-all duration-500 ease-out-soft ${isActive
                    ? "w-12 bg-white/30"
                    : "w-6 bg-white/25 hover:bg-white/40"
                    }`}
                >
                  {isActive && !paused && (
                    <span
                      key={active}
                      className="absolute inset-y-0 left-0 w-full bg-white"
                      style={{
                        animation: `pill-fill ${AUTOPLAY_MS}ms linear forwards`,
                      }}
                    />
                  )}
                  {isActive && paused && (
                    <span className="absolute inset-0 bg-white" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Info — name + minimal info */}
      <div className="mt-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 md:mt-8">
        <div>
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-[0.95rem]">
            {project.summary}
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {project.category} · {project.year}
        </p>
      </div>
    </article>
  );
};

const Work = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="container-page pt-16 md:pt-24">
        <p className="eyebrow animate-fade-up">Work · 2023 — 2025</p>
        <h1
          className="heading-display mt-5 max-w-3xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          A selection of projects.
        </h1>
      </section>

      {/* Stacked showcases */}
      <section className="container-page mt-12 space-y-20 md:mt-16 md:space-y-28">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <ProjectShowcase project={p} priority={i === 0} />
          </Reveal>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="container-narrow mt-24 text-center md:mt-32">
        <h2 className="heading-1">Like what you see?</h2>
        <p className="lead mt-4">
          I&apos;m currently open to new product design work and collaborations.
        </p>
        <a
          href="mailto:hello@example.com"
          className="press mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated"
        >
          Get in touch
        </a>
      </section>

      <style>{`
        @keyframes pill-fill {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="pill-fill"] { animation: none !important; }
        }
      `}</style>
    </PageLayout>
  );
};

export default Work;
