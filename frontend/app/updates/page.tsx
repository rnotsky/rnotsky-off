import UpdatesHero from "@/components/updates/UpdatesHero";
import FeaturedUpdate from "@/components/updates/FeaturedUpdate";
import UpdatesGrid from "@/components/updates/UpdatesGrid";
import { updates } from "@/lib/updates";

export default function UpdatesPage() {
  const featuredUpdate = updates.find((update) => update.featured);

  const latestUpdates = updates.filter(
    (update) => update.slug !== featuredUpdate?.slug
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <UpdatesHero />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-10 xl:px-12">
        {featuredUpdate && (
          <FeaturedUpdate update={featuredUpdate} />
        )}

        <UpdatesGrid updates={latestUpdates} />
      </section>
    </main>
  );
}