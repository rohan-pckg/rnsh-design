import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
];

export const Footer = () => (
  <footer className="mt-32 border-t border-hairline">
    <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
      <div>
        <p className="font-serif text-lg">Rohan Singh</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Product Designer · © {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:text-foreground hover:shadow-soft"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
