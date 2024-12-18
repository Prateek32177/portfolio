import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Theme backgrounds
    {
      pattern:
        /(bg|from|via|to)-(emerald|yellow|rose|pink|blue|orange|green)-(100|200|300|400|500|600)/,
      variants: ["hover"],
    },
    // Theme opacities
    {
      pattern:
        /(bg|from|via|to)-(emerald|yellow|rose|pink|blue|orange|green)-(100|200|300|400|500|600)\/[0-9]+/,
    },
    // Text colors
    {
      pattern:
        /text-(emerald|yellow|rose|pink|blue|orange|green)-(100|200|300|400|500|600|900|950)/,
		variants:["hover"]
    },
    // Base gradients
    "bg-gradient-to-br",

    // From colors with opacity
    {
      pattern:
        /from-(emerald|yellow|rose|pink|blue|orange|green|blue)-[0-9]{3}\/[0-9]{2}/,
    },

    // To colors with opacity
    {
      pattern:
        /to-(emerald|yellow|rose|pink|blue|orange|green|blue)-[0-9]{3}\/[0-9]{2}/,
    },

    // Border patterns with variants
    {
      pattern: /border-(emerald|sky|yellow|rose|pink|blue)-[0-9]{3}\/[0-9]{2}/,
      variants: ["hover"],
    },

    // If you're also using base borders without opacity
    {
      pattern: /border-(emerald|sky|yellow|rose|pink|blue)-[0-9]{3}/,
      variants: ["hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
