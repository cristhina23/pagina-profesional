import { cn } from "../../lib/utils";

export function SectionHeading({ className, children, ...props }) {
    return (
        <h2 className={cn("font-display text-4xl italic-heading mb-6", className)} {...props}>
            {children}
        </h2>
    );
}

export function SectionSubheading({ className, children, ...props }) {
    return (
        <span className={cn("text-[10px] font-mono tracking-[0.3em] text-primary uppercase block mb-4", className)} {...props}>
            {children}
        </span>
    );
}

export function Text({ className, variant = "body", children, ...props }) {
    const variants = {
        body: "text-slate-600 dark:text-white/60 text-sm leading-relaxed",
        mono: "text-[10px] font-mono text-slate-400 dark:text-white/30 uppercase",
        display: "font-display italic"
    };

    return (
        <p className={cn(variants[variant], className)} {...props}>
            {children}
        </p>
    );
}
