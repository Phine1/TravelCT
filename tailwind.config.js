const { urlAlphabet } = require("nanoid");

module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/back good.jpg')",
      },
      colors: {
        'nav-text': "#414f6b",
      },
      height: {
        'image-height': "93%"
      }
      
    },
  },
  plugins: [],
}
