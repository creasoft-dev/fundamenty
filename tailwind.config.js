module.exports = {
    purge: {
        enabled: (process.env.ELEVENTY_ENV === 'production'),
        content: [
            './src/**/*.njk',
            './src/**/*.md'
        ]
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}