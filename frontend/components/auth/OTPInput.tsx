"use client";

import { useEffect, useRef } from "react";

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OTPInput({
  value,
  onChange,
}: OTPInputProps) {
  const inputRefs =
    useRef<Array<HTMLInputElement | null>>(
      []
    );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const digits = Array.from(
    { length: 6 },
    (_, index) => value[index] || ""
  );

  const handleChange = (
    index: number,
    inputValue: string
  ) => {
    const digit = inputValue
      .replace(/\D/g, "")
      .slice(-1);

    const next = [...digits];

    next[index] = digit;

    onChange(next.join(""));

    if (
      digit &&
      index < 5
    ) {
      inputRefs.current[
        index + 1
      ]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ]?.focus();
    }

    if (
      e.key === "ArrowLeft" &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ]?.focus();
    }

    if (
      e.key === "ArrowRight" &&
      index < 5
    ) {
      inputRefs.current[
        index + 1
      ]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    onChange(pasted);

    const focusIndex = Math.min(
      pasted.length,
      5
    );

    inputRefs.current[
      focusIndex
    ]?.focus();
  };

  return (
    <div
      className="flex gap-2"
      onPaste={handlePaste}
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] =
              element;
          }}
          value={digit}
          onChange={(e) =>
            handleChange(
              index,
              e.target.value
            )
          }
          onKeyDown={(e) =>
            handleKeyDown(index, e)
          }
          inputMode="numeric"
          autoComplete={
            index === 0
              ? "one-time-code"
              : "off"
          }
          maxLength={1}
          className="
            h-[52px]
            min-w-0
            flex-1
            rounded-[13px]
            border
            border-white/[0.10]
            bg-white/[0.045]
            text-center
            text-[20px]
            font-semibold
            text-white
            outline-none
            transition-all
            focus:border-purple-500/60
            focus:bg-white/[0.07]
            focus:ring-2
            focus:ring-purple-500/10
          "
        />
      ))}
    </div>
  );
}