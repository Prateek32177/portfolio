import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prateek Jain — Senior Product Engineer",
  description:
    "I keep making things because I can't quite help it. Senior Product Engineer, founder of Hookflo, and maintainer of Tern.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
