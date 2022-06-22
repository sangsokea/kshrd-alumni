module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        maven: ["MAVEN", "cursive"]
      },

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      // fontWeight: {
      //   one: 1200,
      // },

      colors: {
        'cbtn1': '#F24C4C',
        'cbtn2': '#FCC43E',
        'cbgp': '#F5F5F6',
        'cfoo': 'rgb(3, 83, 151)',
        'ccon': '#255FAB',
        'cbg': '#FFFFFF',
        'cbgpcon': '#E6EFF8',
        'cth': 'rgba(99, 99, 100, 1)',
        'ch': 'rgba(48, 57, 114, 1)',

        'bg1': '#55D8C1',
        'bg2': '#F47AA6',
        'bg3': '#FEB139',
        'bg4': '#85C88A',
        'bg5': '#6FB2D2',




      },
      fontSize: {
        f34: ['34px', '51px'],
        f14: ['14px', '21px'],
        f36: ['36px', '42px'],
      },
      backgroundImage: {
        

      }
  
    },
 

  },

  plugins: [],
}
