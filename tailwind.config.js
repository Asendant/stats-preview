/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary
                'very-dark-blue': 'hsl(233, 49%, 7%)',
                'dark-desaturated-blue': 'hsl(246, 38%, 16%)',
                'soft-violet': 'hsl(277, 64%, 61%)',

                // Neutral
                'white': 'hsl(0, 0%, 100%)',
                'slightly-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
                'very-transparent-white': 'hsla(0, 0%, 100%, 0.6)',
            }
        }
    },
    plugins: [],
}