const links = [
  {
    label: "GitHub",
    handle: "@rick",
    href: "https://github.com/",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    ),
  },
  {
    label: "Discord",
    handle: "rick",
    href: "https://discord.com/",
    icon: (
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.9-1.52.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.3 18.3 0 0 0-5.46 0 12.6 12.6 0 0 0-.62-1.26.08.08 0 0 0-.08-.04c-1.7.3-3.36.8-4.9 1.52a.07.07 0 0 0-.04.03C1.24 8.6.5 12.7.86 16.75a.09.09 0 0 0 .03.06 20 20 0 0 0 5.99 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.28a.08.08 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.08.08 0 0 1 .08.01c.12.1.24.19.37.28a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .09.03 19.9 19.9 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.44-4.69-.74-8.75-3.13-12.36a.06.06 0 0 0-.03-.03ZM8.68 14.3c-1.18 0-2.15-1.08-2.15-2.41 0-1.32.95-2.41 2.15-2.41s2.17 1.09 2.15 2.41c0 1.33-.95 2.41-2.15 2.41Zm6.65 0c-1.18 0-2.15-1.08-2.15-2.41 0-1.32.95-2.41 2.15-2.41s2.17 1.09 2.15 2.41c0 1.33-.95 2.41-2.15 2.41Z" />
    ),
  },
  {
    label: "Stack Overflow",
    handle: "rick",
    href: "https://stackoverflow.com/",
    icon: (
      <path d="M17.36 20.2v-5.6h1.87V22H4.02v-7.4h1.87v5.6h11.47ZM7.75 14.1l.4-1.83 9.17 1.94-.4 1.83-9.17-1.94Zm1.13-4.02.8-1.7 8.5 4-.8 1.7-8.5-4Zm2.2-3.8 1.24-1.5 7.14 5.95-1.24 1.5-7.14-5.95ZM14.86.5l6.2 8.2-1.5 1.13-6.2-8.2L14.86.5ZM7.55 17.9h9.34v1.87H7.55V17.9Z" />
    ),
  },
  {
    label: "X / Twitter",
    handle: "@rick",
    href: "https://x.com/",
    icon: (
      <path d="M13.9 10.62 22.05 1.5h-1.93l-7.08 7.92L7.4 1.5H1l8.55 12.19L1 22.5h1.93l7.48-8.37 5.97 8.37h6.4l-8.9-12.38Zm-2.65 2.96-.87-1.2L3.5 2.9h2.97l5.56 7.75.87 1.21 7.22 10.08h-2.97l-5.9-8.36Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section-head">
        <span className="section-head__code">TERMINAL</span>
        <h2 className="section-head__title">Get in touch</h2>
      </div>

      <p className="footer__lede">
        Open to internships and collaboration around AI, backend systems, and
        anything that involves building for a real place rather than a
        generic user base.
      </p>

      <ul className="footer__links">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                fill="currentColor"
              >
                {link.icon}
              </svg>
              <span className="footer__link-text">
                <span className="footer__link-label">{link.label}</span>
                <span className="footer__link-handle">{link.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="footer__closing">
        Timetable ends here — but the line keeps running.
      </p>
    </footer>
  );
}
