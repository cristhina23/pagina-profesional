import { cn } from "../../lib/utils";

export function Section({ className, children, ...props }) {
    return (
        <section
            className={cn("relative px-6 py-14 overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}

export function Container({ className, children, ...props }) {
    return (
        <div
            className={cn("max-w-screen-2xl mx-auto z-10 relative", className)}
            {...props}
        >
            {children}
        </div>
    );
}
