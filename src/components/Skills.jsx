import { Layout, Server, Layers, Cloud, Plug, Beaker, Bot } from "lucide-react";
import Reveal from "./ui/Reveal";
import { skillGroups } from "../content";

const ICONS = {
  layout: Layout,
  server: Server,
  layers: Layers,
  cloud: Cloud,
  plug: Plug,
  beaker: Beaker,
  bot: Bot,
};

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-hairline">
      <div className="shell">
        <p className="t-eyebrow">Skills</p>
        <h2 className="t-h2 mt-2">What I work with</h2>
        <p className="t-lead mt-4 max-w-2xl">
          The stack I use day to day, grouped the way I actually reach for it.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = ICONS[group.icon] ?? Layout;

            return (
              <Reveal key={group.title} delay={(index % 3) * 70} className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="t-h3 text-body">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline bg-white/[0.04] px-3 py-1.5 text-[0.8125rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
