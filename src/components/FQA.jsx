import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { SectionHeading, SectionSubheading, Text } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function FQA() {
	const faqs = [
		{
			q: "What is the difference between CORE, PREMIUM, and BLACK protocols?",
			a: "CORE focuses on foundational strength and hypertrophy with biometric tracking. PREMIUM adds advanced programming with 1-on-1 review and expanded lab access. BLACK delivers fully bespoke training and 24/7 concierge performance support.",
		},
		{
			q: "Do I need prior training experience?",
			a: "No. Our onboarding calibrates the system to your current capability using assessments and baseline metrics. The protocol scales with your adaptation week by week.",
		},
		{
			q: "How soon will I see measurable results?",
			a: "Most members register measurable improvements within 4–6 weeks. We log strength, body composition, and recovery markers to track your trend line objectively.",
		},
		{
			q: "Is nutrition support included?",
			a: "Yes. All protocols include nutrition guidance. PREMIUM and BLACK add advanced bio-design and tighter feedback loops aligned to your biometrics.",
		},
		{
			q: "Can I pause or upgrade my plan?",
			a: "Yes. You can pause for travel or upgrade when your mission parameters change. Your data remains linked to your Subject ID for continuity.",
		},
	];

	return (
		<Section className="relative">
			{/* Ambient glow accents */}
			<div className="hidden md:block absolute -top-24 right-[-80px] w-[320px] h-[320px] bg-primary/20 blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
			<div className="hidden lg:block absolute -bottom-28 left-[-100px] w-[360px] h-[360px] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />

			<Container>
				<div className="text-center mb-12">
					<SectionSubheading>System Knowledge Base</SectionSubheading>
					<SectionHeading>FREQUENTLY ASKED QUESTIONS</SectionHeading>
					<Text className="mx-auto max-w-2xl mt-4">
						We remove guesswork with precise protocols. Explore the most common questions from new members before they begin their mission.
					</Text>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
					{/* Left: FAQ list */}
					<div className="space-y-4">
						{faqs.map((item, idx) => (
							<FAQItem key={idx} question={item.q} answer={item.a} />
						))}
					</div>

					{/* Right: Callouts */}
					<div className="relative">
						<div className="absolute -top-6 -right-6 w-10 h-10 border-t-2 border-r-2 border-primary/40" />
						<div className="absolute -bottom-6 -left-6 w-10 h-10 border-b-2 border-l-2 border-neon-cyan/40" />

						<div className="p-8 border border-white/10 bg-white/5 rounded-lg backdrop-blur-md">
							<Text variant="mono" className="mb-2">Mission Control</Text>
							<h3 className="font-display italic text-2xl mb-4">
								Ready to calibrate your protocol?
							</h3>
							<Text className="mb-6">
								Start with a performance assessment. We’ll build your plan using your current data and upgrade as your system adapts.
							</Text>
							<div className="flex flex-wrap gap-4">
								<Button className="border border-primary bg-primary/10 hover:bg-primary hover:text-black">
									<span className="mr-1">►</span> ANALYZE YOUR POTENTIAL
								</Button>
								<Button variant="outline" className="border-slate-700 hover:border-white/50">
									START YOUR EVOLUTION
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function FAQItem({ question, answer }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-md overflow-hidden">
			<button
				onClick={() => setOpen((v) => !v)}
				className="w-full flex items-center justify-between p-5 text-left"
			>
				<div>
					<span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">Query</span>
					<h4 className="font-display italic text-lg md:text-xl">{question}</h4>
				</div>
				<span className="material-symbols-outlined text-primary">
					{open ? "remove" : "add"}
				</span>
			</button>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="px-5 pb-5 border-t border-white/10"
					>
						<Text>{answer}</Text>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

