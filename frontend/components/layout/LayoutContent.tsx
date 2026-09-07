"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageGlow from "@/components/ui/PageGlow";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isCEOPage = pathname === "/ceo";

  return (
    <>
      {!isCEOPage && <PageGlow />}

      <div className="relative z-10">
        {!isCEOPage && <Navbar />}

        <main className="min-h-screen">
          {children}
        </main>

        {!isCEOPage && <Footer />}
      </div>
    </>
  );
}