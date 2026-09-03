"use client";

import Image from "next/image";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type AIMessageProps = {
  message: ChatMessage;
};

export default function AIMessage({ message }: AIMessageProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex w-full justify-end">
        <div
          className="
            max-w-[85%]
            rounded-[22px]
            rounded-br-md
            border border-purple-500/[0.16]
            bg-purple-500/[0.08]
            px-4
            py-3
            text-sm
            leading-7
            text-white
            shadow-[0_10px_40px_rgba(124,58,237,0.06)]
            sm:max-w-[75%]
          "
        >
          <p className="whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-start gap-3">
      {/* RNOTSKY AI Logo */}
      <div className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center">
        {/* Soft purple glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-purple-500/[0.16]
            blur-md
          "
        />

        <Image
          src="/icons/ai.png"
          alt="RNOTSKY AI"
          width={36}
          height={36}
          className="
            relative
            h-8
            w-8
            object-contain
            drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
          "
        />
      </div>

      {/* Assistant message */}
      <div className="min-w-0 max-w-[90%]">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
            RNOTSKY AI
          </span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="text-[10px] text-white/25">
            AI
          </span>
        </div>

        <div
          className="
            rounded-[20px]
            rounded-tl-md
            border border-white/[0.07]
            bg-white/[0.025]
            px-4
            py-3.5
            shadow-[0_10px_40px_rgba(0,0,0,0.12)]
          "
        >
          <p
            className="
              whitespace-pre-wrap
              break-words
              text-sm
              leading-7
              text-gray-300
            "
          >
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}