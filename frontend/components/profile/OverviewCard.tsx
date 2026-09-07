import type { LucideIcon } from "lucide-react";

interface OverviewCardProps {
  label: string;
  value: string;
  description?: string;
  icon: LucideIcon;
}

export default function OverviewCard({
  label,
  value,
  description,
  icon: Icon,
}: OverviewCardProps) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/20 hover:bg-white/[0.035]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-white/40">
            {label}
          </p>

          <p className="mt-2 truncate text-2xl font-semibold tracking-tight text-white">
            {value}
          </p>

          {description && (
            <p className="mt-1 text-xs text-white/30">
              {description}
            </p>
          )}
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/15 bg-purple-500/10">
          <Icon
            size={18}
            strokeWidth={1.8}
            className="text-purple-400"
          />
        </div>
      </div>
    </div>
  );
}