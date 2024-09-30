import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors(utils) {
        return {
          primary: {
            ...utils.colors.emerald,
          },
          secondary: {
            ...utils.colors.gray,
          },
        };
      },
    },
  },
  plugins: [],
};
export default config;
