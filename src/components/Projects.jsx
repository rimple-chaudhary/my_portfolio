import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "./ui/Reveal";

const ProjectShowcase = () => {
	const projects = [
		{
			title: "EMAAR India - Customer Web Portal",
			description: [
				"Engineered a multi-step DigiLocker/Aadhaar identity verification workflow over RESTful APIs, reliably processing 500+ verifications monthly with credentials secured in AWS Secrets Manager.",
				"Improved page load time by 40% through React.lazy code splitting, SWR caching and skeleton loaders, achieving 90+ Lighthouse performance scores.",
				"Optimized API performance with React Query caching, reducing redundant network requests by 30% and improving perceived load times.",
				"Redesigned the NOC (No Objection Certificate) journey, lifting completion rates by 25% via UX redesign and streamlined form validation.",
			],
			tags: ["React", "TypeScript", "React Query", "Node.js", "AWS", "MUI"],
			links: {
				demo: "https://www.emaar.com/",
				github: "",
			},
			featured: true,
		},
		{
			title: "GBP Automation & AI-Powered SEO Insights",
			description: [
				"Built an automated Google Business Profile scoring system for logged-in business accounts using n8n workflow automation.",
				"Developed automated website-improvement recommendations driven by profile signals such as reviews, photos and profile completion.",
				"Implemented AI-powered SEO content suggestions with targeted keyword recommendations to improve visibility and organic growth, orchestrated with LangChain and LangGraph.",
			],
			tags: ["n8n", "LangChain", "LangGraph", "AI Workflows"],
			links: {
				demo: "",
				github: "",
			},
			featured: true,
		},
		{
			title: "TaxZap - Tax Refund Simplified",
			description:
				"Developed and maintained the TaxZap web experience with a strong focus on responsive tax workflow interfaces, TypeScript reliability, and modern state handling using Redux.",
			tags: ["React", "TypeScript", "Redux", "Ant Design", "PWA"],
			links: {
				demo: "https://taxzapp.ie/",
			},
			featured: true,
		},
		{
			title: "MaxLife - Life Insurance Platform",
			description: [
				"Developed policyholder dashboards with Redux-based state management, handling complex data flows across 12+ policy types and 4 user roles.",
				"Integrated Strapi CMS for content-driven page rendering, enabling the marketing team to independently update 50+ pages without developer intervention.",
				"Established a reusable component architecture of 15+ shared components, improving UI consistency and cutting new-feature development time by 20%.",
			],
			tags: ["React", "Redux", "Strapi CMS", "Responsive Design"],
			links: {
				demo: "https://maxlifeinsurance.com/cs/login",
			},
			featured: true,
		},
	];

	return (
		<div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
			<div className="max-w-4xl mx-auto space-y-10">
				{projects.map((project, index) => {
					const bullets = Array.isArray(project.description) ? project.description : [project.description];
					const hasGithub = Boolean(project.links?.github);
					const hasDemo = Boolean(project.links?.demo);

					return (
						<Reveal
							key={index}
							delay={(index % 2) * 100}
							className="group rounded-lg p-[2px] bg-gradient-to-r from-blue-900/60 via-blue-600/50 to-slate-800/60 shadow-lg"
						>
							<Card className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-2xl p-6">
								<CardHeader>
									<div className="flex justify-between items-start gap-4">
										<div>
											<div className="text-blue-400 text-sm font-mono mb-2 tracking-wide uppercase">Featured Project</div>
											<CardTitle className="text-slate-100 text-2xl sm:text-3xl font-bold">{project.title}</CardTitle>
										</div>
										<div className="flex gap-4 shrink-0">
											{hasGithub && (
												<a
													href={project.links.github}
													className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`Open GitHub repository for ${project.title}`}
												>
													<Github size={22} />
												</a>
											)}
											{hasDemo && (
												<a
													href={project.links.demo}
													className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`Open live demo of ${project.title}`}
												>
													<ExternalLink size={22} />
												</a>
											)}
										</div>
									</div>
								</CardHeader>

								<CardContent className="mt-4">
									<ul className="text-slate-300 mb-6 text-base sm:text-lg leading-relaxed list-disc pl-5 space-y-2">
										{bullets.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
									<div className="flex flex-wrap gap-2.5">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
											>
												{tag}
											</span>
										))}
									</div>
								</CardContent>
							</Card>
						</Reveal>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectShowcase;
