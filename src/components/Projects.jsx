import React from "react";
import { Github, ExternalLink, Cloud } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiAntdesign } from "react-icons/si";
import { BsCloudRainHeavyFill, BsWindowStack, BsRobot } from "react-icons/bs";
import { SiStrapi } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "./ui/Reveal";

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

// Generic, brand-safe "app UI" mockup used in place of real client screenshots.
const ProjectMock = ({ title, tags, accent = "from-cyan-500/25 via-violet-500/20 to-blue-500/25" }) => (
	<div
		className={`relative w-full h-full min-h-[300px] p-5 flex flex-col bg-gradient-to-br ${accent} border border-white/10`}
		role="img"
		aria-label={`Illustrative UI mockup for ${title}`}
	>
		{/* Browser chrome */}
		<div className="flex items-center gap-2 mb-4">
			<span className="w-3 h-3 rounded-full bg-red-500/80" />
			<span className="w-3 h-3 rounded-full bg-yellow-500/80" />
			<span className="w-3 h-3 rounded-full bg-green-500/80" />
			<div className="ml-3 h-5 flex-1 max-w-[200px] rounded-full bg-white/10 border border-white/10" />
		</div>

		{/* Faux app layout */}
		<div className="flex gap-3 flex-1">
			<div className="hidden sm:flex flex-col gap-2 w-1/4">
				{[...Array(4)].map((_, i) => (
					<div key={i} className="h-3 rounded bg-white/10" style={{ width: `${70 + (i % 3) * 10}%` }} />
				))}
			</div>
			<div className="flex-1 flex flex-col gap-3">
				<div className="relative h-16 rounded-lg bg-white/10 border border-white/10 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
				</div>
				<div className="grid grid-cols-3 gap-2">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="h-12 rounded-lg bg-white/10 border border-white/10" />
					))}
				</div>
				<div className="h-3 w-3/4 rounded bg-white/10" />
				<div className="h-3 w-1/2 rounded bg-white/10" />
			</div>
		</div>

		{/* Title + tech icons */}
		<div className="mt-5">
			<div className="text-slate-100 text-lg md:text-xl font-bold">{title}</div>
			<div className="flex flex-wrap gap-2 mt-3 text-2xl">
				{tags.map((tag) => (
					<span key={tag} className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/25 border border-white/10">
						{projectIconByTag(tag)}
					</span>
				))}
			</div>
		</div>
	</div>
);

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
			accent: "from-emerald-500/25 via-teal-500/20 to-blue-500/25",
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
			accent: "from-fuchsia-500/25 via-purple-500/20 to-blue-500/25",
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
			accent: "from-amber-500/25 via-orange-500/20 to-rose-500/25",
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
			accent: "from-sky-500/25 via-indigo-500/20 to-cyan-500/25",
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
						<Reveal
							key={index}
							className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] shadow-lg"
						>
							<div className="md:w-1/2 self-stretch overflow-hidden rounded-lg">
								<ProjectMock title={project.title} tags={project.tags} accent={project.accent} />
							</div>

							<Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
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
						</Reveal>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectShowcase;
