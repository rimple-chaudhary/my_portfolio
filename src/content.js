// Single source of truth for everything on the page. Kept deliberately flat so
// content can be edited here without touching a component.

export const profile = {
  name: "Rimple Chaudhary",
  title: "Full-Stack Developer",
  stack: "MERN Stack",
  roles: [
    "Full-Stack Developer",
    "React & Next.js Engineer",
    "Node, Express & MongoDB",
    "AI Automation Builder",
  ],
  lead:
    "I build enterprise web platforms end to end — React and Next.js on the front, Node, Express and MongoDB behind them. Three years shipping customer-facing portals for EMAAR India and MaxLife Insurance.",
  award: "Employee of the Year 2024 · Technogetic",
  location: "Mohali, India",
  email: "rimplechaudhary1@gmail.com",
  phone: "+91 8894319767",
  phoneHref: "+918894319767",
  github: "https://github.com/rimple-chaudhary",
  linkedin: "https://www.linkedin.com/in/rimple-chaudhary-22339a175/",
  resume: "/files/resume.pdf",
  availability: "Open to Full-Stack / MERN roles — Mohali, hybrid or remote",
  languages: "English (professional) · Hindi (native) · Punjabi (native)",
};

export const stats = [
  { value: "3 yrs", label: "Building for production" },
  { value: "10,000+", label: "End users served" },
  { value: "500+", label: "ID verifications / month" },
  { value: "90+", label: "Lighthouse performance" },
];

export const about = [
  "Full-Stack Developer with three years building enterprise-grade web platforms end to end. On the front I work in React, Next.js (App Router) and TypeScript; behind them in Node.js, Express and MongoDB with Mongoose — writing REST APIs and integrating third-party services into client platforms.",
  "Most of that work has been customer-facing. I've shipped portals for EMAAR India and MaxLife Insurance serving 10,000+ end users, including a multi-step DigiLocker and Aadhaar identity verification flow that processes 500+ verifications a month with credentials held in AWS Secrets Manager. I've also built a custom headless CMS on MongoDB — Mongoose data models, authenticated API routes, Zod request validation and presigned media uploads — so a content team can publish without a third-party vendor.",
  "Recognised as Employee of the Year 2024 at Technogetic for ownership, technical depth and cross-functional delivery.",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React.js",
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
      "REST API design",
      "MongoDB",
      "Mongoose",
      "SQL",
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
    items: ["AWS S3", "AWS Secrets Manager", "Vercel", "Docker", "CI/CD"],
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
    items: ["LangChain", "LangGraph", "n8n", "Claude Code", "GitHub Copilot"],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Technogetic Pvt. Ltd.",
    location: "Mohali, India",
    period: "Nov 2023 – Present",
    award: "Employee of the Year 2024",
    clients: ["EMAAR India", "MaxLife Insurance", "GBP Automation & AI SEO"],
    points: [
      "Build REST APIs with Node.js and Express, and integrate third-party services into enterprise client platforms.",
      "Integrate REST APIs and AWS services into customer-facing portals, including multi-step DigiLocker and Aadhaar identity verification processing 500+ verifications a month.",
      "Build portals and dashboards in React and Next.js serving 10,000+ end users, using Redux and React Query for application state and server data.",
      "Cut page load time by 40% with React.lazy code splitting and SWR caching, reaching a 90+ Lighthouse performance score.",
      "Build AI-driven Google Business Profile automation with n8n, LangChain and LangGraph, generating SEO content and keyword recommendations for business accounts.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Innow8 Apps",
    location: "Internship",
    period: "Apr 2023 – Oct 2023",
    clients: ["TaxZap — tax filing platform"],
    points: [
      "Integrated 3 third-party APIs (payments, analytics, notifications) into the frontend, working with 2 backend engineers to ensure seamless data flow.",
      "Built real-time data modules with WebSocket integration, reducing dashboard data refresh latency by 50%.",
      "Developed 15+ responsive UI components in React and Redux for a 10-step tax filing workflow.",
    ],
  },
];

export const projects = [
  {
    title: "EMAAR India — Customer Web Portal",
    featured: true,
    context:
      "Customer portal for one of India's largest real-estate developers: identity verification, document handling and service requests for existing homeowners.",
    stack: ["React", "TypeScript", "React Query", "Node.js", "AWS S3", "AWS Secrets Manager", "MUI"],
    points: [
      "Integrated the DigiLocker API for Aadhaar-based identity verification through a multi-step authentication flow, with API credentials held in AWS Secrets Manager.",
      "Implemented secure document upload and access using AWS S3 pre-signed URLs with time-limited access.",
      "Reduced redundant client-side network requests by 30% with React Query caching.",
      "Redesigned the No Objection Certificate journey and streamlined its form validation.",
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
    context:
      "Policyholder platform for a national life insurer: dashboards spanning policy types and user roles, with marketing pages driven from a CMS.",
    stack: ["React", "Redux", "Strapi CMS", "Responsive Design"],
    points: [
      "Built policyholder dashboards with Redux state management, handling data flows across 12+ policy types and 4 user roles.",
      "Integrated Strapi CMS for content-driven page rendering, letting the marketing team update 50+ pages without developer involvement.",
      "Established a reusable component architecture of 15+ shared components, improving UI consistency and reducing new feature development time by 20%.",
    ],
    outcomes: ["12+ policy types", "4 user roles", "50+ CMS pages", "−20% build time"],
    access: "Client production platform — dashboards sit behind policyholder login.",
  },
  {
    title: "GBP Automation & AI-Powered SEO Insights",
    context:
      "Internal automation that scores a business's Google Business Profile and turns the gaps into concrete SEO actions.",
    stack: ["n8n", "LangChain", "LangGraph", "Node.js"],
    points: [
      "Built an automated Google Business Profile scoring system for logged-in business accounts using n8n workflow automation.",
      "Generated website-improvement recommendations from profile signals such as reviews, photos and profile completion.",
      "Implemented AI-powered SEO content suggestions with targeted keyword recommendations, orchestrated with LangChain and LangGraph.",
    ],
    outcomes: ["Automated profile scoring", "Keyword recommendations"],
    access: "Internal tool — no public URL.",
  },
  {
    title: "TaxZap — Tax Filing Platform",
    context:
      "Consumer tax-filing product built during my internship at Innow8 Apps: a ten-step guided filing workflow with live status updates.",
    stack: ["React", "TypeScript", "Redux", "Ant Design", "WebSockets"],
    points: [
      "Developed 15+ responsive UI components in React and Redux for a 10-step tax filing workflow.",
      "Integrated 3 third-party APIs (payments, analytics, notifications) alongside 2 backend engineers.",
      "Built real-time data modules with WebSocket integration, cutting dashboard refresh latency by 50%.",
    ],
    outcomes: ["10-step filing flow", "15+ UI components", "−50% refresh latency"],
    link: { href: "https://taxzapp.ie/", label: "Live product" },
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
