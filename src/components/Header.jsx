import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile, sections } from "../content";

const NAV = [{ id: "top", label: "Home" }, ...sections];

export default function Header() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Active section: one observer over all section elements, rather than
  // duplicating route state.
  useEffect(() => {
    const nodes = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or an outside click, and hand focus back
  // to the button that opened it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (!navRef.current?.contains(e.target)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div ref={navRef} className="md:mx-auto md:mt-4 md:w-fit">
        <nav
          aria-label="Primary"
          className="border-b border-hairline bg-[#050b1a]/90 backdrop-blur-md md:rounded-full md:border"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:hidden">
            <a href="#top" className="text-sm font-semibold text-body">
              {profile.name}
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="primary-nav"
              className="rounded-lg p-2 text-body hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          <div id="primary-nav" className={`${open ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col gap-1 px-3 pb-4 md:flex-row md:items-center md:px-2 md:py-1.5 md:pb-1.5">
              {NAV.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={id === "top" ? "#top" : `#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors md:py-1.5 ${
                      active === id
                        ? "bg-white/10 text-body"
                        : "text-muted hover:bg-white/5 hover:text-body"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
