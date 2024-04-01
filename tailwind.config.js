/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      baseInput: '#040F1A',
      baseBackground: '#071422',
      baseProfile: '#0B1B2B',
      basePost: '#112131',
      baseBorder: '#1C2F41',
      baseLabel: '#3A536B',
      baseSpan: '#7B96B2',
      baseText: '#AFC2D4',
      baseSubtitle: '#C4D4E3',
      baseTitle: '#E7EDF4',
      blue: '#3294F8',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
