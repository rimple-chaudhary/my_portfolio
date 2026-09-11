import { Trophy } from "lucide-react";
import Reveal from "./ui/Reveal";
import { experience } from "../content";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-hairline bg-ink-raised">
      <div className="shell">
        <p className="t-eyebrow">Experience</p>
        <h2 className="t-h2 mt-2">Where I&rsquo;ve worked</h2>

        <ol className="mt-10 space-y-5">
          {experience.map((role, index) => (
            <Reveal key={role.company} as="li" delay={index * 80} className="card p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="t-h3 text-body">
                  {role.role}
                  <span className="font-normal text-muted"> · {role.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{role.period}</span>
              </div>

              <p className="mt-1 text-sm text-muted">{role.location}</p>

              {role.award && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-award/25 bg-award/10 px-3 py-1 text-xs font-semibold text-award">
                  <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                  {role.award}
                </p>
              )}

              <ul className="mt-4 flex flex-wrap gap-2">
                {role.clients.map((client) => (
                  <li
                    key={client}
                    className="rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent"
                  >
                    {client}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-2.5 border-l border-accent/30 pl-5">
                {role.points.map((point) => (
                  <li key={point.slice(0, 32)} className="t-body">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
