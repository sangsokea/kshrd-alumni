module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",
    "./flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {

      lineClamp: ['hover'],

      fontFamily: {
        maven: ["MAVEN", "cursive"],
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1023px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },

      // fontWeight: {
      //   one: 1200,
      // },
      borderRadius: {
        "tl-lgs": "42px",
      },
      margin: {
        122: "122px",
        195: "1005px",
        3: "10px",
        25: "90px",
        19: "75px",
        21: "407px",
      },
      colors: {
        "regal-blue": "#2395F1;",
        "regal-bg": "#8CC0DE",
        "regal-greey": "#D9D9D9",
        "regal-gg": "#F3F4F6",
        "regal-rgb": "rgba(140, 192, 222, 0.65)",
        "regal-blue_hrd": "#072058",
        "regal-color_hrd": "#29355A",
        black_c: "#255FAB",
        BDBDBD: "#BDBDBD",
      },
      fontSize: {
        tiny: "9px",
        tinys: "11px",
      },
      width: {
        350: "350px",
        900: "650px",
        1200: "1030px",
        785: "785px",
        222: "595px",
        128: "236px",
        555: "360px",
        84: "84px",
        87: "87px",
        126: "126px",
        543: "543px;",
        87: "87px",
        84: "84px",
        297.5: "297.5px",
        1341: "1285px",
        404: "404px",
        970: "970px",
        1179: "1109px",
        570: "510px",
        423: "360px;",
      },
      height: {
        69: "69px",
        100: "100px",
        124: "124px",
        100: "100px",
        43: "43px",
        270: "270px",
        785: "955px",
      },
      minHeight: {
        "1/22": "522px",
        "1/25": "666px",
        1079: "1079px",
        "1/24": "92px",
        "1/34": "953px",
      },
      minWidth: {
        "1/22": "595px",
      },

      colors: {
        cbtn1: "#F24C4C",
        cbtn2: "#FCC43E",
        cbgp: "#F5F5F6",
        cfoo: "rgb(3, 83, 151)",
        ccon: "#255FAB",
        cbg: "#FFFFFF",
        cbgpcon: "#E6EFF8",
        cth: "rgba(99, 99, 100, 1)",
        ch: "rgba(48, 57, 114, 1)",

        bg1: "#55D8C1",
        bg2: "#F47AA6",
        bg3: "#FEB139",
        bg4: "#85C88A",
        bg5: "#6FB2D2",

        bgText: "rgba(245, 245, 246, 1)",
        bgSkill: "rgba(217, 217, 217, 1)",
      },
      fontSize: {
        f34: ["34px", "51px"],
        f14: ["14px", "21px"],
        f36: ["36px", "42px"],
      },

      backgroundImage: {},
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
