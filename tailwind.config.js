/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D9FF00", // Lime Green accent
                neon: {
                    cyan: "#00F0FF",
                    purple: "#FF003C",
                },
                "background-light": "#F8F8F8",
                "background-dark": "#050505", // Deeper black
                "card-dark": "#0F0F0F",
            },
            fontFamily: {
                display: ["Archivo Black", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["Space Grotesk", "monospace"],
            },
            borderRadius: {
                DEFAULT: "2px", // Sharper edges for futuristic look
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
            }
        },
    },
    plugins: [
        import('@tailwindcss/forms'),
        import('@tailwindcss/typography'),
    ],
}
