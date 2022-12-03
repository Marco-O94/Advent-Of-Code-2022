/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./index.html",
  "./src/**/*.{html,vue,js,ts,jsx,tsx}",
 "./node_modules/flowbite/**/*.js",
 './node_modules/tw-elements/dist/js/**/*.js',
 "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
