import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver — no
 * animation library, so it adds no vendor weight to a route's chunk.
 * The fade/translate is pure CSS transition, which the global
 * prefers-reduced-motion rule disables automatically.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
			className={`transition-all duration-700 ease-out will-change-transform ${
				visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
			} ${className}`}
		>
			{children}
		</Tag>
	);
}
