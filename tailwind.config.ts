import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-pink":
          "linear-gradient(90deg, rgba(232, 1, 43, 0.1) 0%, rgba(246, 121, 79, 0.1) 100%)",
        hero: "linear-gradient(to right, transparent -8%,#242424, #242424),url('/images/hero-bg.png')",
        "hero-video": "url('/images/hero-video.png')",
        "chat": "url('/images/chat-heading.png')"
      },
      colors: {
        "netural-black": "rgba(68, 71, 80, 1)",
        "dark-pink": "rgba(255, 0, 128, 1)",
        "pinkmain": '#FF0080',
        "primary": '#FF0080'
      },
    },
  },
  plugins: [],
};
export default config;
