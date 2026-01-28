import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { SectionHeading, SectionSubheading, Text } from "./ui/Typography";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import Antes from "../assets/images/antes2.png";
import Despues from "../assets/images/despues2.png";

const reports = [
	{
		id: "SUBJECT-417A",
		name: "Alex R.",
		coreStatus: "+15kg Muscle Mass / -12% Body Fat",
		protocol: "PREMIUM",
		duration: "12 Weeks",
		quote:
			"The transformation I've experienced is beyond physical; it's a complete overhaul of my capabilities. The data doesn't lie—this program works.",
		beforeImg:
			Antes,
		afterImg:
			Despues,
		metrics: [
			{ label: "Strength", value: 80 },
			{ label: "Endurance", value: 62 },
			{ label: "Power", value: 88 },
		],
	},
	{
		id: "SUBJECT-933B",
		name: "Mia K.",
		coreStatus: "+9kg Muscle Mass / -8% Body Fat",
		protocol: "CORE",
		duration: "10 Weeks",
		quote:
			"Amazing transformation! The Fit Club's data-driven approach took my fitness to the next level. Visible results and enhanced performance.",
		beforeImg:
			Antes,
		afterImg:
			Despues,
		metrics: [
			{ label: "Strength", value: 68 },
			{ label: "Endurance", value: 74 },
			{ label: "Power", value: 70 },
		],
	},
	{
		id: "SUBJECT-121C",
		name: "Noah T.",
		coreStatus: "+22kg Muscle Mass / -10% Body Fat",
		protocol: "BLACK",
		duration: "16 Weeks",
		quote:
			"Excellent training protocols backed by solid data. My transformation speaks for itself.",
		beforeImg:
			Antes,
		afterImg:
			Despues,
		metrics: [
			{ label: "Strength", value: 92 },
			{ label: "Endurance", value: 64 },
			{ label: "Power", value: 95 },
		],
	},
];

function MiniBars({ data }) {
	return (
		<div className="grid grid-cols-3 gap-3 mt-6">
			{data.map((m) => (
				<div key={m.label} className="flex flex-col items-center gap-1">
					<div className="h-20 w-2 bg-white/10 relative overflow-hidden rounded-full">
						<div
							className="absolute bottom-0 w-full bg-primary shadow-[0_0_12px_#D9FF00]"
							style={{ height: `${m.value}%` }}
						/>
					</div>
					<span className="text-[9px] font-mono uppercase text-white/40">
						{m.label}
					</span>
				</div>
			))}
		</div>
	);
}

function BeforeAfter({ before, after }) {
	return (
		<div className="grid grid-cols-2 gap-2">
			{[{ src: before, tag: "Baseline" }, { src: after, tag: "Optimized" }].map(
				(img) => (
					<div key={img.tag} className="relative aspect-[3/4] overflow-hidden border border-white/10">
						{/* Grid overlay */}
						<div
							className="absolute inset-0 z-10 opacity-25 mix-blend-overlay pointer-events-none"
							style={{
								backgroundImage:
									"repeating-linear-gradient(0deg, rgba(217,255,0,0.08) 0 1px, transparent 1px 30px), repeating-linear-gradient(90deg, rgba(217,255,0,0.08) 0 1px, transparent 1px 30px)",
								backgroundSize: "30px 30px",
							}}
						/>
						<img
							alt={`${img.tag} subject`}
							src={img.src}
							className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
						/>
						<span className="absolute top-2 left-2 z-20 text-[9px] font-mono uppercase bg-black/40 px-2 py-1 border border-white/10">
							{img.tag}
						</span>
					</div>
				)
			)}
		</div>
	);
}

export default function Testimonials() {
	const container = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.15 } },
	};

	const item = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<Section className="relative overflow-visible">
			{/* Ambient glow background */}
			<div className="hidden md:block absolute -top-24 right-[-100px] w-[520px] h-[520px] bg-primary/12 blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

			{/* Edge blend to smooth transitions */}
			<div className="absolute inset-x-0 -top-16 h-28 bg-gradient-to-b from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />
			<div className="absolute inset-x-0 -bottom-16 h-28 bg-gradient-to-t from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />

			<Container>
				<div className="mb-12 text-center">
					<SectionSubheading>DATA LOGS: PROGRESS REPORTS</SectionSubheading>
					<SectionHeading>Real-world performance upgrades</SectionHeading>
					<Text className="max-w-3xl mx-auto mt-4">
						Witness the transformative journeys of our elite members. These reports showcase tangible results achieved through our precision training protocols, highlighting significant improvements in muscle mass, endurance, and overall performance.
					</Text>
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
				>
					{reports.map((r) => (
						<Card key={r.id} variants={item} border="left" className="group">
							<div className="flex items-center justify-between mb-4">
								<Text variant="mono" className="text-primary">SUBJECT ID</Text>
								<span className="text-[10px] font-mono uppercase text-white/40">{r.id}</span>
							</div>

							<h3 className="font-display italic text-xl mb-2">{r.name}</h3>
							<div className="grid grid-cols-2 gap-3 mb-6">
								<div>
									<Text variant="mono" className="mb-1">CORE STATUS</Text>
									<p className="text-sm text-white/80">{r.coreStatus}</p>
								</div>
								<div>
									<Text variant="mono" className="mb-1">PROTOCOL USED</Text>
									<p className="text-sm text-primary font-semibold">{r.protocol}</p>
								</div>
								<div>
									<Text variant="mono" className="mb-1">MISSION DURATION</Text>
									<p className="text-sm text-white/80">{r.duration}</p>
								</div>
							</div>

							<BeforeAfter before={r.beforeImg} after={r.afterImg} />
							<MiniBars data={r.metrics} />

							<div className="mt-6 border-t border-white/10 pt-4">
								<Text className="text-white/80">“{r.quote}”</Text>
							</div>
						</Card>
					))}
				</motion.div>

				<div className="mt-10 flex flex-wrap gap-4 justify-center">
					<Button className="border border-primary bg-primary/10 hover:bg-primary hover:text-black">
						ANALYZE YOUR POTENTIAL
					</Button>
					<Button variant="outline">START YOUR EVOLUTION</Button>
				</div>
			</Container>
		</Section>
	);
}

