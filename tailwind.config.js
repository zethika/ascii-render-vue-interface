module.exports = {
    content: [
        './src/components/**/*.{vue,js,ts}',
        './src/views/**/*.{vue,js,ts}',
        './src/App.vue',
    ],
    theme: {
        extend: {
            colors: {
                mint: {
                    DEFAULT: "var(--mint)",
                },
                purple: {
                    DEFAULT: "var(--purple)",
                    dark: "var(--purple-dark)",
                    darker: "var(--purple-darker)",
                    darkest: "var(--purple-darkest)",
                },
                transparent: "transparent"
            },
            height: {
                header: "var(--header-height)"
            }
        },
    },
    plugins: [],
}