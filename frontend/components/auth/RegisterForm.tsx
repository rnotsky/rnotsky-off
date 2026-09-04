"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import {
  useMemo,
  useState,
} from "react";

import GoogleButton from "./GoogleButton";
import AuthDivider from "./AuthDivider";

interface RegisterFormProps {
  onRegistered: (email: string) => void;
  onSwitchLogin: () => void;
}

export default function RegisterForm({
  onRegistered,
  onSwitchLogin,
}: RegisterFormProps) {
  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  /*
   * PASSWORD STRENGTH
   */
  const passwordStrength = useMemo(() => {
    if (!password) {
      return {
        score: 0,
        label: "",
        width: "0%",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password))
      score++;

    if (score <= 2) {
      return {
        score,
        label: "Weak",
        width: "25%",
      };
    }

    if (score === 3) {
      return {
        score,
        label: "Fair",
        width: "50%",
      };
    }

    if (score <= 5) {
      return {
        score,
        label: "Strong",
        width: "75%",
      };
    }

    return {
      score,
      label: "Very strong",
      width: "100%",
    };
  }, [password]);

  /*
   * REQUIREMENTS
   */
  const requirements = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const strongPassword =
    requirements.length &&
    requirements.lowercase &&
    requirements.uppercase &&
    requirements.number &&
    requirements.special;

  /*
   * SUBMIT
   */
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const name = fullName.trim();

    if (
      name.length < 2 ||
      name.length > 12 ||
      !email.trim() ||
      !strongPassword ||
      !agreeTerms
    ) {
      return;
    }

    setLoading(true);

    // TODO:
    // Connect POST /auth/register here.

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setLoading(false);

    onRegistered(email.trim());
  };

  const canSubmit =
    fullName.trim().length >= 2 &&
    fullName.trim().length <= 12 &&
    email.trim().length > 3 &&
    strongPassword &&
    agreeTerms;

  /*
   * REQUIREMENT COMPONENT
   */
  const Requirement = ({
    valid,
    children,
  }: {
    valid: boolean;
    children: React.ReactNode;
  }) => (
    <div
      className={`
        flex
        items-center
        gap-2
        text-[10px]
        transition-colors
        ${
          valid
            ? "text-white/65"
            : "text-white/25"
        }
      `}
    >
      <span
        className={`
          flex
          h-3.5
          w-3.5
          shrink-0
          items-center
          justify-center
          rounded-full
          ${
            valid
              ? "bg-purple-500/20 text-purple-400"
              : "bg-white/[0.05] text-white/20"
          }
        `}
      >
        {valid && (
          <Check
            size={9}
            strokeWidth={3}
          />
        )}
      </span>

      {children}
    </div>
  );

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
          Create your account
        </h1>

        <p className="mt-2 text-[13px] leading-5 text-white/40">
          Join RNOTSKY and start building the future.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* NAME */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[12px] font-medium text-white/55">
              Name
            </label>

            <span
              className={`
                text-[10px]
                ${
                  fullName.length >= 12
                    ? "text-purple-400"
                    : "text-white/25"
                }
              `}
            >
              {fullName.length}/12
            </span>
          </div>

          <input
            type="text"
            value={fullName}
            maxLength={12}
            onChange={(e) =>
              setFullName(
                e.target.value
                  .slice(0, 12)
              )
            }
            placeholder="Your name"
            autoComplete="name"
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

          <p className="mt-1.5 text-[10px] text-white/20">
            Maximum 12 characters.
          </p>
        </div>

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

            {password && (
              <span className="flex items-center gap-1 text-[10px] text-white/40">
                <ShieldCheck size={12} />
                {passwordStrength.label}
              </span>
            )}
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
              placeholder="Create a strong password"
              autoComplete="new-password"
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
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
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

          {/* STRENGTH BAR */}
          <div className="mt-2.5">
            <div className="mb-1.5 flex gap-1">
              {[0, 1, 2, 3].map(
                (index) => {
                  const active =
                    passwordStrength.score >=
                    index + 2;

                  return (
                    <div
                      key={index}
                      className="
                        h-[3px]
                        flex-1
                        overflow-hidden
                        rounded-full
                        bg-white/[0.08]
                      "
                    >
                      <div
                        className={`
                          h-full
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            active
                              ? "bg-purple-500"
                              : "bg-transparent"
                          }
                        `}
                        style={{
                          width: active
                            ? "100%"
                            : "0%",
                        }}
                      />
                    </div>
                  );
                }
              )}
            </div>

            {/* REQUIREMENTS */}
            {password && (
              <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
                <Requirement
                  valid={requirements.length}
                >
                  8+ characters
                </Requirement>

                <Requirement
                  valid={requirements.uppercase}
                >
                  Uppercase
                </Requirement>

                <Requirement
                  valid={requirements.lowercase}
                >
                  Lowercase
                </Requirement>

                <Requirement
                  valid={requirements.number}
                >
                  Number
                </Requirement>

                <Requirement
                  valid={requirements.special}
                >
                  Special character
                </Requirement>
              </div>
            )}
          </div>
        </div>

        {/* TERMS */}
        <button
          type="button"
          onClick={() =>
            setAgreeTerms(
              !agreeTerms
            )
          }
          className="
            flex
            w-full
            items-start
            gap-3
            rounded-xl
            py-1
            text-left
          "
        >
          <span
            className={`
              mt-[1px]
              flex
              h-[19px]
              w-[19px]
              shrink-0
              items-center
              justify-center
              rounded-[6px]
              border
              transition-all
              ${
                agreeTerms
                  ? "border-purple-500 bg-purple-600 shadow-[0_0_18px_rgba(124,58,237,0.35)]"
                  : "border-white/15 bg-white/[0.035]"
              }
            `}
          >
            {agreeTerms && (
              <Check
                size={13}
                strokeWidth={3}
                className="text-white"
              />
            )}
          </span>

          <span className="text-[11px] leading-[18px] text-white/40">
            I agree to the{" "}
            <span className="font-medium text-white/70">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="font-medium text-white/70">
              Privacy Policy
            </span>
            .
          </span>
        </button>

        {/* CREATE */}
        <button
          type="submit"
          disabled={
            !canSubmit || loading
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
            ? "Creating account..."
            : "Create account"}

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

      {/* LOGIN */}
      <div className="mt-6 text-center">
        <span className="text-[12px] text-white/35">
          Already have an account?{" "}
        </span>

        <button
          type="button"
          onClick={onSwitchLogin}
          className="
            text-[12px]
            font-medium
            text-purple-400
            transition
            hover:text-purple-300
          "
        >
          Sign in
        </button>
      </div>
    </div>
  );
}