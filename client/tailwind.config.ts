/* tailwind.config.js (add this if not already) */
import scrollbarHide from "tailwind-scrollbar-hide";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [scrollbarHide],
};

export default config;
