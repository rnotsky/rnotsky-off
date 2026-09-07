"use client";

import { Pencil, ShieldCheck } from "lucide-react";

interface ProfileHeroProps {
  name?: string;
  email?: string;
  userCode?: string;
  avatarUrl?: string | null;
  isVerified?: boolean;
  accountStatus?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "BANNED";
  onEdit?: () => void;
}

export default function ProfileHero({
  name = "RNOTSKY User",
  email = "user@example.com",
  userCode = "RNO-XXXXXX",
  avatarUrl = null,
  isVerified = true,
  accountStatus = "ACTIVE",
  onEdit,
}: ProfileHeroProps) {
  const isActive = accountStatus === "ACTIVE";

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025]">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-5">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-500/10 text-2xl font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,0.12)] sm:h-24 sm:w-24">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              ) : (
                name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              )}
            </div>

            {/* Online indicator */}
            {isActive && (
              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-[#080808] bg-purple-500" />
            )}
          </div>

          {/* User information */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {name}
              </h1>

              {isVerified && (
                <ShieldCheck
                  size={19}
                  className="shrink-0 text-purple-400"
                  aria-label="Verified account"
                />
              )}
            </div>

            <p className="mt-1 truncate text-sm text-white/45">{email}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-white/60">
                {userCode}
              </span>

              <span
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs ${
                  isActive
                    ? "border border-purple-500/20 bg-purple-500/10 text-purple-300"
                    : "border border-white/[0.08] bg-white/[0.035] text-white/45"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-purple-400" : "bg-white/30"
                  }`}
                />
                {accountStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Edit button */}
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-medium text-white transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-200"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>
    </section>
  );
}