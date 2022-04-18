module.exports = {
    content: [
        './src/components/**/*.{vue,js,ts}',
        './src/views/**/*.{vue,js,ts}',
        './src/App.vue',
    ],
    theme: {
        extend: {
            spacing: {
                'header': '55px'
            },
            colors: {
                blue: {
                    bg: "var(--bg)",
                    DEFAULT: "var(--blue)",
                    lighter: "var(--blue-lighter)",
                    lightest: "var(--blue-lightest)",
                    darker: "var(--blue-darker)",
                    darkest: "var(--blue-darkest)",
                },
                grey: {
                    DEFAULT: "var(--grey)",
                    lightest: "var(--grey-lightest)",
                    lighter: "var(--grey-lighter)",
                    darker: "var(--grey-darker)",
                },
                green: {
                    DEFAULT: "var(--green)",
                    lighter: "var(--green-lighter)",
                    lightest: "var(--green-lightest)",
                    darker: "var(--green-darker)",
                    darkest: "var(--green-darkest)",
                },
                red: {
                    DEFAULT: "var(--red)",
                    lightest: "var(--red-lightest)",
                    lighter: "var(--red-lighter)",
                },
                black: {
                    DEFAULT: 'black',
                    '20p': 'var(--black-20p)'
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