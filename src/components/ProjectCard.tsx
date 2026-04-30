import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface ProjectMeta {
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  gallery?: string[];
  year: string;
  category: string;
  role: string;
  duration: string;
  tools: string[];
  problem: string;
  research: string;
  decisions: { title: string; body: string }[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

interface Props {
  project: ProjectMeta;
  index: number;
}

export const ProjectCard = ({ project, index }: Props) => {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block"
      aria-label={`Open case study: ${project.title}`}
    >
      <div
        onMouseMove={onMove}
        className="spotlight relative overflow-hidden rounded-lg bg-surface shadow-soft transition-all duration-500 ease-out-soft group-hover:-translate-y-1.5 group-hover:shadow-elevated"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            loading={index === 0 ? "eager" : "lazy"}
            width={1280}
            height={896}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.04]"
          />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{project.category}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-2 font-serif text-2xl tracking-tight">
            <span className="link-underline">{project.title}</span>
          </h3>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
};
