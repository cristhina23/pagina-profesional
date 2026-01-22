import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { SectionHeading, SectionSubheading, Text } from "./ui/Typography";
import { Card } from "./ui/Card";

export default function Prizes() {
    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <SectionSubheading>Glory Awaits</SectionSubheading>
                    <SectionHeading>Championship Prizes</SectionHeading>
                    <Text className="max-w-xs mx-auto">Surpass your limits and claim the ultimate recognition. Elite performance deserves elite rewards.</Text>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <Card border="left">
                        <span className="material-symbols-outlined text-primary text-3xl mb-4">trophy</span>
                        <h4 className="font-display text-sm italic uppercase mb-1 text-white">Alpha Predator</h4>
                        <Text variant="mono" className="mb-4 tracking-tighter text-primary">Top Strength Metric</Text>
                        <Text>The ultimate titanium trophy + 1-year free Black Membership.</Text>
                    </Card>
                    <Card border="left">
                        <span className="material-symbols-outlined text-primary text-3xl mb-4">military_tech</span>
                        <h4 className="font-display text-sm italic uppercase mb-1 text-white">Metabolic God</h4>
                        <Text variant="mono" className="mb-4 tracking-tighter text-primary">VO2 Max Champion</Text>
                        <Text>Bespoke carbon fiber commemorative plate + Tech Bundle.</Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
