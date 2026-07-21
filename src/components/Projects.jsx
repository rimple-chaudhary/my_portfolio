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
// Bar heights for the faux analytics chart in the mockup.
const CHART_BARS = [45, 70, 38, 82, 55, 95, 62, 78];

const ProjectMock = ({ title, tags }) => (
	<div
		className="group/mock relative w-full h-full min-h-[340px] p-4 sm:p-5 flex flex-col bg-gradient-to-br from-[#0a1222] via-[#0b1a34] to-[#020617] border border-blue-500/20 overflow-hidden"
		role="img"
		aria-label={`Illustrative UI mockup for ${title}`}
	>
		{/* Ambient glow */}
		<div className="pointer-events-none absolute -top-16 -right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

		{/* Browser chrome */}
		<div className="relative flex items-center gap-2 mb-3">
			<span className="w-3 h-3 rounded-full bg-red-400/90" />
			<span className="w-3 h-3 rounded-full bg-yellow-400/90" />
			<span className="w-3 h-3 rounded-full bg-green-400/90" />
			<div className="ml-2 h-6 flex-1 rounded-md bg-black/25 border border-white/10 flex items-center px-3 gap-2">
				<span className="w-2.5 h-2.5 rounded-full border border-white/30" />
				<span className="h-1.5 w-1/3 rounded-full bg-white/25" />
			</div>
		</div>

		{/* App window */}
		<div className="relative flex-1 rounded-xl bg-black/25 border border-white/10 backdrop-blur-sm p-3 flex gap-3 min-h-0">
			{/* Sidebar */}
			<div className="hidden sm:flex flex-col gap-2 w-11 shrink-0">
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className={`h-8 rounded-lg border ${
							i === 0 ? "bg-white/25 border-white/30" : "bg-white/5 border-white/10"
						}`}
					/>
				))}
			</div>

			{/* Content */}
			<div className="flex-1 flex flex-col gap-3 min-w-0">
				{/* Header row */}
				<div className="flex items-center justify-between">
					<div className="h-2.5 w-24 rounded-full bg-white/25" />
					<div className="flex items-center gap-1.5">
						<span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
						<span className="h-2 w-10 rounded-full bg-white/20" />
					</div>
				</div>

				{/* Stat cards */}
				<div className="grid grid-cols-3 gap-2">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="rounded-lg bg-white/10 border border-white/10 p-2 flex flex-col gap-1.5">
							<span className="h-1.5 w-2/3 rounded-full bg-white/25" />
							<span className="h-3 w-1/2 rounded bg-white/30" />
						</div>
					))}
				</div>

				{/* Analytics chart */}
				<div className="relative flex-1 min-h-[64px] rounded-lg bg-white/5 border border-white/10 p-2 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
					<div className="relative h-full flex items-end justify-between gap-1.5">
						{CHART_BARS.map((h, i) => (
							<div
								key={i}
								className="animate-grow-bar flex-1 rounded-sm bg-gradient-to-t from-white/30 to-white/70"
								style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
							/>
						))}
					</div>
				</div>
			</div>
		</div>

		{/* Title + tech icons */}
		<div className="relative mt-3">
			<div className="text-slate-100 text-base sm:text-lg font-bold truncate">{title}</div>
			<div className="flex flex-wrap gap-1.5 mt-2 text-xl">
				{tags.map((tag) => (
					<span
						key={tag}
						className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-black/30 border border-white/10 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
					>
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
							className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-blue-900/60 via-blue-600/50 to-slate-800/60 shadow-lg"
						>
							<div className="md:w-1/2 self-stretch overflow-hidden rounded-lg">
								<ProjectMock title={project.title} tags={project.tags} />
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
