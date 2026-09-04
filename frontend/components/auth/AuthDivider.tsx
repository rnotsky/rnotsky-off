export default function AuthDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-white/[0.08]" />

      <span
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white/20
        "
      >
        OR
      </span>

      <div className="h-px flex-1 bg-white/[0.08]" />
    </div>
  );
}