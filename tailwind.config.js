module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    borderWidth: {
      '8': '8px',
      '24': '24px'
    },
    extend: {
      backgroundImage: {
        'wood': "url('assets/wood-min.jpg')",
        'peblet-light': "url('assets/bg.jpg')",
        'peblet-dark': "url('assets/bg-dark.jpg')"
      }
    },
  },
  plugins: [],
}
