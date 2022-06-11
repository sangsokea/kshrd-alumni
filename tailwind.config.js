module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        maven: ["MAVEN", "cursive"]
      },
      colors: {
        'regal-blue': '#2395F1;',
        'regal-bg' : '#8CC0DE',
        'regal-greey' : '#D9D9D9',
        'regal-gg' : '#F3F4F6',
        'regal-rgb' : 'rgba(140, 192, 222, 0.65)',
      },
      fontSize: {
        'tiny': '7px',
        'tinys': '3px',
      },
      width: {
        '222': '595px',
        '128': '236px',
        '555' : '360px',
        '84' : '84px',
        '87' : '87px',
        '126' : '126px',
        
      },
      height: {
        '69' : '69px',
        '100' : '100px',
        '124' : '124px',
      },
      minHeight: {
        '1/22': '842px',
      },
      minWidth: {
        '1/22':  '595px',
      }
    },
  },
  plugins: [],
}
