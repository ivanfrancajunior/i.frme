/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'condensed': ['Oswald', 'sans-serif'],
                'sans': ['Oswald', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                black: '#000000',
                white: '#FFFFFF',
                brand: {
                    purple: '#3c2376',
                    orange: '#ff7e12',
                    red: '#f9222a',
                }
            }
        }
    },
    plugins: [],
}
