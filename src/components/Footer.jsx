import { Container } from "./ui/Layout";
import { Text } from "./ui/Typography";

export default function Footer() {
    return (
        <footer className="px-6 py-20 border-t border-white/5 bg-background-dark">
            <Container className="flex flex-col gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary fill-current">bolt</span>
                        <span className="font-display text-2xl uppercase tracking-tighter italic text-white">The Fit Club</span>
                    </div>
                    <Text className="max-w-[240px] text-xs text-white/30">
                        Architecting the future of human performance through science-driven training and elite technological integration.
                    </Text>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <FooterColumn title="Protocols" links={['Hypertrophy', 'Anaerobic', 'Functional']} />
                    <FooterColumn title="Social" links={['Instagram', 'Twitter', 'Youtube']} />
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col gap-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    <p>© 2024 THE FIT CLUB. HIGH PERFORMANCE BIOMETRICS INTEGRATED.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div className="space-y-4">
            <h5 className="text-[10px] font-mono text-primary uppercase tracking-widest">{title}</h5>
            <ul className="space-y-2 text-[10px] font-display uppercase italic text-slate-600 dark:text-white/60">
                {links.map(link => (
                    <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
            </ul>
        </div>
    );
}
