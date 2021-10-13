module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'nav-text': '#9d9ca2',
                'primary-cyan': 'hsl(180, 66%, 49%)',
                'bright-cyan': '#9be3e2',
                'dark-violet': 'hsl(257, 27%, 26%)',
                'secondary-red': 'hsl(0, 87%, 67%)',
                'neutral-gray': 'hsl(0, 0%, 75%)',
                'secondary-gray': '#32303b',
                'grayish-violet': 'hsl(257, 7%, 63%)',
                'very-dark-blue': 'hsl(255, 11%, 22%)',
                'very-dark-violet': 'hsl(260, 8%, 14%)',
            },
            fontFamily: {
                Poppins: ['Poppins'],
            },
            margin: {
                '-33': '-33rem',
                33: '33rem',
            },
            fill: ['hover', 'focus'],
        },
        height: {
            sm: '58rem',
        },
        screens: {
            tablet: '460px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1240px',
            xxl: '1410px',
        },
        padding: {
            sm: '1.8rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}