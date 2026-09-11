import { Github, Linkedin, Mail } from "lucide-react";
import { profile, sections } from "../content";

const LINKS = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-body">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">
            {profile.title} · {profile.stack} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-body">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2">
          {LINKS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex rounded-lg border border-hairline bg-white/[0.04] p-2.5 text-muted transition-colors hover:text-body"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell mt-8 flex flex-col gap-1 border-t border-hairline pt-6 text-xs text-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>
          Built with React, Vite and Tailwind CSS ·{" "}
          <a
            href="https://github.com/rimple-chaudhary/my_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-body"
          >
            source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
