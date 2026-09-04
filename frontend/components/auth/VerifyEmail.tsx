"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Check,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import OTPInput from "./OTPInput";

interface VerifyEmailProps {
  email: string;
  onVerified: () => void;
  onChangeEmail: () => void;
}

export default function VerifyEmail({
  email,
  onVerified,
  onChangeEmail,
}: VerifyEmailProps) {
  const [otp, setOtp] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [countdown, setCountdown] =
    useState(30);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((current) =>
        current - 1
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [countdown]);

  const maskedEmail = email.replace(
    /^(.{2})(.*)(@.*)$/,
    "$1••••$3"
  );

  const handleVerify = async () => {
    if (otp.length !== 6) return;

    setLoading(true);

    // TODO:
    // Connect POST /auth/verify-email here.

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setLoading(false);

    onVerified();
  };

  const handleResend = async () => {
    if (countdown > 0) return;

    // TODO:
    // Connect POST /auth/resend-otp here.

    setCountdown(30);
  };

  return (
    <div className="w-full">
      {/* AI ICON */}
      <div className="mb-6 flex justify-center">
        <div
          className="
            relative
            flex
            h-[68px]
            w-[68px]
            items-center
            justify-center
            overflow-hidden
            rounded-[20px]
            border
            border-white/[0.12]
            bg-black/50
            shadow-[0_0_45px_rgba(139,92,246,0.16)]
          "
        >
          <Image
            src="/icons/ai.png"
            alt="RNOTSKY AI"
            fill
            sizes="68px"
            className="object-contain p-3"
          />
        </div>
      </div>

      {/* ICON */}
      <div className="mb-4 flex justify-center">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
          "
        >
          <Check
            size={20}
            className="text-purple-400"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="mb-7 text-center">
        <h1
          className="
            text-[25px]
            font-semibold
            tracking-[-0.03em]
            text-white
          "
        >
          Verify your email
        </h1>

        <p className="mt-2 text-[13px] leading-5 text-white/40">
          We sent a 6-digit verification
          code to
        </p>

        <p className="mt-1 text-[12px] font-medium text-white/70">
          {maskedEmail}
        </p>
      </div>

      <div className="space-y-5">
        {/* OTP */}
        <OTPInput
          value={otp}
          onChange={setOtp}
        />

        {/* VERIFY */}
        <button
          type="button"
          onClick={handleVerify}
          disabled={
            otp.length !== 6 ||
            loading
          }
          className="
            h-[50px]
            w-full
            rounded-[14px]
            bg-gradient-to-r
            from-purple-600
            via-violet-600
            to-fuchsia-600
            text-[13px]
            font-semibold
            text-white
            shadow-[0_10px_35px_rgba(124,58,237,0.25)]
            transition-all
            hover:shadow-[0_12px_45px_rgba(124,58,237,0.40)]
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          {loading
            ? "Verifying..."
            : "Verify email"}
        </button>

        {/* RESEND */}
        <div className="text-center">
          {countdown > 0 ? (
            <p className="text-[11px] text-white/30">
              Resend code in{" "}
              <span className="text-white/55">
                {countdown}s
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="
                text-[11px]
                font-medium
                text-purple-400
                transition
                hover:text-purple-300
              "
            >
              Resend verification code
            </button>
          )}
        </div>

        {/* CHANGE EMAIL */}
        <button
          type="button"
          onClick={onChangeEmail}
          className="
            mx-auto
            flex
            items-center
            gap-2
            text-[11px]
            text-white/35
            transition
            hover:text-white/70
          "
        >
          <ArrowLeft size={13} />
          Change email
        </button>
      </div>
    </div>
  );
}