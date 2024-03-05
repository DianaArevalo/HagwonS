/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            primary: 'Aldrich',
            secondary: 'Montserrat Alternates',
            tertiary: 'Mooli',
            fourty: 'sans-serif'
        },


        extend: {
            colors: {
                primary: '#050505',
                accent: '#4a044e',
                wallpaper: '#678779ff',
                wallpaper2: '#e7d3afff'
            },

        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1440px',
        },
    },
    plugins: [],
}