/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    xs: '375px',
                    sm: '640px',
                    md: '768px',
                    lg: '820px',
                    xl: '1024px',
                    '2xl': '1140px',
                    '3xl': '1140px'
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: '#ffbe33',
                secondary: '#222831',
                danger: '#ff0000',
                success: '#0af603'
            },
            backgroundColor: {
                primary: '#ffbe33',
            },
            inLineFlex: {
                bool: true
            },
            fontFamily: {
                dancing: ['Dancing Script', 'cursive'],
                openSans: ['Open Sans', 'sans-serif']
            },

        },
    },
    plugins: [
        function ({ addBase, addComponents, addUtilities, e, prefix, config }) {
            addUtilities({
                '.no-spinner': {
                    '-webkit-appearance': 'none',
                    '-moz-appearance': 'textfield',
                    'appearance': 'none'
                },
                '.no-spinner::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    'margin': 0,
                },
                '.no-spinner::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    'margin': 0,
                },
            })
        }
    ],
};
