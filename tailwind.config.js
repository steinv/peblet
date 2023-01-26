module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '24': '24px'
      },
      backgroundImage: {
        'wood': "url('assets/wood-min.jpg')",
        'peblet-light': "url('assets/bg.jpg')",
        'peblet-dark': "url('assets/bg-dark.jpg')"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
