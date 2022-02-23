module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      spacing: {
        '97': '28rem',
        '100': '40rem',
        '101': '9px',
        '102': '6px',
        '103': '8px',
      },
      screens: {
        'sm': '320px',
        'md': '425px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1600px',
      },
      colors: {
        bblue: {
          light: '#0a101e',
          DEFAULT: '#0a101e',
          dark: '#0a101e',
        },
        cblue: {
          light: '#070d1b',
          DEFAULT: '#070d1b',
          dark: '#070d1b',
        },
        dblue: {
          light: '#101624',
          DEFAULT: '#101624',
          dark: '#101624',
        },
        bgray: {
          light: '#232935',
          DEFAULT: '#232935',
          dark: '#232935',
        },
        cgray:{
          light: '#3f4551',
          DEFAULT: '#3f4551',
          dark: '#3f4551',
        },
        byellow: {
          light: '#fec544',
          DEFAULT: '#fec544',
          dark: '#fec544',
        },
      }
    },
  },
  plugins: [],
}
