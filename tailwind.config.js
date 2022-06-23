/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#a991f7',
                    secondary: '#f6d860',
                    accent: '#37cdbe',
                    neutral: '#3d4451',
                    'base-100': '#ffffff'
                }
            },
            'cupcake'
        ]
    },
    plugins: [require('daisyui')]
}
