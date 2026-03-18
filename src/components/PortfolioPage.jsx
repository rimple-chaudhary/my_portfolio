import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
	return (
		<section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
				<div className="content max-w-2xl">
					<h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
					<p className="text-lg leading-relaxed">
						Frontend Developer with 3 years of experience building scalable, enterprise-grade web applications using React.js, Next.js, and TypeScript. Delivered customer-facing portals for
						EMAAR India and MaxLife Insurance by building performant, modular, user-centric interfaces that scale across teams and business needs.
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
