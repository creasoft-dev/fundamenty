module.exports = {
    purge: {
        enabled: (process.env.ELEVENTY_ENV === 'production'),
        content: [
            './src/**/*.njk',
            './src/**/*.md'
        ]
    },
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '1rem',
            'base': '1.2rem',
            'lg': '1.25rem',
            'xl': '1.4rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem',
            '4xl': '2.25rem',
            '5xl': '4rem',
            '6xl': '5rem',
        },
        extend: {
            colors: {
                primary: {
                    light: '#00c9b6ff',
                    DEFAULT: '#009688',
                    dark: '#006d63',
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
