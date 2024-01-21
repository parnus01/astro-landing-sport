const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                'purple': '#603EBE',
                'purple-200': '#090C35',
                'grey': '#E7E7E7'
            },
        },
        screens: {
            'sm': '0',
            'md': '768px',
            'lg': '1920px',
        },
    },
};
