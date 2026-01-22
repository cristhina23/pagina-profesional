import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Button({
    className,
    variant = "primary",
    size = "md",
    asChild = false,
    children,
    ...props
}) {
    const variants = {
        primary: "bg-primary text-black hover:opacity-90 hover:scale-105",
        outline: "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/5",
        ghost: "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-gray-300",
        link: "text-slate-400 dark:text-white/40 hover:text-white p-0 uppercase tracking-widest font-mono text-[10px]"
    };

    const sizes = {
        sm: "px-4 py-2 text-[10px]",
        md: "px-8 py-4 text-xs",
        icon: "p-2 aspect-square",
        none: ""
    };

    const baseStyles = "font-display uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 rounded-md"; // Added rounded-md for futuristic look

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}

