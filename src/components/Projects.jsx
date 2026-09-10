import { ExternalLink, Lock } from "lucide-react";
import Reveal from "./ui/Reveal";
import { projects } from "../content";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-hairline">
      <div className="shell">
        <p className="t-eyebrow">Projects</p>
        <h2 className="t-h2 mt-2">Selected work</h2>
        <p className="t-lead mt-4 max-w-2xl">
          Client platforms are production systems behind a customer login, so the write-ups
          below describe the work and its measured outcome rather than showing a screenshot.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 80}
              className="card flex h-full flex-col p-6 md:p-8"
            >
              {project.featured && <p className="t-eyebrow">Featured</p>}

              <h3 className="t-h3 mt-2 text-body">{project.title}</h3>
              <p className="t-body mt-3">{project.context}</p>

              <ul className="mt-5 space-y-2.5 border-l border-accent/30 pl-5">
                {project.points.map((point) => (
                  <li key={point.slice(0, 32)} className="t-body">
                    {point}
                  </li>
                ))}
              </ul>

              {project.outcomes?.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-lg border border-accent/20 bg-accent/[0.07] px-3 py-1.5 text-xs font-semibold text-accent"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-hairline bg-white/[0.04] px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-4 py-2 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
                  >
                    {project.link.label}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">— opens {project.title} in a new tab</span>
                  </a>
                ) : (
                  <p className="inline-flex items-start gap-2 text-xs text-muted">
                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {project.access}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
