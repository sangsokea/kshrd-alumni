module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg}",],
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
        'regal-blue_hrd' : '#072058',
        'regal-color_hrd': '#29355A',
      },
      fontSize: {
        'tiny': '9px',
        'tinys': '11px',
      },
      width: {
        '222': '595px',
        '128': '236px',
        '555' : '360px',
        '84' : '84px',
        '87' : '87px',
        '126' : '126px',
        '543' : '543px;',
        '87' : '87px',
        '84' : '84px',
        '297.5' : '297.5px',
        
      },
      height: {
        '69' : '69px',
        '100' : '100px',
        '124' : '124px',
        '100'  : '100px',
      },
      minHeight: {
        '1/22': '522px',
        '1/25' : '666px',
      },
      minWidth: {
        '1/22':  '595px',
      }
    },
  },
  plugins: [],
}
