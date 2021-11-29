const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
module.exports = {
    // mode: 'jit', // jit is very broken atm
    important: true,
    // Active dark mode on class basis
    darkMode: "class",
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
        // These options are passed through directly to PurgeCSS
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            red: colors.red,
            yellow: colors.amber,
            green: colors.green,
            gray: colors.gray,
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            scale: {
                100: "1",
                101: "1.01",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
    future: {
        purgeLayersByDefault: true,
    },
};
