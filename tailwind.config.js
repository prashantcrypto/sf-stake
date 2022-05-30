module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
    './rental-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent:'transparent',
      current:'currentColor',
      'white':'#ffffff',
      'black':'#000000',
      
      'lightTan':'#DAD7CD',
      'lightTan-50':'#f7f2e5',
      'lightTan-100':'#dcd4c4',
      'lightTan-200':'#c3bdae',
      'lightTan-300':'#aba599',
      'darkTan':'#CEC2A4',
      'lightGreen':'#979E76',

      'yellowGreen':'#A3B18A',
      
      'lightForestGreen':'#9aa7a0',
      'forestGreen' : '#344E41',
      'forestGreen-50':'#85958d',
      'forestGreen-500':'#1a2721',

      'mintGreen' : '#CAD2C5',
      'mintGreen-50':'#b6bdb1',
      'mintGreen-100':'#a2a89e',
      'grassGreen':'#588157',

      'gray-900':'#111827',
      'gray-800':'#1f2937',
      'gray-700':'#374151',
      'gray-600':'#4b5563',
      'gray-500':'#6b7280',
      'gray-400':'#9ca3af',
      'gray-300':'#d1d5db',
      'gray-200':'#e5e7eb',
      'gray-100':'#f3f4f6',
      'gray-50':'#f8fafc',
    },
  },
  plugins: [],
}
