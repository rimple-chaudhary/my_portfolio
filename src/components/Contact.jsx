import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download, Loader2 } from "lucide-react";
import { profile } from "../content";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const WEB3FORMS_KEY = "fd606826-2494-4761-9dcb-a89040c97bda";

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "That email address doesn't look right.";
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) errors.message = "Please write a message.";
  return errors;
};

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    // Clear the error as soon as the user starts fixing it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state === "sending") return;

    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      setState("error");
      setMessage("Please correct the highlighted fields.");
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setState("sending");
    setMessage("");

    const payload = new FormData(formRef.current);
    payload.append("access_key", WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setState("sent");
        setMessage("Thanks — your message is on its way. I usually reply within a day or two.");
        setValues(EMPTY);
        setErrors({});
      } else {
        setState("error");
        setMessage(result.message || "That didn't send. Please email me directly instead.");
      }
    } catch {
      setState("error");
      setMessage("That didn't send — you may be offline. Please email me directly instead.");
    }
  };

  const sending = state === "sending";

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-sm text-body placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none ${
      errors[field] ? "border-red-500/70" : "border-hairline"
    }`;

  return (
    <section id="contact" className="section border-t border-hairline bg-ink-raised">
      <div className="shell">
        <p className="t-eyebrow">Contact</p>
        <h2 className="t-h2 mt-2">Get in touch</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="t-lead max-w-md">
              Hiring, or want to talk through a build? The fastest route is email — I read
              everything and reply within a couple of days.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 text-body"
                >
                  <span className="rounded-lg bg-accent/10 p-3 text-accent">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">Email</span>
                    <span className="text-sm group-hover:text-accent">{profile.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneHref}`} className="group flex items-center gap-4 text-body">
                  <span className="rounded-lg bg-accent/10 p-3 text-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">Phone</span>
                    <span className="text-sm group-hover:text-accent">{profile.phone}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-body">
                <span className="rounded-lg bg-accent/10 p-3 text-accent">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">Location</span>
                  <span className="text-sm">{profile.location}</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Résumé
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-body transition-colors hover:bg-white/[0.09]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-6 md:p-8">
            {/* Honeypot: bots fill this, people never see it. */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="sr-only"
            />

            <div className="space-y-5">
              {FIELDS.map(({ name, label, type, autoComplete }) => (
                <div key={name}>
                  <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-body">
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    value={values[name]}
                    onChange={update(name)}
                    aria-invalid={Boolean(errors[name])}
                    aria-describedby={errors[name] ? `${name}-error` : undefined}
                    className={fieldClass(name)}
                  />
                  {errors[name] && (
                    <p id={`${name}-error`} className="mt-1.5 text-sm text-red-400">
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-body">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${fieldClass("message")} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#04121a] transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-[1.25rem] text-sm ${
                state === "sent" ? "text-accent" : "text-red-400"
              }`}
            >
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
