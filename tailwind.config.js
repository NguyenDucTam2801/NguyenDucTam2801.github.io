// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: "#D3E97A",
            },
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
            }
        },
    },
    plugins: [],
}