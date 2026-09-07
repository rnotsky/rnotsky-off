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

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      console.error("RNOTSKY AI error:", error);

      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, something went wrong while connecting to RNOTSKY AI. Please try again.",
      };

      setMessages((current) => [...current, errorMessage]);
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
        min-w-0
        overflow-hidden
        px-0
        pb-20
        sm:px-0
        sm:pb-28
        lg:pb-32
      "
    >
      {/* Purple atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[500px]
          w-[850px]
          max-w-none
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.06]
          blur-[180px]
        "
      />

      {/* Chat container */}
      <div
        className="
          relative
          w-full
          min-w-0
          max-w-full
          overflow-hidden
          rounded-[24px]
          border
          border-white/[0.10]
          bg-white/[0.025]
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-3xl
          ring-1
          ring-purple-500/[0.04]
          sm:rounded-[30px]
        "
      >
        {/* Top reflection */}
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

        {/* Inner glass */}
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

        {/* Empty chat */}
        {messages.length === 0 && (
          <div
            className="
              relative
              flex
              min-h-[430px]
              w-full
              min-w-0
              max-w-full
              flex-col
              items-center
              justify-center
              overflow-hidden
              px-4
              py-16
              text-center
              sm:min-h-[480px]
              sm:px-6
            "
          >
            {/* AI Logo */}
            <div className="relative mb-7 shrink-0">
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
                  shrink-0
                  object-contain
                  drop-shadow-[0_0_22px_rgba(168,85,247,0.5)]
                "
              />
            </div>

            <h2
              className="
                max-w-full
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
                w-full
                max-w-[520px]
                px-2
                text-sm
                leading-6
                text-white/35
                sm:text-[15px]
              "
            >
              Ask questions, explore ideas, solve problems or build
              something with RNOTSKY AI.
            </p>

            {/* Suggestions */}
            <div
              className="
                mt-8
                flex
                w-full
                max-w-full
                flex-wrap
                justify-center
                gap-2
              "
            >
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
                    max-w-full
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

        {/* Messages */}
        {messages.length > 0 && (
          <div
            className="
              relative
              min-h-[430px]
              w-full
              min-w-0
              max-w-full
              space-y-8
              overflow-hidden
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
              <div
                className="
                  flex
                  w-full
                  min-w-0
                  items-start
                  gap-3
                "
              >
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
                    min-w-0
                    max-w-[calc(100%-44px)]
                    rounded-[20px]
                    rounded-tl-md
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-4
                    py-4
                    backdrop-blur-xl
                    sm:px-5
                  "
                >
                  <span className="break-words text-xs text-white/30">
                    RNOTSKY AI is thinking...
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input */}
        <div
          className="
            relative
            w-full
            min-w-0
            max-w-full
            border-t
            border-white/[0.07]
            bg-black/[0.18]
            backdrop-blur-2xl
          "
        >
          <AIInput
            onSend={handleSend}
            disabled={loading}
          />

          <p
            className="
              px-3
              pb-3
              text-center
              text-[10px]
              leading-4
              text-white/20
              sm:px-4
            "
          >
            RNOTSKY AI can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </section>
  );
}