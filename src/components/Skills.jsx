import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "./ui/Reveal";
import IconCloudDemo from "./globe";
import { Code2, Layout, TestTube2, Wrench, CloudCog, PencilRuler, Network, CheckSquare, Server, Database, Bot, Workflow, Sparkles } from "lucide-react";
import { FaReact, FaNodeJs, FaFigma, FaAws, FaJs, FaCss3Alt, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiJest, SiTestinglibrary, SiWebpack, SiVite, SiPostman, SiNpm, SiEslint, SiAntdesign, SiExpress, SiMui, SiReactquery } from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
	<Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
		<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
		<CardContent className="p-6 relative z-10">
			<div className="flex items-center gap-4 mb-6">
				<div className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}>
					<Icon className="w-8 h-8" />
				</div>
				<h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{title}</h3>
			</div>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill, index) => (
					<Badge
						key={index}
						variant="outline"
						className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
					>
						<span className="transform group-hover/badge:scale-110 transition-transform duration-300">{skill.icon}</span>
						<span className="font-medium text-sm">{skill.name}</span>
					</Badge>
				))}
			</div>
		</CardContent>
	</Card>
);

const SkillsSection = () => {
	const skillCategories = [
		{
			icon: Code2,
			title: "Languages",
			color: "text-blue-400",
			skills: [
				{ name: "JavaScript (ES6+)", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
				{ name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
				{ name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
				{ name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
			],
		},
		{
			icon: Layout,
			title: "Frameworks & Libraries",
			color: "text-emerald-400",
			skills: [
				{ name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
				{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
				{ name: "Redux/RTK", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
				{ name: "React Query", icon: <SiReactquery className="w-4 h-4 text-[#FF4154]" /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
				{ name: "Ant Design", icon: <SiAntdesign className="w-4 h-4 text-[#1677FF]" /> },
				{ name: "MUI", icon: <SiMui className="w-4 h-4 text-[#007FFF]" /> },
				{ name: "SSR/SSG", icon: <SiNextdotjs className="w-4 h-4 text-[#ffffff]" /> },
			],
		},
		{
			icon: Server,
			title: "Backend",
			color: "text-green-400",
			skills: [
				{ name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
				{ name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
				{ name: "SQL", icon: <Database className="w-4 h-4 text-[#00758F]" /> },
			],
		},
		{
			icon: Bot,
			title: "AI & Automation",
			color: "text-fuchsia-400",
			skills: [
				{ name: "LangChain", icon: <Bot className="w-4 h-4 text-[#1C3C3C]" /> },
				{ name: "LangGraph", icon: <Workflow className="w-4 h-4 text-[#F97316]" /> },
				{ name: "n8n", icon: <Workflow className="w-4 h-4 text-[#EA4B71]" /> },
				{ name: "Claude Code", icon: <Sparkles className="w-4 h-4 text-[#D97757]" /> },
			],
		},
		{
			icon: TestTube2,
			title: "Testing",
			color: "text-yellow-400",
			skills: [
				{ name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
				{ name: "React Testing Library", icon: <SiTestinglibrary className="w-4 h-4 text-[#E33332]" /> },
				{ name: "Unit Testing", icon: <TestTube2 className="w-4 h-4 text-[#facc15]" /> },
			],
		},
		{
			icon: Wrench,
			title: "Build & Tools",
			color: "text-pink-400",
			skills: [
				{ name: "Webpack", icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" /> },
				{ name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
				{ name: "Git/GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#f34f29]" /> },
				{ name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
				{ name: "npm/yarn", icon: <SiNpm className="w-4 h-4 text-[#CC3534]" /> },
				{ name: "ESLint", icon: <SiEslint className="w-4 h-4 text-[#4B32C3]" /> },
				{ name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
				{ name: "GitHub Copilot", icon: <FaGithub className="w-4 h-4 text-[#f4f4f4]" /> },
			],
		},
		{
			icon: CloudCog,
			title: "Cloud & DevOps",
			color: "text-indigo-400",
			skills: [
				{ name: "AWS S3", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
				{ name: "CI/CD", icon: <Code2 className="w-4 h-4 text-[#06B6D4]" /> },
			],
		},
		{
			icon: PencilRuler,
			title: "Design & UX",
			color: "text-lime-400",
			skills: [
				{ name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
				{ name: "Responsive Web Design", icon: <Layout className="w-4 h-4 text-[#67e8f9]" /> },
			],
		},
		{
			icon: Network,
			title: "Methodologies",
			color: "text-cyan-300",
			skills: [
				{ name: "Agile/Scrum", icon: <Network className="w-4 h-4 text-[#34d399]" /> },
				{ name: "SOLID Principles", icon: <CheckSquare className="w-4 h-4 text-[#22d3ee]" /> },
				{ name: "Code Reviews", icon: <CheckSquare className="w-4 h-4 text-[#22d3ee]" /> },
				{ name: "JIRA", icon: <Network className="w-4 h-4 text-[#0052CC]" /> },
			],
		},
	];

	return (
		<div className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen">
			<section className="container mx-auto px-4 py-11">
				<div className="flex justify-center items-center ">
					<IconCloudDemo />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<Reveal key={index} delay={(index % 3) * 100}>
							<SkillCard icon={category.icon} title={category.title} skills={category.skills} color={category.color} />
						</Reveal>
					))}
				</div>
			</section>
		</div>
	);
};

export default SkillsSection;
