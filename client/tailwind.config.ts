// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-scrollbar-hide")],
};
