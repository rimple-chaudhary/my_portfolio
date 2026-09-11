import { Trophy, Download, ArrowRight, Mail } from "lucide-react";
import CodeBlock from "./ui/CodeBlock";
import { profile, stats } from "../content";

// A slice of the kind of work described below it, rather than a template's
// `hardWorker: true` object.
const SNIPPET = `
// models/CaseStudy.ts
const CaseStudySchema = new Schema({
  slug:   { type: String, unique: true },
  title:  { type: String, required: true },
  status: { type: String, default: 'draft' },
  cover:  { type: String },  // S3 presigned key
}, { timestamps: true });

// app/api/case-studies/route.ts
export async function POST(req: Request) {
  const session = await auth();
  if (!session) return unauthorized();

  const input = CaseStudyInput.parse(await req.json());
  const doc = await CaseStudy.create(input);

  return Response.json(doc, { status: 201 });
}
`;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="t-eyebrow">{profile.stack}</p>

            <h1 className="t-display mt-3">
              {profile.name}
            </h1>

            <p className="mt-3 text-xl font-semibold text-body md:text-2xl">
              <span className="rotator" aria-hidden="true">
                {profile.roles.map((role) => (
                  <span key={role} className="accent-text whitespace-nowrap">
                    {role}
                  </span>
                ))}
              </span>
              <span className="sr-only">{profile.title}</span>
            </p>

            <p className="t-lead mt-6 max-w-xl">{profile.lead}</p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-award/25 bg-award/10 px-4 py-2 text-sm font-medium text-award">
              <Trophy className="h-4 w-4" aria-hidden="true" />
              {profile.award}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#04121a] transition-colors hover:bg-accent-strong"
              >
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-5 py-3 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Résumé
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-5 py-3 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
            </div>
          </div>

          <CodeBlock filename="case-studies.ts" code={SNIPPET} />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-ink px-5 py-6">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-body md:text-3xl">{value}</span>
                <span className="mt-1 block text-xs text-muted md:text-sm">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
