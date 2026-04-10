import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prateek Jain | Design Engineer & Open Source Maintainer",
  description: "I help design engineers and founders build scalable, high-performance products. Creator of Tern, a universal webhook verification SDK used in production by teams worldwide.",
  openGraph: {
    title: "Prateek Jain | Design Engineer",
    description: "Design Engineer & Open Source Maintainer",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.variable} antialiased`}>
        {/* Dark background */}
        <div className="fixed inset-0 bg-[#0f0f0f] -z-50" />

        {/* Subtle noise texture */}
        <div className="fixed inset-0 -z-40 opacity-20">
          <svg className="absolute inset-0 w-full h-full">
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.1" />
              </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
