"use client";

import Image from "next/image";
import {
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

import GoogleButton from "./GoogleButton";
import AuthDivider from "./AuthDivider";

interface LoginFormProps {
  onSwitchRegister: () => void;
}

export default function LoginForm({
  onSwitchRegister,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    setLoading(true);

    // TODO:
    // Connect POST /auth/login here.

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setLoading(false);
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
            priority
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="mb-6 text-center">
        <h1
          className="
            text-[25px]
            font-semibold
            tracking-[-0.03em]
            text-white
          "
        >
          Welcome back
        </h1>

        <p className="mt-2 text-[13px] leading-5 text-white/40">
          Sign in to continue to RNOTSKY.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-[12px] font-medium text-white/55">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            className="
              h-[50px]
              w-full
              rounded-[14px]
              border
              border-white/[0.10]
              bg-white/[0.045]
              px-4
              text-[13px]
              text-white
              outline-none
              placeholder:text-white/20
              transition-all
              focus:border-purple-500/50
              focus:bg-white/[0.065]
              focus:ring-2
              focus:ring-purple-500/10
            "
          />
        </div>

        {/* PASSWORD */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[12px] font-medium text-white/55">
              Password
            </label>

            <button
              type="button"
              className="
                text-[11px]
                font-medium
                text-purple-400
                transition
                hover:text-purple-300
              "
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              autoComplete="current-password"
              className="
                h-[50px]
                w-full
                rounded-[14px]
                border
                border-white/[0.10]
                bg-white/[0.045]
                px-4
                pr-12
                text-[13px]
                text-white
                outline-none
                placeholder:text-white/20
                transition-all
                focus:border-purple-500/50
                focus:bg-white/[0.065]
                focus:ring-2
                focus:ring-purple-500/10
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-white/30
                transition
                hover:text-white/70
              "
            >
              {showPassword ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>
        </div>

        {/* LOGIN */}
        <button
          type="submit"
          disabled={
            !email.trim() ||
            !password.trim() ||
            loading
          }
          className="
            group
            flex
            h-[50px]
            w-full
            items-center
            justify-center
            gap-2
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
            ? "Signing in..."
            : "Sign in"}

          {!loading && (
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
      </form>

      {/* DIVIDER */}
      <div className="my-6">
        <AuthDivider />
      </div>

      {/* GOOGLE */}
      <GoogleButton />

      {/* REGISTER */}
      <div className="mt-6 text-center">
        <span className="text-[12px] text-white/35">
          Don't have an account?{" "}
        </span>

        <button
          type="button"
          onClick={onSwitchRegister}
          className="
            text-[12px]
            font-medium
            text-purple-400
            transition
            hover:text-purple-300
          "
        >
          Create account
        </button>
      </div>
    </div>
  );
}