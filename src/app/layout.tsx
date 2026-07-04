import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Ubuntu, Crimson_Text } from "next/font/google";

const manrope = Ubuntu({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prateek's Portfolio",
  description: "Senior Web Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${manrope.variable} ${crimsonText.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-0 h-full pointer-events-none">
          <svg id="noice" className="fixed inset-0 w-full h-full">
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1.26"
                numOctaves="5"
                stitchTiles="stitch"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
              <feComponentTransfer>
                <feFuncR type="linear" slope="1.51"></feFuncR>
                <feFuncG type="linear" slope="1.51"></feFuncG>
                <feFuncB type="linear" slope="1.51"></feFuncB>
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feComponentTransfer>
                <feFuncR type="linear" slope="2.55" intercept="-0.77" />
                <feFuncG type="linear" slope="2.55" intercept="-0.77" />
                <feFuncB type="linear" slope="2.55" intercept="-0.77" />
              </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
            <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
