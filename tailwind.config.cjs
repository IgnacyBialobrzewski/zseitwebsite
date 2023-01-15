/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('$lib/assets/hero_blur.png')"
      }
    }
  },
  plugins: []
};