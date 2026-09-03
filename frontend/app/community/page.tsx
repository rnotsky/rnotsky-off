import CommunityHero from "@/components/community/CommunityHero";
import CommunityChannels from "@/components/community/CommunityChannels";
import CommunityEvents from "@/components/community/CommunityEvents";
import CommunityJobs from "@/components/community/CommunityJobs";
import CommunityCTA from "@/components/community/CommunityCTA";

export default function CommunityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <CommunityHero />

      <CommunityChannels />

      <CommunityEvents />

      <CommunityJobs />

      <CommunityCTA />
    </main>
  );
}