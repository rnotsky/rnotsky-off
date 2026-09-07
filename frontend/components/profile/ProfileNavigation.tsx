"use client";

import {
  Activity,
  CreditCard,
  Download,
  LayoutDashboard,
  Package,
  Settings,
  Shield,
  User,
  Heart,
} from "lucide-react";

export type ProfileSection =
  | "overview"
  | "account"
  | "security"
  | "orders"
  | "wishlist"
  | "subscription"
  | "downloads"
  | "activity"
  | "settings";

interface ProfileNavigationProps {
  activeSection: ProfileSection;
  onChange: (section: ProfileSection) => void;
}

const navigation = [
  {
    id: "overview" as const,
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    id: "account" as const,
    label: "Account",
    icon: User,
  },
  {
    id: "security" as const,
    label: "Security",
    icon: Shield,
  },
  {
    id: "orders" as const,
    label: "Orders",
    icon: Package,
  },
  {
    id: "wishlist" as const,
    label: "Wishlist",
    icon: Heart,
  },
  {
    id: "subscription" as const,
    label: "Subscription",
    icon: CreditCard,
  },
  {
    id: "downloads" as const,
    label: "Downloads",
    icon: Download,
  },
  {
    id: "activity" as const,
    label: "Activity",
    icon: Activity,
  },
  {
    id: "settings" as const,
    label: "Settings",
    icon: Settings,
  },
];

export default function ProfileNavigation({
  activeSection,
  onChange,
}: ProfileNavigationProps) {
  return (
    <nav
      aria-label="Profile navigation"
      className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.02]"
    >
      <div className="flex min-w-max p-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`group relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                active
                  ? "bg-purple-500/10 text-purple-300"
                  : "text-white/45 hover:bg-white/[0.04] hover:text-white/80"
              }`}
            >
              <Icon
                size={16}
                className={
                  active
                    ? "text-purple-400"
                    : "text-white/35 group-hover:text-white/60"
                }
              />

              {item.label}

              {active && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-purple-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}