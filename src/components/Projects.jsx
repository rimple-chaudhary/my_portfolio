import React from "react";
import { Github, ExternalLink } from "lucide-react";
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

const ProjectShowcase = () => {
	const projects = [
		{
			title: "TaxZapp - Tax Refund Simplified",
			description: "A user-friendly tax refund platform that streamlines the process of claiming tax returns. Built and integrated the payment system, developed UI components, and ensured seamless API integration for a smooth user experience.",
			tags: ["React", "JavaScript", "API Integration", "Redux","AntD"],
			links: {
				live: "https://taxzapp.ie/",
			},
			image: taxzapp,
			featured: true,
		},
		{
			title: "MaxLife - Life Insurance Platform",
			description: "A seamless and secure life insurance platform providing users with a hassle-free experience to manage policies and claims. Developed key UI components, implemented API integrations, and optimized the user authentication flow.",
			tags: ["React", "JavaScript", "API Integration","Redux","Strapi","Tailwind"],
			links: {
				live: "https://maxlifeinsurance.com/cs/login",
			},
			image: maxlife,
			featured: true,
		},
	];

	return (
		<div
			className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
		>
			<div className="max-w-7xl mx-auto space-y-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
					>
						{/* Image Section */}
						<div className="md:w-1/2 overflow-hidden rounded-lg">
							<img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
						</div>

						{/* Text Section */}
						<Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
							<MacOsButtons />

							<CardHeader>
								<div className="flex justify-between items-start">
									<div>
										<div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">Featured Project</div>
										<CardTitle className="text-slate-100 text-3xl font-bold">{project.title}</CardTitle>
									</div>
									<div className="flex gap-4">
										<a
											href={project.links.github}
											className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github size={22} />
										</a>
										<a
											href={project.links.demo}
											className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink size={22} />
										</a>
									</div>
								</div>
							</CardHeader>

							<CardContent className="mt-4">
								<p className="text-slate-300 mb-6 text-lg leading-relaxed">{project.description}</p>
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
				))}
			</div>
		</div>
	);
};

export default ProjectShowcase;
