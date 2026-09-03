import AIHero from "@/components/ai/AIHero";
import AIChat from "@/components/ai/AIChat";

export default function AIPage() {
  return (
    <main className="min-h-screen overflow-visible bg-black text-white">
      <AIHero />
      <AIChat />
    </main>
  );
}