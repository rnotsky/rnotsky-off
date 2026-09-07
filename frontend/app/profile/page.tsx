"use client";

import { useState } from "react";

import ProfileHero from "@/components/profile/ProfileHero";
import ProfileNavigation, {
  ProfileSection,
} from "@/components/profile/ProfileNavigation";
import ProfileOverview from "@/components/profile/ProfileOverview";

export default function ProfilePage() {
  const [activeSection, setActiveSection] =
    useState<ProfileSection>("overview");

  const user = {
    name: "RNOTSKY User",
    email: "user@example.com",
    userCode: "RNO-XXXXXX",
    avatarUrl: null,
    isVerified: true,
    accountStatus: "ACTIVE" as const,
    memberSince: "September 2026",
    orderCount: 0,
    wishlistCount: 0,
    subscription: "Free",
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return (
          <ProfileOverview
            name={user.name}
            email={user.email}
            userCode={user.userCode}
            memberSince={user.memberSince}
            accountStatus={user.accountStatus}
            emailVerified={user.isVerified}
            orderCount={user.orderCount}
            wishlistCount={user.wishlistCount}
            subscription={user.subscription}
          />
        );

      case "account":
        return <Placeholder title="Account" />;

      case "security":
        return <Placeholder title="Security" />;

      case "orders":
        return <Placeholder title="Orders" />;

      case "wishlist":
        return <Placeholder title="Wishlist" />;

      case "subscription":
        return <Placeholder title="Subscription" />;

      case "downloads":
        return <Placeholder title="Downloads" />;

      case "activity":
        return <Placeholder title="Activity" />;

      case "settings":
        return <Placeholder title="Settings" />;

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] px-4 pb-16 pt-24 text-white sm:px-6 lg:px-8">
      {/* Page glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-purple-700/[0.08] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-400">
            MY RNOTSKY
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Account Center
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-white/35">
            Manage your personal information, security, products, and account
            activity.
          </p>
        </div>

        {/* Hero */}
        <ProfileHero
          name={user.name}
          email={user.email}
          userCode={user.userCode}
          avatarUrl={user.avatarUrl}
          isVerified={user.isVerified}
          accountStatus={user.accountStatus}
          onEdit={() => setActiveSection("account")}
        />

        {/* Navigation */}
        <div className="mt-6">
          <ProfileNavigation
            activeSection={activeSection}
            onChange={setActiveSection}
          />
        </div>

        {/* Content */}
        <div className="mt-6">{renderSection()}</div>
      </div>
    </main>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <section className="flex min-h-80 items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/15 bg-purple-500/10">
          <div className="h-2 w-2 rounded-full bg-purple-400" />
        </div>

        <h2 className="mt-4 text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm text-white/35">
          This section will be built next.
        </p>
      </div>
    </section>
  );
}