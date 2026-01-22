import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { SectionHeading, SectionSubheading, Text } from "./ui/Typography";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

export default function Memberships() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section className="bg-transparent relative">
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none -z-10" />

            <Container>
                <div className="text-center mb-16">
                    <SectionSubheading>The Investment</SectionSubheading>
                    <SectionHeading>Elite Memberships</SectionHeading>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex justify-between items-stretch gap-8"
                >
                    <Card variants={item} className="w-1/4">
                        <Text variant="mono" className="mb-2">Foundation</Text>
                        <Text variant="mono" className="mb-2">Foundation</Text>
                        <h3 className="font-display text-2xl italic mb-6 text-white">CORE</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-display italic">$299</span>
                            <span className="text-xs text-slate-400 dark:text-white/40 uppercase">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Standard Performance Lab Access', 'Digital Biometric Tracking', 'Elite Community Access'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-xs text-slate-600 dark:text-white/70">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">Select Plan</Button>
                    </Card>

                    <Card variants={item} border="primary" className="w-1/3">
                        <div className="absolute top-0 right-0 bg-primary text-black text-[8px] font-display px-3 py-1 uppercase">
                            Most Popular
                        </div>
                        <Text variant="mono" className="text-primary mb-2">Elite Protocol</Text>
                        <Text variant="mono" className="text-primary mb-2">Elite Protocol</Text>
                        <h3 className="font-display text-2xl italic mb-6 text-primary text-glow">PREMIUM</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-display italic">$599</span>
                            <span className="text-xs text-slate-400 dark:text-white/40 uppercase">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {['Full Performance Lab Access', '1-on-1 Biometric Review', 'Advanced Hypertrophy Protocols'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-xs text-slate-900 dark:text-white font-semibold">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" className="w-full">Select Plan</Button>
                    </Card>

                    <Card variants={item} className="w-1/4">
                        <Text variant="mono" className="mb-2">Absolute Control</Text>
                        <Text variant="mono" className="mb-2">Absolute Control</Text>
                        <h3 className="font-display text-2xl italic mb-6 text-white">BLACK</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-display italic">$999</span>
                            <span className="text-xs text-slate-400 dark:text-white/40 uppercase">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {['24/7 Concierge Performance', 'Custom Nutritional Bio-Design'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-xs text-slate-600 dark:text-white/70">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">Select Plan</Button>
                    </Card>
                </motion.div>
            </Container>
        </Section>
    );
}
