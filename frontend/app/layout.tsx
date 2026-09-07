import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import LayoutContent from "@/components/layout/LayoutContent";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Rnotsky",
  description: "Building Tomorrow's Technology",

  icons: {
    icon: "/icons/ai.png",
    shortcut: "/icons/ai.png",
    apple: "/icons/ai.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        className="
          relative
          min-h-screen
          bg-black
          font-sans
          text-white
          antialiased
        "
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}