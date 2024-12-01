/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'paper': '1 / 1.414',
        'paperx': '1.414 / 1',
      },
    },
  },
  plugins: [],
  resolve: {
    alias: {
      'sortablejs': 'sortablejs/modular/sortable.core.esm.js'
    }
  }
}

