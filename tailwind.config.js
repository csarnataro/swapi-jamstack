const tailwindTipography = require('@tailwindcss/typography');

// tailwind.config.js
module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          hr: {
            marginBottom: '0.5rem',
          },
          color: 'rgb(226, 232, 240)',
          h4: {
            color: 'rgb(226, 232, 240)',
            fontSize: '1.125rem',
            fontWeight: 700,
          },
          h3: {
            color: 'rgb(226, 232, 240)',
            fontSize: '1.5rem',
            fontWeight: 700,
          },
          a: {
            color: 'rgb(226, 232, 240)',
            fontWeight: 700,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: 'rgb(226, 232, 240)',
            },
          },
          pre: {
            backgroundColor: 'rgb(237, 242, 247)',
            color: '#1a202c',
          },
        },
      },
    },
  },
  plugins: [tailwindTipography],
};
