import { MapPin, Languages } from "lucide-react";
import profile320 from "../assets/images/profile-320.webp";
import profile640 from "../assets/images/profile-640.webp";
import { about, profile } from "../content";

export default function About() {
  return (
    <section id="about" className="section border-t border-hairline bg-ink-raised">
      <div className="shell">
        <p className="t-eyebrow">About</p>
        <h2 className="t-h2 mt-2">Who I am</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-14">
          <div className="max-w-2xl space-y-5">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="t-lead">
                {paragraph}
              </p>
            ))}

            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {profile.location}
              </li>
              <li className="inline-flex items-center gap-2">
                <Languages className="h-4 w-4 text-accent" aria-hidden="true" />
                {profile.languages}
              </li>
            </ul>
          </div>

          <img
            src={profile320}
            srcSet={`${profile320} 320w, ${profile640} 640w`}
            sizes="(min-width: 768px) 288px, 220px"
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
            alt={`${profile.name}, ${profile.title}`}
            className="order-first h-44 w-44 rounded-card border border-hairline object-cover md:order-none md:h-72 md:w-72"
          />
        </div>
      </div>
    </section>
  );
}
