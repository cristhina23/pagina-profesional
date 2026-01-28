import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Section, Container } from "./ui/Layout";

export default function Hero() {
  return (
        <Section className="pt-10 md:pt-14 pb-24 md:pb-32 px-2 md:px-12 overflow-visible">
      <Container >
                {/* Ambient Background Glows (unified profile) */}
                <div className="hidden md:block absolute -top-24 right-[-100px] w-[520px] h-[520px] bg-primary/12 blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
                <div className="hidden md:block absolute -bottom-24 left-[-100px] w-[520px] h-[520px] bg-neon-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
                {/* Edge blend to smooth color transitions with adjacent sections (unified) */}
                <div className="absolute inset-x-0 -top-16 h-28 bg-gradient-to-b from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />
                <div className="absolute inset-x-0 -bottom-16 h-28 bg-gradient-to-t from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-sm bg-primary box-shadow-glow animate-pulse"></div>
                            <span className="text-xs font-mono tracking-[0.2em] text-cyan-300 uppercase">System Ready // v4.0.1</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="font-display text-3xl sm:text-4xl md:text-7xl lg:text-8xl italic-heading mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] tracking-tighter "
                        >
                            Stren<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">gth</span>
                            <span className="text-primary text-glow">.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mb-8 md:mb-12 border-l-2 border-primary/20 pl-4 sm:pl-6"
                        >
                            The next evolution of human performance. Experience training protocols once reserved for elite athletes, delivered with precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 sm:gap-6"
                        >
                            <Button className="border border-primary bg-primary/10 hover:bg-primary hover:text-black">
                                <span className="mr-2">►</span> Access Elite Pass
                            </Button>
                            <Button variant="outline" className="border-slate-700 hover:border-white/50">
                                Explore Systems
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0"
                    >
                        {/* Decorative HUD Elements */}
                        <div className="hidden sm:block absolute -top-6 -right-6 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-r-2 border-primary/50" />
                        <div className="hidden sm:block absolute -bottom-6 -left-6 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-l-2 border-neon-cyan/50" />

                        <div className="w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]  bg-zinc-900/50 relative group overflow-hidden border border-white/5 rounded-lg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-20 mix-blend-overlay" />
                            <img
                                alt="Athlete sprinting"
                                className="w-full h-full object-cover grayscale contrast-125 opacity-80 md:opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
                                src="https://lakeshoresf.com/wp-content/uploads/2022/12/How-to-Schedule-Your-Weekly-Workout-Routine-scaled.jpg"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
