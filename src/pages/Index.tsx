import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container-page pt-16 md:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up">
            Product Designer · Based in Mumbai,India
          </p>
          <h1
            className="heading-display mt-5 animate-fade-up md:mt-6"
            style={{ animationDelay: "80ms" }}
          >
            Designing calm, useful{" "}
            <span className="italic text-muted-foreground">products</span> for
            people who care about details.
          </h1>
          <p
            className="lead mt-5 max-w-2xl animate-fade-up md:mt-6"
            style={{ animationDelay: "160ms" }}
          >
            I’m Rohan - a product designer with 1.5+ years of experience
            designing intuitive digital experiences across web and mobile. I
            focus on simplifying complex systems into clear, user-friendly
            interfaces.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up md:mt-10"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/work"
              className="press inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated"
            >
              View Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1npy2rndmwhHgQA6VzmVCfI5ouD0TDRSb"
              className="press inline-flex items-center rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-soft"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="container-page mt-24 scroll-mt-24 md:mt-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end md:gap-6">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="heading-1 mt-3">A few recent projects.</h2>
            </div>
            <Link
              to="/work"
              className="link-underline text-sm text-muted-foreground hover:text-foreground"
            >
              View all work →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-14 md:grid-cols-2 md:gap-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center md:mt-16">
          <Link
            to="/work"
            className="press inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-soft"
          >
            View all work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="container-narrow mt-24 text-center md:mt-32">
        <Reveal>
          <p className="eyebrow">Currently open to new work</p>
          <h2 className="heading-1 mt-4">Have a project in mind?</h2>
          <p className="lead mt-4">
            I love hearing about ambitious problems. Reach out and let&apos;s
            talk.
          </p>
          <a
            href="mailto:rnsh.space@gmail.com"
            className="press mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated"
          >
            Say hello
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </PageLayout>
  );
};

export default Index;
