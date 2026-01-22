import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function Card({ className, children, border = "default", ...props }) {
    const borders = {
        default: "border border-white/5 bg-white/5 backdrop-blur-md",
        primary: "border border-primary/50 shadow-[0_0_30px_rgba(217,255,0,0.1)] bg-white/5 backdrop-blur-md",
        left: "border-l-4 border-primary bg-white/5 backdrop-blur-md"
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-8 relative overflow-hidden transition-all duration-300",
                borders[border],
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
