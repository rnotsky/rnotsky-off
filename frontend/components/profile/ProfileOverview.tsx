"use client";

import type { ReactNode } from "react";

import {
  CheckCircle2,
  Clock3,
  Heart,
  Package,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import OverviewCard from "./OverviewCard";

interface ProfileOverviewProps {
  name: string;
  email: string;
  userCode: string;
  memberSince: string;
  accountStatus: string;
  emailVerified: boolean;
  orderCount: number;
  wishlistCount: number;
  subscription: string;
}

export default function ProfileOverview({
  name,
  email,
  userCode,
  memberSince,
  accountStatus,
  emailVerified,
  orderCount,
  wishlistCount,
  subscription,
}: ProfileOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px]" />

        <div className="relative">
          <p className="text-sm font-medium text-purple-400">
            RNOTSKY ACCOUNT CENTER
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Welcome back, {name.split(" ")[0]}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            Manage your RNOTSKY account, security, products, and activity from
            one place.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          label="Account"
          value={accountStatus}
          description="Current account status"
          icon={UserRound}
        />

        <OverviewCard
          label="Orders"
          value={String(orderCount)}
          description="Total orders"
          icon={Package}
        />

        <OverviewCard
          label="Wishlist"
          value={String(wishlistCount)}
          description="Saved products"
          icon={Heart}
        />

        <OverviewCard
          label="Subscription"
          value={subscription}
          description="Current plan"
          icon={ShieldCheck}
        />
      </div>

      {/* Account summary */}
      <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025]">
        <div className="border-b border-white/[0.07] p-6">
          <h3 className="text-lg font-semibold text-white">
            Account Information
          </h3>

          <p className="mt-1 text-sm text-white/35">
            A quick summary of your RNOTSKY account.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
          <InfoItem label="Email" value={email} />

          <InfoItem
            label="Email Verification"
            value={emailVerified ? "Verified" : "Not verified"}
            icon={
              emailVerified ? (
                <CheckCircle2 size={15} className="text-purple-400" />
              ) : (
                <Clock3 size={15} className="text-white/30" />
              )
            }
          />

          <InfoItem
            label="RNOTSKY User Code"
            value={userCode}
            mono
          />

          <InfoItem label="Member Since" value={memberSince} />
        </div>
      </section>

      {/* Recent activity */}
      <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025]">
        <div className="border-b border-white/[0.07] p-6">
          <h3 className="text-lg font-semibold text-white">
            Recent Activity
          </h3>

          <p className="mt-1 text-sm text-white/35">
            Your latest account activity will appear here.
          </p>
        </div>

        <div className="flex min-h-32 items-center justify-center p-6">
          <div className="text-center">
            <ActivityEmptyIcon />

            <p className="mt-3 text-sm text-white/45">
              No recent activity
            </p>

            <p className="mt-1 text-xs text-white/25">
              Your account actions will appear here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
  mono?: boolean;
  icon?: ReactNode;
}

function InfoItem({
  label,
  value,
  mono,
  icon,
}: InfoItemProps) {
  return (
    <div className="bg-[#090909] p-5">
      <p className="text-xs uppercase tracking-wider text-white/25">
        {label}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <p
          className={`break-all text-sm text-white/75 ${
            mono ? "font-mono" : ""
          }`}
        >
          {value}
        </p>

        {icon}
      </div>
    </div>
  );
}

function ActivityEmptyIcon() {
  return (
    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
      <Clock3 size={17} className="text-white/30" />
    </div>
  );
}