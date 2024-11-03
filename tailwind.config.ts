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
        /(bg|bg-gradient-to-br|from|via|to)-(emerald|sky|yellow|rose|pink)-(100|200|300|400|500|600)/,
      variants: ["hover"],
    },
    // Theme opacities
    {
      pattern:
        /(bg|bg-gradient-to-br|from|via|to)-(emerald|sky|yellow|rose|pink)-(100|200|300|400|500|600)\/[0-9]+/,
    },
    // Text colors
    {
      pattern:
        /text-(emerald|sky|yellow|rose|pink)-(100|200|300|400|500|600|900|950)/,
    },
    // Borders
    {
      pattern:
        /border-(emerald|sky|yellow|rose|pink)-(100|200|300|400|500|600|900|950)/,
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
