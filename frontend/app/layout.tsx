import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageGlow from "@/components/ui/PageGlow";

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
        {/* Global Purple Glow */}
        <PageGlow />

        {/* Website Content */}
        <div className="relative z-10">
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}