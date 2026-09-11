# Rimple Chaudhary — Portfolio

Personal portfolio of **Rimple Chaudhary**, Full-Stack Developer (MERN). A single
scrolling page covering work, experience, skills and contact details.

**Live:** <https://www.rimple-chaudhary.dev/>

---

## Stack

| | |
|---|---|
| Framework | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Icons | lucide-react |
| Typeface | Inter Variable, self-hosted (latin subset) |
| Forms | Web3Forms |
| Hosting | Vercel |

Three runtime dependencies in total. There is no router, no animation library and no
syntax-highlighting library — the scroll reveal, role rotator, grid backdrop and code
highlighting are all handled in-repo.

## Lighthouse

Measured against the production build served with gzip.

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

LCP 1.8 s · CLS 0 · TBT 10 ms (mobile, throttled).

## Structure

```
.
├── index.html              # Meta, Open Graph, JSON-LD, font preload
├── vercel.json             # Legacy /route → /#anchor redirects, cache headers
├── public/
│   ├── 404.html            # Static branded 404 (real 404 status, not a soft 404)
│   ├── fonts/              # inter-var-latin.woff2
│   ├── files/resume.pdf
│   ├── og-image.jpg        # 1200×630 social card
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx
    ├── App.jsx             # Composes the single page
    ├── content.js          # All copy and data — edit here, not in components
    ├── assets/
    │   ├── css/index.css   # Tokens, type scale, animations
    │   └── images/         # profile-320.webp, profile-640.webp
    └── components/
        ├── Header.jsx      # Anchor nav + active-section observer
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── ui/
            ├── CodeBlock.jsx  # Static highlighter, no dependency
            └── Reveal.jsx     # IntersectionObserver scroll reveal
```

### Editing content

Everything on the page — headline, about copy, skills, roles, projects, contact
details — lives in [`src/content.js`](src/content.js). Components read from it and
render; they contain no copy of their own.

## Running locally

Requires Node 18+.

```bash
git clone https://github.com/rimple-chaudhary/my_portfolio
cd my_portfolio
npm install
npm run dev      # http://localhost:5173
```

| Script | Does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over `src/` and config files |

## Accessibility notes

- One `<h1>`, one `<h2>` per section, semantic `<h3>` headings inside cards.
- Skip-to-content link, visible focus rings on every interactive element.
- Mobile menu closes on Escape and outside click, and returns focus to its toggle.
- `prefers-reduced-motion` disables every animation and forces revealed content visible.
- Contact form: labelled fields, `aria-invalid`, inline errors, live status region,
  and focus moved to the first invalid field on submit.

## License

MIT — see [LICENSE](LICENSE).
