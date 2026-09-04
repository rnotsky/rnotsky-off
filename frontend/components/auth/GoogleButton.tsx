"use client";

interface GoogleButtonProps {
  onClick?: () => void;
}

export default function GoogleButton({
  onClick,
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        h-[50px]
        w-full
        items-center
        justify-center
        gap-3
        rounded-[14px]
        border
        border-white/[0.12]
        bg-white
        text-[13px]
        font-medium
        text-[#202124]
        shadow-[0_4px_20px_rgba(0,0,0,0.18)]
        transition-all
        hover:bg-[#f8f8f8]
        hover:shadow-[0_7px_28px_rgba(0,0,0,0.25)]
        active:scale-[0.99]
      "
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M21.35 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.22Z"
        />

        <path
          fill="#34A853"
          d="M12 21.76c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.76Z"
        />

        <path
          fill="#FBBC05"
          d="M6.53 13.84a5.86 5.86 0 0 1 0-3.68V7.63H3.29a9.75 9.75 0 0 0 0 8.74l3.24-2.53Z"
        />

        <path
          fill="#EA4335"
          d="M12 6.13c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.22 14.63 2.24 12 2.24a9.74 9.74 0 0 0-8.71 5.39l3.24 2.53C7.3 7.85 9.46 6.13 12 6.13Z"
        />
      </svg>

      <span>
        Continue with Google
      </span>
    </button>
  );
}