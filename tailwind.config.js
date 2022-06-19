module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg}", './flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
plugins: [
  require('flowbite/plugin')
],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
   
    extend: {
      fontFamily: {
        maven: ["MAVEN", "cursive"]
      },
      borderRadius: {
        'tl-lgs' : '42px',
      },
      margin: {
        '195': '1005px',
        '3' : '10px',
        '25' : '90px',
        '19' : '75px',
        '21' : '407px'

      },
      colors: {
        'regal-blue': '#2395F1;',
        'regal-bg' : '#8CC0DE',
        'regal-greey' : '#D9D9D9',
        'regal-gg' : '#F3F4F6',
        'regal-rgb' : 'rgba(140, 192, 222, 0.65)',
        'regal-blue_hrd' : '#072058',
        'regal-color_hrd': '#29355A',
        'black_c' : '#255FAB',
        'BDBDBD': '#BDBDBD',
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
        '1341' : '1341px',
        '404' : '404px',
        '1112': '1010px',
        '1179' : '1109px',
        '570' : '510px',
        '423' : '360px;'
        
      },
      height: {
        '69' : '69px',
        '100' : '100px',
        '124' : '124px',
        '100'  : '100px',
        '43' : '43px',
        '270' : '270px'
        
      },
      minHeight: {
        '1/22': '522px',
        '1/25' : '666px',
        '1079' : '1079px',
        '1/24' : '92px',
        '1/34' : '953px',
      },
      minWidth: {
        '1/22':  '595px',
      }
    },
  },
  plugins: [],
}
