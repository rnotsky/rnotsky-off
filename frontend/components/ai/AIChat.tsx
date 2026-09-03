"use client";

import { useState } from "react";

import AIInput from "./AIInput";
import AIMessage, { type ChatMessage } from "./AIMessage";

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(content: string) {
    const trimmed = content.trim();

    if (!trimmed || loading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "AI request failed.");
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          data?.message ||
          "I couldn't generate a response right now.",
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("RNOTSKY AI error:", error);

      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, something went wrong while connecting to RNOTSKY AI. Please try again.",
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="
        relative
        mx-auto
        w-full
        max-w-[1100px]
        px-4
        pb-20
        sm:px-6
        sm:pb-28
        lg:px-8
        lg:pb-32
      "
    >
      {/* Soft purple atmosphere behind chat */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[500px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.06]
          blur-[180px]
        "
      />

      {/* Glass Chat Container */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/[0.10]
          bg-white/[0.025]
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-3xl
          ring-1
          ring-purple-500/[0.04]
        "
      >
        {/* Glass top reflection */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white/[0.18]
            to-transparent
          "
        />

        {/* Very subtle inner glass gradient */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.025]
            via-transparent
            to-transparent
          "
        />

        {/* =========================
            EMPTY CHAT
        ========================== */}

        {messages.length === 0 && (
          <div
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              items-center
              justify-center
              px-6
              py-16
              text-center
              sm:min-h-[480px]
            "
          >
            {/* AI Logo */}
            <div className="relative mb-7">
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-7
                  rounded-full
                  bg-purple-500/[0.10]
                  blur-3xl
                "
              />

              <img
                src="/icons/ai.png"
                alt="RNOTSKY AI"
                className="
                  relative
                  h-16
                  w-16
                  object-contain
                  drop-shadow-[0_0_22px_rgba(168,85,247,0.5)]
                "
              />
            </div>

            <h2
              className="
                text-xl
                font-semibold
                tracking-tight
                text-white
                sm:text-2xl
              "
            >
              How can I help you?
            </h2>

            <p
              className="
                mt-3
                max-w-[520px]
                text-sm
                leading-6
                text-white/35
                sm:text-[15px]
              "
            >
              Ask questions, explore ideas, solve problems or
              build something with RNOTSKY AI.
            </p>

            {/* Suggestions */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Explain AI",
                "Help me code",
                "Learn robotics",
                "Build an idea",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSend(suggestion)}
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-2
                    text-xs
                    text-white/40
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-purple-500/30
                    hover:bg-purple-500/[0.07]
                    hover:text-purple-200
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]
                  "
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            MESSAGES
        ========================== */}

        {messages.length > 0 && (
          <div
            className="
              relative
              min-h-[430px]
              space-y-8
              px-4
              py-7
              sm:min-h-[480px]
              sm:px-8
              sm:py-9
              lg:px-10
            "
          >
            {messages.map((message) => (
              <AIMessage
                key={message.id}
                message={message}
              />
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex items-start gap-3">
                <img
                  src="/icons/ai.png"
                  alt="RNOTSKY AI"
                  className="
                    mt-1
                    h-8
                    w-8
                    shrink-0
                    object-contain
                    opacity-80
                    drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]
                  "
                />

                <div
                  className="
                    rounded-[20px]
                    rounded-tl-md
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-5
                    py-4
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-white/30">
                      RNOTSKY AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================
            INPUT
        ========================== */}

        <div
          className="
            relative
            border-t
            border-white/[0.07]
            bg-black/[0.18]
            p-3
            backdrop-blur-2xl
            sm:p-4
          "
        >
          <AIInput
            onSend={handleSend}
            disabled={loading}
          />

          <p
            className="
              mt-2
              text-center
              text-[10px]
              text-white/20
            "
          >
            RNOTSKY AI can make mistakes. Verify important
            information.
          </p>
        </div>
      </div>
    </section>
  );
}