// Single source of truth for everything on the page. Kept deliberately flat so
// content can be edited here without touching a component.

export const profile = {
  name: "Rimple Chaudhary",
  title: "Full-Stack Software Engineer",
  stack: "React · Next.js · TypeScript · Node.js",
  roles: [
    "Full-Stack Software Engineer",
    "React & Next.js Engineer",
    "Node, Express & MongoDB",
    "AI Automation Builder",
  ],
  lead:
    "I build production platforms end to end — React and Next.js on the front, Node.js, Express, MongoDB and MySQL behind them. 3+ years shipping customer-facing portals for EMAAR India and MaxLife Insurance.",
  award: "Employee of the Year 2024 · Technogetic",
  location: "Mohali, India",
  email: "rimplechaudhary1@gmail.com",
  phone: "+91 8894319767",
  phoneHref: "+918894319767",
  github: "https://github.com/rimple-chaudhary",
  linkedin: "https://www.linkedin.com/in/rimple-chaudhary-22339a175/",
  resume: "/files/resume.pdf",
  availability: "Open to Full-Stack Software Engineer roles — Mohali, hybrid or remote",
  languages: "English (professional) · Hindi (native) · Punjabi (native)",
};

export const stats = [
  { value: "3+ yrs", label: "Building for production" },
  { value: "10,000+", label: "End users served" },
  { value: "500+", label: "ID verifications / month" },
  { value: "90+", label: "Lighthouse performance" },
];

export const about = [
  "Full-Stack Software Engineer with 3+ years building production platforms for enterprise clients. On the front I work in React, Next.js (App Router) and TypeScript; behind them in Node.js and Express with MongoDB and MySQL — writing REST APIs with JWT authentication and integrating AWS and third-party services.",
  "Most of that work has been customer-facing. I've shipped portals for EMAAR India and MaxLife Insurance serving 10,000+ end users, and I'm trusted with security-sensitive flows such as a multi-step DigiLocker and Aadhaar identity verification that processes 500+ verifications a month. I focus on measurable results: 40% faster page loads, a 25% lift in form completion, and a CMS platform built end to end.",
  "I mentor junior engineers and lead code reviews on the EMAAR India portal to keep code quality high before production delivery. Recognised as Employee of the Year 2024 at Technogetic.",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React.js (Hooks, Context API)",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "JWT",
      "NextAuth",
      "Zod",
    ],
  },
  {
    title: "State & UI",
    icon: "layers",
    items: [
      "Redux / RTK",
      "React Query",
      "SWR",
      "Tailwind CSS",
      "Ant Design",
      "MUI",
      "Figma",
    ],
  },
  {
    title: "Cloud & Storage",
    icon: "cloud",
    items: ["AWS S3", "AWS Secrets Manager", "S3-compatible object storage", "Vercel", "CI/CD"],
  },
  {
    title: "Integrations & CMS",
    icon: "plug",
    items: [
      "Third-party REST APIs",
      "DigiLocker identity",
      "Payments",
      "Analytics",
      "Notifications",
      "WebSockets",
      "Strapi",
      "Custom headless CMS",
    ],
  },
  {
    title: "Testing & Tooling",
    icon: "beaker",
    items: [
      "Jest",
      "React Testing Library",
      "Postman",
      "Git / GitHub",
      "ESLint",
      "Vite",
      "Webpack",
      "Agile / Scrum",
      "JIRA",
    ],
  },
  {
    title: "AI & Automation",
    icon: "bot",
    items: [
      "n8n",
      "Gemini API",
      "Pinecone (RAG)",
      "LangChain",
      "LangGraph",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Technogetic Pvt. Ltd.",
    location: "Mohali, India",
    period: "Nov 2023 – Present",
    award: "Employee of the Year 2024",
    clients: ["TechEx", "EMAAR India", "MaxLife Insurance"],
    points: [
      "Build REST APIs in Node.js and Express with JWT authentication, and integrate AWS and third-party services, including multi-step DigiLocker and Aadhaar verification processing 500+ verifications a month.",
      "Build responsive, cross-browser portals and dashboards in React and Next.js serving 10,000+ end users, using Redux and React Query for application state and server data.",
      "Cut page load time by 40% with React.lazy code splitting and SWR caching, reaching a 90+ Lighthouse performance score.",
      "Write unit and component tests with Jest and React Testing Library, deploy Next.js applications on Vercel, and debug and resolve production issues across frontend and backend.",
      "Built an n8n AI chatbot for an astrology client, using Gemini with Pinecone RAG and MongoDB memory, that answers visitor queries in English and Hinglish and automatically routes qualified leads to the client's CRM.",
      "Mentored two junior developers on the EMAAR India portal and reviewed their pull requests, keeping TypeScript types, component structure and data-fetching patterns consistent across the codebase.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Innow8 Apps",
    location: "Mohali, India",
    period: "Apr 2023 – Oct 2023",
    clients: ["TaxZap — tax filing platform"],
    points: [
      "Integrated 3 third-party APIs (payments, analytics, notifications), working with 2 backend engineers.",
      "Built real-time data modules with WebSocket integration, reducing dashboard data refresh latency by 50%.",
      "Developed 15+ responsive UI components in React and Redux for a 10-step tax filing workflow.",
    ],
  },
];

export const projects = [
  {
    title: "TechEx — Agency Site & Headless CMS",
    period: "Sep 2026 – Present",
    featured: true,
    context:
      "Agency site with a custom content platform behind it, designed and built end to end so the content team can publish pages, case studies and media without a third-party CMS vendor.",
    stack: ["Next.js 14", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "Zod", "AWS S3", "Vercel"],
    points: [
      "Designed and built the platform end to end, including a custom headless CMS with Mongoose schemas for pages, case studies and media behind Next.js API routes, removing the need for a third-party CMS vendor.",
      "Separated editing from delivery: editors preview drafts in the production template, while the public site uses static generation with incremental revalidation, staying fast without manual rebuilds.",
      "Designed the access-control model: NextAuth sessions with role-based permissions on all CMS API routes.",
      "Built a media library with presigned uploads, so files go straight from the browser to S3-compatible storage without passing through the application server.",
      "Improved the Lighthouse performance score from 60 to 93 by optimising image delivery, eliminating render-blocking resources and reducing client-side JavaScript through React Server Components.",
    ],
    outcomes: ["Lighthouse 60 → 93", "No CMS vendor", "Draft preview in production template"],
    link: { href: "https://shopify-agency-site.vercel.app/", label: "Visit site" },
  },
  {
    title: "EMAAR India — Customer Web Portal",
    period: "Nov 2024 – Aug 2026",
    context:
      "Customer portal for one of India's largest real-estate developers: identity verification, document handling and service requests for existing homeowners.",
    stack: ["React", "TypeScript", "React Query", "Node.js", "AWS S3", "AWS Secrets Manager", "MUI"],
    points: [
      "Integrated the DigiLocker API for Aadhaar-based identity verification through a multi-step authentication flow, with API credentials held in AWS Secrets Manager.",
      "Implemented secure document upload and access using AWS S3 pre-signed URLs with time-limited access, handling 1,000+ document uploads monthly.",
      "Reduced redundant client-side network requests by 30% with React Query caching.",
      "Redesigned the No Objection Certificate journey and its form validation, lifting completion rates by 25%.",
    ],
    outcomes: [
      "500+ verifications / month",
      "1,000+ documents / month",
      "30% fewer requests",
      "+25% NOC completion",
    ],
    access: "Client production platform — the portal sits behind customer login.",
  },
  {
    title: "MaxLife Insurance Platform",
    period: "Nov 2023 – Oct 2024",
    context:
      "Policyholder platform for a national life insurer: dashboards spanning policy types and user roles, with marketing pages driven from a CMS.",
    stack: ["React", "Redux", "Strapi CMS", "Responsive Design"],
    points: [
      "Integrated Strapi CMS so the marketing team could update 50+ content pages without developers.",
      "Built policyholder dashboards with Redux, handling data flows across 12+ policy types and 4 user roles.",
      "Established a reusable component architecture of 15+ shared components, improving UI consistency and reducing new feature development time by 20%.",
    ],
    outcomes: ["12+ policy types", "4 user roles", "50+ CMS pages", "−20% build time"],
    access: "Client production platform — dashboards sit behind policyholder login.",
  },
  {
    title: "TaxZap — Tax Filing Platform",
    period: "Apr 2023 – Oct 2023",
    context:
      "Consumer tax-filing product built during my internship at Innow8 Apps: a ten-step guided filing workflow with live status updates.",
    stack: ["React", "TypeScript", "Redux", "Ant Design", "WebSockets"],
    points: [
      "Developed 15+ responsive UI components in React and Redux for a 10-step tax filing workflow.",
      "Integrated 3 third-party APIs (payments, analytics, notifications) alongside 2 backend engineers.",
      "Built real-time data modules with WebSocket integration, cutting dashboard refresh latency by 50%.",
    ],
    outcomes: ["10-step filing flow", "15+ UI components", "−50% refresh latency"],
    access: "Internship project — no public URL.",
  },
];

export const education = [
  {
    degree: "Master of Engineering (M.E.)",
    school: "Panjab University, Chandigarh",
    year: "2021",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Jaypee University of Information Technology, Waknaghat",
    year: "2018",
  },
];

export const certifications = [
  {
    title: "Quickstart: LangChain Essentials – TypeScript",
    issuer: "LangChain Academy",
    date: "Jun 2026",
    href: "https://academy.langchain.com/certificates/tp216ciql6",
  },
  {
    title: "Quickstart: LangGraph Essentials – TypeScript",
    issuer: "LangChain Academy",
    date: "Jun 2026",
    href: "https://academy.langchain.com/certificates/1wxgsipdi5",
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
