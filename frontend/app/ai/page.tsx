import AIHero from "@/components/ai/AIHero";
import AIChat from "@/components/ai/AIChat";

export default function AIPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        max-w-[100vw]
        overflow-x-clip
        overflow-y-visible
        bg-black
        text-white
      "
    >
      <AIHero />
      <AIChat />
    </main>
  );
}