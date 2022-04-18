module.exports = {
    content: [
        './src/components/**/*.{vue,js,ts}',
        './src/views/**/*.{vue,js,ts}',
        './src/App.vue',
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent"
            },
            height: {
                header: "var(--header-height)"
            }
        },
    },
    plugins: [],
}