import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { Download } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const skillGroups = [
  {
    title: "Design",
    items: [
      "Product strategy",
      "Interaction design",
      "Visual & brand",
      "Design systems",
      "Prototyping",
      "User research",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Framer", "Principle", "Notion", "Linear", "Dovetail"],
  },
  {
    title: "Tech",
    items: [
      "HTML / CSS",
      "React basics",
      "Tailwind",
      "Git",
      "Webflow",
      "Shopify",
    ],
  },
];

const About = () => {
  return (
    <PageLayout>
      <section className="container-page pt-16 md:pt-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:items-start md:gap-16">
          <div>
            <p className="eyebrow animate-fade-up">About</p>
            <h1
              className="heading-display mt-6 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              I make digital products feel inevitable.
            </h1>
            <div
              className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              <p>
                I&apos;m a product designer with 1.5 years of experience across
                fintech, health, and SaaS. I&apos;ve led design at two
                early-stage startups and contributed to systems used by
                millions.
              </p>
              <p>
                I care about the small things that make software feel
                respectful: clear language, considered defaults, and the right
                amount of motion. Outside of work I make ceramics, take long
                walks, and write a quiet newsletter on craft and software.
              </p>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-lg bg-surface shadow-soft">
              <img
                src={portrait}
                alt="Image of Rohan Singh"
                width={896}
                height={1152}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="container-page mt-20 md:mt-32">
        <Reveal>
          <p className="eyebrow">What I do</p>
          <h2 className="heading-1 mt-3">Skills & tooling.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="hairline pt-6">
                <h3 className="font-serif text-xl">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="container-narrow mt-20 md:mt-32 text-center">
        <Reveal>
          <h2 className="heading-1">Want the full story?</h2>
          <p className="lead mt-4">
            My resume covers roles, education, and selected talks.
          </p>
          <a
            href="/resume.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Reveal>
      </section>
    </PageLayout>
  );
};

export default About;
