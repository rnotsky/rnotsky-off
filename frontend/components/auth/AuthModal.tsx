"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyEmail from "./VerifyEmail";

type AuthView = "login" | "register" | "verify";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({
  open,
  onClose,
}: AuthModalProps) {
  const [view, setView] = useState<AuthView>("login");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setView("login");
      setEmail("");
    }
  }, [open]);

  const handleRegistered = (registeredEmail: string) => {
    setEmail(registeredEmail);
    setView("verify");
  };

  const handleVerified = () => {
    setView("login");
  };

  const handleChangeEmail = () => {
    setView("register");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            p-3
            sm:p-5
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <motion.div
            className="
              absolute
              inset-0
              bg-black/80
              backdrop-blur-xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* PURPLE GLOW */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[10%]
              h-[420px]
              w-[420px]
              -translate-x-1/2
              rounded-full
              bg-purple-700/15
              blur-[140px]
            "
          />

          {/* SECOND GLOW */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[5%]
              right-[15%]
              h-[240px]
              w-[240px]
              rounded-full
              bg-violet-600/10
              blur-[120px]
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 18,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 18,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              flex
              max-h-[calc(100vh-24px)]
              w-full
              max-w-[440px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.12]
              bg-[#080808]/90
              shadow-[0_30px_100px_rgba(0,0,0,0.75)]
              backdrop-blur-3xl
              sm:max-h-[calc(100vh-40px)]
            "
          >
            {/* GLASS TOP HIGHLIGHT */}
            <div
              className="
                pointer-events-none
                absolute
                left-8
                right-8
                top-0
                z-10
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close authentication"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.04]
                text-white/40
                transition-all
                hover:border-white/[0.20]
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              <X size={18} />
            </button>

            {/* CONTENT */}
            <div
              className="
                overflow-y-auto
                overscroll-contain
                px-6
                py-7
                sm:px-8
                sm:py-8
              "
            >
              <AnimatePresence mode="wait">
                {view === "login" && (
                  <motion.div
                    key="login"
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 12,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <LoginForm
                      onSwitchRegister={() =>
                        setView("register")
                      }
                    />
                  </motion.div>
                )}

                {view === "register" && (
                  <motion.div
                    key="register"
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -12,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <RegisterForm
                      onRegistered={handleRegistered}
                      onSwitchLogin={() =>
                        setView("login")
                      }
                    />
                  </motion.div>
                )}

                {view === "verify" && (
                  <motion.div
                    key="verify"
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <VerifyEmail
                      email={email}
                      onVerified={handleVerified}
                      onChangeEmail={handleChangeEmail}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}