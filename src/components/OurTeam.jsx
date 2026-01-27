import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { SectionHeading, SectionSubheading, Text } from "./ui/Typography";
import { Card } from "./ui/Card";
import Trainer1 from "../assets/images/1.jpg";
import Trainer2 from "../assets/images/2.jpg";
import Trainer3 from "../assets/images/3.jpg";
import Trainer4 from "../assets/images/4.jpg";

const leaders = [
	{
		name: "AIM",
		tag: "The Biomech",
		program: "Chem & Movement",
		img: Trainer1,
	},
	{
		name: "CREB",
		tag: "Strength",
		program: "Hypertrophy",
		img: Trainer2,
	},
	{
		name: "NTR",
		tag: "Flow",
		program: "Static Yoga",
		img: Trainer3,
	},
	{
		name: "COG",
		tag: "Strength",
		program: "Domain Alternate",
		img: Trainer4,
	},
];

export default function OurTeam() {
	const container = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.15 } },
	};

	const item = {
		hidden: { opacity: 0, y: 16 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<Section className="relative bg-transparent pt-16 md:pt-24">
			{/* Ambient background and soft gradient */}
			<div className="hidden md:block absolute -top-24 left-[-80px] w-[320px] h-[320px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
			<div className="hidden lg:block absolute -bottom-24 right-[-100px] w-[360px] h-[360px] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />
			<div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-70 pointer-events-none -z-10" />

			<Container>
				<div className="mb-10 md:mb-16">
					<SectionSubheading>First Class Protocols & Annotations</SectionSubheading>
					<SectionHeading className="text-primary">Protocol Leaders</SectionHeading>
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
				>
					{leaders.map((l, idx) => (
						<Card key={idx} variants={item} border={idx === 1 ? "primary" : "default"} className="p-0 overflow-hidden">
							{/* Image block */}
							<div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-zinc-900/40">
								<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
								<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-20 mix-blend-overlay" />
								<img
									src={l.img}
									alt="Team leader"
									className="w-full h-full object-cover grayscale contrast-125 opacity-80"
								/>

								{/* Corner glow badge */}
								<div className="absolute bottom-3 right-3 z-30">
									<div className="relative">
										<div className="absolute -inset-3 bg-primary/20 rounded-full blur-md" />
										<div className="relative bg-primary text-black w-9 h-9 rounded-full flex items-center justify-center shadow-[0_0_20px_#D9FF00]">
											<span className="material-symbols-outlined text-[18px]">shield</span>
										</div>
									</div>
								</div>
							</div>

							{/* Text block */}
							<div className="p-6">
								<Text variant="mono" className="mb-1">{l.tag}</Text>
								<Text variant="mono" className="mb-2">{l.program}</Text>
								<h3 className="font-display text-2xl italic text-white">
									{l.name}
								</h3>
							</div>
						</Card>
					))}
				</motion.div>
			</Container>
		</Section>
	);
}

