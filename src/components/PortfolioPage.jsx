import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
	return (
		<section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
				<div className="content max-w-2xl">
					<h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
					<p className="text-lg leading-relaxed">
						Hello! I’m Rimple Chaudhary, a passionate JavaScript developer specializing in creating innovative web solutions and user-friendly interfaces with React. Currently,
						I’m expanding into backend development to grow as a full-stack developer and create seamless, robust web applications. I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community
						with new ideas and tools that deliver real value.
					</p>
				</div>
				<div className="image-container">
					<img src={profileImage} alt="Profile" className="w-72 h-72 rounded-lg object-cover shadow-lg" />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
