import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import LayoutContent from "@/components/layout/LayoutContent";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rnotsky.com"),

  title: {
    default: "Rnotsky — Building Tomorrow's Technology",
    template: "%s | Rnotsky",
  },

  description:
    "Rnotsky builds AI, software, computer vision, robotics, and next-generation technology.",

  alternates: {
    canonical: "https://rnotsky.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://rnotsky.com",
    siteName: "Rnotsky",
    title: "Rnotsky — Building Tomorrow's Technology",
    description:
      "Rnotsky builds AI, software, computer vision, robotics, and next-generation technology.",
  },

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