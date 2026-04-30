import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <PageLayout>
        <section className="container-narrow py-32 text-center">
          <h1 className="heading-1">Project not found</h1>
          <p className="lead mt-4">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </section>
      </PageLayout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  // Use project.gallery if it exists, otherwise fall back to thumbnail
  const images: string[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.thumbnail];

  const [heroImage, ...restImages] = images;

  return (
    <PageLayout>
      {/* Back nav */}
      <div className="container-page pt-10 md:pt-16">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All work
        </Link>
      </div>

      {/* Hero image — full width, edge to edge */}
      <div className="container-page mt-8 w-full overflow-hidden">
        <img
          src={heroImage}
          alt={`${project.title} — hero`}
          width={1920}
          height={1080}
          loading="eager"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Remaining gallery images — full width, stacked */}
      <div className="container-page">
        {restImages.map((src, i) => (
          <Reveal key={i} delay={i * 60} className=" w-full overflow-hidden">
            <img
              src={src}
              alt={`${project.title} — ${i + 2}`}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full object-cover rounded-lg my-4"
            />
          </Reveal>
        ))}
      </div>

      {/* Next project */}
      <div className="container-page mt-20 mb-16 md:mt-32">
        <Link
          to={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-lg border border-hairline bg-surface-elevated p-8 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated md:p-12"
        >
          <div>
            <p className="eyebrow">Next project</p>
            <p className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
              {next.title}
            </p>
          </div>
          <ArrowRight className="h-6 w-6 text-muted-foreground transition-all duration-300 ease-out-soft group-hover:translate-x-1 group-hover:text-foreground" />
        </Link>
      </div>
    </PageLayout>
  );
};

export default CaseStudy;
