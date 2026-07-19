import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Rocket, Code2, Sparkles, Lightbulb, ChevronDown, Download, FolderGit2 } from "lucide-react";
import "../assets/css/tomorrow.css";
import PortfolioPage from "./PortfolioPage";
import { FlipWords } from "./ui/flip-words";
import Meteors from "./ui/meteors";
import SparklesText from "./ui/sparkles-text";

// AnimatedGrid Component
const AnimatedGrid = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="relative w-full h-full">
				<div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
					<div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
						{[...Array(40)].map((_, i) => (
							<div
								key={`v-${i}`}
								className="relative h-full w-full border-r border-blue-500/10"
								style={{
									animation: `gridPulse ${2 + Math.random() * 2}s ease-in-out infinite`,
									animationDelay: `${Math.random() * 2}s`,
								}}
							/>
						))}
					</div>
					<div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
						{[...Array(40)].map((_, i) => (
							<div
								key={`h-${i}`}
								className="relative w-full h-full border-b border-blue-500/10"
								style={{
									animation: `gridPulse ${2 + Math.random() * 2}s ease-in-out infinite`,
									animationDelay: `${Math.random() * 2}s`,
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Hero() {
	const words = ["Software Developer", "React & Next.js Specialist", "TypeScript Engineer", "AI Automation Builder", "Performance Optimizer"];

	const [code] = useState(`
    const profile = {
        name: 'Rimple Chaudhary',
        title: 'Software Developer | React & Next.js',
        skills: [
            'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux/RTK',
            'React Query', 'Node.js', 'Express', 'LangChain', 'n8n'
        ],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        yearsOfExperience: 3,
        achievement: 'Employee of the Year 2024',
        hireable: function() {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5 &&
                this.yearsOfExperience >= 1
            );
        }
    };
      `);
	useEffect(() => {
		Prism.highlightAll();
	}, [code]);

	return (
		<>
			<main className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen">
				<section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>

					{/* Animated Grid Background */}
					<AnimatedGrid />

					{/* Meteors Effect */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<Meteors number={10} />
					</div>

					{/* Main content container */}
					<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
						{/* Left column - Text content */}
						<div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
							{/* Welcome badge */}
							<div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8">
								<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
								<span className="text-gray-300 text-xs sm:text-sm font-medium">Welcome to my universe</span>
							</div>

							{/* Name section */}
							<div className="relative mb-6 sm:mb-8">
								<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
									<SparklesText text="Hello" />
									<span className="relative inline-block">
										I'm
										<span className="typing-effect gradient-text"> Rimple Chaudhary</span>
									</span>
								</h1>
							</div>

							{/* Achievement Badge */}
							<div className="inline-flex mr-4 items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-6 sm:mb-8">
								<Trophy className="w-4 h-4" aria-hidden="true" />
								<span>Employee of the Year 2024</span>
							</div>

							{/* Role badge */}
							<div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8">
								<Rocket className="w-4 h-4 text-blue-400 animate-bounce" aria-hidden="true" />
								<span>
									<FlipWords className={"text-lg sm:text-xl text-blue-400 font-medium"} words={words} />
								</span>
							</div>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
								{/* View Projects Button */}
								<Link
									to="/projects"
									className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
								>
									<span className="flex items-center justify-center gap-2 w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 font-medium text-white transition-colors duration-300 group-hover:bg-transparent group-hover:text-gray-900">
										<FolderGit2 className="w-4 h-4" aria-hidden="true" />
										<span>View Projects</span>
									</span>
								</Link>

								<a
									href="/files/resume.pdf"
									download="Rimple_Chaudhary_Resume.pdf"
									className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
								>
									<span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
										<span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
											<span>Download Résumé</span>
											<Download className="w-4 h-4 transform transition-all duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
										</span>
									</span>
								</a>
							</div>

							{/* Floating badges */}
							<div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
									<Sparkles className="w-4 h-4" aria-hidden="true" /> AI Automation
								</div>
							</div>
							<div className="hidden lg:block absolute right-10 top-20 animate-float">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
									<Code2 className="w-4 h-4" aria-hidden="true" /> Clean Code
								</div>
							</div>
							<div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
									<Lightbulb className="w-4 h-4" aria-hidden="true" /> Innovation
								</div>
							</div>
						</div>

						{/* Right column - Code window */}
						<div className="w-full lg:w-1/2">
							<div className="gradient-border">
								<div className="code-window bg-[#091121]">
									<div className="window-header">
										<div className="window-dot bg-red-500"></div>
										<div className="window-dot bg-yellow-500"></div>
										<div className="window-dot bg-green-500"></div>
										<span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
											<Code2 className="w-4 h-4" aria-hidden="true" />
											developer.js
										</span>
									</div>
									<pre className="language-javascript">
										<code className="language-javascript">{code}</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
					<ChevronDown className="w-6 h-6 text-blue-400" aria-hidden="true" />
				</div>

				<PortfolioPage />
			</main>
		</>
	);
}
