import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";


export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="sticky top-0 z-50 bg-background-dark  backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-primary/5 px-6 py-4"
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                <a href="/" className="group flex items-center">
                    <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            textShadow: ["0 0 10px #D9FF00", "0 0 20px #D9FF00", "0 0 10px #D9FF00"]
                        }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-primary fill-current text-3xl">
                            bolt
                        </span>
                    </motion.div>
                    <span className="font-display text-xl uppercase tracking-tighter italic text-white group cursor-pointer">
                        The Fit Club <span className="text-primary hidden group-hover:inline-block transition-opacity duration-300">.</span>
                    </span>
                </div>
                </a>
                
                <div className="flex items-center gap-4">
                    {/* <ThemeToggle /> */}
                    <Button size="sm" className="rounded-none clip-path-slant bg-primary text-black hover:bg-white transition-colors duration-300">
                        Start Training
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
