import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";
import { education, certifications } from "../content";

export default function Education() {
  return (
    <section id="education" className="section border-t border-hairline bg-ink-raised">
      <div className="shell">
        <p className="t-eyebrow">Education</p>
        <h2 className="t-h2 mt-2">Education &amp; certifications</h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="card h-full p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/10 p-2 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="t-h3 text-body">Degrees</h3>
            </div>

            <ul className="mt-6 space-y-5 border-l border-accent/30 pl-5">
              {education.map(({ degree, school, year }) => (
                <li key={degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold text-body">{degree}</p>
                    <span className="font-mono text-xs text-muted">{year}</span>
                  </div>
                  <p className="t-body mt-1">{school}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="card h-full p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/10 p-2 text-accent">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="t-h3 text-body">Certifications</h3>
            </div>

            <ul className="mt-6 space-y-5 border-l border-accent/30 pl-5">
              {certifications.map(({ title, issuer, date, href }) => (
                <li key={title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-body underline-offset-4 hover:underline"
                    >
                      {title}
                      <ExternalLink className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                      <span className="sr-only">— opens the certificate in a new tab</span>
                    </a>
                    <span className="font-mono text-xs text-muted">{date}</span>
                  </div>
                  <p className="t-body mt-1">{issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
