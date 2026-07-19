import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAME = "Rimple Chaudhary";

// Per-route title + description. Keeps the SPA's <title> and meta description
// in sync with the current route without pulling in a helmet dependency.
const ROUTE_META = {
	"/": {
		title: `${NAME} — Software Developer (React, Next.js, TypeScript)`,
		description:
			"Software Developer with 3 years building scalable, enterprise-grade web apps with React, Next.js and TypeScript, plus AI-driven automation.",
	},
	"/skills": {
		title: `Skills — ${NAME}`,
		description:
			"Technical skills: React, Next.js, TypeScript, Redux/RTK, React Query, Node.js, LangChain, LangGraph, n8n and more.",
	},
	"/experience": {
		title: `Experience — ${NAME}`,
		description:
			"Software Developer at Technogetic — EMAAR India and MaxLife Insurance portals, AI automation, Employee of the Year 2024.",
	},
	"/projects": {
		title: `Projects — ${NAME}`,
		description:
			"Selected projects: EMAAR India customer portal, GBP AI-SEO automation, MaxLife Insurance platform and TaxZap.",
	},
	"/education": {
		title: `Education & Certifications — ${NAME}`,
		description: "Education background and certifications, including LangChain and LangGraph.",
	},
	"/contact": {
		title: `Contact — ${NAME}`,
		description: "Get in touch with Rimple Chaudhary for software development and collaboration.",
	},
};

const setMetaDescription = (content) => {
	let tag = document.querySelector('meta[name="description"]');
	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute("name", "description");
		document.head.appendChild(tag);
	}
	tag.setAttribute("content", content);
};

export default function RouteMeta() {
	const { pathname } = useLocation();

	useEffect(() => {
		const meta = ROUTE_META[pathname] || ROUTE_META["/"];
		document.title = meta.title;
		setMetaDescription(meta.description);
	}, [pathname]);

	return null;
}
