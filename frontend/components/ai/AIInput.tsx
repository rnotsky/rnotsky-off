"use client";

import {
  FormEvent,
  KeyboardEvent,
  useState,
} from "react";

import { ArrowUp } from "lucide-react";

type AIInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

export default function AIInput({
  onSend,
  disabled = false,
}: AIInputProps) {
  const [value, setValue] = useState("");

  function submitMessage() {
    const message = value.trim();

    if (!message || disabled) {
      return;
    }

    onSend(message);
    setValue("");
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    submitMessage();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      submitMessage();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border-t
        border-white/[0.06]
        p-4
        sm:p-5
      "
    >
      <div
        className="
          flex
          min-h-[60px]
          items-center
          gap-3
          rounded-2xl
          border
          border-white/[0.08]
          bg-black/40
          px-4
          transition-all
          duration-300
          focus-within:border-purple-400/[0.25]
          focus-within:bg-white/[0.025]
          focus-within:shadow-[0_0_45px_rgba(168,85,247,0.06)]
        "
      >
        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={disabled}
          type="text"
          autoComplete="off"
          placeholder="Ask RNOTSKY AI..."
          aria-label="Message RNOTSKY AI"
          className="
            min-w-0
            flex-1
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-white/20
            disabled:cursor-not-allowed
          "
        />

        <button
          type="submit"
          disabled={!value.trim() || disabled}
          aria-label="Send message"
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-purple-400/[0.1]
            bg-purple-500/[0.08]
            text-purple-300
            transition-all
            duration-300
            hover:border-purple-400/[0.2]
            hover:bg-purple-500/[0.16]
            hover:text-purple-200
            disabled:cursor-not-allowed
            disabled:opacity-20
          "
        >
          {disabled ? (
            <span
              className="
                h-4
                w-4
                animate-spin
                rounded-full
                border-2
                border-purple-300/20
                border-t-purple-300
              "
            />
          ) : (
            <ArrowUp className="h-4 w-4" />
          )}
        </button>
      </div>

      <p className="mt-3 text-center text-[10px] text-white/15">
        Press Enter to send
      </p>
    </form>
  );
}