import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out-soft ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="whitespace-nowrap font-serif text-lg tracking-tight md:text-xl"
        >
          <svg
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.45703 4.17285H14.8965V0H20.125V3.01758H17.9697V4.17285H20.125V6.27344H22.1982V10.5303H24.2705V15.6758H21.1982V13.6299H20.125V17.8037H14.8135V14.6758H16.9697V13.6299H7.3291V14.6758H9.54004V17.8037H4.20117V13.6299H3.10059V15.6758H0V10.5303H2.10059V6.27344H4.20117V4.17285H6.3291V3.01758H4.20117V0H9.45703V4.17285ZM6.85742 8.90234H9.0127V6.80176H6.85742V8.90234ZM15.3701 6.80176V8.90234H17.5254V6.80176H15.3701Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-2 py-2 text-sm transition-colors hover:text-foreground sm:px-3 ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <a
            href="https://drive.google.com/uc?export=download&id=1npy2rndmwhHgQA6VzmVCfI5ouD0TDRSb"
            className="press ml-0.5 hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-elevated sm:inline-flex"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};
