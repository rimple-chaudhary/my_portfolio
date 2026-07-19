import React from "react";
import { Github, ExternalLink, Cloud } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiAntdesign } from "react-icons/si";
import { BsCloudRainHeavyFill, BsWindowStack, BsRobot } from "react-icons/bs";
import { SiStrapi } from "react-icons/si";
import taxzapp from "../assets/images/taxzapp.png";
import maxlife from "../assets/images/maxlife.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
	<div className="flex gap-2 mb-4">
		<div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
		<div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
		<div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
	</div>
);

const projectIconByTag = (tag) => {
	const iconMap = {
		React: <FaReact className="text-[#61dafb]" />,
		"TypeScript": <SiTypescript className="text-[#3178c6]" />,
		"Next.js": <SiNextdotjs className="text-[#ffffff]" />,
		"Redux": <SiRedux className="text-[#764abc]" />,
		"React Query": <SiNextdotjs className="text-[#61dafb]" />,
		"Tailwind CSS": <SiTailwindcss className="text-[#38bdf8]" />,
		"Node.js": <FaNodeJs className="text-[#68a063]" />,
		"Ant Design": <SiAntdesign className="text-[#1677ff]" />,
		"PWA": <Cloud className="text-white" />,
		"Responsive Design": <BsWindowStack className="text-[#38bdf8]" />,
		"Strapi CMS": <SiStrapi className="text-[#4945ff]" />,
		"AWS S3": <BsCloudRainHeavyFill className="text-[#ff9900]" />,
		"AWS": <BsCloudRainHeavyFill className="text-[#ff9900]" />,
		"MUI": <BsWindowStack className="text-[#007fff]" />,
		"n8n": <BsRobot className="text-[#ea4b71]" />,
		"LangChain": <BsRobot className="text-[#1c3c3c]" />,
		"LangGraph": <BsRobot className="text-[#f97316]" />,
		"AI Workflows": <BsRobot className="text-[#a855f7]" />,
	};

	return iconMap[tag] || <BsWindowStack className="text-gray-300" />;
};

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
			placeholder: true,
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
			placeholder: true,
		},
		{
			title: "TaxZap - Tax Refund Simplified",
			description:
				"Developed and maintained the TaxZap web experience with a strong focus on responsive tax workflow interfaces, TypeScript reliability, and modern state handling using Redux.",
			tags: ["React", "TypeScript", "Redux", "Ant Design", "PWA"],
			links: {
				demo: "https://taxzapp.ie/",
			},
			image: taxzapp,
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
			image: maxlife,
			featured: true,
		},
	];

	return (
		<div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
			<div className="max-w-7xl mx-auto space-y-12">
				{projects.map((project, index) => {
					const bullets = Array.isArray(project.description) ? project.description : [project.description];
					const hasGithub = Boolean(project.links?.github);
					const hasDemo = Boolean(project.links?.demo);

					return (
						<div
							key={index}
							className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
						>
							<div className="md:w-1/2 overflow-hidden rounded-lg">
								{project.placeholder ? (
									<div className="relative w-full h-full min-h-[280px] flex flex-col justify-center items-center gap-6 p-8 bg-gradient-to-br from-emerald-500/20 via-violet-500/20 to-blue-500/20 border border-white/10">
										<div className="text-slate-100 text-2xl md:text-3xl font-bold text-center">{project.title}</div>
										<div className="flex flex-wrap justify-center gap-4 text-4xl">
											{project.tags.map((tag) => (
												<span key={tag} className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/20 border border-white/10">
													{projectIconByTag(tag)}
												</span>
											))}
										</div>
									</div>
								) : (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
								)}
							</div>

							<Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
								<MacOsButtons />

								<CardHeader>
									<div className="flex justify-between items-start">
										<div>
											<div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">Featured Project</div>
											<CardTitle className="text-slate-100 text-3xl font-bold">{project.title}</CardTitle>
										</div>
										<div className="flex gap-4">
											{hasGithub && (
												<a
													href={project.links.github}
													className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github size={22} />
												</a>
											)}
											{hasDemo && (
												<a
													href={project.links.demo}
													className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
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
									<ul className="text-slate-300 mb-6 text-lg leading-relaxed list-disc pl-5 space-y-2">
										{bullets.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
									<div className="flex flex-wrap gap-3">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
											>
												{tag}
											</span>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectShowcase;
